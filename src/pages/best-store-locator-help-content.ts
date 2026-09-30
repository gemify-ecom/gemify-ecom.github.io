import type { HelpSection } from '../components/help-page-layout';

/**
 * Merchant help for Best Store Locator, the App Store listing's documentation
 * link. English only on purpose: the app's admin and widget ship in English,
 * so the help uses the exact English labels merchants see in the app.
 *
 * Source of truth for the wording: `docs/merchant-help.md` in the
 * store-locator repo. Inline `code` is written with backticks.
 */

export const BEST_STORE_LOCATOR_HELP_INTRO =
  'Best Store Locator puts your stores, stockists, or dealers on a searchable map on your storefront. Maps and address lookup are built in: there is no API key or map account to set up.';

export const BEST_STORE_LOCATOR_HELP: HelpSection[] = [
  {
    id: 'quick-start',
    heading: 'Quick start',
    blocks: [
      {
        kind: 'list',
        ordered: true,
        items: [
          'Add locations: in the app, open Locations and click Add location. Fill in the name, address, city, and country (the rest is optional). The address is placed on the map automatically. A "Needs attention" badge means it could not be placed: check the spelling and save again, click "Retry address verification", or enter the store\'s latitude and longitude and save. In Google Maps, right-click the store and click the numbers to copy them; you can paste that "latitude, longitude" pair straight into the Latitude field. An entered pin is used as-is, stays put when you later edit the address, and is never replaced by an address lookup. Clear both fields and save to place the pin from the address again.',
          'Add the map to your theme: on the app home, click "Open theme editor" and add the Best Store Locator block to any page (Online Store 2.0 themes). Position it like any other block.',
          'Customize: in the block settings, set the heading, intro text, accent color, layout (map first or list first), distance unit, radius options, and default map position. Every text in the widget (search box placeholder, buttons, result count, messages, store card labels) has its own field under "Search texts", "Results texts", and "Store card texts". Leave a field blank to keep the default wording.',
          'Favorite store (optional): in the app, open Settings and turn on "Let signed-in customers save a favorite store". If the switch is disabled, approve the app\'s updated access request in your Shopify admin first.',
        ],
      },
    ],
  },
  {
    id: 'csv-import',
    heading: 'CSV import (every plan)',
    blocks: [
      {
        kind: 'list',
        items: [
          'Where: Locations > Import CSV opens a dialog. Drop your file on it or click Add files, then Upload and preview. The dialog links a sample CSV you can start from.',
          'Required columns: `name`, `address`, `city`, `country`. Optional: `address 2`, `state/province`, `zip`, `phone`, `email`, `website`, `description`, `image url`, `tags` (separate several with `;`), `id`, and `latitude` + `longitude` (both or neither). Rows with both coordinates skip the address lookup and go live at that pin; both blank removes an entered pin so the address is looked up again; leaving the columns out keeps pins as they are.',
          'Large files: address lookup runs at about one row per second, so a 1,000-row file without coordinates takes about 17 minutes. Include `latitude` and `longitude` columns to import instantly. The CSV export fills them for pins you entered, so an export re-imports without moving any pin.',
          'Preview first: uploading shows exactly what will happen (new, update, possible match, conflict, invalid) before anything is written.',
          'Updates are partial: only the columns present in your file change; everything else keeps its current value. Opening hours and visibility are managed in the app, not by CSV.',
          'Re-imports are safe: importing the same file twice updates stores instead of duplicating them.',
          'The `id` column wins: if a row\'s `id` matches an existing store (from the export, or the store\'s own ID), that row always updates that store, even when the name or address changed. This is how two stores can share one address, such as mall kiosks, each with its own `id`.',
          'Without an `id`, rows match by name and address. If your file has no ZIP column, matching uses name, address, city, and country instead, so a partial update without ZIPs still finds the right store.',
          'A row whose name, city, and country match an existing store and whose address is close (same ZIP, same street number, or a near match after fixing typos) is a possible match. It is never merged or duplicated silently: in the preview choose "Update existing", "Create as new", or leave the default "Skip". Skipped rows are listed in the final report. Use "Set all possible matches to" to apply one choice to every possible match; a row you set yourself always wins.',
          'A row that could match two or more existing stores is a conflict. Choose "Create as new" in the preview, or add an `id` column to say which store it means.',
          'Exports from other store locator apps generally work unchanged: common column names are recognized.',
        ],
      },
    ],
  },
  {
    id: 'plans',
    heading: 'Visibility, plans, and limits',
    blocks: [
      {
        kind: 'list',
        items: [
          'Hidden locations stay in your data but never appear on the storefront. Imports cannot un-hide them.',
          'Location limits: Free 5, Grow 200, Pro 600, Unlimited. Going over the limit (for example after a downgrade) never deletes anything: your oldest locations up to the limit stay visible and the rest wait for an upgrade.',
          'The Free plan shows a small "Powered by" link under the store list; paid plans remove it.',
          'CSV export is available on every plan, including Free.',
          'Change plans any time from the Plan page in the app.',
        ],
      },
    ],
  },
  {
    id: 'good-to-know',
    heading: 'Good to know',
    blocks: [
      {
        kind: 'list',
        items: [
          'Your store list is public: the widget shows your visible locations to any storefront visitor. Hide any location you do not want shown.',
          'Tag filters match any selected tag: choosing "Bakery" and "Cafe" shows every store tagged Bakery or Cafe.',
          'Keep the app proxy path as installed (`/apps/store-locator`). If you change it in your Shopify admin (Settings, Apps, Best Store Locator, App proxy), set the "App proxy path" block setting to match, or the widget and every store link stop working.',
          '"Use my location" uses the browser\'s location only to sort results; nothing is stored.',
          'Distance units follow the store\'s country (miles in the US), or force km or mi in the block settings.',
          'Opening hours support overnight ranges (for example 20:00 to 02:00) and show "Open now" in each store\'s local time zone.',
        ],
      },
    ],
  },
  {
    id: 'seo-pages',
    heading: 'SEO location pages (Pro plan and above)',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Every visible store gets its own page on your domain at `/apps/store-locator/locations/<store-slug>`, rendered in your theme with structured data for search engines, plus a directory of all stores at `/apps/store-locator/locations`.',
      },
      {
        kind: 'paragraph',
        text: 'Link to the directory so search engines find these pages: add it to your navigation or footer (Online Store, Navigation). The pages are not in your sitemap automatically. A store page address never changes once the store is created, so links stay stable.',
      },
    ],
  },
  {
    id: 'ai-store-list',
    heading: 'AI-readable store list (all plans)',
    blocks: [
      {
        kind: 'paragraph',
        text: '`/apps/store-locator/locations.md` (and `<store-slug>.md` for each store) serves a plain-text version of your public store list, so AI shopping assistants can answer "where can I buy this near me" with your stores. No setup needed; it lists the same stores your widget shows.',
      },
    ],
  },
  {
    id: 'favorite-store',
    heading: 'Favorite store',
    blocks: [
      {
        kind: 'paragraph',
        text: 'When you turn it on in Settings, signed-in customers can tap the heart on any store to save it as their store; it is highlighted on their next visit. The choice is stored on the customer\'s profile in Shopify (Customers, then the customer\'s metafields), so you can use it for segmentation, and your theme can show it anywhere with Liquid:',
      },
      {
        kind: 'code',
        text: '{% assign fav = customer.metafields.app--429127368705.favorite_location.value %}\n{% if fav %}Your store: {{ fav.name }} ({{ fav.city }}){% endif %}',
      },
      {
        kind: 'paragraph',
        text: 'Signed-out visitors see no hearts. The app keeps no customer records of its own; see the {privacyPolicy}.',
      },
    ],
  },
  {
    id: 'support',
    heading: 'Support',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Email {email}. Pro and Unlimited plans get priority response. Include your store URL and, for import questions, the CSV file.',
      },
    ],
  },
];
