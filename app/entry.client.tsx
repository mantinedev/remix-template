import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import { RemixClientProvider } from "./ssr";

hydrate(
  <RemixClientProvider>
    <RemixBrowser />
  </RemixClientProvider>,
  document
);
