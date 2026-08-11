import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  getLocaleFromSearch,
  removeLocaleParam,
  resolveLandingLocale,
  storeLocale,
} from './locale-detection';
import { buildLocalePath, getLocaleFromPathname, stripLocalePrefix } from './locale-paths';
import { DEFAULT_LOCALE } from './locales';

/**
 * Keeps the URL and the visitor's language in sync.
 *
 * Two cases are handled:
 *
 * 1. `?locale=ja` anywhere on the site forces Japanese: the parameter is
 *    remembered, stripped, and the visitor is moved to the canonical
 *    `/ja/...` URL (and back to the unprefixed URL for `?locale=en`).
 * 2. On the first page of a visit to an unprefixed URL, the saved choice or the
 *    browser language decides the language. Later navigations are left alone so
 *    that the language switcher and shared `/faq` links keep working.
 */
export function LocaleUrlSync() {
  const location = useLocation();
  const navigate = useNavigate();
  const hasHandledLanding = useRef(false);

  const { pathname, search, hash } = location;

  useEffect(() => {
    // Let `HtmlExtensionRedirect` clean up legacy `.html` URLs first, so the
    // language decision is made once, on the final path.
    if (pathname.endsWith('.html')) {
      return;
    }

    const forcedLocale = getLocaleFromSearch(search);

    if (forcedLocale) {
      hasHandledLanding.current = true;
      storeLocale(forcedLocale);

      const target =
        buildLocalePath(forcedLocale, stripLocalePrefix(pathname)) + removeLocaleParam(search) + hash;

      if (target !== pathname + search + hash) {
        navigate(target, { replace: true });
      }
      return;
    }

    if (hasHandledLanding.current) {
      return;
    }
    hasHandledLanding.current = true;

    // Only unprefixed URLs are ambiguous; `/ja/...` already names its language.
    if (getLocaleFromPathname(pathname) !== DEFAULT_LOCALE) {
      return;
    }

    const landingLocale = resolveLandingLocale();

    if (landingLocale !== DEFAULT_LOCALE) {
      navigate(buildLocalePath(landingLocale, pathname) + search + hash, { replace: true });
    }
  }, [pathname, search, hash, navigate]);

  return null;
}
