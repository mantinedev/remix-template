import { RemixBrowser } from "@remix-run/react";
import { ClientProvider } from "@mantine/remix";

import { hydrateRoot } from "react-dom/client";

hydrateRoot(
   //  @ts-ignore
  <ClientProvider>
    <RemixBrowser />
  </ClientProvider>,
  document
);
