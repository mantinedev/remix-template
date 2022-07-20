import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import type { EmotionCache } from "@mantine/core";
import { useEmotionCache } from "@mantine/core";
import { useIsomorphicEffect } from "@mantine/hooks";

interface RemixClientProviderProps {
  children: React.ReactNode;
  emotionCache?: EmotionCache;
}

function RemixClientProvider({
  children,
  emotionCache,
}: RemixClientProviderProps) {
  const defaultCache = useEmotionCache();
  const cache = emotionCache || defaultCache;

  useIsomorphicEffect(() => {
    cache.sheet.container = document.head;
    const tags = cache.sheet.tags;
    cache.sheet.flush();
    tags.forEach((tag) => {
      (cache.sheet as any)._insertTag(tag);
    });
  }, []);

  return <>{children}</>;
}

hydrate(
  <RemixClientProvider>
    <RemixBrowser />
  </RemixClientProvider>,
  document
);
