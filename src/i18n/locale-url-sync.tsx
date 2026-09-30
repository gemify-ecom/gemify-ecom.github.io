import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { navigateWhenLocaleLoaded } from './locale-navigation';
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
    const forcedLocale = getLocaleFromSearch(search);

    if (forcedLocale) {
      hasHandledLanding.current = true;
      storeLocale(forcedLocale);

      const target =
        buildLocalePath(forcedLocale, stripLocalePrefix(pathname)) + removeLocaleParam(search) + hash;

      if (target !== pathname + search + hash) {
        navigateWhenLocaleLoaded(forcedLocale, target, (to) => navigate(to, { replace: true }), {
          replace: true,
        });
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
      const target = buildLocalePath(landingLocale, pathname) + search + hash;
      navigateWhenLocaleLoaded(landingLocale, target, (to) => navigate(to, { replace: true }), {
        replace: true,
      });
    }
  }, [pathname, search, hash, navigate]);

  return null;
}
