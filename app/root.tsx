import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { MantineProvider, useEmotionCache } from "@mantine/core";
import { StylesPlaceholder } from "@mantine/remix";
import { theme } from "./theme";
import { useContext, useEffect, useRef } from "react";
import { ClientStyleContext } from "~/clientStyleContext";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const clientStyleData = useContext(ClientStyleContext);
  const mantineCache = useEmotionCache();
  const reinjectStylesRef = useRef(true);

  useEffect(() => {
    if (reinjectStylesRef.current) {
      const sheet = mantineCache.sheet
      sheet.container = document.head;
      const tags = sheet.tags;
      sheet.flush();
      tags.forEach((tag) => {
        (sheet as any)._insertTag(tag);
      });
      clientStyleData?.reset();
      reinjectStylesRef.current = false;
    }
  }, [clientStyleData, mantineCache.sheet]);

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <html lang="en">
        <head>
          <StylesPlaceholder />
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
  );
}
