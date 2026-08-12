import type { PrivacyPolicyDictionary } from '../content-types';

/**
 * Privacy policy copy in English, modelled as an ordered list of blocks.
 * `{email}` becomes the support mailto link and `{edpb}` the EDPB link.
 */
export const privacyPolicyEn: PrivacyPolicyDictionary = {
  title: 'Privacy Policy',
  lastUpdated: 'Last Updated: August 12, 2026',

  blocks: [
    {
      kind: 'paragraph',
      text: 'At Gemify ("we," "us," or "our"), we take your privacy seriously. This Privacy Policy explains how our Shopify applications, including Bulk Delete Orders, Default Address Lock, and LLMs-full.txt (collectively, "our Apps"), collect, use, store, and protect your information when you use our services.',
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
    { kind: 'subheading', text: '1.1 Information Collected Through Shopify APIs' },
    {
      kind: 'paragraph',
      text: "When you install and use our Apps, we access the following information through Shopify's APIs:",
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Store Information:',
          text: 'Store name, store domain, store owner email, and store timezone',
        },
        {
          label: 'Order Data:',
          text: 'Order details including order numbers, dates, statuses, financial status, and fulfillment status (for Bulk Delete Orders app)',
        },
        {
          label: 'Customer Data:',
          text: 'Customer IDs and address IDs only (for Default Address Lock app) - we never store personal information such as names, addresses, or contact details',
        },
        {
          label: 'Store Content:',
          text: 'Products, collections, pages, blog articles, and store policies read through the Shopify GraphQL API, plus theme access to publish the generated files (for LLMs-full.txt app)',
        },
        {
          label: 'API Access Tokens:',
          text: 'Tokens necessary to authenticate and communicate with your Shopify store',
        },
      ],
    },
    { kind: 'subheading', text: '1.2 Information Collected Directly From Merchants' },
    { kind: 'paragraph', text: 'We may collect the following information directly from you:' },
    {
      kind: 'list',
      items: [
        {
          label: 'Contact Information:',
          text: 'Email address, name (if provided through support requests or forms)',
        },
        {
          label: 'Usage Data:',
          text: 'Information about how you interact with our Apps, including features used and settings configured',
        },
        {
          label: 'Support Communications:',
          text: 'Messages, feedback, and other communications you send to us',
        },
      ],
    },
    { kind: 'subheading', text: "1.3 Information Collected From Merchants' Customers" },
    {
      kind: 'paragraph',
      text: 'Our Apps are designed to minimize the collection of end-customer data:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Bulk Delete Orders:',
          text: "We do not directly access or store customer personal information (such as names, addresses, or payment details). Order data accessed through Shopify's APIs may contain references to customers, but we do not separately store or process customer personal data.",
        },
        {
          label: 'Default Address Lock:',
          text: 'Privacy-first design - we only store customer IDs and address IDs to enable the address locking functionality. We never store personal information (names, addresses, phone numbers, etc.). All personal data remains securely within Shopify.',
        },
        {
          label: 'LLMs-full.txt:',
          text: 'We do not access or store any customer data. The app only reads store content (products, collections, pages, blog articles, and policies) that you choose to include. Note that the generated llms.txt files are published to your storefront and are publicly accessible, like the rest of your storefront content.',
        },
        'We do not use cookies or tracking technologies on customer-facing storefronts',
      ],
    },
    { kind: 'subheading', text: '1.4 Automatically Collected Information' },
    {
      kind: 'paragraph',
      text: 'We automatically collect certain technical information when you use our Apps:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Log Data:',
          text: 'IP addresses, browser type, operating system, access times, and error logs',
        },
        { label: 'Device Information:', text: 'Device type and unique identifiers' },
        {
          label: 'App Performance Data:',
          text: 'Information about app performance, errors, and crashes',
        },
      ],
    },

    { kind: 'heading', text: '2. How We Use Your Information' },
    {
      kind: 'paragraph',
      text: 'We use the information we collect for the following purposes:',
    },
    { kind: 'subheading', text: '2.1 To Provide and Maintain Our Services' },
    {
      kind: 'list',
      items: [
        'To operate our Apps and provide the features you request',
        'To process order deletions and other operations (for Bulk Delete Orders app)',
        'To manage customer address locking preferences (for Default Address Lock app)',
        'To generate and publish llms.txt files to your theme (for LLMs-full.txt app)',
        'To authenticate your store and maintain secure access',
        'To monitor and improve app performance and reliability',
      ],
    },
    { kind: 'subheading', text: '2.2 To Communicate With You' },
    {
      kind: 'list',
      items: [
        'To respond to your support requests and inquiries',
        'To send important notifications about our Apps (e.g., security updates, service changes)',
        "To provide updates about new features or improvements (only if you've opted in)",
      ],
    },
    { kind: 'subheading', text: '2.3 To Improve Our Services' },
    {
      kind: 'list',
      items: [
        'To analyze usage patterns and identify areas for improvement',
        'To troubleshoot issues and fix bugs',
        'To develop new features based on user needs',
      ],
    },
    { kind: 'subheading', text: '2.4 To Ensure Security and Compliance' },
    {
      kind: 'list',
      items: [
        'To detect and prevent fraud, abuse, and security incidents',
        'To comply with legal obligations and enforce our Terms of Service',
        'To respond to data subject requests as required by privacy laws',
      ],
    },
    { kind: 'paragraph', text: 'We do not use your information for:', strong: true },
    {
      kind: 'list',
      items: [
        'Marketing or advertising campaigns (unless you explicitly opt in)',
        'Selling or sharing your data with third parties for their marketing purposes',
        'Automated decision-making that has legal or significant effects on merchants or customers',
      ],
    },

    { kind: 'heading', text: '3. Data Retention' },
    {
      kind: 'paragraph',
      text: 'We retain your data only for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Active Stores:',
          text: 'While you have our Apps installed and actively use our services, we retain the data necessary to operate the Apps',
        },
        {
          label: 'After App Uninstallation:',
          text: 'When you uninstall our Apps, we retain minimal data (store ID and access tokens) for 30 days to facilitate potential reinstallation. After 30 days, all data except aggregate usage statistics is permanently deleted',
        },
        {
          label: 'Support Communications:',
          text: 'Support emails and communications are retained for 2 years to help resolve ongoing issues and improve our services',
        },
        {
          label: 'Log Data:',
          text: 'Server logs and error logs are retained for 90 days for security and debugging purposes',
        },
        {
          label: 'Compliance Data:',
          text: 'We retain data as required by law or regulation (e.g., financial records for tax purposes)',
        },
      ],
    },

    { kind: 'heading', text: '4. Data Storage and Security' },
    { kind: 'subheading', text: '4.1 Where We Store Your Data' },
    {
      kind: 'paragraph',
      text: 'Gemify is established in Vietnam. Your data is stored on secure servers provided by trusted cloud infrastructure providers located in the United States.',
    },
    {
      kind: 'paragraph',
      text: 'If you are located in the European Economic Area (EEA), United Kingdom, or other jurisdictions with data transfer restrictions, please note that your data may be transferred to and processed in countries outside your jurisdiction. We ensure such transfers comply with applicable laws through appropriate safeguards, including:',
    },
    {
      kind: 'list',
      items: [
        'Standard Contractual Clauses approved by the European Commission',
        'Adherence to the EU-U.S. Data Privacy Framework (if applicable)',
        'Implementation of additional security measures and contractual protections',
      ],
    },
    { kind: 'subheading', text: '4.2 How We Protect Your Data' },
    {
      kind: 'paragraph',
      text: 'We implement industry-standard security measures to protect your information:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Encryption:',
          text: 'All data is encrypted in transit (TLS 1.2+) and at rest (AES-256)',
        },
        {
          label: 'Access Controls:',
          text: 'Strict access controls ensure only authorized personnel can access your data',
        },
        {
          label: 'Authentication:',
          text: 'We use secure authentication methods including OAuth 2.0 for Shopify API access',
        },
        {
          label: 'Regular Security Audits:',
          text: 'We conduct regular security assessments and vulnerability scans',
        },
        {
          label: 'Monitoring:',
          text: 'We continuously monitor our systems for suspicious activity and security threats',
        },
        {
          label: 'Secure Development:',
          text: 'We follow secure coding practices and conduct code reviews',
        },
      ],
    },
    {
      kind: 'paragraph',
      text: 'While we take reasonable measures to protect your data, no method of transmission or storage is 100% secure. If you have concerns about the security of your data, please contact us at {email}.',
    },

    { kind: 'heading', text: '5. Data Sharing and Disclosure' },
    {
      kind: 'paragraph',
      text: 'We do not sell, rent, or trade your personal information. We may share your information only in the following limited circumstances:',
    },
    { kind: 'subheading', text: '5.1 Service Providers' },
    {
      kind: 'paragraph',
      text: 'We may share data with trusted third-party service providers who help us operate our Apps, such as:',
    },
    {
      kind: 'list',
      items: [
        'Cloud hosting providers (e.g., AWS, Google Cloud)',
        'Error tracking and analytics services',
        'Customer support tools',
      ],
    },
    {
      kind: 'paragraph',
      text: 'These service providers are contractually obligated to protect your data and use it only for the purposes we specify.',
    },
    { kind: 'subheading', text: '5.2 Legal Requirements' },
    {
      kind: 'paragraph',
      text: 'We may disclose your information if required to do so by law or in response to valid requests by public authorities, including:',
    },
    {
      kind: 'list',
      items: [
        'To comply with legal obligations (e.g., court orders, subpoenas)',
        'To protect our rights, property, or safety, or that of our users or the public',
        'To detect, prevent, or address fraud, security, or technical issues',
      ],
    },
    { kind: 'subheading', text: '5.3 Business Transfers' },
    {
      kind: 'paragraph',
      text: 'If Gemify is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our website before your information becomes subject to a different privacy policy.',
    },

    { kind: 'heading', text: '6. Your Rights and Choices' },
    {
      kind: 'paragraph',
      text: 'Depending on your location, you may have the following rights regarding your personal data:',
    },
    { kind: 'subheading', text: '6.1 Access and Portability' },
    {
      kind: 'paragraph',
      text: 'You have the right to request a copy of the personal data we hold about you. You can also request that we provide your data in a portable format.',
    },
    { kind: 'subheading', text: '6.2 Correction' },
    {
      kind: 'paragraph',
      text: 'You have the right to request that we correct any inaccurate or incomplete personal data.',
    },
    { kind: 'subheading', text: '6.3 Deletion' },
    {
      kind: 'paragraph',
      text: 'You have the right to request deletion of your personal data. You can delete your data by:',
    },
    {
      kind: 'list',
      items: [
        'Uninstalling our Apps from your Shopify store (data will be automatically deleted within 30 days)',
        'Contacting us at {email} to request immediate deletion',
      ],
    },
    { kind: 'subheading', text: '6.4 Restriction and Objection' },
    {
      kind: 'paragraph',
      text: 'You have the right to restrict or object to certain processing of your personal data.',
    },
    { kind: 'subheading', text: '6.5 Opt-Out of Marketing' },
    {
      kind: 'paragraph',
      text: 'You can opt out of marketing communications at any time by clicking the "unsubscribe" link in any marketing email or contacting us.',
    },
    { kind: 'subheading', text: '6.6 Withdraw Consent' },
    {
      kind: 'paragraph',
      text: 'Where we rely on your consent to process your data, you have the right to withdraw that consent at any time.',
    },
    { kind: 'subheading', text: '6.7 How to Exercise Your Rights' },
    {
      kind: 'paragraph',
      text: 'To exercise any of these rights, please contact us at {email}. We will respond to your request within 30 days.',
    },

    { kind: 'heading', text: '7. Compliance with Privacy Laws' },
    { kind: 'subheading', text: '7.1 GDPR (European Economic Area)' },
    {
      kind: 'paragraph',
      text: 'If you are in the EEA, we process your data in accordance with the General Data Protection Regulation (GDPR). Our legal basis for processing your data includes:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Contractual Necessity:',
          text: 'To provide our Apps and fulfill our contract with you',
        },
        {
          label: 'Legitimate Interests:',
          text: 'To improve our services, ensure security, and provide support',
        },
        {
          label: 'Consent:',
          text: 'Where you have explicitly consented to specific processing activities',
        },
        { label: 'Legal Obligations:', text: 'To comply with applicable laws' },
      ],
    },
    { kind: 'subheading', text: '7.2 CPRA (California)' },
    {
      kind: 'paragraph',
      text: 'If you are a California resident, you have additional rights under the California Privacy Rights Act (CPRA), including:',
    },
    {
      kind: 'list',
      items: [
        "Right to know what personal information we collect and how it's used",
        'Right to delete your personal information',
        'Right to opt-out of the sale or sharing of your personal information (note: we do not sell or share personal information)',
        'Right to correct inaccurate personal information',
        'Right to limit the use of sensitive personal information',
        'Right to non-discrimination for exercising your privacy rights',
      ],
    },
    { kind: 'subheading', text: '7.3 Other Jurisdictions' },
    {
      kind: 'paragraph',
      text: 'We comply with privacy laws in other jurisdictions where we operate, including the UK GDPR, Colorado Privacy Act, Virginia Consumer Data Protection Act, and other applicable laws.',
    },

    { kind: 'heading', text: '8. Shopify Mandatory Webhooks' },
    {
      kind: 'paragraph',
      text: 'As a Shopify app developer, we subscribe to mandatory compliance webhooks to handle data subject requests:',
    },
    { kind: 'subheading', text: '8.1 Customer Data Request' },
    {
      kind: 'paragraph',
      text: 'When a customer requests their data from a merchant, we will provide any data we have collected about that customer (if any).',
    },
    { kind: 'subheading', text: '8.2 Customer Data Deletion' },
    {
      kind: 'paragraph',
      text: 'When a customer requests deletion of their data, we will permanently delete any personal data we have collected about that customer within 30 days.',
    },
    { kind: 'subheading', text: '8.3 Shop Data Deletion' },
    {
      kind: 'paragraph',
      text: 'When a merchant uninstalls our Apps or closes their Shopify store, we will delete all associated data within 30 days (as outlined in Section 3).',
    },

    { kind: 'heading', text: '9. Marketing and Advertising' },
    {
      kind: 'paragraph',
      text: 'We do not currently run marketing or advertising campaigns using customer data. If we introduce marketing features in the future:',
    },
    {
      kind: 'list',
      items: [
        'We will provide clear opt-in mechanisms and obtain explicit consent',
        'We will respect customer consent preferences and marketing opt-out requests',
        'We will comply with applicable marketing laws, including CAN-SPAM, CASL, and GDPR',
      ],
    },

    { kind: 'heading', text: "10. Children's Privacy" },
    {
      kind: 'paragraph',
      text: 'Our Apps are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately, and we will take steps to delete such information.',
    },

    { kind: 'heading', text: '11. International Data Transfers' },
    {
      kind: 'paragraph',
      text: 'We operate globally and may transfer your data to countries outside your jurisdiction. When we do so, we ensure appropriate safeguards are in place, including:',
    },
    {
      kind: 'list',
      items: [
        'Standard Contractual Clauses (SCCs) approved by relevant authorities',
        'Adequacy decisions by the European Commission or other regulatory bodies',
        'Additional technical and organizational security measures',
      ],
    },

    { kind: 'heading', text: '12. Third-Party Links' },
    {
      kind: 'paragraph',
      text: 'Our Apps or website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.',
    },

    { kind: 'heading', text: '13. Changes to This Privacy Policy' },
    {
      kind: 'paragraph',
      text: 'We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other operational reasons. When we make significant changes, we will:',
    },
    {
      kind: 'list',
      items: [
        'Update the "Last Updated" date at the top of this policy',
        "Notify you via email (if you've provided your email address)",
        'Display a prominent notice within our Apps',
      ],
    },
    {
      kind: 'paragraph',
      text: 'Your continued use of our Apps after the changes take effect constitutes your acceptance of the revised Privacy Policy.',
    },

    { kind: 'heading', text: '14. Data Protection Officer' },
    {
      kind: 'paragraph',
      text: 'If you have questions about how we handle your personal data or wish to exercise your privacy rights, you can contact our Data Protection Officer at:',
    },
    {
      kind: 'list',
      items: [
        { label: 'Email:', text: '{email}' },
        { label: 'Subject Line:', text: '"Privacy Inquiry" or "Data Protection Request"' },
      ],
    },

    { kind: 'heading', text: '15. Contact Us' },
    {
      kind: 'paragraph',
      text: 'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:',
    },
    { kind: 'contact', brand: 'Gemify', emailLabel: 'Email:', websiteLabel: 'Website:' },

    { kind: 'heading', text: '16. Complaints and Regulatory Authorities' },
    {
      kind: 'paragraph',
      text: 'If you believe we have not handled your personal data appropriately, you have the right to lodge a complaint with your local data protection authority. For EEA residents, a list of data protection authorities is available at {edpb}.',
    },

    { kind: 'divider' },
    {
      kind: 'closing',
      text: 'This Privacy Policy was last updated on August 12, 2026. By using our Apps, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.',
    },
  ],
};
