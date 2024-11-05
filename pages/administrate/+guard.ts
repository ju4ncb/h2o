import { render, redirect } from "vike/abort";
import type { PageContextServer } from "vike/types";

export const guard = (pageContext: PageContextServer) => {
  const { user } = pageContext;
  if (user === null || user === undefined) {
    // Render the login page while preserving the URL. (This is novel technique
    // which we explain down below.)
    throw redirect("/login");
    /* The more traditional way, redirect the user:
    throw redirect('/login')
    */
  }

  if (user.tipoUsuario !== 0) {
    // Render the error page and show message to the user
    throw render(403, "Only admins are allowed to access this page.");
  }
};
