import type { FeatureCardContent, ProblemCard } from '../content-types';

/** App detail and screencast page copy in English. */
export const appPagesEn = {
  bulkDeleteOrders: {
    title: 'Bulk Delete Orders',
    tagline:
      'Clean up your Shopify store by bulk deleting test orders, old data, or unwanted orders with powerful filters and automatic cancellation.',
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
          'Filter orders by date range, status, tags, customer, financial status, and more. Target exactly the orders you want to delete.',
      },
      {
        title: 'Auto-Cancel & Delete',
        description:
          'Orders are automatically cancelled before deletion - no manual steps required. Fulfilled orders are handled gracefully.',
      },
      {
        title: 'Job History',
        description:
          'Track all deletion jobs with detailed logs. Export reports for compliance and audit purposes.',
      },
      {
        title: 'Export Reports',
        description:
          'Generate detailed reports of deleted orders for your records. Perfect for compliance documentation and audit trails.',
      },
      {
        title: 'Safe & Reversible Preview',
        description:
          'Preview orders before deletion. See exactly what will be deleted and confirm before proceeding.',
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
          'Distinguishes between order-triggered changes and intentional manual updates. Manual changes are preserved.',
      },
      {
        title: 'Automatic Restoration',
        description:
          'When Shopify overwrites a default address after an order, we automatically restore the original.',
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
      'Make your Shopify store AI-ready. Generate {llmsTxt} and {llmsFullTxt} so AI assistants can understand your products, collections, and pages.',
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
          'The standard expects the file at your root domain. Serving it from an external host or an app proxy path means extra infrastructure and redirects.',
      },
    ] satisfies ProblemCard[],
    featuresHeading: 'What You Get',
    featuresIntro:
      'Pick your content, generate both files, and let Shopify serve them from your own domain. No extra hosting, no manual editing.',
    features: [
      {
        title: 'One-Click Generation',
        description:
          'Generate both llms.txt and llms-full.txt from your dashboard. Choose exactly which products, collections, pages, and articles to include.',
      },
      {
        title: 'Custom Output',
        description:
          'Reorder sections and customize how your llms files are formatted, so the output matches how you want your store described.',
      },
      {
        title: 'Served Natively',
        description:
          'Files are published to your theme and served by Shopify at /llms.txt and /llms-full.txt, with no extra hosting needed.',
      },
      {
        title: 'You Choose the Content',
        description:
          "Include products, collections, pages, blog articles, and policies. Leave out anything you don't want summarized for AI assistants.",
      },
      {
        title: 'Clean Markdown Output',
        description:
          'Store data is pulled through the Shopify GraphQL API and converted to clean markdown that models can parse without guessing.',
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
          'Hit generate. The app fetches your store data via GraphQL and converts it to clean markdown.',
      },
      {
        title: 'AI-Ready',
        description:
          'Your llms.txt is now publicly accessible. AI assistants like ChatGPT, Claude, and Gemini can read and understand your store.',
      },
    ] satisfies FeatureCardContent[],
    ctaHeading: 'Ready to Go AI-Ready?',
    ctaBody:
      'Install LLMs-full.txt today and give AI assistants an accurate picture of your store. Free to install.',
  },
};
