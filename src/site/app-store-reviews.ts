/**
 * Merchant reviews from the Shopify App Store, in display order. The first
 * one is also quoted in the home hero. Names and links are the same in every
 * language; the review text and its highlight live in the home dictionaries
 * (`testimonials.reviews`): English verbatim, other languages translated and
 * labeled as translations.
 */
export type ReviewId = 'barbellStandard' | 'yubiBar' | 'strikeSports' | 'mooMenn' | 'amyDepot';

export interface AppStoreReview {
  id: ReviewId;
  name: string;
  /** Store name when the reviewer gave one; otherwise the page shows the translated "Shopify Merchant". */
  store?: string;
  url?: string;
}

export const APP_STORE_REVIEWS: AppStoreReview[] = [
  { id: 'barbellStandard', name: 'Jared', store: 'Barbell Standard', url: 'https://barbellstandard.com' },
  { id: 'yubiBar', name: 'YuBi Bar', url: 'https://apps.shopify.com/reviews/2313455' },
  { id: 'strikeSports', name: 'STRIKE SPORTS' },
  { id: 'mooMenn', name: 'MooMenn' },
  { id: 'amyDepot', name: 'The A.M.Y. Depot' },
];
