import type { SeoDictionary } from '../dictionary-types';

/**
 * Search and social metadata in Spanish: one title and description per page,
 * written into `<head>` by the prerender step and on client-side navigation.
 * App names, plan names, and prices are not translated.
 */
export const seoEs: SeoDictionary = {
  /** Label for the first breadcrumb, pointing at the home page. */
  breadcrumbHome: 'Inicio',

  pages: {
    home: {
      title: 'Gemify | Apps de Shopify: Bulk Delete Orders, Address Lock, llms.txt',
      description:
        'Apps de Shopify para problemas reales: elimine pedidos y clientes en bloque, proteja la dirección predeterminada y publique llms.txt para la IA. Planes gratis.',
    },
    faq: {
      title: 'Preguntas frecuentes: apps de Shopify, precios y privacidad | Gemify',
      description:
        'Respuestas sobre Bulk Delete Orders, Default Address Lock y LLMs-full.txt: funciones, precios, facturación, privacidad y compatibilidad con planes de Shopify.',
    },
    services: {
      title: 'Desarrollo de apps Shopify, personalización y errores | Gemify',
      description:
        'Desarrollo de apps de Shopify a medida, personalización, actualizaciones de API y corrección de errores, para Gemify o cualquier app de Shopify. Presupuesto gratis.',
    },
    privacyPolicy: {
      title: 'Política de privacidad | Gemify',
      description:
        'Cómo las apps de Shopify de Gemify recopilan, usan, guardan y protegen los datos de comerciantes y clientes, con los derechos del RGPD y la CPRA y las solicitudes de datos de clientes.',
    },
    bulkDeleteOrders: {
      title: 'Eliminar pedidos y clientes en Shopify de forma masiva | Gemify',
      description:
        'Elimine pedidos, borradores y clientes de Shopify en bloque. Filtros, cancelación automática, historial en directo e informes CSV. Gratis o $36/año ilimitado.',
    },
    defaultAddressLock: {
      title: 'Default Address Lock: proteja las direcciones en Shopify | Gemify',
      description:
        'Evite que Shopify cambie la dirección predeterminada al enviar a otro lugar. Detección inteligente, restauración al instante y panel de actividad. Plan gratis.',
    },
    llmsTxt: {
      title: 'LLMs-full.txt: llms.txt y agents.md para Shopify | Gemify',
      description:
        'Publique agents.md, llms.txt y llms-full.txt en su dominio de Shopify: ChatGPT, Claude y Gemini entenderán su catálogo. Regeneración programada. Plan gratis.',
    },
    japanMultiship: {
      title: 'Japan Multiship: un pedido, varios destinatarios | Gemify',
      description:
        'Próximamente en la Shopify App Store. Envíe un pedido a hasta 20 destinatarios en Japón con un solo pago, envío por destino y CSV de Yamato B2 Cloud.',
    },
    bestStoreLocator: {
      title: 'Best Store Locator: mapa de tiendas sin clave de API | Gemify',
      description:
        'Próximamente en la Shopify App Store. Mapa con búsqueda de sus tiendas o distribuidores: mapas integrados, importación CSV con vista previa y abiertas ahora.',
    },
    checkoutProbe: {
      title: 'Checkout Probe: prueba de checkout WebMCP para Shopify | Gemify',
      description:
        'Próximamente en la Shopify App Store. Prepare su checkout para WebMCP: pruébelo como un agente de compras con IA y obtenga una solución para cada problema.',
    },
    notFound: {
      title: 'Página no encontrada | Gemify',
      description: 'La página que busca no existe. Explore las apps de Shopify de Gemify.',
    },
  },

  /** Screencast pages are not indexed; `{app}` is the app name. */
  screencast: {
    title: 'Demostración en video de {app} | Gemify',
    description: 'Vea una breve demostración en video de {app}, una app de Shopify creada por Gemify.',
  },
  help: {
    title: 'Ayuda de {app} | Gemify',
    description: 'Cómo configurar y usar {app}, una app de Shopify de Gemify.',
  },
};
