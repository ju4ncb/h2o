export { Layout };

import React from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "vike/types";
import "./css/index.css";
import "./Layout.css";

function Layout({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        {children}
      </PageContextProvider>
    </React.StrictMode>
  );
}
