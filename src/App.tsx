import { useEffect, type ReactElement } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import { FaqPage } from './pages/faq-page';
import { PrivacyPolicyPage } from './pages/privacy-policy-page';
import { DefaultAddressLockPage } from './pages/default-address-lock-page';
import { DefaultAddressLockScreencastPage } from './pages/default-address-lock-screencast-page';
import { BulkDeleteOrdersPage } from './pages/bulk-delete-orders-page';
import { BulkDeleteOrdersScreencastPage } from './pages/bulk-delete-orders-screencast-page';
import { LlmsTxtPage } from './pages/llms-txt-page';
import { LlmsTxtScreencastPage } from './pages/llms-txt-screencast-page';
import { Footer } from './components/footer';
import { LocaleProvider } from './i18n/locale-provider';
import { LocaleUrlSync } from './i18n/locale-url-sync';
import { buildLocalePath } from './i18n/locale-paths';
import { SUPPORTED_LOCALES } from './i18n/locales';
import { useDocumentLocale } from './i18n/use-document-locale';

/** Locale-agnostic page paths; each one is registered for every locale. */
const PAGES: { path: string; element: ReactElement }[] = [
  {
    path: '/',
    element: (
      <>
        <HomePage />
        <Footer />
      </>
    ),
  },
  { path: '/faq', element: <FaqPage /> },
  { path: '/privacy-policy', element: <PrivacyPolicyPage /> },
  { path: '/apps/default-address-lock', element: <DefaultAddressLockPage /> },
  { path: '/apps/default-address-lock/screencast', element: <DefaultAddressLockScreencastPage /> },
  { path: '/apps/bulk-delete-orders', element: <BulkDeleteOrdersPage /> },
  { path: '/apps/bulk-delete-orders/screencast', element: <BulkDeleteOrdersScreencastPage /> },
  { path: '/apps/llms-txt', element: <LlmsTxtPage /> },
  { path: '/apps/llms-txt/screencast', element: <LlmsTxtScreencastPage /> },
];

// Redirect .html URLs to clean URLs
function HtmlExtensionRedirect() {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname.endsWith('.html')) {
      const cleanPath = pathname.slice(0, -5); // Remove .html
      navigate(cleanPath + search + hash, { replace: true });
    }
  }, [pathname, search, hash, navigate]);

  return null;
}

// Scroll to hash anchor on page load and navigation
function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to ensure DOM is rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  return null;
}

/** Applies `<html lang>`, canonical and hreflang tags for the active locale. */
function DocumentLocale() {
  useDocumentLocale();
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <LocaleProvider>
        <HtmlExtensionRedirect />
        <LocaleUrlSync />
        <DocumentLocale />
        <ScrollToHash />
        <div className="min-h-screen flex flex-col">
          <Routes>
            {SUPPORTED_LOCALES.flatMap((locale) =>
              PAGES.map(({ path, element }) => (
                <Route
                  key={`${locale}:${path}`}
                  path={buildLocalePath(locale, path)}
                  element={element}
                />
              )),
            )}
          </Routes>
        </div>
      </LocaleProvider>
    </BrowserRouter>
  );
}

export default App;
