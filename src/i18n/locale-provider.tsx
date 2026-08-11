import { useCallback, useMemo, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LocaleContext, type LocaleContextValue } from './locale-context';
import { getLocaleFromSearch, storeLocale } from './locale-detection';
import { getLocaleFromPathname, switchLocaleInLocation } from './locale-paths';
import type { Locale } from './locales';
import { dictionaries } from './translations';

/**
 * Derives the active locale from the URL, so the URL stays the single source of
 * truth. A `?locale=` parameter wins for the render that precedes the redirect
 * in `LocaleUrlSync`, which keeps the page from flashing the wrong language.
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const locale = getLocaleFromSearch(location.search) ?? getLocaleFromPathname(location.pathname);

  const setLocale = useCallback(
    (next: Locale) => {
      storeLocale(next);
      navigate(switchLocaleInLocation(next, location));
    },
    [location, navigate],
  );

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, dictionary: dictionaries[locale] }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
