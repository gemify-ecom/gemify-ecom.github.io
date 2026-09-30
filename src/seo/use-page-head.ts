import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocale } from '../i18n/use-locale';
import { buildPageHead } from './page-head';
import { applyPageHead } from './page-head-output';

/**
 * Keeps `<html lang>`, the title, and every managed `<head>` tag in step with
 * the current route. The prerendered HTML already carries the right tags for
 * its own URL; this hook takes over for in-app navigation and language
 * switches, rebuilding the head from the same `buildPageHead` the prerender
 * step used.
 */
export function usePageHead() {
  const { locale } = useLocale();
  const { pathname } = useLocation();

  useEffect(() => {
    applyPageHead(buildPageHead(locale, pathname));
  }, [locale, pathname]);
}
