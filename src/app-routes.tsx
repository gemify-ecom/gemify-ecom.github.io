import { Suspense, useEffect, useLayoutEffect, useRef, type ReactElement } from 'react';
import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import { ServicesPage } from './pages/services-page';
import { FaqPage } from './pages/faq-page';
import { PrivacyPolicyPage } from './pages/privacy-policy-page';
import { DefaultAddressLockPage } from './pages/default-address-lock-page';
import { DefaultAddressLockScreencastPage } from './pages/default-address-lock-screencast-page';
import { BulkDeleteOrdersPage } from './pages/bulk-delete-orders-page';
import { BulkDeleteOrdersScreencastPage } from './pages/bulk-delete-orders-screencast-page';
import { LlmsTxtPage } from './pages/llms-txt-page';
import { LlmsTxtScreencastPage } from './pages/llms-txt-screencast-page';
import { JapanMultishipScreencastPage } from './pages/japan-multiship-screencast-page';
import { BestStoreLocatorHelpPage } from './pages/best-store-locator-help-page';
import { BestStoreLocatorScreencastPage } from './pages/best-store-locator-screencast-page';
import { CheckoutProbeHelpPage } from './pages/checkout-probe-help-page';
import { CheckoutProbeScreencastPage } from './pages/checkout-probe-screencast-page';
import { NotFoundPage } from './pages/not-found-page';
import { ComingSoonAppPage } from './pages/coming-soon-app-page';
import { LocaleProvider } from './i18n/locale-provider';
import { LocaleUrlSync } from './i18n/locale-url-sync';
import { buildLocalePath, stripLocalePrefix } from './i18n/locale-paths';
import { SUPPORTED_LOCALES } from './i18n/locales';
import { usePageHead } from './seo/use-page-head';
import type { AppId } from './site/gemify-apps';
import { SITE_PAGES, type SitePage } from './site/site-pages';

/**
 * Every app has a detail page; apps not on the App Store yet share
 * ComingSoonAppPage. `screencast` and `help` exist only for the apps
 * `SITE_PAGES` pairs with those kinds.
 */
const APP_PAGES: Record<AppId, { detail: ReactElement; screencast?: ReactElement; help?: ReactElement }> = {
  bulkDeleteOrders: { detail: <BulkDeleteOrdersPage />, screencast: <BulkDeleteOrdersScreencastPage /> },
  defaultAddressLock: { detail: <DefaultAddressLockPage />, screencast: <DefaultAddressLockScreencastPage /> },
  llmsTxt: { detail: <LlmsTxtPage />, screencast: <LlmsTxtScreencastPage /> },
  japanMultiship: { detail: <ComingSoonAppPage app="japanMultiship" />, screencast: <JapanMultishipScreencastPage /> },
  bestStoreLocator: {
    detail: <ComingSoonAppPage app="bestStoreLocator" />,
    screencast: <BestStoreLocatorScreencastPage />,
    help: <BestStoreLocatorHelpPage />,
  },
  checkoutProbe: {
    detail: <ComingSoonAppPage app="checkoutProbe" />,
    screencast: <CheckoutProbeScreencastPage />,
    help: <CheckoutProbeHelpPage />,
  },
};

/** The component that renders a page from the site registry. */
function pageElement(page: SitePage): ReactElement {
  switch (page.kind) {
    case 'home':
      return <HomePage />;
    case 'services':
      return <ServicesPage />;
    case 'faq':
      return <FaqPage />;
    case 'privacyPolicy':
      return <PrivacyPolicyPage />;
    case 'app':
      return APP_PAGES[page.app!].detail;
    case 'screencast':
      // Non-null: SITE_PAGES only pairs `kind: 'screencast'` with an app that has one.
      return APP_PAGES[page.app!].screencast!;
    case 'help':
      return APP_PAGES[page.app!].help!;
  }
}

/**
 * Starts each newly opened page at the top. `BrowserRouter` keeps the window's
 * scroll offset across route changes, so a link clicked halfway down the home
 * page would otherwise open the next page halfway down too.
 *
 * - Back/Forward (`POP`) is left to the browser, which restores the old offset.
 * - A link with a `#hash` is left to `ScrollToHash`.
 * - A language switch keeps the offset: it is the same page in another language.
 */
function ScrollToTopOnPageChange() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const page = stripLocalePrefix(pathname);
  const previousPage = useRef(page);

  // Layout effect: move before paint, so the new page never flashes at the old offset.
  useLayoutEffect(() => {
    if (page === previousPage.current) {
      return;
    }
    previousPage.current = page;

    if (navigationType !== 'POP' && !hash) {
      // `instant` overrides the stylesheet's `scroll-behavior: smooth`.
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [page, hash, navigationType]);

  return null;
}

// Scroll to hash anchor on page load and navigation
function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to ensure DOM is rendered
      setTimeout(() => {
        let id = hash.slice(1);
        try {
          id = decodeURIComponent(id);
        } catch {
          // A malformed escape such as `#%E0%A4%A`: look the raw value up instead.
        }
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  return null;
}

/** Applies `<html lang>`, title, canonical, hreflang, and structured data for the route. */
function PageHead() {
  usePageHead();
  return null;
}

/**
 * The whole app below the router. The browser mounts it inside a
 * `BrowserRouter` (`App.tsx`); the prerender step mounts it inside a
 * `StaticRouter` (`entry-server.tsx`), so both produce identical markup.
 */
export function AppRoutes() {
  return (
    // Only reached if a language is shown before its dictionary has loaded.
    <Suspense fallback={null}>
      <LocaleProvider>
        <LocaleUrlSync />
        <PageHead />
        <ScrollToTopOnPageChange />
        <ScrollToHash />
        <Routes>
          {SUPPORTED_LOCALES.flatMap((locale) =>
            SITE_PAGES.map((page) => (
              <Route
                key={`${locale}:${page.path}`}
                path={buildLocalePath(locale, page.path)}
                element={pageElement(page)}
              />
            )),
          )}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </LocaleProvider>
    </Suspense>
  );
}
