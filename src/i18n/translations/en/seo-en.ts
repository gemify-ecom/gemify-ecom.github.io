/**
 * Search and social metadata in English: one title and description per page,
 * written into `<head>` by the prerender step and on client-side navigation.
 * App names, plan names, and prices are not translated.
 */
export const seoEn = {
  /** Label for the first breadcrumb, pointing at the home page. */
  breadcrumbHome: 'Home',

  pages: {
    home: {
      title: 'Gemify | Shopify Apps: Bulk Delete Orders, Address Lock, llms.txt',
      description:
        'Shopify apps that solve real merchant problems: bulk delete orders and customers, stop default address overwrites, and publish llms.txt for AI. Free plans.',
    },
    faq: {
      title: 'FAQ: Gemify Shopify Apps, Pricing, and Privacy | Gemify',
      description:
        'Answers about Bulk Delete Orders, Default Address Lock, and LLMs-full.txt: features, pricing, billing, data privacy, and compatibility with Shopify plans.',
    },
    services: {
      title: 'Shopify App Development, Customization & Bug Fixes | Gemify',
      description:
        'Custom Shopify app development, app customization, API version upgrades, and bug fixes, for Gemify apps or any Shopify app. Free quote and post-launch support.',
    },
    privacyPolicy: {
      title: 'Privacy Policy | Gemify',
      description:
        "How Gemify's Shopify apps collect, use, store, and protect merchant and customer data, including GDPR and CPRA rights and customer data requests.",
    },
    bulkDeleteOrders: {
      title: 'Bulk Delete Shopify Orders, Draft Orders & Customers | Gemify',
      description:
        'Bulk delete Shopify orders, draft orders, and customers. Filters, automatic cancellation, real-time job history, and CSV reports. Free plan; $36/year unlimited.',
    },
    defaultAddressLock: {
      title: 'Default Address Lock: Stop Shopify Overwriting Addresses | Gemify',
      description:
        "Stop Shopify from replacing a customer's default address when an order ships elsewhere. Smart detection, real-time restoration, activity dashboard. Free plan.",
    },
    llmsTxt: {
      title: 'LLMs-full.txt: llms.txt and agents.md for Shopify | Gemify',
      description:
        'Publish agents.md, llms.txt, and llms-full.txt on your own Shopify domain so ChatGPT, Claude, and Gemini understand your catalog. Scheduled updates. Free plan.',
    },
    japanMultiship: {
      title: 'Japan Multiship: One Shopify Order, Many Recipients | Gemify',
      description:
        'Coming soon to the Shopify App Store. Buyers send one order to up to 20 recipients in Japan and pay once, with shipping per destination and Yamato B2 Cloud CSV export.',
    },
    bestStoreLocator: {
      title: 'Best Store Locator: Store Map for Shopify, No API Key | Gemify',
      description:
        'Coming soon to the Shopify App Store. A searchable map of your stores, stockists, or dealers with built-in maps, CSV import with preview, and open-now search.',
    },
    checkoutProbe: {
      title: 'Checkout Probe: WebMCP Checkout Test for Shopify | Gemify',
      description:
        'Coming soon to the Shopify App Store. Get your checkout ready for WebMCP: test it the way an AI shopping agent would and get a fix for each problem.',
    },
    notFound: {
      title: 'Page Not Found | Gemify',
      description: "The page you're looking for doesn't exist. Browse Gemify's Shopify apps instead.",
    },
  },

  /** Screencast pages are not indexed; `{app}` is the app name. */
  screencast: {
    title: '{app} Screencast Demo | Gemify',
    description: 'Watch a short screencast demo of {app}, a Shopify app by Gemify.',
  },
  help: {
    title: '{app} Help | Gemify',
    description: 'How to set up and use {app}, a Shopify app by Gemify.',
  },
};
