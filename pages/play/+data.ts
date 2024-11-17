// https://vike.dev/data
export { data };
export type Data = Awaited<ReturnType<typeof data>>;

import type { PageContextServer } from "vike/types";
import { selectQuery } from "../../server/dbQuerys";
import { PreguntaTipoExtendidoOpciones } from "../../server/clases/Pregunta";
import { OpcionTipo } from "../../server/clases/Opcion";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = async (pageContext: PageContextServer) => {
  function shuffle<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const preguntas = (await selectQuery(
    "preguntas",
    ["all"],
    "",
    true,
    8
  )) as PreguntaTipoExtendidoOpciones[];

  const preguntasOpciones = await Promise.all(
    preguntas.map(async (pregunta) => {
      const opciones = (await selectQuery(
        "opciones",
        ["all"],
        `id_pr = ${pregunta.id_pr}`
      )) as OpcionTipo[];
      return {
        ...pregunta,
        opciones: shuffle(opciones),
      };
    })
  );

  return {
    // The page's <title>
    title: `Demo`,
    user: pageContext.user,
    preguntas: preguntasOpciones.sort((a, b) => a.dificultad - b.dificultad),
  };
};
