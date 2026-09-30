import type { PrivacyPolicyDictionary } from '../content-types';

/**
 * Privacy policy copy in English, modelled as an ordered list of blocks.
 * `{email}` becomes the support mailto link and `{edpb}` the EDPB link.
 *
 * Written for merchants: what each app holds, why, for how long, who
 * processes it, and where. Implementation detail (cipher names, webhook
 * topics, access scopes, hosting regions) lives in each app's own repo.
 */
export const privacyPolicyEn: PrivacyPolicyDictionary = {
  title: 'Privacy Policy',
  lastUpdated: 'Last Updated: September 29, 2026',

  blocks: [
    {
      kind: 'paragraph',
      text: 'At Gemify ("we," "us," or "our"), we take your privacy seriously. This Privacy Policy explains how our Shopify applications, including Bulk Delete Orders, Default Address Lock, LLMs-full.txt, Japan Multiship, Best Store Locator, and Checkout Probe (collectively, "our Apps"), collect, use, store, and protect your information when you use our services.',
    },
    {
      kind: 'highlight',
      heading: 'Key Points:',
      items: [
        'We only collect the minimum data necessary to provide our services',
        'We do not sell or share your data with third parties for marketing purposes',
        'You have full control over your data and can request deletion at any time',
        'We comply with GDPR, CPRA, and other applicable privacy laws',
      ],
    },

    { kind: 'heading', text: '1. Information We Collect' },
    {
      kind: 'list',
      items: [
        {
          label: 'Store Information:',
          text: 'Store name, domain, owner email, and time zone, plus the access key Shopify issues so our Apps can connect to your store',
        },
        {
          label: 'Contact and Support:',
          text: 'Your name, email address, and the messages you send us',
        },
        {
          label: 'Usage and Logs:',
          text: 'The features you use, the settings you choose, errors, and standard server logs (IP address, browser type, and access times)',
        },
        {
          label: 'Customer Data:',
          text: "Most of our Apps store no personal data about your customers. Section 2 lists exactly what each App holds",
        },
      ],
    },

    { kind: 'heading', text: '2. What Each App Holds' },
    {
      kind: 'paragraph',
      text: 'Each App holds only what it needs to work. The data stays linked to your store, and the App uses it only to provide its features to you.',
    },
    { kind: 'subheading', text: '2.1 Bulk Delete Orders' },
    {
      kind: 'list',
      items: [
        {
          label: 'Data:',
          text: 'The IDs of the orders, draft orders, and customers you select, and the counts of each job. No customer names, addresses, email addresses, or payment details',
        },
        {
          label: 'Why:',
          text: 'To run the delete and anonymize jobs you start, and to show their history',
        },
        { label: 'How long:', text: 'While the App is installed, then deleted within 30 days of uninstalling' },
      ],
    },
    { kind: 'subheading', text: '2.2 Default Address Lock' },
    {
      kind: 'list',
      items: [
        {
          label: 'Data:',
          text: 'Customer IDs and address IDs only. Names, addresses, and phone numbers stay in Shopify',
        },
        {
          label: 'Why:',
          text: "To restore a customer's default address after an order changes it, and to show the activity history",
        },
        { label: 'How long:', text: 'While the App is installed, then deleted within 30 days of uninstalling' },
      ],
    },
    { kind: 'subheading', text: '2.3 LLMs-full.txt' },
    {
      kind: 'list',
      items: [
        {
          label: 'Data:',
          text: 'The store content you choose to include: products, collections, pages, blog articles, and policies. No customer or order data',
        },
        {
          label: 'Why:',
          text: 'To create your llms.txt files and publish them to your theme. The published files are public on your storefront, like the rest of your store content',
        },
        { label: 'How long:', text: 'While the App is installed, then deleted within 30 days of uninstalling' },
      ],
    },
    { kind: 'subheading', text: '2.4 Japan Multiship' },
    {
      kind: 'list',
      items: [
        {
          label: 'Data:',
          text: 'For gift orders, the name, address, and phone number of each recipient the buyer enters on the cart page, the delivery date and time, and the tracking number. A recipient may have no relationship with the store',
        },
        {
          label: 'Why:',
          text: 'To split the order into one shipment per recipient, create the Yamato B2 Cloud shipping file, and add tracking numbers so the buyer is notified. The App uses recipient data for no other purpose',
        },
        {
          label: 'Protection:',
          text: "Recipient data is encrypted and stored only in Japan. The App records which of the merchant's staff viewed recipient data and when, to detect misuse. That record holds no recipient details and is deleted after one year",
        },
        {
          label: 'How long:',
          text: 'Recipient details are deleted automatically 90 days after the order ships or is cancelled. The merchant can choose a shorter period. Nothing is kept longer than 180 days',
        },
        {
          label: "Japan's APPI:",
          text: "The merchant remains responsible for recipient data under Japan's Act on the Protection of Personal Information. Japan Multiship handles it only on the merchant's behalf",
        },
      ],
    },
    { kind: 'subheading', text: '2.5 Best Store Locator' },
    {
      kind: 'list',
      items: [
        {
          label: 'Data:',
          text: 'The store locations you enter or import, such as names, addresses, contact details, and opening hours. This is business information that you publish on your storefront on purpose',
        },
        {
          label: 'Storefront visitors:',
          text: 'Searches and the "Use my location" position are used only to answer that search and are not stored. The map adds no cookies, analytics, or advertising trackers',
        },
        {
          label: 'Favorite store (optional):',
          text: "Off by default. When you turn it on, a signed-in customer's chosen store is saved on their own Shopify customer profile, not on our servers",
        },
        { label: 'How long:', text: 'Deleted about 48 hours after you uninstall the App' },
      ],
    },
    { kind: 'subheading', text: '2.6 Checkout Probe' },
    {
      kind: 'list',
      items: [
        {
          label: 'Data:',
          text: 'Your test settings (the test product and test shipping address) and your last 10 test reports',
        },
        {
          label: 'Why:',
          text: 'To test your checkout the way an AI shopping agent would and show the results. A test never places an order, never charges anything, and never changes your store settings',
        },
        {
          label: 'No customer data:',
          text: 'Every test uses a fictional test buyer, not a real person. The App only reads your products and shipping settings',
        },
        { label: 'How long:', text: 'Only the last 10 reports are kept. Everything is deleted when you uninstall the App' },
      ],
    },

    { kind: 'heading', text: '3. How We Use Your Information' },
    {
      kind: 'list',
      items: [
        'To provide the App features you use and connect to your store securely',
        'To answer your support requests',
        'To send important notices about our Apps, such as security updates and service changes',
        "To tell you about new features, only if you've opted in",
        'To fix problems and improve our Apps',
        'To prevent fraud and abuse, meet legal obligations, and answer data requests',
      ],
    },
    { kind: 'paragraph', text: 'We do not use your information for:', strong: true },
    {
      kind: 'list',
      items: [
        'Marketing or advertising, unless you explicitly opt in',
        'Selling or sharing it with third parties for their marketing',
        'Automated decisions that have legal or similar significant effects on merchants or customers',
      ],
    },

    { kind: 'heading', text: '4. How Long We Keep Data' },
    {
      kind: 'list',
      items: [
        { label: 'While an App is installed:', text: 'We keep the data the App needs to work' },
        {
          label: 'After uninstalling:',
          text: 'Your data is deleted within 30 days, and sooner for some Apps (see Section 2). We may keep anonymous, aggregate usage statistics',
        },
        { label: 'Support emails:', text: '2 years, to help with ongoing issues' },
        { label: 'Server logs:', text: '90 days, for security and troubleshooting' },
        { label: 'Legal records:', text: 'As long as the law requires, for example for tax' },
      ],
    },

    { kind: 'heading', text: '5. Where We Store Data and How We Protect It' },
    {
      kind: 'paragraph',
      text: 'Your data is stored with cloud hosting providers in the United States, except Japan Multiship data, which is stored only in Japan.',
    },
    {
      kind: 'paragraph',
      text: 'If you are in the European Economic Area (EEA), the United Kingdom, or another region with data transfer rules, your data may be processed outside your country. We protect these transfers with Standard Contractual Clauses and additional security measures.',
    },
    {
      kind: 'list',
      items: [
        { label: 'Encryption:', text: 'Data is encrypted in transit and at rest' },
        { label: 'Access controls:', text: 'Only authorized personnel can access your data' },
        { label: 'Secure sign-in:', text: 'Our Apps connect to your store through Shopify\'s secure sign-in' },
        { label: 'Security audits and monitoring:', text: 'We run regular security reviews and watch our systems for threats' },
        { label: 'Secure development:', text: 'We follow secure coding practices and review our code' },
      ],
    },
    {
      kind: 'paragraph',
      text: 'No method of transmission or storage is 100% secure. If you have concerns about the security of your data, please contact us at {email}.',
    },

    { kind: 'heading', text: '6. Service Providers and Sharing' },
    {
      kind: 'paragraph',
      text: 'We do not sell, rent, or trade your personal information. We share it only in these cases:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Service providers:',
          text: 'Shopify (the platform our Apps run on), cloud hosting providers such as Fly.io and Amazon Web Services, and error tracking and support tools. For Best Store Locator, the OpenStreetMap Foundation receives only store addresses to place them on the map, and OpenFreeMap serves the map images to visitors. These providers must protect the data and use it only for the purposes we specify',
        },
        {
          label: 'Legal requirements:',
          text: 'When the law requires it (for example a court order), or to protect our rights, our users, or the public, or to address fraud and security issues',
        },
        {
          label: 'Business transfers:',
          text: 'If Gemify is part of a merger, acquisition, or sale of assets, your information may be transferred. We will notify you by email or on our website before a different privacy policy applies',
        },
      ],
    },

    { kind: 'heading', text: '7. Your Rights' },
    {
      kind: 'paragraph',
      text: 'Depending on where you live, you can ask us to:',
    },
    {
      kind: 'list',
      items: [
        'Give you a copy of your personal data, in a portable format',
        'Correct inaccurate or incomplete data',
        'Delete your data. Uninstalling an App deletes its data within 30 days, or email {email} for immediate deletion',
        'Restrict or object to some processing',
        'Withdraw consent you gave earlier',
        'Stop marketing emails, using the "unsubscribe" link in any of them',
      ],
    },
    {
      kind: 'paragraph',
      text: 'To use any of these rights, email {email}. We respond within 30 days.',
    },

    { kind: 'heading', text: '8. Privacy Laws' },
    { kind: 'subheading', text: '8.1 GDPR (EEA and UK)' },
    {
      kind: 'paragraph',
      text: 'We process personal data under the GDPR and UK GDPR on these legal bases:',
    },
    {
      kind: 'list',
      items: [
        { label: 'Contract:', text: 'To provide our Apps to you' },
        { label: 'Legitimate interests:', text: 'To improve our services, keep them secure, and provide support' },
        { label: 'Consent:', text: 'Where you have explicitly agreed' },
        { label: 'Legal obligations:', text: 'To comply with the law' },
      ],
    },
    { kind: 'subheading', text: '8.2 CPRA (California)' },
    {
      kind: 'paragraph',
      text: 'California residents have the right to know what personal information we collect and how we use it, to delete or correct it, to limit the use of sensitive personal information, to opt out of its sale or sharing (we do not sell or share it), and not to be treated differently for using these rights.',
    },
    { kind: 'subheading', text: '8.3 Other Laws' },
    {
      kind: 'paragraph',
      text: "We also comply with Japan's Act on the Protection of Personal Information (APPI), the Colorado Privacy Act, the Virginia Consumer Data Protection Act, and other applicable laws.",
    },
    { kind: 'subheading', text: '8.4 Customer Data Requests Through Shopify' },
    {
      kind: 'paragraph',
      text: "When one of your customers asks for their data or its deletion, Shopify sends us the request. We provide or delete any personal data we hold about that customer within 30 days. Apps that hold no customer data confirm that there is nothing to provide. When you uninstall an App or close your store, Shopify asks us to delete your store's data, and we do so as described in Section 4.",
    },

    { kind: 'heading', text: "9. Children's Privacy" },
    {
      kind: 'paragraph',
      text: 'Our Apps are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us and we will delete it.',
    },

    { kind: 'heading', text: '10. Third-Party Links' },
    {
      kind: 'paragraph',
      text: 'Our Apps or website may link to third-party websites or services. We are not responsible for their privacy practices, so please review their privacy policies.',
    },

    { kind: 'heading', text: '11. Changes to This Privacy Policy' },
    {
      kind: 'paragraph',
      text: 'We may update this Privacy Policy to reflect changes in our practices or the law. When we make significant changes, we will update the "Last Updated" date, email you if we have your email address, and show a notice in our Apps. If you keep using our Apps after the changes take effect, you accept the revised policy.',
    },

    { kind: 'heading', text: '12. Contact Us' },
    {
      kind: 'paragraph',
      text: 'For questions or requests about this Privacy Policy or your data, contact us. For privacy requests, please use the subject line "Privacy Inquiry".',
    },
    { kind: 'contact', brand: 'Gemify', emailLabel: 'Email:', websiteLabel: 'Website:' },
    {
      kind: 'paragraph',
      text: 'If you believe we have not handled your personal data correctly, you can complain to your local data protection authority. For EEA residents, a list of authorities is available at {edpb}.',
    },

    { kind: 'divider' },
    {
      kind: 'closing',
      text: 'This Privacy Policy was last updated on September 29, 2026. By using our Apps, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.',
    },
  ],
};
