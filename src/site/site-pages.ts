import type { AppId } from './gemify-apps';

/**
 * Every page on the site, independent of language. The router, the `<head>`
 * builder, the prerender step, and the sitemap all read this list, so a page
 * added here is routed, prerendered, and (when `indexable`) submitted to
 * search engines in every locale.
 */

export type PageKind = 'home' | 'services' | 'faq' | 'privacyPolicy' | 'app' | 'screencast' | 'help';

export interface SitePage {
  /** Locale-agnostic path, e.g. `/faq`. */
  path: string;
  kind: PageKind;
  /** The app a detail, screencast, or help page is about. */
  app?: AppId;
  /**
   * Whether search engines may index the page and whether it goes in the
   * sitemap. Screencasts are demo videos linked from the App Store listings
   * and stay out of search results.
   */
  indexable: boolean;
}

export const SITE_PAGES: SitePage[] = [
  { path: '/', kind: 'home', indexable: true },
  { path: '/services', kind: 'services', indexable: true },
  { path: '/faq', kind: 'faq', indexable: true },
  { path: '/privacy-policy', kind: 'privacyPolicy', indexable: true },
  { path: '/apps/bulk-delete-orders', kind: 'app', app: 'bulkDeleteOrders', indexable: true },
  { path: '/apps/bulk-delete-orders/screencast', kind: 'screencast', app: 'bulkDeleteOrders', indexable: false },
  { path: '/apps/default-address-lock', kind: 'app', app: 'defaultAddressLock', indexable: true },
  { path: '/apps/default-address-lock/screencast', kind: 'screencast', app: 'defaultAddressLock', indexable: false },
  { path: '/apps/llms-txt', kind: 'app', app: 'llmsTxt', indexable: true },
  { path: '/apps/llms-txt/screencast', kind: 'screencast', app: 'llmsTxt', indexable: false },
  // Japan Multiship, Best Store Locator, and Checkout Probe are not on the App
  // Store yet. Their detail pages are public (no install link or prices, and
  // no JSON-LD app entry; see `comingSoon` in gemify-apps.ts). Their reviewer
  // screencasts (the submission's screencast URL) and merchant help (the
  // listing's FAQ link) stay unlisted until each listing is approved.
  { path: '/apps/japan-multiship', kind: 'app', app: 'japanMultiship', indexable: true },
  { path: '/apps/japan-multiship/screencast', kind: 'screencast', app: 'japanMultiship', indexable: false },
  { path: '/apps/best-store-locator', kind: 'app', app: 'bestStoreLocator', indexable: true },
  { path: '/apps/best-store-locator/screencast', kind: 'screencast', app: 'bestStoreLocator', indexable: false },
  { path: '/apps/best-store-locator/help', kind: 'help', app: 'bestStoreLocator', indexable: false },
  { path: '/apps/checkout-probe', kind: 'app', app: 'checkoutProbe', indexable: true },
  { path: '/apps/checkout-probe/screencast', kind: 'screencast', app: 'checkoutProbe', indexable: false },
  { path: '/apps/checkout-probe/help', kind: 'help', app: 'checkoutProbe', indexable: false },
];

/** Looks up a page by its locale-agnostic path; `undefined` means "not found". */
export function findSitePage(path: string): SitePage | undefined {
  // `/faq/` and `/faq` are the same page.
  const normalized = path.length > 1 ? path.replace(/\/+$/, '') : path;
  return SITE_PAGES.find((page) => page.path === normalized);
}
