import { getSSRStyles } from "@mantine/ssr";
import type { EmotionServer } from "@emotion/server/types/create-instance";
import type { EmotionCache } from "@mantine/core";
import { useEmotionCache } from "@mantine/core";
import { useIsomorphicEffect } from "@mantine/hooks";

interface RemixClientProviderProps {
  children: React.ReactNode;
  emotionCache?: EmotionCache;
}

export function RemixClientProvider({
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

export function StylesPlaceholder() {
  return <>{typeof document === "undefined" ? "__MANTINE_STYLES__" : null}</>;
}

export function injectStyles(markup: string, stylesServer: EmotionServer) {
  return markup.replace(
    "__MANTINE_STYLES__",
    `${getSSRStyles(markup, stylesServer)}`
  );
}
