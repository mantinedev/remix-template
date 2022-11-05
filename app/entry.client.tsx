import { RemixBrowser } from "@remix-run/react";
import { ClientProvider } from "@mantine/remix";

import { hydrateRoot } from "react-dom/client";

hydrateRoot(
  <ClientProvider>
    <RemixBrowser />
  </ClientProvider>,
    document,

);
