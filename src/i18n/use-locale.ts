import { useCallback, useContext } from 'react';
import { LocaleContext, type LocaleContextValue } from './locale-context';
import { buildLocalePath } from './locale-paths';
import type { Dictionary } from './translations';

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('useLocale must be used inside a LocaleProvider');
  }

  return context;
}

/** Returns one namespace of the active dictionary, e.g. `useTranslations('home')`. */
export function useTranslations<Namespace extends keyof Dictionary>(
  namespace: Namespace,
): Dictionary[Namespace] {
  return useLocale().dictionary[namespace];
}

/**
 * Returns a function that rewrites an app path for the active locale:
 * `/faq` becomes `/ja/faq` while browsing in Japanese.
 *
 * Same-page anchors (`#apps`) and absolute URLs are passed through unchanged.
 */
export function useLocalePath(): (path: string) => string {
  const { locale } = useLocale();

  return useCallback(
    (path: string) => (path.startsWith('/') ? buildLocalePath(locale, path) : path),
    [locale],
  );
}
