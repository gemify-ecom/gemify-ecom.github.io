import type { FaqDictionary } from '../content-types';

/** FAQ page copy in English. `{email}` and `{privacyPolicy}` become links. */
export const faqEn: FaqDictionary = {
  title: 'Frequently Asked Questions',
  intro:
    "Find answers to common questions about Gemify and our apps. Can't find what you're looking for? Contact us at {email}",
  questionPrefix: 'Q:',

  sections: [
    {
      id: 'general',
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
            "App charges are billed through Shopify. If you're not satisfied with any of our apps, contact us at {email} and we'll work with you to resolve the issue or issue a refund where appropriate.",
          ],
        },
      ],
    },
    {
      id: 'bulk-delete-orders',
      title: 'Bulk Delete Orders App',
      items: [
        {
          question: 'What does the Bulk Delete Orders app do?',
          paragraphs: [
            'Bulk Delete Orders lets you delete many orders, draft orders, or customers from your Shopify store at once. You can use powerful filters to target specific orders by status, date, tags, or other criteria. The app automatically cancels orders before deletion, saving you time and manual work.',
          ],
        },
        {
          question: 'Is it safe to delete orders?',
          paragraphs: [
            'Yes, but please be careful. The app automatically cancels orders before deleting them, and a confirmation step lists every order and warns you before anything is deleted. However, once orders are deleted, they cannot be recovered. We recommend:',
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
            'Order status (open, archived, canceled)',
            'Payment status (paid, pending, refunded, etc.)',
            'Fulfillment status (unfulfilled, fulfilled, partially fulfilled)',
            'Date range (created date, updated date)',
            'Order tags',
            'And more',
          ],
        },
        {
          question: 'How long does it take to delete orders?',
          paragraphs: [
            "Deletion speed depends on the number of orders and on how fast Shopify lets apps delete them. The app processes deletions in the background, and you can track progress in the Job History section. For large batches, it may take several minutes to hours.",
          ],
        },
        {
          question: 'Can I track deletion jobs?',
          paragraphs: [
            'Yes! The app includes a Job History feature where you can follow every deletion job in real time, see its status and progress, and export the history as CSV for your records.',
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
            'Deleting an order removes the order record but does not delete the customer account. Customer profiles stay in your store unless you clear them, either with the customer tools in Bulk Delete Orders or through Shopify admin.',
          ],
        },
        {
          question: 'Can I bulk delete or anonymize customers?',
          paragraphs: [
            'Yes. Bulk Delete Orders clears customers two ways: anonymize them to mask their personal data, or permanently delete them together with their orders. Bulk customer deletion is included in the free plan. Anonymization requires the Complete plan.',
          ],
        },
        {
          question: 'Can I delete draft orders?',
          paragraphs: [
            'Yes! Bulk Delete Orders supports both regular orders and draft orders. You can bulk delete either type using powerful filters.',
          ],
        },
        {
          question: 'How much does Bulk Delete Orders cost?',
          paragraphs: ['We offer simple pricing:'],
          bullets: [
            {
              label: 'Free plan:',
              text: 'Up to 50 order/draft order deletions, bulk customer deletion, live job tracking, and CSV export',
            },
            {
              label: 'Complete plan ($36/year):',
              text: 'Unlimited order/draft order deletions, plus bulk customer deletion and anonymization (masks personal data)',
            },
          ],
        },
      ],
    },
    {
      id: 'default-address-lock',
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
            'Our smart detection system distinguishes between order-triggered address changes and intentional manual updates. If a customer updates their address in their account, or your staff changes it in Shopify admin, that change is preserved. Only automatic overwrites caused by placing orders are reversed.',
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
          question: 'Can I see which addresses the app restored?',
          paragraphs: [
            'Yes. The activity dashboard lists every protection event, so you can see when the app restored a default address and review the full history.',
          ],
        },
        {
          question: 'How much does Default Address Lock cost?',
          paragraphs: ['We offer order-based pricing to keep it affordable for stores of all sizes:'],
          bullets: [
            { label: 'Free:', text: 'Up to 30 orders per month' },
            { label: 'Basic ($4.99/month):', text: 'Up to 100 orders per month' },
            { label: 'Growth ($24.99/month):', text: 'Up to 500 orders per month' },
            { label: 'Enterprise ($99/month):', text: 'Unlimited orders' },
          ],
        },
        {
          question: 'Is Default Address Lock available now?',
          paragraphs: [
            'Yes! Default Address Lock is available on the Shopify App Store. You can install it directly from the app listing. If you have any questions before getting started, contact us at {email}.',
          ],
        },
      ],
    },
    {
      id: 'llms-full-txt',
      title: 'LLMs-full.txt App',
      items: [
        {
          question: 'What does the LLMs-full.txt app do?',
          paragraphs: [
            'LLMs-full.txt generates agents.md, llms.txt, and llms-full.txt files for your Shopify store, so AI assistants like ChatGPT, Claude, and Gemini can understand your products, collections, and pages. The files are published to your theme and served by Shopify at /agents.md, /llms.txt, and /llms-full.txt on your own domain, with no extra hosting needed.',
          ],
        },
        {
          question: 'What are agents.md, llms.txt, and llms-full.txt?',
          paragraphs: [
            'They are plain markdown files based on the llms.txt standard. Just like robots.txt guides search engines, these files guide AI assistants. llms.txt is a concise index of your store, llms-full.txt contains the full content of everything you choose to include, and agents.md publishes the same store description under the filename that AI agents look for. AI models read these files far more reliably than rendered storefront HTML.',
          ],
        },
        {
          question: 'What content can I include?',
          paragraphs: [
            "You choose exactly what goes into the files, by whole content type or item by item, and you can leave out anything you don't want summarized for AI assistants. You can include:",
          ],
          bullets: ['Products', 'Collections', 'Pages', 'Blog articles', 'Store policies'],
        },
        {
          question: 'Does LLMs-full.txt access customer data?',
          paragraphs: [
            'No. LLMs-full.txt only reads store content (products, collections, pages, blog articles, and policies). It never accesses orders or customer information.',
          ],
        },
        {
          question: 'Who can see the generated files?',
          paragraphs: [
            'The files are publicly accessible on your store domain, just like your storefront pages. They contain only the store content you chose to include, all of which is already public on your storefront.',
          ],
        },
        {
          question: 'Will the files slow down my store?',
          paragraphs: [
            'No. The generated files are static text files served by Shopify alongside your theme. They add no scripts to your storefront and have no impact on loading speed.',
          ],
        },
        {
          question: 'What happens when my catalog changes?',
          paragraphs: [
            'Turn on scheduled regeneration and the app rebuilds your files every hour, day, or week in your own time zone. You can also regenerate manually with one click. The published files are updated in place, and every run is recorded in the generation history.',
          ],
        },
        {
          question: 'How much does LLMs-full.txt cost?',
          paragraphs: [
            'LLMs-full.txt has a free plan covering up to 50 items per content type, with every feature included: preview before publishing, manual and scheduled generation, the template editor, and generation history. The Complete plan is $9.99/month for unlimited products, collections, pages, and blog articles.',
          ],
        },
      ],
    },
    {
      id: 'pricing',
      title: 'Pricing & Billing',
      items: [
        {
          question: 'How much do your apps cost?',
          paragraphs: [
            "Pricing varies by app. Each app's plans are listed in its section of this FAQ and on its Shopify App Store listing. All of our apps offer a free plan so you can try them before upgrading.",
          ],
        },
        {
          question: 'How am I billed?',
          paragraphs: [
            "All billing is handled through Shopify. App charges appear on your regular Shopify invoice and follow Shopify's billing cycle. You can cancel at any time through your Shopify admin.",
          ],
        },
        {
          question: 'Is there a free plan?',
          paragraphs: ['Yes, all of our apps offer a free plan:'],
          bullets: [
            { label: 'Bulk Delete Orders:', text: '50 free bulk delete operations' },
            { label: 'Default Address Lock:', text: 'Free for up to 30 orders per month' },
            { label: 'LLMs-full.txt:', text: 'Free for up to 50 items per content type' },
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
      id: 'privacy',
      title: 'Privacy & Security',
      items: [
        {
          question: 'What data do you collect?',
          paragraphs: [
            'We only collect the minimum data necessary to provide our app services. This typically includes store information and the specific data needed for the app to function (e.g., order data for Bulk Delete Orders, or product and page content for LLMs-full.txt). For complete details, please read our {privacyPolicy}.',
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
            'Encryption in transit and at rest',
            "Secure sign-in through Shopify",
            'Regular security audits',
            'Strict access controls',
          ],
        },
        {
          question: 'What happens to my data if I uninstall an app?',
          paragraphs: [
            'When you uninstall one of our apps, your data is permanently deleted from our systems within 30 days, and sooner for some apps. See our {privacyPolicy} for each app.',
          ],
        },
        {
          question: 'Are you GDPR compliant?',
          paragraphs: [
            "Yes, we comply with GDPR, CPRA, and other privacy regulations. We answer the customer data and deletion requests that Shopify sends us. See our {privacyPolicy} for details.",
          ],
        },
      ],
    },
    {
      id: 'technical',
      title: 'Technical Questions',
      items: [
        {
          question: 'Which Shopify plans are supported?',
          paragraphs: [
            "Our apps work with all Shopify plans, including Basic, Shopify, Advanced, and Shopify Plus.",
          ],
        },
        {
          question: 'Do your apps work with Shopify Plus?',
          paragraphs: ['Yes, all our apps are fully compatible with Shopify Plus stores.'],
        },
        {
          question: 'Will your apps slow down my store?',
          paragraphs: [
            "No, our apps are designed to be lightweight and efficient. They operate primarily on the backend and don't add any scripts to your storefront pages, so there's no impact on your store's loading speed. The files published by LLMs-full.txt are plain static text and don't affect page load either.",
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
