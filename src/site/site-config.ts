/**
 * Site-wide facts shared by components, the prerender step, and structured
 * data. Change a value here and every page, `<head>` tag, and JSON-LD block
 * picks it up.
 */

/** Production origin. Canonical, hreflang, sitemap, and Open Graph URLs use it. */
export const SITE_URL = 'https://gemify-ecom.github.io';

export const SUPPORT_EMAIL = 'sean.gemify@gmail.com';

export const YOUTUBE_URL = 'https://www.youtube.com/@sean.gemify';

/** Gemify's partner page: every app with its live rating and reviews. */
export const APP_STORE_PARTNER_URL = 'https://apps.shopify.com/partners/gemify4';

/** Square brand logo, also the default social sharing image. */
export const LOGO_PATH = '/resources/gemify.png';

/** Plain-markdown summaries of the site for AI assistants (see /llms.txt). */
export const LLMS_TXT_PATH = '/llms.txt';
export const LLMS_FULL_TXT_PATH = '/llms-full.txt';
