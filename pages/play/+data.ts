// https://vike.dev/data
export { data };
export type Data = Awaited<ReturnType<typeof data>>;

import type { PageContextServer } from "vike/types";
import { selectQuery } from "../../server/dbQuerys";
import { PreguntaTipo } from "../../server/clases/Pregunta";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = async (pageContext: PageContextServer) => {
  // const preguntas = await selectQuery("preguntas", ) as PreguntaTipo[];
  return {
    // The page's <title>
    title: `Demo`,
    user: pageContext.user,
  };
};
