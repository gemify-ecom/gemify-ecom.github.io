import type { CommonDictionary } from '../dictionary-types';

/** Site chrome (header, footer, shared buttons) in German. */
export const commonDe: CommonDictionary = {
  brand: 'Gemify',
  skipToContent: 'Zum Hauptinhalt springen',

  header: {
    logoAlt: 'Gemify Logo',
    navLabel: 'Hauptnavigation',
    apps: 'Apps',
    services: 'Services',
    about: 'Über uns',
    faq: 'FAQ',
    contact: 'Kontakt',
    exploreApps: 'Apps entdecken',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
  },

  footer: {
    ctaHeading: 'Bereit, Ihren Shopify-Store zu vereinfachen?',
    ctaBody:
      'Schließen Sie sich Hunderten von Händlern an, die mit unseren Apps Zeit sparen und ihren Umsatz steigern.',
    ctaButton: 'Unsere Apps entdecken',
    brandBlurb:
      'Wir entwickeln leistungsstarke Shopify-Apps, die Händlern helfen, Zeit zu sparen und ihr Geschäft auszubauen.',
    navigationHeading: 'Navigation',
    navigationLabel: 'Navigation in der Fußzeile',
    ourApps: 'Unsere Apps',
    services: 'Services',
    aboutUs: 'Über uns',
    contact: 'Kontakt',
    resourcesHeading: 'Ressourcen',
    resourcesLabel: 'Ressourcen',
    faq: 'FAQ',
    privacyPolicy: 'Datenschutzerklärung',
    contactHeading: 'Kontakt',
    /** `{year}` is replaced with the current year. */
    copyright: '© {year} Gemify. Alle Rechte vorbehalten.',
  },

  languageSwitcher: {
    heading: 'Sprache',
    label: 'Sprache auswählen',
  },

  actions: {
    installFree: 'Kostenlos installieren',
    installFreeOnShopify: 'Kostenlos bei Shopify installieren',
    contactUs: 'Kontakt aufnehmen',
    readFaq: 'FAQ lesen',
    learnMore: 'Mehr erfahren',
  },

  screencast: {
    subtitle: 'Screencast-Demo',
    videoFallback: 'Ihr Browser unterstützt das Video-Tag nicht.',
  },

  notFound: {
    heading: 'Seite nicht gefunden',
    body: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
    homeCta: 'Zur Startseite',
    faqCta: 'FAQ ansehen',
  },
};
