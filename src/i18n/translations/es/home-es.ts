import type { EmphasisedText } from '../content-types';
import type { HomeDictionary } from '../dictionary-types';

/** Home page copy in Spanish. */
export const homeEs: HomeDictionary = {
  hero: {
    socialProof: 'Más de 500 comerciantes de Shopify confían en nosotros',
    headline: {
      text: 'Apps pequeñas que hacen {emphasis} y la hacen bien.',
      emphasis: 'una sola tarea',
    },
    subheadline:
      'Instalación gratuita, hechas para Shopify y con el soporte del desarrollador que las creó.',
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
    /** Accessible label for the star rating badge on each app card. */
    ratingLabel: 'Valoración de {rating} sobre 5 en la Shopify App Store',
    /** App groups: store tools use the blue icon plate, AI tools the black one. */
    groups: {
      storeOperations: {
        heading: 'Operaciones de la tienda',
        description: 'Pedidos, direcciones, envíos y ubicaciones',
      },
      aiShoppers: {
        heading: 'Lista para compras con IA',
        description: 'Para que los asistentes de IA lean su tienda y completen el pago',
      },
    },
    bulkDeleteOrders: {
      title: 'Bulk Delete Orders',
      tagline: 'Elimine pedidos de prueba y datos innecesarios en segundos',
      features: [
        'Elimine de forma masiva pedidos, borradores de pedidos y clientes',
        'Cancela los pedidos automáticamente antes de eliminarlos, sin pasos manuales',
        'Siga cada trabajo y exporte informes CSV desde el Historial de trabajos',
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
    japanMultiship: {
      title: 'Japan Multiship',
      tagline: 'Envía un pedido de regalo a varios destinatarios en Japón',
      features: [
        'Los compradores reparten los artículos entre varios destinatarios en el carrito',
        'Cada pedido pagado se divide en un envío por destino',
        'Exporta el CSV de Yamato B2 Cloud e importa los números de seguimiento',
      ],
    },
    checkoutProbe: {
      title: 'Checkout Probe',
      tagline: 'Prepara tu checkout para los agentes de compra WebMCP',
      features: [
        'Prueba tu checkout como un agente de compra con IA en un clic',
        'Ve qué detiene o puede detener a un agente, con una solución para cada caso',
        'Nunca realiza un pedido: cada checkout de prueba se cancela',
      ],
    },
    bestStoreLocator: {
      title: 'Best Store Locator',
      tagline: 'Muestra tus tiendas y distribuidores en un mapa, sin claves de API',
      features: [
        'Mapas y verificación de direcciones integrados, sin clave de API de Google',
        'Importación CSV con vista previa completa antes de guardar nada',
        'Los clientes buscan por ciudad o código postal y ven qué tiendas están abiertas',
      ],
    },
  },

  testimonials: {
    badge: '5.0 en la Shopify App Store',
    heading: 'La confianza de los comerciantes',
    subheading: 'Vea lo que opinan de nuestras apps quienes gestionan una tienda',
    verified: 'Verificado',
    merchantRole: 'Comerciante de Shopify',
    translatedNote: 'Traducido del inglés',
    /** Quotation marks around review text in this language. */
    quoteMarks: { open: '«', close: '»' },
    reviews: {
      barbellStandard: {
        quote: 'Su app le ahorró a mi equipo unas 8 horas de hacer clic en Shopify y lo convirtió en un proyecto de 5 minutos.',
        highlight: '8 horas → 5 minutos',
      },
      yubiBar: {
        quote: 'Gran app. Necesitaba eliminar pedidos importados de Amazon que estaban alterando mis estadísticas. Contacté al soporte de Shopify y me dijeron que no se podían eliminar los pedidos preparados. Entonces usé esta app y funcionó como por arte de magia. Gracias a todo el equipo de GEMIFY.',
        highlight: 'Como por arte de magia',
      },
      strikeSports: {
        quote: '¡Gran app y un soporte al cliente todavía mejor! La app funciona sin problemas y hace exactamente lo que promete. El equipo de soporte responde muy rápido y es profesional y atento. ¡Muy recomendable!',
        highlight: 'Un soporte todavía mejor',
      },
      mooMenn: {
        quote: 'Sean fue excepcional y fue mucho más allá para eliminar al instante todos los pedidos en segundo plano. ¡Muy recomendable, un soporte de primera!',
        highlight: 'Mucho más allá',
      },
      amyDepot: {
        quote: 'Hace lo que dice que hará, y lo hace increíblemente bien a un precio increíble. Dio en el clavo. Gracias a la gente de Gemify. ¡Es justo lo que necesitaba!',
        highlight: 'Dio en el clavo',
      },
    },
  },

  /** Core values. Each proof line must stay true of the shipped apps. */
  values: {
    eyebrow: 'Nuestros valores',
    heading: 'Cuatro promesas detrás de cada app',
    subheading: 'Nuestras apps ya cumplen cada una de ellas hoy.',
    proofLabel: 'Prueba',
    items: [
      {
        title: 'Una tarea, bien hecha',
        description: 'Cada app resuelve un solo problema del comerciante y es lo bastante simple para aprenderla en un minuto.',
        proof: 'Seis apps, seis tareas: eliminar pedidos, proteger direcciones, publicar llms.txt, dividir pedidos de regalo, ubicar tiendas y probar el pago con agentes.',
      },
      {
        title: 'Seguridad antes que rapidez',
        description: 'Nuestras apps le muestran lo que va a cambiar y guardan un registro de lo que cambió.',
        proof: 'Historial de trabajos con informes CSV en Bulk Delete Orders, una vista previa completa antes de importar en Best Store Locator, y Checkout Probe nunca realiza un pedido.',
      },
      {
        title: 'Palabras claras, precios reales',
        description: 'Escribimos como hablan los comerciantes. La ficha de la Shopify App Store es la lista de precios.',
        proof: 'Todas las apps empiezan con un plan gratuito, y nuestra política de privacidad está escrita en lenguaje sencillo.',
      },
      {
        title: 'Responden personas',
        description: 'Una persona real lee y responde cada mensaje de soporte. Sin bots.',
        proof: 'Los comerciantes mencionan a nuestro soporte por su nombre en sus reseñas de la App Store.',
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

  /** Teaser for the services page; the cards reuse the services namespace. */
  services: {
    badge: 'Servicios',
    heading: '¿Necesita algo a medida?',
    subheading:
      'Además de nuestras propias apps, desarrollamos, personalizamos, actualizamos y reparamos apps de Shopify, incluidas las que no creamos nosotros.',
    cta: 'Ver todos los servicios',
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
    /** Shown under the error; `{email}` becomes a mailto link. */
    errorEmailFallback: 'También puede escribirnos directamente a {email}.',
    securityNote: 'Su información está segura y nunca se compartirá',
  },
};
