/**
 * Shapes shared by the translation dictionaries.
 *
 * Translation files hold plain data only (no JSX), so the same content can be
 * rendered by the page components in either language. Strings may contain
 * `{placeholder}` tokens that components replace with React nodes such as
 * links; see `src/i18n/rich-text.tsx`.
 */

/** A list item, optionally led by a bold label ("Free plan: 50 operations"). */
export type Bullet = string | { label: string; text: string };

/** One question and its answer, used by the FAQ page. */
export interface FaqEntry {
  question: string;
  /** Answer paragraphs, rendered in order. May contain `{email}` / `{privacyPolicy}`. */
  paragraphs: string[];
  /** Optional bulleted list rendered after the paragraphs. */
  bullets?: Bullet[];
}

export interface FaqSectionContent {
  title: string;
  items: FaqEntry[];
}

/**
 * A block of the privacy policy. Modelling the policy as data keeps the long
 * legal text out of the component and lets both languages share one renderer.
 */
export type PolicyBlock =
  | { kind: 'heading'; text: string }
  | { kind: 'subheading'; text: string }
  | { kind: 'paragraph'; text: string; strong?: boolean }
  | { kind: 'list'; items: Bullet[] }
  | { kind: 'highlight'; heading?: string; items?: Bullet[]; paragraphs?: string[] }
  | { kind: 'contact'; brand: string; emailLabel: string; websiteLabel: string }
  | { kind: 'divider' }
  | { kind: 'closing'; text: string };

/** Text with one emphasised fragment, e.g. "our mission is {emphasis}." */
export interface EmphasisedText {
  text: string;
  emphasis: string;
}

/** A problem/pain-point card used on the app detail pages. */
export interface ProblemCard {
  title: string;
  description: string;
}

/** A feature card used on the app detail pages. */
export interface FeatureCardContent {
  title: string;
  description: string;
}

/**
 * FAQ and privacy policy namespaces are declared explicitly (rather than
 * inferred from the English file) so the discriminated `PolicyBlock` union and
 * the `Bullet` union stay narrowable in the renderers.
 */
export interface FaqDictionary {
  title: string;
  intro: string;
  questionPrefix: string;
  sections: FaqSectionContent[];
  contactBox: {
    heading: string;
    body: string;
    cta: string;
  };
}

export interface PrivacyPolicyDictionary {
  title: string;
  lastUpdated: string;
  blocks: PolicyBlock[];
}
