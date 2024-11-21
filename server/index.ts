// This file isn't processed by Vite, see https://github.com/vikejs/vike/issues/562
// Consequently:
//  - When changing this file, you needed to manually restart your server for your changes to take effect.
//  - To use your environment variables defined in your .env files, you need to install dotenv, see https://vike.dev/env
//  - To use your path aliases defined in your vite.config.js, you need to tell Node.js about them, see https://vike.dev/path-aliases

// If you want Vite to process your server code then use one of these:
//  - vavite (https://github.com/cyco130/vavite)
//     - See vavite + Vike examples at https://github.com/cyco130/vavite/tree/main/examples
//  - vite-node (https://github.com/antfu/vite-node)
//  - HatTip (https://github.com/hattipjs/hattip)
//    - You can use Bati (https://batijs.dev/) to scaffold a Vike + HatTip app. Note that Bati generates apps that use the V1 design (https://vike.dev/migration/v1-design) and Vike packages (https://vike.dev/vike-packages)

import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import compression from "compression";
import { renderPage } from "vike/server";
import { root } from "./root.js";
import bodyParser from "body-parser";
import {
  deleteQuery,
  insertQuery,
  selectQuery,
  updateJugador,
} from "./dbQuerys.js";
import { JugadorTipo } from "./clases/Jugador.js";
import { SECRET } from "./secretVariables.js";
import jwt from "jsonwebtoken";
import { useState } from "react";
import { PreguntaTipoExtendido } from "./clases/Pregunta.js";
import { OpcionTipo } from "./clases/Opcion.js";

const isProduction = process.env.NODE_ENV === "production";

startServer();

async function startServer() {
  const app = express();

  app.use(compression());

  // Vite integration
  if (isProduction) {
    // In production, we need to serve our static assets ourselves.
    // (In dev, Vite's middleware serves our static assets.)
    const sirv = (await import("sirv")).default;
    app.use(sirv(`${root}/dist/client`));
  } else {
    // We instantiate Vite's development server and integrate its middleware to our server.
    // ⚠️ We instantiate it only in development. (It isn't needed in production and it
    // would unnecessarily bloat our production server.)
    const vite = await import("vite");
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true },
      })
    ).middlewares;
    app.use(viteDevMiddleware);
  }

  // ...
  // Other middlewares (e.g. some RPC middleware such as Telefunc)
  // ...

  // metodos GET y POST
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(session({ secret: SECRET, resave: false, saveUninitialized: false }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.post("/auth", async (req, res) => {
    const { usuario, contrasena } = req.body;
    const rows = (await selectQuery(
      "jugadores",
      ["all"],
      `username = "${usuario}" AND passwd = "${contrasena}"`
    )) as JugadorTipo[];
    if (rows[0]) {
      const rowsAdmin = (await selectQuery(
        "admins",
        ["all"],
        `id_ju = ${rows[0].id_ju}`
      )) as { id_ad: number; id_ju: number }[];
      let usuarioSesion = rows[0] as JugadorTipo;
      if (rowsAdmin[0]) {
        usuarioSesion.tipoUsuario = 0;
      } else {
        usuarioSesion.tipoUsuario = 1;
      }

      req.session.user = usuarioSesion;

      res.status(200).json({
        message: "Usuario autentificado",
        user: req.session.user,
      });
    } else {
      res.status(401).send("Usuario o contraseña incorrecta.");
    }
  });

  app.post("/register-user", async (req, res) => {
    const { usuario, contrasena, ap1, ap2, nm1, nm2 } = req.body;
    if (
      (await insertQuery(
        "jugadores",
        ["username", "passwd", "nm1", "nm2", "ap1", "ap2"],
        [usuario, contrasena, nm1, nm2, ap1, ap2]
      )) === null
    ) {
      return res.status(409).send("Jugador ya existe");
    }
    res.status(200).send("Jugador registrado!");
  });

  app.post("/modify-user", async (req, res) => {
    const { jugador } = req.body;
    if ((await updateJugador(jugador)) === null) {
      return res.status(409).send("Jugador ya existe");
    }
    const rows = (await selectQuery(
      "jugadores",
      ["all"],
      `id_ju = ${req.session.user?.id_ju}`
    )) as JugadorTipo[];
    if (rows[0]) {
      const rowsAdmin = (await selectQuery(
        "admins",
        ["all"],
        `id_ju = ${rows[0].id_ju}`
      )) as { id_ad: number; id_ju: number }[];
      let usuarioSesion = rows[0] as JugadorTipo;
      if (rowsAdmin[0]) {
        usuarioSesion.tipoUsuario = 0;
      } else {
        usuarioSesion.tipoUsuario = 1;
      }

      req.session.user = usuarioSesion;
    }
    res.status(200).send("Jugador modificado!");
  });

  app.post("/create-question", async (req, res) => {
    const {
      pregunta,
      opciones,
    }: { pregunta: PreguntaTipoExtendido; opciones: OpcionTipo[] } = req.body;
    const admin = (await selectQuery(
      "admins",
      ["id_ad"],
      `id_ju = ${pregunta.id_ju}`
    )) as { id_ad: number }[];
    const filaPregunta = await insertQuery(
      "preguntas",
      ["id_ad", "codigo", "descripcion", "dificultad"],
      [
        admin[0].id_ad + "",
        pregunta.codigo,
        pregunta.descripcion,
        pregunta.dificultad + "",
      ]
    );
    if (filaPregunta === null) {
      return res.status(500).send("Problema sql.");
    }

    const preguntaResultados = (await selectQuery(
      "preguntas",
      ["id_pr"],
      `codigo = "${pregunta.codigo}"`
    )) as { id_pr: number }[];

    let opcionesFiltrado: OpcionTipo[];

    opciones[2].descripcion === undefined
      ? // Es verdadero falso
        (opcionesFiltrado = opciones.slice(0, 2))
      : // Es normal
        (opcionesFiltrado = opciones);

    opcionesFiltrado.map(async ({ descripcion, codigo, es_correcta }) => {
      if (
        (await insertQuery(
          "opciones",
          ["id_pr", "codigo", "descripcion", "es_correcta"],
          [
            preguntaResultados[0].id_pr + "",
            codigo,
            descripcion,
            es_correcta + "",
          ]
        )) === null
      ) {
        return res.status(500).send("Problema sql.");
      }
    });
    res.status(200).send("Pregunta creada exitosamente!");
  });

  app.post("/delete-question", async (req, res) => {
    const { id_pr } = req.body;
    if ((await deleteQuery("preguntas", `id_pr = ${id_pr}`)) === null) {
      return res.status(500).send("Problema sql.");
    }
    return res.status(200).send("Fila(s) eliminada(s) con éxito!");
  });

  app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send("Error al destruir sesión");
      }
      res.redirect("/");
    });
  });

  // Vike middleware. It should always be our last middleware (because it's a
  // catch-all middleware superseding any middleware placed after it).

  app.get("*", async (req, res) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl,
      headersOriginal: req.headers,
      user: req.session.user,
    };
    const pageContext = await renderPage(pageContextInit);
    if (pageContext.errorWhileRendering) {
      // Install error tracking here, see https://vike.dev/error-tracking
    }
    const { httpResponse } = pageContext;
    if (res.writeEarlyHints)
      res.writeEarlyHints({
        link: httpResponse.earlyHints.map((e) => e.earlyHintLink),
      });
    httpResponse.headers.forEach(([name, value]) => res.setHeader(name, value));
    res.status(httpResponse.statusCode);
    // For HTTP streams use pageContext.httpResponse.pipe() instead, see https://vike.dev/streaming
    res.send(httpResponse.body);
  });

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}
