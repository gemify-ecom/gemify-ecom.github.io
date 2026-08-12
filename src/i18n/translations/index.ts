import type { Locale } from '../locales';
import { appPagesEn } from './en/app-pages-en';
import { commonEn } from './en/common-en';
import { faqEn } from './en/faq-en';
import { homeEn } from './en/home-en';
import { privacyPolicyEn } from './en/privacy-policy-en';
import { appPagesJa } from './ja/app-pages-ja';
import { commonJa } from './ja/common-ja';
import { faqJa } from './ja/faq-ja';
import { homeJa } from './ja/home-ja';
import { privacyPolicyJa } from './ja/privacy-policy-ja';
import { appPagesDe } from './de/app-pages-de';
import { commonDe } from './de/common-de';
import { faqDe } from './de/faq-de';
import { homeDe } from './de/home-de';
import { privacyPolicyDe } from './de/privacy-policy-de';
import { appPagesFr } from './fr/app-pages-fr';
import { commonFr } from './fr/common-fr';
import { faqFr } from './fr/faq-fr';
import { homeFr } from './fr/home-fr';
import { privacyPolicyFr } from './fr/privacy-policy-fr';
import { appPagesEs } from './es/app-pages-es';
import { commonEs } from './es/common-es';
import { faqEs } from './es/faq-es';
import { homeEs } from './es/home-es';
import { privacyPolicyEs } from './es/privacy-policy-es';
import type {
  AppPagesDictionary,
  CommonDictionary,
  FaqDictionary,
  HomeDictionary,
  PrivacyPolicyDictionary,
} from './dictionary-types';

/** Every translatable string on the site, grouped by page. */
export interface Dictionary {
  common: CommonDictionary;
  home: HomeDictionary;
  faq: FaqDictionary;
  privacyPolicy: PrivacyPolicyDictionary;
  appPages: AppPagesDictionary;
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    common: commonEn,
    home: homeEn,
    faq: faqEn,
    privacyPolicy: privacyPolicyEn,
    appPages: appPagesEn,
  },
  ja: {
    common: commonJa,
    home: homeJa,
    faq: faqJa,
    privacyPolicy: privacyPolicyJa,
    appPages: appPagesJa,
  },
  de: {
    common: commonDe,
    home: homeDe,
    faq: faqDe,
    privacyPolicy: privacyPolicyDe,
    appPages: appPagesDe,
  },
  fr: {
    common: commonFr,
    home: homeFr,
    faq: faqFr,
    privacyPolicy: privacyPolicyFr,
    appPages: appPagesFr,
  },
  es: {
    common: commonEs,
    home: homeEs,
    faq: faqEs,
    privacyPolicy: privacyPolicyEs,
    appPages: appPagesEs,
  },
};
