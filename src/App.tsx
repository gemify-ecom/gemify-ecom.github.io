import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import { FaqPage } from './pages/faq-page';
import { PrivacyPolicyPage } from './pages/privacy-policy-page';
import { DefaultAddressLockPage } from './pages/default-address-lock-page';
import { DefaultAddressLockScreencastPage } from './pages/default-address-lock-screencast-page';
import { BulkDeleteOrdersPage } from './pages/bulk-delete-orders-page';
import { BulkDeleteOrdersScreencastPage } from './pages/bulk-delete-orders-screencast-page';
import { Footer } from './components/footer';

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
