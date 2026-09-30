import type { Dictionary } from '..';
import { appPagesDe } from './app-pages-de';
import { commonDe } from './common-de';
import { faqDe } from './faq-de';
import { homeDe } from './home-de';
import { privacyPolicyDe } from './privacy-policy-de';
import { seoDe } from './seo-de';
import { servicesDe } from './services-de';

/** Every German string on the site; loaded as its own chunk on demand. */
export const dictionaryDe: Dictionary = {
  common: commonDe,
  home: homeDe,
  services: servicesDe,
  faq: faqDe,
  privacyPolicy: privacyPolicyDe,
  appPages: appPagesDe,
  seo: seoDe,
};
