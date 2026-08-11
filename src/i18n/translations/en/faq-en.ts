import type { FaqDictionary } from '../content-types';

/** FAQ page copy in English. `{email}` and `{privacyPolicy}` become links. */
export const faqEn: FaqDictionary = {
  title: 'Frequently Asked Questions',
  intro:
    "Find answers to common questions about Gemify and our apps. Can't find what you're looking for? Contact us at {email}",
  questionPrefix: 'Q:',

  sections: [
    {
      title: 'General Questions',
      items: [
        {
          question: 'What is Gemify?',
          paragraphs: [
            'Gemify is a Shopify app development company focused on creating simple, powerful tools for merchants. We build apps that solve real problems without unnecessary complexity.',
          ],
        },
        {
          question: 'Are your apps safe to use?',
          paragraphs: [
            "Yes, absolutely. All our apps follow Shopify's best practices and security guidelines. We use industry-standard encryption, secure authentication, and never share your data with third parties. Your store data is protected at all times.",
          ],
        },
        {
          question: 'How do I get support?',
          paragraphs: [
            'You can reach our support team by emailing {email}. We typically respond within 24 hours during business days.',
          ],
        },
        {
          question: 'Do you offer refunds?',
          paragraphs: [
            "Our apps follow Shopify's standard refund policy. If you're not satisfied with any of our apps, please contact us and we'll work with you to resolve any issues or process a refund if appropriate.",
          ],
        },
      ],
    },
    {
      title: 'Bulk Delete Orders App',
      items: [
        {
          question: 'What does the Bulk Delete Orders app do?',
          paragraphs: [
            'Bulk Delete Orders allows you to efficiently delete multiple orders from your Shopify store at once. You can use powerful filters to target specific orders by status, date, tags, or other criteria. The app automatically cancels orders before deletion, saving you time and manual work.',
          ],
        },
        {
          question: 'Is it safe to delete orders?',
          paragraphs: [
            'Yes, but please be careful. The app will automatically cancel orders before deleting them to ensure proper handling. However, once orders are deleted, they cannot be recovered. We recommend:',
          ],
          bullets: [
            'Using filters carefully to select only the orders you want to delete',
            'Starting with a small test batch first',
            'Exporting your orders as a backup before bulk deletion',
          ],
        },
        {
          question: 'Can I undo a deletion?',
          paragraphs: [
            "No, once orders are deleted from Shopify, they cannot be restored through our app or Shopify's admin. This is why we recommend being very careful with your filters and starting with small test batches.",
          ],
        },
        {
          question: 'What filters are available?',
          paragraphs: ['You can filter orders by:'],
          bullets: [
            'Order status (pending, paid, fulfilled, etc.)',
            'Financial status (paid, pending, refunded, etc.)',
            'Fulfillment status (unfulfilled, fulfilled, partially fulfilled)',
            'Date range (created date, updated date)',
            'Order tags',
            'And more',
          ],
        },
        {
          question: 'How long does it take to delete orders?',
          paragraphs: [
            "Deletion speed depends on the number of orders and Shopify's API rate limits. The app processes deletions in the background, and you can track progress in the Job History section. For large batches, it may take several minutes to hours.",
          ],
        },
        {
          question: 'Can I track deletion jobs?',
          paragraphs: [
            'Yes! The app includes a Job History feature where you can view all deletion jobs, their status, and export reports for your records.',
          ],
        },
        {
          question: 'Will this affect my Shopify analytics?',
          paragraphs: [
            "Yes, deleting orders will remove them from your Shopify analytics and reports. The data associated with those orders will no longer appear in your store's statistics. This is why we recommend carefully considering which orders you want to delete.",
          ],
        },
        {
          question: 'What happens to customer information when I delete orders?',
          paragraphs: [
            "Deleting an order removes the order record but does not delete the customer account. Customer profiles remain in your store unless you separately delete them through Shopify's customer management.",
          ],
        },
        {
          question: 'Can I delete draft orders or abandoned checkouts?',
          paragraphs: [
            'Yes! Bulk Delete Orders supports both regular orders and draft orders. You can bulk delete either type using powerful filters.',
          ],
        },
        {
          question: 'How much does Bulk Delete Orders cost?',
          paragraphs: ['We offer simple pricing:'],
          bullets: [
            { label: 'Free plan:', text: '50 bulk delete order/draft order operations' },
            {
              label: 'Complete plan ($36/year):',
              text: 'Unlimited bulk delete order/draft order operations',
            },
          ],
        },
      ],
    },
    {
      title: 'Default Address Lock App',
      items: [
        {
          question: 'What does Default Address Lock do?',
          paragraphs: [
            "Default Address Lock prevents Shopify from automatically overwriting your customers' default addresses when they place orders with different shipping addresses. When a customer ships a gift to someone else, Shopify normally changes their default address to the gift recipient's address. Our app stops this from happening and keeps their original default address intact.",
          ],
        },
        {
          question: 'Why does Shopify change customer default addresses?',
          paragraphs: [
            "This is a long-standing Shopify behavior (since 2015) where Shopify automatically updates a customer's default address to match their most recent order's shipping address. While intended for convenience, it causes problems for:",
          ],
          bullets: [
            'Gift-focused stores where customers ship to different recipients',
            'B2B merchants where buyers ship to their clients',
            'Stores with CRM integrations that rely on accurate customer addresses',
            'Subscription box businesses',
          ],
        },
        {
          question: 'How does the app detect which changes to block?',
          paragraphs: [
            'Our smart detection system distinguishes between order-triggered address changes and intentional manual updates. If a customer deliberately updates their address in their account, that change will be preserved. Only automatic overwrites caused by placing orders are reversed.',
          ],
        },
        {
          question: "Will this affect my customers' ability to update their addresses?",
          paragraphs: [
            'No. Customers can still manually update their default address at any time through their account. The app only prevents automatic overwrites that happen when orders are placed with different shipping addresses.',
          ],
        },
        {
          question: 'What data does Default Address Lock store?',
          paragraphs: [
            'We follow a privacy-first approach and only store address IDs. We never store actual address content like street names or cities. This minimal data footprint ensures your customer information stays secure while still providing full protection.',
          ],
        },
        {
          question: 'How much does Default Address Lock cost?',
          paragraphs: ['We offer order-based pricing to keep it affordable for stores of all sizes:'],
          bullets: [
            { label: 'Free:', text: 'Up to 30 orders per month' },
            {
              label: 'Basic ($4.99/month):',
              text: 'Up to 100 orders per month, or $49.90/year and save 17%',
            },
            {
              label: 'Growth ($24.99/month):',
              text: 'Up to 500 orders per month, or $249.90/year and save 17%',
            },
            { label: 'Enterprise ($99/month):', text: 'Unlimited orders, or $990/year and save 17%' },
          ],
        },
        {
          question: 'When will Default Address Lock be available?',
          paragraphs: [
            "We're actively developing Default Address Lock and expect to launch soon. Contact us at {email} if you'd like to be notified when it's available or to join our beta testing program.",
          ],
        },
      ],
    },
    {
      title: 'Pricing & Billing',
      items: [
        {
          question: 'How much do your apps cost?',
          paragraphs: [
            "Pricing varies by app. You can view pricing details on each app's listing page in the Shopify App Store. Most of our apps offer a free trial period so you can test them before committing.",
          ],
        },
        {
          question: 'How am I billed?',
          paragraphs: [
            "All billing is handled through Shopify. App charges appear on your regular Shopify invoice and follow Shopify's billing cycle. You can cancel at any time through your Shopify admin.",
          ],
        },
        {
          question: 'Is there a free trial?',
          paragraphs: [
            'Many of our apps offer a free trial period. Check the specific app listing in the Shopify App Store for trial availability and duration.',
          ],
        },
        {
          question: 'Can I cancel anytime?',
          paragraphs: [
            "Yes, you can cancel any of our apps at any time through your Shopify admin. Simply uninstall the app and you won't be charged for the next billing cycle.",
          ],
        },
      ],
    },
    {
      title: 'Privacy & Security',
      items: [
        {
          question: 'What data do you collect?',
          paragraphs: [
            'We only collect the minimum data necessary to provide our app services. This typically includes store information and the specific data needed for the app to function (e.g., order data for Bulk Delete Orders). For complete details, please read our {privacyPolicy}.',
          ],
        },
        {
          question: 'Do you sell my data?',
          paragraphs: [
            "No, never. We do not sell, rent, or trade your data to third parties. Your store data is used solely to provide the app services you've installed.",
          ],
        },
        {
          question: 'How is my data protected?',
          paragraphs: ['We use industry-standard security measures including:'],
          bullets: [
            'Encryption in transit (TLS 1.2+) and at rest (AES-256)',
            'Secure authentication via OAuth 2.0',
            'Regular security audits',
            'Strict access controls',
          ],
        },
        {
          question: 'What happens to my data if I uninstall an app?',
          paragraphs: [
            'When you uninstall one of our apps, we retain minimal data (store ID and access tokens) for 30 days to facilitate potential reinstallation. After 30 days, all your data is permanently deleted from our systems.',
          ],
        },
        {
          question: 'Are you GDPR compliant?',
          paragraphs: [
            "Yes, we comply with GDPR, CPRA, and other privacy regulations. We subscribe to Shopify's mandatory compliance webhooks and handle data subject requests appropriately. See our {privacyPolicy} for details.",
          ],
        },
      ],
    },
    {
      title: 'Technical Questions',
      items: [
        {
          question: 'Which Shopify plans are supported?',
          paragraphs: [
            "Our apps work with all Shopify plans, including Basic, Shopify, Advanced, and Shopify Plus. Some features may vary based on your plan's API access.",
          ],
        },
        {
          question: 'Do your apps work with Shopify Plus?',
          paragraphs: ['Yes, all our apps are fully compatible with Shopify Plus stores.'],
        },
        {
          question: 'Will your apps slow down my store?',
          paragraphs: [
            "No, our apps are designed to be lightweight and efficient. They operate primarily on the backend and don't add any code to your storefront, so there's no impact on your store's loading speed.",
          ],
        },
        {
          question: 'Do I need technical knowledge to use your apps?',
          paragraphs: [
            "No technical knowledge is required. Our apps are designed to be user-friendly and intuitive. If you can use Shopify's admin, you can use our apps. We also provide support if you need help.",
          ],
        },
        {
          question: 'Can I use multiple Gemify apps together?',
          paragraphs: [
            "Yes, our apps are designed to work independently and won't conflict with each other. You can install and use as many Gemify apps as you need.",
          ],
        },
      ],
    },
  ],

  contactBox: {
    heading: 'Still Have Questions?',
    body: "Can't find the answer you're looking for? We're here to help!",
    cta: 'Contact Support',
  },
};
