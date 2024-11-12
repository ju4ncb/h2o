// https://vike.dev/data
export { data };
export type Data = Awaited<ReturnType<typeof data>>;

import type { PageContextServer } from "vike/types";
import { PreguntaTipo } from "../../../../server/clases/Pregunta";
import { selectQuery } from "../../../../server/dbQuerys";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = async (pageContext: PageContextServer) => {
  const preguntas = (await selectQuery(
    "preguntas",
    ["all"],
    ""
  )) as PreguntaTipo[];
  return {
    // The page's <title>
    title: `Administrate`,
    user: pageContext.user,
    numeroPreguntas: preguntas.length,
  };
};
