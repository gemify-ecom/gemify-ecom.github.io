import { use, useCallback, useMemo, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LocaleContext, type LocaleContextValue } from './locale-context';
import { getLocaleFromSearch, storeLocale } from './locale-detection';
import { getLocaleFromPathname, switchLocaleInLocation } from './locale-paths';
import type { Locale } from './locales';
import { getLoadedDictionary } from './dictionary-store';
import { loadDictionaryForRender, navigateWhenLocaleLoaded } from './locale-navigation';

/**
 * Derives the active locale from the URL, so the URL stays the single source of
 * truth. A `?locale=` parameter wins for the render that precedes the redirect
 * in `LocaleUrlSync`, which keeps the page from flashing the wrong language.
 *
 * The dictionary is normally loaded before the locale becomes active; if not,
 * this suspends until it arrives (see `dictionary-store.ts`).
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const locale = getLocaleFromSearch(location.search) ?? getLocaleFromPathname(location.pathname);
  const dictionary = getLoadedDictionary(locale) ?? use(loadDictionaryForRender(locale));

  const setLocale = useCallback(
    (next: Locale) => {
      storeLocale(next);
      // Load the next language first so the switch never shows a blank page.
      navigateWhenLocaleLoaded(next, switchLocaleInLocation(next, location), navigate);
    },
    [location, navigate],
  );

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, dictionary }),
    [locale, setLocale, dictionary],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
