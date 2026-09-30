import type { ServicesDictionary } from '../dictionary-types';

/**
 * Services page copy in Spanish: custom work beyond Gemify's own apps.
 * The home page teaser reuses `services` (titles and descriptions) from here.
 */
export const servicesEs: ServicesDictionary = {
  hero: {
    badge: 'Servicios de apps para Shopify',
    title: 'Desarrollo y soporte de apps para Shopify',
    subtitle:
      'Además de nuestras propias apps, desarrollamos apps de Shopify a medida, personalizamos apps existentes, las actualizamos a las últimas API de Shopify y corregimos los errores que frenan su tienda. Para apps de Gemify o cualquier otra app de Shopify.',
    primaryCta: 'Solicitar presupuesto gratis',
    secondaryCta: 'Cómo trabajamos',
  },

  servicesHeading: 'Lo que podemos hacer por usted',
  servicesIntro:
    'Cuéntenos qué necesita su tienda. Si funciona en Shopify e involucra una app, podemos ayudarle.',
  services: [
    {
      title: 'Desarrollo de apps a medida',
      description:
        '¿Necesita una función que ninguna app ofrece? Diseñamos y desarrollamos apps de Shopify en torno a su forma de trabajar, desde una app privada para una sola tienda hasta una app pública para la Shopify App Store.',
      items: [
        'Apps a medida solo para su tienda',
        'Apps públicas listas para la revisión de la Shopify App Store',
        'Extensiones de app para el panel de administración, el checkout y el tema',
        'Integraciones con ERP, CRM y otros servicios',
      ],
    },
    {
      title: 'Personalización de apps',
      description:
        '¿Quiere que una app haga un poco más o funcione de otra manera? Añadimos funciones y cambiamos el comportamiento de las apps de Gemify y de apps creadas por otros desarrolladores.',
      items: [
        'Nuevas funciones y ajustes para las apps de Gemify',
        'Cambios en apps creadas por otros desarrolladores o agencias',
        'Reglas, informes y automatizaciones a medida',
        'Conexiones con las herramientas que ya utiliza',
      ],
    },
    {
      title: 'Actualizaciones y migraciones',
      description:
        'Shopify publica una nueva versión de la API cada trimestre y retira las antiguas. Mantenemos su app al día antes de que una obsolescencia la deje sin funcionar.',
      items: [
        'Actualizaciones de la versión de la API de Shopify',
        'Migración de la Admin API REST a GraphQL',
        'Actualizaciones de Polaris y App Bridge',
        'Actualizaciones del framework y de las dependencias',
      ],
    },
    {
      title: 'Corrección de errores y mantenimiento',
      description:
        '¿Su app muestra errores, va lenta o pierde datos entre sistemas? Encontramos la causa, la corregimos y mantenemos la app en buen estado.',
      items: [
        'Diagnóstico y corrección de errores y fallos',
        'Problemas de webhooks, sincronización y coherencia de datos',
        'Mejoras de rendimiento y fiabilidad',
        'Mantenimiento y supervisión continuos',
      ],
    },
  ],

  anyApp: {
    heading: '¿No la creamos nosotros? No hay problema.',
    body: 'Trabajamos en las apps de Gemify y en apps de Shopify creadas por otros desarrolladores o agencias. Envíenos lo que tenga y revisaremos el código antes de presupuestar.',
  },

  processHeading: 'Cómo trabajamos',
  processIntro: 'Un proceso sencillo, con un presupuesto claro antes de empezar a trabajar.',
  steps: [
    {
      title: 'Cuéntenos qué necesita',
      description: 'Describa la app, el cambio o el error mediante el formulario de abajo o por correo electrónico.',
    },
    {
      title: 'Reciba un presupuesto gratis',
      description:
        'Revisamos su solicitud y le respondemos con un plan, un calendario y una estimación. El presupuesto es gratuito.',
    },
    {
      title: 'Desarrollamos y usted revisa',
      description:
        'Compartimos el avance durante el proyecto para que pueda probar el trabajo y darnos su opinión antes del lanzamiento.',
    },
    {
      title: 'Lanzamiento y soporte',
      description:
        'Le ayudamos a publicarlo, y cada proyecto incluye un periodo de soporte posterior al lanzamiento para corregir errores en el trabajo entregado.',
    },
  ],
};
