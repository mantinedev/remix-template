import { RemixBrowser } from "@remix-run/react";
import { ClientProvider } from "@mantine/remix";

import { hydrateRoot } from "react-dom/client";

hydrateRoot(
  document,
  <ClientProvider>
    <RemixBrowser />
  </ClientProvider>
);
