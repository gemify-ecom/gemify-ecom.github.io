import type { EmphasisedText } from '../content-types';

/** Home page copy in English. */
export const homeEn = {
  skipToContent: 'Skip to main content',

  hero: {
    socialProof: 'Trusted by 500+ Shopify merchants',
    headline: 'Apps That Actually Help Your Shopify Store',
    subheadline:
      'Simple, powerful tools built by developers who understand merchant needs. No fluff, just results.',
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
    bulkDeleteOrders: {
      title: 'Bulk Delete Orders',
      tagline: 'Clean up test orders and unwanted data in seconds',
      features: [
        'Filter and target specific orders for bulk deletion',
        'Auto-cancels orders before deletion — no manual steps',
        'Track jobs and export reports in Job History',
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
      title: 'LLMs.txt',
      tagline: 'Make your store readable to ChatGPT, Claude, and Gemini',
      features: [
        'Generate llms.txt and llms-full.txt in one click',
        'Pick which products, collections, pages, and articles to include',
        'Served natively by Shopify at /llms.txt, no extra hosting',
      ],
    },
  },

  testimonials: {
    badge: '5.0 on Shopify App Store',
    heading: 'Trusted by Merchants',
    subheading: 'See what store owners are saying about our apps',
    verified: 'Verified',
    merchantRole: 'Shopify Merchant',
  },

  whyChoose: {
    heading: 'Why Merchants Choose Gemify',
    subheading: 'Tools built with your success in mind',
    benefits: [
      {
        title: 'Shopify Expertise',
        description: 'Built by certified Shopify experts who understand your daily challenges.',
      },
      {
        title: 'Enterprise Security',
        description: 'Bank-grade security protecting your store data 24/7.',
      },
      {
        title: 'Responsive Support',
        description: 'Real human support ready to help. No bots, just genuine assistance.',
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
    securityNote: 'Your information is secure and will never be shared',
  },
};
