import type { HelpSection } from '../components/help-page-layout';

/**
 * Merchant help for Checkout Probe, the App Store listing's FAQ and
 * documentation link. English only on purpose: the app's admin UI ships in
 * English, so the help quotes the exact labels merchants see in the app
 * (`app/routes/app._index.tsx` and `app/components/` in the
 * agent-checkout-audit repo). Inline `code` is written with backticks.
 */

export const CHECKOUT_PROBE_HELP_INTRO =
  'Checkout Probe tests your checkout the way an AI shopping agent would and shows what would stop an agent from buying. The test never completes a checkout: no order is placed and nothing is charged.';

export const CHECKOUT_PROBE_HELP: HelpSection[] = [
  {
    id: 'quick-start',
    heading: 'Quick start',
    blocks: [
      {
        kind: 'list',
        ordered: true,
        items: [
          'Open Checkout Probe from Apps in your Shopify admin.',
          'If your store has no usable address and no test address is saved, the app shows "Add a test address to run the test". Enter an address under "Test shipping address" in "Test settings" and click "Save settings".',
          'Click "Run checkout test". The report lists what would stop an agent, with a fix for each finding.',
          'After you change a setting in your store, click "Run test again" to check the result.',
        ],
      },
    ],
  },
  {
    id: 'how-the-test-works',
    heading: 'How the test works',
    blocks: [
      {
        kind: 'paragraph',
        text: "When you click \"Run checkout test\", the app opens a checkout on your own store the way an AI shopping agent would. It fills in a test buyer and a shipping address, reads what the checkout returns, and then cancels the checkout.",
      },
      {
        kind: 'list',
        items: [
          'Test buyer: the reserved address `agent-checkout-test@example.com`, with the names "Agent" and "Checkout Test". It is not a real person.',
          'Shipping address: your store\'s own address, or the test address you save in "Test settings".',
          'The test never completes a checkout, never places an order, never charges anything, and never changes your store settings.',
        ],
      },
    ],
  },
  {
    id: 'reading-the-report',
    heading: 'Reading the report',
    blocks: [
      {
        kind: 'paragraph',
        text: 'The "What would stop an agent" section lists each problem the test found. Each finding is marked "Will stop agents" or "May stop agents". The test looks for:',
      },
      {
        kind: 'list',
        items: [
          'Checkout rules that ask the buyer for input, for example an age check.',
          'Shop Pay not offered at checkout.',
          'No delivery option offered at checkout.',
          'Shipping rates that are set up in your store but not offered at checkout.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Each finding has a fix ("How to fix") and a link to the matching settings page in your Shopify admin.',
      },
    ],
  },
  {
    id: 'not-checked',
    heading: 'What the test cannot see',
    blocks: [
      {
        kind: 'paragraph',
        text: 'The "Not checked by this test" section of the report lists what the test cannot see, so you know what to review yourself:',
      },
      {
        kind: 'list',
        items: [
          'Validations that run only when the order is placed.',
          'Checkout UI extensions that ask the buyer for input.',
        ],
      },
    ],
  },
  {
    id: 'test-settings',
    heading: 'Test settings',
    blocks: [
      {
        kind: 'list',
        items: [
          'Test product: click "Choose product" to pick the product the test checks out with. By default the test uses the first product that can be bought.',
          'Test shipping address: leave it empty to use your store address, or enter the address the test should ship to. Use your business address or another address you choose, not a customer\'s address.',
          'Click "Save settings" to keep your changes, or "Use defaults" to go back to the default product and your store address.',
        ],
      },
    ],
  },
  {
    id: 'data-and-privacy',
    heading: 'Data and privacy',
    blocks: [
      {
        kind: 'list',
        items: [
          'Read-only access: the app only reads your products and shipping settings.',
          'The app keeps your test settings and the last 10 test reports for your store. It holds no customer data: the test buyer is fictional.',
          'The app contains no third-party analytics or tracking.',
          'Uninstalling the app deletes your settings and test reports.',
          'Full details: see the {privacyPolicy}.',
        ],
      },
    ],
  },
  {
    id: 'pricing',
    heading: 'Pricing and languages',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Checkout Probe is free. The app is available in English.',
      },
    ],
  },
  {
    id: 'support',
    heading: 'Support',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Email {email}. Include your store URL and, if a test did not run, the message the app showed.',
      },
    ],
  },
];
