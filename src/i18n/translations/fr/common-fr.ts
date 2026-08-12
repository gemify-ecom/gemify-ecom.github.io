import type { CommonDictionary } from '../dictionary-types';

/** Site chrome (header, footer, shared buttons) in French. */
export const commonFr: CommonDictionary = {
  brand: 'Gemify',

  meta: {
    title: 'Gemify - Des applications Shopify premium pour booster votre boutique',
    description:
      'Des applications simples et puissantes pour les marchands Shopify. Conçues par des développeurs qui comprennent vos besoins.',
  },

  header: {
    logoAlt: 'Logo Gemify',
    navLabel: 'Navigation principale',
    apps: 'Applications',
    about: 'À propos',
    contact: 'Contact',
    exploreApps: 'Découvrir les applications',
  },

  footer: {
    ctaHeading: 'Prêt à simplifier la gestion de votre boutique Shopify ?',
    ctaBody:
      'Rejoignez les centaines de marchands qui utilisent nos applications pour gagner du temps et développer leurs ventes.',
    ctaButton: 'Découvrir nos applications',
    brandBlurb:
      'Nous concevons des applications Shopify puissantes qui aident les marchands à gagner du temps et à développer leur activité.',
    navigationHeading: 'Navigation',
    navigationLabel: 'Navigation du pied de page',
    ourApps: 'Nos applications',
    aboutUs: 'À propos',
    contact: 'Contact',
    resourcesHeading: 'Ressources',
    resourcesLabel: 'Ressources',
    faq: 'FAQ',
    privacyPolicy: 'Politique de confidentialité',
    contactHeading: 'Contact',
    copyright: '© 2025 Gemify. Tous droits réservés.',
  },

  languageSwitcher: {
    heading: 'Langue',
    label: 'Choisir la langue',
  },

  actions: {
    installFree: 'Installer gratuitement',
    installFreeOnShopify: 'Installer gratuitement sur Shopify',
    contactUs: 'Nous contacter',
    readFaq: 'Consulter la FAQ',
    learnMore: 'En savoir plus',
  },

  screencast: {
    subtitle: 'Démonstration vidéo',
    videoFallback: 'Votre navigateur ne prend pas en charge la lecture de vidéos.',
  },
};
