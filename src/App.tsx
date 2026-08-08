import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import { FaqPage } from './pages/faq-page';
import { PrivacyPolicyPage } from './pages/privacy-policy-page';
import { DefaultAddressLockPage } from './pages/default-address-lock-page';
import { DefaultAddressLockScreencastPage } from './pages/default-address-lock-screencast-page';
import { BulkDeleteOrdersPage } from './pages/bulk-delete-orders-page';
import { BulkDeleteOrdersScreencastPage } from './pages/bulk-delete-orders-screencast-page';
import { LlmsTxtPage } from './pages/llms-txt-page';
import { Footer } from './components/footer';

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

function App() {
  return (
    <BrowserRouter>
      <HtmlExtensionRedirect />
      <ScrollToHash />
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <Footer />
              </>
            }
          />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/apps/default-address-lock" element={<DefaultAddressLockPage />} />
          <Route path="/apps/default-address-lock/screencast" element={<DefaultAddressLockScreencastPage />} />
          <Route path="/apps/bulk-delete-orders" element={<BulkDeleteOrdersPage />} />
          <Route path="/apps/bulk-delete-orders/screencast" element={<BulkDeleteOrdersScreencastPage />} />
          <Route path="/apps/llms-txt" element={<LlmsTxtPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
