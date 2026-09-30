import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { loadDictionary } from './i18n/dictionary-store'
import { getLocaleFromSearch } from './i18n/locale-detection'
import { getLocaleFromPathname } from './i18n/locale-paths'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Legacy `.html` URLs (`/faq.html`, `/index.html`) are served the same file as
// the clean URL. Switch the address bar to the clean URL before the first
// render so the page hydrates normally instead of flashing "not found".
if (window.location.pathname.endsWith('.html')) {
  const { pathname, search, hash } = window.location
  const cleanPath = pathname.slice(0, -'.html'.length).replace(/\/index$/, '') || '/'
  window.history.replaceState(window.history.state, '', cleanPath + search + hash)
}

// Prerendered files record the URL they were rendered for. Hydrate only when
// that is the URL being viewed; the shared 404 page and `?locale=` overrides
// render something different, so they start fresh.
const { prerenderedPath } = container.dataset
const isExactPrerender =
  !!prerenderedPath &&
  prerenderedPath === window.location.pathname &&
  !new URLSearchParams(window.location.search).has('locale')

// The first render must use the page's own language, so load its dictionary
// (English is bundled; others are a small chunk) before rendering.
const initialLocale =
  getLocaleFromSearch(window.location.search) ?? getLocaleFromPathname(window.location.pathname)

loadDictionary(initialLocale).then(
  () => {
    if (isExactPrerender) {
      hydrateRoot(container, app)
    } else {
      createRoot(container).render(app)
    }
  },
  // Never reload here (a broken chunk would loop). The prerendered HTML stays
  // readable; only interactivity is lost until the next page load.
  () => {
    console.error('Could not load page translations; showing the static page.')
  },
)
