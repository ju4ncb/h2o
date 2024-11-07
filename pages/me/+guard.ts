import { render, redirect } from "vike/abort";
import type { PageContextServer } from "vike/types";

export const guard = (pageContext: PageContextServer) => {
  const { user } = pageContext;
  console.log(user);
  if (user === null || user === undefined) {
    // Render the login page while preserving the URL. (This is novel technique
    // which we explain down below.)
    throw redirect("/login");
    /* The more traditional way, redirect the user:
    throw redirect('/login')
    */
  }
};
