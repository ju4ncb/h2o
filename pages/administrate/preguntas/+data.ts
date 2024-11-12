// https://vike.dev/data
export { data };
export type Data = Awaited<ReturnType<typeof data>>;

import type { PageContextServer } from "vike/types";
import { selectQuery } from "../../../server/dbQuerys";
import { PreguntaTipoExtendido } from "../../../server/clases/Pregunta";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = async (pageContext: PageContextServer) => {
  const preguntas = (await selectQuery(
    "preguntas",
    ["all"],
    ""
  )) as PreguntaTipoExtendido[];
  return {
    // The page's <title>
    title: `Administrate`,
    user: pageContext.user,
    preguntas: preguntas,
  };
};
