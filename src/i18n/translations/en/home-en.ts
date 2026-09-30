import type { EmphasisedText } from '../content-types';

/** Home page copy in English. */
export const homeEn = {
  hero: {
    socialProof: 'Trusted by 500+ Shopify merchants',
    headline: {
      text: 'Small apps that do {emphasis} well.',
      emphasis: 'one job',
    } satisfies EmphasisedText,
    subheadline:
      'Free to install, made for Shopify, and supported by the developer who built it.',
    primaryCta: 'Explore Our Apps',
    secondaryCta: 'Get in Touch →',
    ratingBadge: '5-star rated on Shopify App Store',
  },

  apps: {
    badge: 'Free to Install',
    heading: 'Our Shopify Apps',
    subheading: 'Simple, powerful tools that solve real merchant problems',
    comingSoon: 'Coming Soon',
    installs: '{count} installs',
    /** Accessible label for the star rating badge on each app card. */
    ratingLabel: 'Rated {rating} out of 5 on the Shopify App Store',
    /** App groups: store tools use the blue icon plate, AI tools the black one. */
    groups: {
      storeOperations: {
        heading: 'Store operations',
        description: 'Orders, addresses, shipping, and store locations',
      },
      aiShoppers: {
        heading: 'Ready for AI shoppers',
        description: 'Help AI assistants read your store and complete a checkout',
      },
    },
    bulkDeleteOrders: {
      title: 'Bulk Delete Orders',
      tagline: 'Clean up test orders and unwanted data in seconds',
      features: [
        'Bulk delete orders, draft orders, and customers',
        'Auto-cancels orders before deletion, with no manual steps',
        'Track every job and export CSV reports in Job History',
      ],
    },
    defaultAddressLock: {
      title: 'Default Address Lock',
      tagline: 'Keep customer default addresses intact after orders',
      features: [
        'Prevent Shopify from overwriting default addresses',
        'Smart detection for order vs. manual changes',
        'Perfect for gift stores and B2B merchants',
      ],
    },
    llmsTxt: {
      title: 'LLMs-full.txt',
      tagline: 'Make your store readable to ChatGPT, Claude, and Gemini',
      features: [
        'Generate agents.md, llms.txt, and llms-full.txt in one click',
        'Pick which products, collections, pages, and articles to include',
        'Served natively by Shopify at /llms.txt, no extra hosting',
      ],
    },
    japanMultiship: {
      title: 'Japan Multiship',
      tagline: 'Ship one gift order to many recipients across Japan',
      features: [
        'Buyers split cart items across several recipients on the cart page',
        'Each paid order becomes one fulfillment per destination',
        'Export Yamato B2 Cloud CSV and import tracking numbers back',
      ],
    },
    checkoutProbe: {
      title: 'Checkout Probe',
      tagline: 'Get your checkout ready for WebMCP shopping agents',
      features: [
        'Test your checkout as an AI shopping agent in one click',
        'See what will or may stop an agent, with a fix for each',
        'Never places an order: every test checkout is cancelled',
      ],
    },
    bestStoreLocator: {
      title: 'Best Store Locator',
      tagline: 'Show your stores and dealers on a map, no API keys needed',
      features: [
        'Built-in maps and address checks, with no Google API key',
        'CSV import with a full preview before anything is saved',
        'Shoppers search by city or ZIP and see who is open now',
      ],
    },
  },

  testimonials: {
    badge: '5.0 on Shopify App Store',
    heading: 'Trusted by Merchants',
    subheading: 'See what store owners are saying about our apps',
    verified: 'Verified',
    merchantRole: 'Shopify Merchant',
    /** Shown next to "Verified" on translated reviews; empty in English, where reviews are verbatim. */
    translatedNote: '',
    /** Quotation marks around review text in this language. */
    quoteMarks: { open: '“', close: '”' },
    /** Review text by review id (see src/site/app-store-reviews.ts). English is verbatim from the App Store. */
    reviews: {
      barbellStandard: {
        quote: 'Your app saved my team about 8 hours of clicking buttons in Shopify, and turned it into a 5 minute project.',
        highlight: '8 hours → 5 minutes',
      },
      yubiBar: {
        quote: 'Great App. Needed to Remove imported orders from Amazon which was messing with Analytics. Got in Touch with Shopify Support where they said Couldn\'t Remove Fulfilled orders. Then used this app and it worked like magic. Thanks to the whole team at GEMIFY.',
        highlight: 'Worked like magic',
      },
      strikeSports: {
        quote: 'Great app and even better customer support! The app works smoothly and does exactly what it promises. The support team is extremely responsive, professional, and helpful. Highly recommended!',
        highlight: 'Even better customer support',
      },
      mooMenn: {
        quote: 'Sean has been exceptional and went above and beyond to clear all orders from the background instantly. Highly recommended, top support!',
        highlight: 'Above and beyond',
      },
      amyDepot: {
        quote: 'Does what it states it will do, and does it incredibly well at an incredible price. They knocked it out of the park. Thank you to the folks at Gemify. This is exactly what I needed!',
        highlight: 'Knocked it out of the park',
      },
    },
  },

  /** Core values. Each proof line must stay true of the shipped apps. */
  values: {
    eyebrow: 'Our values',
    heading: 'Four promises behind every app',
    subheading: 'Each one is something our apps already do today.',
    proofLabel: 'Proof',
    items: [
      {
        title: 'One job, done well',
        description: 'Each app solves one merchant problem and stays small enough to learn in a minute.',
        proof: 'Six apps, six jobs: delete orders, lock addresses, publish llms.txt, split gift orders, locate stores, and test agent checkouts.',
      },
      {
        title: 'Safe before fast',
        description: 'Our apps show you what will change and keep a record of what did.',
        proof: 'Job History with CSV reports in Bulk Delete Orders, a full preview before a Best Store Locator import, and Checkout Probe never places an order.',
      },
      {
        title: 'Plain words, real prices',
        description: 'We write the way merchants talk. The Shopify App Store listing is the price list.',
        proof: 'Every app starts with a free plan, and our privacy policy is written in plain language.',
      },
      {
        title: 'People answer',
        description: 'A real person reads and answers every support message. No bots.',
        proof: 'Merchants mention our support by name in their App Store reviews.',
      },
    ],
  },

  about: {
    heading: 'About Gemify',
    intro:
      'Founded by experienced Shopify developers who understand the challenges merchants face.',
    mission: {
      text: 'Our mission is simple: {emphasis}. No bloated features. No confusing interfaces. Just clean solutions that help your business thrive.',
      emphasis: 'intuitive, reliable apps',
    } satisfies EmphasisedText,
    closing: {
      text: "Every app is built with the same care we'd demand for our own stores. When you choose Gemify, you're choosing a {emphasis}.",
      emphasis: 'partner dedicated to your success',
    } satisfies EmphasisedText,
  },

  /** Teaser for the services page; the cards reuse the services namespace. */
  services: {
    badge: 'Services',
    heading: 'Need Something Custom?',
    subheading:
      'Beyond our own apps, we build, customize, upgrade, and fix Shopify apps, including apps we did not build.',
    cta: 'See All Services',
  },

  contact: {
    heading: 'Get In Touch',
    responseTime: 'We typically respond within 24 hours',
    successTitle: 'Thank You!',
    successBody: "Your message has been sent successfully. We'll get back to you soon!",
    successCta: 'Explore our apps while you wait →',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'How can we help?',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us more about your question or feedback...',
    submit: 'Send Message',
    submitting: 'Sending...',
    submitted: 'Message Sent',
    errorAlert: 'Oops! There was a problem sending your message. Please try again.',
    /** Shown under the error; `{email}` becomes a mailto link. */
    errorEmailFallback: 'You can also email us directly at {email}.',
    securityNote: 'Your information is secure and will never be shared',
  },
};
