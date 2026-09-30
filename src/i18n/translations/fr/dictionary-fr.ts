import type { Dictionary } from '..';
import { appPagesFr } from './app-pages-fr';
import { commonFr } from './common-fr';
import { faqFr } from './faq-fr';
import { homeFr } from './home-fr';
import { privacyPolicyFr } from './privacy-policy-fr';
import { seoFr } from './seo-fr';
import { servicesFr } from './services-fr';

/** Every French string on the site; loaded as its own chunk on demand. */
export const dictionaryFr: Dictionary = {
  common: commonFr,
  home: homeFr,
  services: servicesFr,
  faq: faqFr,
  privacyPolicy: privacyPolicyFr,
  appPages: appPagesFr,
  seo: seoFr,
};
