import React from "react";
import ReactDOM from "react-dom/client";
import { startReactDsfr } from "@codegouvfr/react-dsfr/spa";
import { RouterProvider, createRouter, Link, type LinkProps } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nFetchingSuspense } from "i18n";
import { MuiDsfrThemeProvider } from "@codegouvfr/react-dsfr/mui";
import { AuthProvider } from "hooks/useAuth";
import { HelmetProvider } from "react-helmet-async";

export const queryClient = new QueryClient();

const router = createRouter({ routeTree, context: { queryClient } });
// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

declare module "@codegouvfr/react-dsfr/spa" {
  interface RegisterLink {
    Link: (props: LinkProps) => JSX.Element;
  }
}

startReactDsfr({ defaultColorScheme: "system", Link });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <MuiDsfrThemeProvider>
          <AuthProvider>
            <I18nFetchingSuspense>
              <RouterProvider router={router} />
            </I18nFetchingSuspense>
          </AuthProvider>
        </MuiDsfrThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
