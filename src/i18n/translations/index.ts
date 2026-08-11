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
};
