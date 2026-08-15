import type { EmphasisedText } from '../content-types';
import type { HomeDictionary } from '../dictionary-types';

/** Home page copy in Spanish. */
export const homeEs: HomeDictionary = {
  skipToContent: 'Saltar al contenido principal',

  hero: {
    socialProof: 'Más de 500 comerciantes de Shopify confían en nosotros',
    headline: 'Apps que de verdad ayudan a su tienda de Shopify',
    subheadline:
      'Herramientas simples y potentes creadas por desarrolladores que entienden las necesidades de los comerciantes. Sin relleno, solo resultados.',
    primaryCta: 'Explorar nuestras apps',
    secondaryCta: 'Contáctenos →',
    ratingBadge: '5 estrellas en la Shopify App Store',
  },

  apps: {
    badge: 'Instalación gratuita',
    heading: 'Nuestras apps para Shopify',
    subheading: 'Herramientas simples y potentes que resuelven problemas reales de los comerciantes',
    comingSoon: 'Próximamente',
    installs: '{count} instalaciones',
    bulkDeleteOrders: {
      title: 'Bulk Delete Orders',
      tagline: 'Elimine pedidos de prueba y datos innecesarios en segundos',
      features: [
        'Filtre y seleccione con precisión los pedidos que quiere eliminar',
        'Cancela los pedidos automáticamente antes de eliminarlos, sin pasos manuales',
        'Siga cada trabajo y exporte informes desde el Historial de trabajos',
      ],
    },
    defaultAddressLock: {
      title: 'Default Address Lock',
      tagline: 'Mantenga intactas las direcciones predeterminadas de sus clientes tras cada pedido',
      features: [
        'Evite que Shopify sobrescriba las direcciones predeterminadas',
        'Detección inteligente entre cambios por pedido y cambios manuales',
        'Ideal para tiendas de regalos y comerciantes B2B',
      ],
    },
    llmsTxt: {
      title: 'LLMs-full.txt',
      tagline: 'Haga que su tienda sea legible para ChatGPT, Claude y Gemini',
      features: [
        'Genere agents.md, llms.txt y llms-full.txt con un solo clic',
        'Elija qué productos, colecciones, páginas y artículos incluir',
        'Shopify los publica de forma nativa en /llms.txt, sin hosting adicional',
      ],
    },
  },

  testimonials: {
    badge: '5.0 en la Shopify App Store',
    heading: 'La confianza de los comerciantes',
    subheading: 'Vea lo que opinan de nuestras apps quienes gestionan una tienda',
    verified: 'Verificado',
    merchantRole: 'Comerciante de Shopify',
  },

  whyChoose: {
    heading: 'Por qué los comerciantes eligen Gemify',
    subheading: 'Herramientas diseñadas pensando en su éxito',
    benefits: [
      {
        title: 'Experiencia en Shopify',
        description:
          'Creadas por expertos certificados de Shopify que conocen sus retos del día a día.',
      },
      {
        title: 'Seguridad empresarial',
        description:
          'Seguridad de nivel bancario que protege los datos de su tienda las 24 horas.',
      },
      {
        title: 'Soporte ágil',
        description: 'Personas reales listas para ayudarle. Sin bots, solo atención genuina.',
      },
    ],
  },

  about: {
    heading: 'Sobre Gemify',
    intro:
      'Fundada por desarrolladores de Shopify con experiencia, que conocen los retos a los que se enfrentan los comerciantes.',
    mission: {
      text: 'Nuestra misión es simple: {emphasis}. Sin funciones innecesarias. Sin interfaces confusas. Solo soluciones claras que ayudan a su negocio a crecer.',
      emphasis: 'apps intuitivas y confiables',
    } satisfies EmphasisedText,
    closing: {
      text: 'Creamos cada app con el mismo cuidado que exigiríamos para nuestras propias tiendas. Al elegir Gemify, elige un {emphasis}.',
      emphasis: 'socio comprometido con su éxito',
    } satisfies EmphasisedText,
  },

  contact: {
    heading: 'Póngase en contacto',
    responseTime: 'Normalmente respondemos en menos de 24 horas',
    successTitle: '¡Gracias!',
    successBody: 'Su mensaje se envió correctamente. Le responderemos muy pronto.',
    successCta: 'Explore nuestras apps mientras espera →',
    nameLabel: 'Nombre',
    namePlaceholder: 'Su nombre',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'nombre@ejemplo.com',
    subjectLabel: 'Asunto',
    subjectPlaceholder: '¿En qué podemos ayudarle?',
    messageLabel: 'Mensaje',
    messagePlaceholder: 'Cuéntenos más sobre su consulta o comentario...',
    submit: 'Enviar mensaje',
    submitting: 'Enviando...',
    submitted: 'Mensaje enviado',
    errorAlert: 'Hubo un problema al enviar su mensaje. Inténtelo de nuevo.',
    securityNote: 'Su información está segura y nunca se compartirá',
  },
};
