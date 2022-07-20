import { renderToString } from "react-dom/server";
import { RemixServer } from "@remix-run/react";
import type { EntryContext } from "@remix-run/node";
import { injectStylesIntoStaticMarkup, createStylesServer } from "@mantine/ssr";
import { CacheProvider } from "@emotion/react";
import { defaultMantineEmotionCache } from "@mantine/core";

const server = createStylesServer(defaultMantineEmotionCache);

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let markup = renderToString(
    <CacheProvider value={defaultMantineEmotionCache}>
      <RemixServer context={remixContext} url={request.url} />
    </CacheProvider>
  );
  responseHeaders.set("Content-Type", "text/html");

  return new Response(
    `<!DOCTYPE html>${injectStylesIntoStaticMarkup(
      markup,
      defaultMantineEmotionCache
    )}`,
    {
      status: responseStatusCode,
      headers: responseHeaders,
    }
  );
}
