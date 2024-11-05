// https://vike.dev/data
export { data };
export type Data = Awaited<ReturnType<typeof data>>;

import type { PageContextServer } from "vike/types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = async (pageContext: PageContextServer) => {
  return {
    // The page's <title>
    title: `Inicio`,
    user: pageContext.user,
  };
};
