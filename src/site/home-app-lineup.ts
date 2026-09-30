import type { AppId } from './gemify-apps';

/**
 * The apps on the home page, in display order, with the App Store facts the
 * hero index and the app cards both show. Keep `rating` and `installs` in
 * sync with the Shopify App Store listings. Whether an app is coming soon is
 * read from `GEMIFY_APPS` (`isListedApp`).
 */
export interface HomeAppEntry {
  id: AppId;
  /** 192px icon for cards and lists. */
  icon: string;
  /** Icon plate family: blue for store tools, black for AI tools. */
  group: 'storeOperations' | 'aiShoppers';
  rating?: number;
  installs?: string;
}

export const HOME_APP_LINEUP: HomeAppEntry[] = [
  { id: 'bulkDeleteOrders', icon: '/resources/bulk_delete_orders-192.jpg', group: 'storeOperations', rating: 5.0, installs: '600+' },
  { id: 'defaultAddressLock', icon: '/resources/default_address_lock-192.png', group: 'storeOperations' },
  { id: 'japanMultiship', icon: '/resources/japan_multiship-192.png', group: 'storeOperations' },
  { id: 'bestStoreLocator', icon: '/resources/best_store_locator-192.png', group: 'storeOperations' },
  { id: 'llmsTxt', icon: '/resources/llms_txt-192.png', group: 'aiShoppers', rating: 5.0 },
  { id: 'checkoutProbe', icon: '/resources/checkout_probe-192.png', group: 'aiShoppers' },
];
