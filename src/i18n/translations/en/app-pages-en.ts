import type { FeatureCardContent, ProblemCard } from '../content-types';

/** App detail and screencast page copy in English. */
export const appPagesEn = {
  bulkDeleteOrders: {
    title: 'Bulk Delete Orders',
    tagline:
      'Clean up your Shopify store by bulk deleting test orders, draft orders, and customers, with powerful filters and automatic cancellation.',
    problemHeading: 'The Problem',
    problemIntro:
      "Shopify doesn't provide a native way to bulk delete orders. Manually deleting hundreds or thousands of orders one by one is time-consuming and error-prone.",
    problems: [
      {
        title: 'Test Orders Cluttering Data',
        description:
          'Development and testing leave behind fake orders that pollute your analytics and make it hard to see real business performance.',
      },
      {
        title: 'Migration Cleanup',
        description:
          'After migrating from another platform, you may have imported orders that you no longer need and want to clean up.',
      },
      {
        title: 'Duplicate Orders',
        description:
          'System glitches or integration issues can create duplicate orders that need to be cleaned up efficiently.',
      },
      {
        title: 'GDPR / Privacy Compliance',
        description:
          'Privacy regulations may require you to delete old customer data, including order records, after a certain period.',
      },
    ] satisfies ProblemCard[],
    howItWorksHeading: 'How It Works',
    howItWorksIntro:
      'Our app makes bulk order deletion simple, safe, and trackable. Filter orders precisely, then delete them with a single click.',
    features: [
      {
        title: 'Powerful Filters',
        description:
          'Filter orders by date range, status, tags, customer, payment status, and more. Target exactly the orders you want to delete.',
      },
      {
        title: 'Auto-Cancel & Delete',
        description:
          'Orders are automatically cancelled before deletion, with no manual steps required. Fulfilled orders can be deleted too.',
      },
      {
        title: 'Job History',
        description:
          'Track every deletion job in real time, with its status, progress, and any failures.',
      },
      {
        title: 'Export Reports',
        description:
          'Export your job history as CSV for your records. Useful for compliance documentation and audit trails.',
      },
      {
        title: 'Confirm Before Deleting',
        description:
          'A confirmation step lists every order that will be deleted and warns that deletion is permanent, so you can check before you proceed.',
      },
      {
        title: 'Customer Cleanup',
        description:
          'Clear customers in bulk two ways: anonymize them to mask their personal data, or permanently delete them together with their orders.',
      },
    ] satisfies FeatureCardContent[],
    ctaHeading: 'Ready to Clean Up Your Store?',
    ctaBody:
      'Install Bulk Delete Orders today and save hours of manual work. Free plan available to get started.',
  },

  defaultAddressLock: {
    title: 'Default Address Lock',
    tagline:
      "Prevent Shopify from overwriting your customers' default addresses when they ship orders to different locations.",
    problemHeading: 'The Problem',
    problemIntro:
      "Since 2015, Shopify has automatically changed customers' default addresses whenever they place an order with a different shipping address. This causes major headaches for merchants.",
    problems: [
      {
        title: 'Gift Stores',
        description:
          "Customers who send gifts to friends and family find their default address constantly changing to gift recipients' addresses.",
      },
      {
        title: 'B2B Merchants',
        description:
          'Business buyers who ship to their clients end up with incorrect default addresses, disrupting future orders.',
      },
      {
        title: 'CRM-Integrated Shops',
        description:
          'Stores relying on accurate customer data for marketing or fulfillment face data integrity issues.',
      },
      {
        title: 'Subscription Businesses',
        description:
          'One-time gift shipments can override the subscription delivery address, causing recurring shipments to go to the wrong place.',
      },
    ] satisfies ProblemCard[],
    howItWorksHeading: 'How It Works',
    howItWorksIntro:
      'Our app intelligently monitors address changes and automatically restores the original default address when Shopify tries to overwrite it.',
    features: [
      {
        title: 'Smart Detection',
        description:
          'Distinguishes between order-triggered changes and intentional manual updates. Manual changes by customers or staff are preserved.',
      },
      {
        title: 'Automatic Restoration',
        description:
          'When an order overwrites a default address, the app restores the original in real time, as the order is placed.',
      },
      {
        title: 'Activity Dashboard',
        description:
          'See every protection event in one dashboard, with a full history of the addresses the app restored.',
      },
      {
        title: 'Privacy-First',
        description:
          'We only store address IDs, never actual address content. Your customer data stays secure in Shopify.',
      },
    ] satisfies FeatureCardContent[],
    diagram: {
      heading: 'Default Address Lock',
      withoutApp: 'Without Our App',
      withApp: 'With Our App',
      stepLabel: 'Step {number}',
      step1: 'Default address is {a} (Your home)',
      step2: "You ship a gift to {b} (Friend's address)",
      step3Without: 'Shopify changes default to {b}',
      step3With: 'App detects change & reverts to {a}',
      resultWithoutTitle: 'Default address is now wrong!',
      resultWithoutBody: 'Future orders may ship to the wrong place',
      resultWithTitle: 'Default address stays correct!',
      resultWithBody: 'Your home address remains protected',
      summaryHeading: 'What We Do',
      summaryNegative: "We don't change order addresses",
      summaryPositive: 'We protect your default address',
    },
    ctaHeading: 'Ready to Protect Your Customer Addresses?',
    ctaBody:
      "Install Default Address Lock today and stop Shopify from overwriting your customers' default addresses. Free plan available for small stores.",
  },

  llmsTxt: {
    title: 'LLMs-full.txt',
    /** `{llmsTxt}` and `{llmsFullTxt}` render as inline code. */
    tagline:
      'Make your Shopify store AI-ready. Generate {agentsMd}, {llmsTxt}, and {llmsFullTxt} so AI assistants can understand your products, collections, and pages.',
    problemHeading: 'Why Your Store Needs llms.txt',
    /** `{standardLink}`, `{robotsTxt}` and `{llmsTxt}` are inline nodes. */
    problemIntro:
      'The {standardLink} helps AI models understand your website. Just like {robotsTxt} guides search engines, {llmsTxt} guides AI assistants, helping them recommend your products and answer customer questions accurately.',
    standardLinkLabel: 'llms.txt standard',
    problems: [
      {
        title: 'Shoppers Ask AI First',
        description:
          'Customers increasingly research products through ChatGPT, Claude, and Gemini. Without a clean summary of your catalog, those assistants work from whatever they can scrape.',
      },
      {
        title: 'Storefront HTML Is Noisy',
        description:
          'Theme markup, scripts, and navigation bury the details that matter. Models read markdown far more reliably than a rendered storefront page.',
      },
      {
        title: "Writing It By Hand Doesn't Scale",
        description:
          'Maintaining a hand-written file across hundreds of products, collections, and blog articles is tedious and goes stale the moment your catalog changes.',
      },
      {
        title: 'Hosting Gets In The Way',
        description:
          'AI assistants look for the file on your own domain. Hosting it anywhere else means extra setup and redirects.',
      },
    ] satisfies ProblemCard[],
    featuresHeading: 'What You Get',
    featuresIntro:
      'Pick your content, generate your files, and let Shopify serve them from your own domain. No extra hosting, no manual editing.',
    features: [
      {
        title: 'One-Click Generation',
        description:
          'Generate agents.md, llms.txt, and llms-full.txt from your dashboard. Choose exactly which products, collections, pages, and articles to include.',
      },
      {
        title: 'Template Editor',
        description:
          'Edit headings and item formatting in a template editor with a live preview, so the output matches how you want your store described.',
      },
      {
        title: 'Served Natively',
        description:
          'Files are published to your theme and served by Shopify at /agents.md, /llms.txt, and /llms-full.txt, with no extra hosting needed.',
      },
      {
        title: 'You Choose the Content',
        description:
          "Include products, collections, pages, blog articles, and policies, by whole content type or item by item. Leave out anything you don't want summarized for AI assistants.",
      },
      {
        title: 'Scheduled Regeneration',
        description:
          'Regenerate your files automatically every hour, day, or week in your own time zone, with a history of every run.',
      },
      {
        title: 'Clean Markdown Output',
        description:
          'Your store content is turned into clean markdown that AI assistants can read without guessing.',
      },
    ] satisfies FeatureCardContent[],
    howItWorksHeading: 'How It Works',
    howItWorksIntro: 'Three steps from install to an AI-readable storefront.',
    steps: [
      {
        title: 'Install & Configure',
        description:
          'Select which content to include: products, collections, pages, blog articles, and policies.',
      },
      {
        title: 'Generate Files',
        description:
          'Hit generate. The app reads your store content and turns it into clean markdown.',
      },
      {
        title: 'AI-Ready',
        description:
          'Your files are live on your own domain, where AI assistants like ChatGPT, Claude, and Gemini can read them. Turn on scheduled regeneration to keep them current.',
      },
    ] satisfies FeatureCardContent[],
    ctaHeading: 'Ready to Go AI-Ready?',
    ctaBody:
      'Install LLMs-full.txt today and give AI assistants an accurate picture of your store. Free to install.',
  },

  // Not on the App Store yet: each has a detail page (with no install link or
  // prices until the listing is live), a screencast page, and for Best Store
  // Locator and Checkout Probe a help page. Claim only what the app already does.
  japanMultiship: {
    title: 'Japan Multiship',
    tagline:
      'Let buyers send one order to up to 20 recipients across Japan from the cart page, pay once, and see shipping priced for each destination.',
    problemHeading: 'The Problem',
    problemIntro:
      'Shopify checkout ships an order to one address. Gift buyers in Japan often send the same order to family, friends, and clients, so they check out once per recipient or email you a list to sort out by hand.',
    problems: [
      {
        title: 'One Checkout per Recipient',
        description:
          'Buyers repeat checkout for every address. It is slow, and many give up before the last gift.',
      },
      {
        title: 'Shipping Worked Out by Hand',
        description:
          'Without a rate for each destination, you guess the shipping or fix the total after payment.',
      },
      {
        title: 'Address Lists by Email',
        description:
          'Recipients sent in a note or a spreadsheet must be copied into orders and carrier files one by one.',
      },
      {
        title: 'Tracking for Every Parcel',
        description:
          'Each parcel gets its own tracking number, and entering them back into Shopify takes time.',
      },
    ] satisfies ProblemCard[],
    howItWorksHeading: 'How It Works',
    howItWorksIntro:
      'Buyers split the cart on the cart page and pay once. Each destination then becomes its own fulfillment, ready for your carrier.',
    features: [
      {
        title: 'Up to 20 Recipients',
        description: 'On the cart page, buyers assign cart items to up to 20 recipients and pay once.',
      },
      {
        title: 'Postal Code Autofill',
        description: 'A Japanese postal code fills in the prefecture and city, with kana fields for names.',
      },
      {
        title: 'Shipping per Destination',
        description:
          'Shipping is priced for each destination from your shipping zones and shown before checkout.',
      },
      {
        title: 'One Fulfillment per Destination',
        description:
          'After payment, each destination becomes its own fulfillment order, and the order page lists every recipient.',
      },
      {
        title: 'Yamato B2 Cloud CSV',
        description: 'Export a Yamato B2 Cloud CSV for multi-destination orders and for single-address orders.',
      },
      {
        title: 'Tracking Import',
        description: 'Upload the carrier CSV to add tracking numbers and fulfill each destination.',
      },
    ] satisfies FeatureCardContent[],
    goodToKnowHeading: 'Good to Know',
    goodToKnow: [
      'Built for stores in Japan: the store currency must be JPY.',
      'Needs the Online Store sales channel and a cart page. On Shopify Plus, a checkout block also lets buyers add destinations at checkout.',
      'An "amount off order" discount also lowers the shipping fee, and the app flags each such order. An "amount off products" discount does not.',
      'The app is available in English and Japanese.',
    ],
    ctaHeading: 'Want Japan Multiship for Your Store?',
    ctaBody:
      'Japan Multiship is not on the Shopify App Store yet. Send us a message if you would like to use it in your store.',
  },
  bestStoreLocator: {
    title: 'Best Store Locator',
    tagline:
      'Show your stores, stockists, or dealers on a searchable map on your storefront, with no API keys or map accounts to set up.',
    problemHeading: 'The Problem',
    problemIntro:
      'Shoppers who want to visit you need to find the nearest location. Many store locators need a map API key and a billing account first, and keeping a long list of locations current by hand takes time.',
    problems: [
      {
        title: 'API Keys and Map Billing',
        description:
          'Many locators need a map provider account, an API key, and a card on file before the map shows.',
      },
      {
        title: 'Long Location Lists',
        description:
          'Adding hundreds of stockists one by one is slow, and a bad import can overwrite good data.',
      },
      {
        title: 'Pins in the Wrong Place',
        description: 'An address placed at the wrong spot sends shoppers to the wrong door.',
      },
      {
        title: 'Shoppers Who Give Up',
        description:
          'Without search by city or ZIP and opening hours, shoppers leave instead of visiting.',
      },
    ] satisfies ProblemCard[],
    howItWorksHeading: 'How It Works',
    howItWorksIntro:
      'Add your locations by hand or from a CSV, and a searchable map appears on your storefront as a theme block.',
    features: [
      {
        title: 'Built-In Maps',
        description: 'Maps and address lookup are included on every plan, with no map account or API key.',
      },
      {
        title: 'CSV Import with Preview',
        description:
          'See a full preview before anything is saved. Re-imports update existing stores and catch duplicates.',
      },
      {
        title: 'Held for Review',
        description:
          'Addresses that cannot be placed accurately are held for review instead of going live at the wrong pin.',
      },
      {
        title: 'Theme Block',
        description: 'Add the map as a theme block with your colors, layout, distance unit, and text.',
      },
      {
        title: 'Search and Open Now',
        description:
          'Shoppers search by city or ZIP, use their location, filter by tag, and see which stores are open now. Signed-in customers can save a favorite store.',
      },
      {
        title: 'Location Pages',
        description:
          'Location pages with structured data help search engines and AI assistants find each store (Pro plan and above).',
      },
    ] satisfies FeatureCardContent[],
    goodToKnowHeading: 'Good to Know',
    goodToKnow: [
      'Needs the Online Store sales channel: the map is a theme app block.',
      'CSV import is included on every plan.',
      'Address lookup runs at about one row per second. Include latitude and longitude columns to import a large file instantly.',
      'Works for stores in any country.',
    ],
    ctaHeading: 'Want Best Store Locator for Your Store?',
    ctaBody:
      'Best Store Locator is not on the Shopify App Store yet. Send us a message if you would like to use it in your store.',
  },
  checkoutProbe: {
    title: 'Checkout Probe',
    tagline:
      'Get your checkout ready for WebMCP. Find what would stop AI shopping agents in your checkout, with a fix for each problem the test finds. No order is ever placed.',
    problemHeading: 'The Problem',
    problemIntro:
      'Since September 2026, Shopify checkout offers WebMCP tools, so AI agents in a buyer’s browser can read and complete a checkout. When a checkout asks for something an agent cannot give, the agent stops, the sale is lost, and nothing in your orders shows why.',
    problems: [
      {
        title: 'Rules That Need Buyer Input',
        description: 'A checkout rule that asks the buyer for something extra can stop an agent that cannot answer.',
      },
      {
        title: 'No Shop Pay',
        description: 'Without Shop Pay, some agents cannot finish the payment step.',
      },
      {
        title: 'Shipping Not Offered',
        description: 'If no shipping rate is offered for the address, the agent cannot complete checkout.',
      },
      {
        title: 'Nothing to See in Orders',
        description: 'A failed agent checkout leaves no order behind, so the problem stays hidden.',
      },
    ] satisfies ProblemCard[],
    howItWorksHeading: 'How It Works',
    howItWorksIntro:
      'Checkout Probe opens a test checkout the way an agent would, fills in a test buyer and a shipping address, and then cancels it.',
    features: [
      {
        title: 'One-Click Test',
        description: 'Run a test checkout the way an AI shopping agent would, in one click.',
      },
      {
        title: 'Where an Agent Gets Stuck',
        description: 'See each point where an agent would stop, with the message the checkout returned.',
      },
      {
        title: 'A Fix for Each Problem',
        description: 'Get a fix and a link to the matching settings page for every problem the test finds.',
      },
      {
        title: 'What the Test Cannot See',
        description: 'The report lists what the test cannot check, so you know what to review yourself.',
      },
      {
        title: 'Your Product and Address',
        description: 'Choose the test product and the shipping address the test uses.',
      },
      {
        title: 'Never Places an Order',
        description: 'The test checkout is always cancelled. No order is placed.',
      },
    ] satisfies FeatureCardContent[],
    goodToKnowHeading: 'Good to Know',
    goodToKnow: [
      'Made for Shopify’s WebMCP tools for checkout. The test runs through Shopify’s Checkout MCP, so a few steps that only show in the browser, such as some checkout UI extensions, may not appear. The report lists what the test cannot check.',
      'Read-only: the app never changes your store settings and never places an order.',
      'Needs at least one active product that can be bought, and a shipping address: the store address or a test address you set in the app.',
      'No theme changes and no app blocks.',
    ],
    ctaHeading: 'Want Checkout Probe for Your Store?',
    ctaBody:
      'Checkout Probe is not on the Shopify App Store yet. Send us a message if you would like to use it in your store.',
  },
};
