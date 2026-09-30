/**
 * Facts about each Gemify app that are the same in every language: URLs,
 * icons, and pricing as listed on the Shopify App Store. The translated copy
 * lives in the `appPages` dictionaries; this file feeds links and JSON-LD.
 *
 * Keep `plans` in sync with the App Store listings. They are the source of
 * truth for pricing.
 */

export type AppId =
  | 'bulkDeleteOrders'
  | 'defaultAddressLock'
  | 'llmsTxt'
  | 'japanMultiship'
  | 'bestStoreLocator'
  | 'checkoutProbe';

/**
 * Apps that are live on the Shopify App Store. Only these get an install
 * link, prices on the site, and a `SoftwareApplication` in JSON-LD. Every app
 * has a detail page; the others are marked `comingSoon` below. Remove an id
 * from the exclusion (and its `comingSoon` flag) once its listing is live.
 */
export type ListedAppId = Exclude<AppId, 'japanMultiship' | 'bestStoreLocator' | 'checkoutProbe'>;

export interface AppPlan {
  /** Plan name exactly as the App Store lists it. */
  name: string;
  /** Price in USD; 0 for a free plan. */
  price: number;
  /** Billing interval for paid plans. */
  interval?: 'month' | 'year';
}

export interface GemifyApp {
  /** Locale-agnostic path of the app's detail page on this site. */
  path: string;
  /**
   * App Store listing URL. Omitted for an app that has no listing URL yet;
   * every app with a detail page has one (`GEMIFY_APPS` keeps the literal
   * entry types, so `GEMIFY_APPS[detailAppId].appStoreUrl` is a string).
   */
  appStoreUrl?: string;
  /** Square app icon, also the page's social sharing image. */
  icon: string;
  plans: AppPlan[];
  /**
   * Not on the App Store yet: the detail page shows no install link or
   * prices, the home card shows a disabled "Coming Soon" button, and the app
   * stays out of JSON-LD.
   */
  comingSoon?: true;
}

export const GEMIFY_APPS = {
  bulkDeleteOrders: {
    path: '/apps/bulk-delete-orders',
    appStoreUrl: 'https://apps.shopify.com/bulk-delete-orders',
    icon: '/resources/bulk_delete_orders.png',
    plans: [
      { name: 'Free plan', price: 0 },
      { name: 'Complete plan', price: 36, interval: 'year' },
    ],
  },
  defaultAddressLock: {
    path: '/apps/default-address-lock',
    appStoreUrl: 'https://apps.shopify.com/default-address-lock',
    icon: '/resources/default_address_lock.png',
    plans: [
      { name: 'Free', price: 0 },
      { name: 'Basic', price: 4.99, interval: 'month' },
      { name: 'Growth', price: 24.99, interval: 'month' },
      { name: 'Enterprise', price: 99, interval: 'month' },
    ],
  },
  llmsTxt: {
    path: '/apps/llms-txt',
    appStoreUrl: 'https://apps.shopify.com/llms-full-txt',
    icon: '/resources/llms_txt.png',
    plans: [
      { name: 'Free plan', price: 0 },
      { name: 'Complete plan', price: 9.99, interval: 'month' },
    ],
  },
  japanMultiship: {
    comingSoon: true,
    path: '/apps/japan-multiship',
    // Not live yet: the App Store listing does not exist at this URL until submission is approved.
    appStoreUrl: 'https://apps.shopify.com/japan-multiship',
    icon: '/resources/japan_multiship.png',
    plans: [
      { name: 'Free', price: 0 },
      { name: 'Light', price: 19, interval: 'month' },
      { name: 'Standard', price: 49, interval: 'month' },
      { name: 'Pro', price: 99, interval: 'month' },
    ],
  },
  bestStoreLocator: {
    comingSoon: true,
    path: '/apps/best-store-locator',
    // Live only once the listing is.
    appStoreUrl: 'https://apps.shopify.com/gemify-store-locator',
    icon: '/resources/best_store_locator.png',
    plans: [
      { name: 'Free', price: 0 },
      { name: 'Grow', price: 14.99, interval: 'month' },
      { name: 'Pro', price: 29.99, interval: 'month' },
      { name: 'Unlimited', price: 69.99, interval: 'month' },
    ],
  },
  checkoutProbe: {
    comingSoon: true,
    // The listing will be named "Checkout Probe: AI Agent Test"; no App Store
    // URL until the listing exists.
    path: '/apps/checkout-probe',
    icon: '/resources/checkout_probe.png',
    plans: [{ name: 'Free', price: 0 }],
  },
} satisfies Record<AppId, GemifyApp>;

/** Whether an app is live on the App Store (see `ListedAppId`). */
export function isListedApp(id: AppId): id is ListedAppId {
  return !('comingSoon' in GEMIFY_APPS[id]);
}
