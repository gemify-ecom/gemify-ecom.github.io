import type { CommonDictionary } from '../dictionary-types';

/** Site chrome (header, footer, shared buttons) in Spanish. */
export const commonEs: CommonDictionary = {
  brand: 'Gemify',
  skipToContent: 'Saltar al contenido principal',

  header: {
    logoAlt: 'Logotipo de Gemify',
    navLabel: 'Navegación principal',
    apps: 'Apps',
    services: 'Servicios',
    about: 'Nosotros',
    faq: 'Preguntas frecuentes',
    contact: 'Contacto',
    exploreApps: 'Explorar apps',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },

  footer: {
    ctaHeading: '¿Quiere simplificar la gestión de su tienda de Shopify?',
    ctaBody:
      'Cientos de comerciantes ya usan nuestras apps para ahorrar tiempo y aumentar sus ventas.',
    ctaButton: 'Explorar nuestras apps',
    brandBlurb:
      'Creamos apps potentes para Shopify que ayudan a los comerciantes a ahorrar tiempo y hacer crecer su negocio.',
    navigationHeading: 'Navegación',
    navigationLabel: 'Navegación del pie de página',
    ourApps: 'Nuestras apps',
    services: 'Servicios',
    aboutUs: 'Sobre nosotros',
    contact: 'Contacto',
    resourcesHeading: 'Recursos',
    resourcesLabel: 'Recursos',
    faq: 'Preguntas frecuentes',
    privacyPolicy: 'Política de privacidad',
    contactHeading: 'Contacto',
    /** `{year}` is replaced with the current year. */
    copyright: '© {year} Gemify. Todos los derechos reservados.',
  },

  languageSwitcher: {
    heading: 'Idioma',
    label: 'Seleccionar idioma',
  },

  actions: {
    installFree: 'Instalar gratis',
    installFreeOnShopify: 'Instalar gratis en Shopify',
    contactUs: 'Contáctenos',
    readFaq: 'Ver preguntas frecuentes',
    learnMore: 'Más información',
  },

  screencast: {
    subtitle: 'Demostración en video',
    videoFallback: 'Su navegador no admite la etiqueta de video.',
  },

  notFound: {
    heading: 'Página no encontrada',
    body: 'La página que busca no existe o se ha movido.',
    homeCta: 'Ir a la página de inicio',
    faqCta: 'Ver las preguntas frecuentes',
  },
};
