import type { FeatureCardContent, ProblemCard } from '../content-types';
import type { AppPagesDictionary } from '../dictionary-types';

/** App detail and screencast page copy in Spanish. */
export const appPagesEs: AppPagesDictionary = {
  bulkDeleteOrders: {
    title: 'Bulk Delete Orders',
    tagline:
      'Ordene su tienda de Shopify eliminando de forma masiva pedidos de prueba, borradores de pedidos y clientes, con filtros potentes y cancelación automática.',
    problemHeading: 'El problema',
    problemIntro:
      'Shopify no ofrece una forma nativa de eliminar pedidos de forma masiva. Borrar manualmente cientos o miles de pedidos uno a uno consume mucho tiempo y es propenso a errores.',
    problems: [
      {
        title: 'Los pedidos de prueba ensucian los datos',
        description:
          'El desarrollo y las pruebas dejan pedidos ficticios que contaminan sus analíticas y dificultan ver el rendimiento real del negocio.',
      },
      {
        title: 'Limpieza tras una migración',
        description:
          'Después de migrar desde otra plataforma, es posible que haya importado pedidos que ya no necesita y quiera eliminar.',
      },
      {
        title: 'Pedidos duplicados',
        description:
          'Los fallos del sistema o los problemas de integración pueden generar pedidos duplicados que conviene depurar de forma eficiente.',
      },
      {
        title: 'Cumplimiento del RGPD y la privacidad',
        description:
          'La normativa de privacidad puede obligarle a eliminar datos antiguos de clientes, incluidos los registros de pedidos, pasado cierto tiempo.',
      },
    ] satisfies ProblemCard[],
    howItWorksHeading: 'Cómo funciona',
    howItWorksIntro:
      'Nuestra app hace que la eliminación masiva de pedidos sea simple, segura y rastreable. Filtre los pedidos con precisión y elimínelos con un solo clic.',
    features: [
      {
        title: 'Filtros potentes',
        description:
          'Filtre los pedidos por rango de fechas, estado, etiquetas, cliente, estado del pago y más. Seleccione exactamente los pedidos que quiere eliminar.',
      },
      {
        title: 'Cancelación y eliminación automáticas',
        description:
          'Los pedidos se cancelan automáticamente antes de eliminarse, sin pasos manuales. También se pueden eliminar los pedidos ya preparados.',
      },
      {
        title: 'Historial de trabajos',
        description:
          'Siga cada trabajo de eliminación en tiempo real, con su estado, su progreso y los posibles fallos.',
      },
      {
        title: 'Exportación de informes',
        description:
          'Exporte su historial de trabajos en CSV para sus registros. Útil para la documentación de cumplimiento y las pistas de auditoría.',
      },
      {
        title: 'Confirmación antes de eliminar',
        description:
          'Un paso de confirmación muestra todos los pedidos que se van a eliminar y le advierte de que la eliminación es permanente, para que pueda revisarlo antes de continuar.',
      },
      {
        title: 'Limpieza de clientes',
        description:
          'Depure clientes de forma masiva de dos maneras: anonimícelos para ocultar sus datos personales o elimínelos de forma permanente junto con sus pedidos.',
      },
    ] satisfies FeatureCardContent[],
    ctaHeading: '¿Listo para poner orden en su tienda?',
    ctaBody:
      'Instale Bulk Delete Orders hoy mismo y ahorre horas de trabajo manual. Hay un plan gratuito para empezar.',
  },

  defaultAddressLock: {
    title: 'Default Address Lock',
    tagline:
      'Evite que Shopify sobrescriba la dirección predeterminada de sus clientes cuando envían pedidos a otras direcciones.',
    problemHeading: 'El problema',
    problemIntro:
      'Desde 2015, Shopify cambia automáticamente la dirección predeterminada de los clientes cada vez que realizan un pedido con una dirección de envío distinta. Esto genera grandes quebraderos de cabeza a los comerciantes.',
    problems: [
      {
        title: 'Tiendas de regalos',
        description:
          'Los clientes que envían regalos a amigos y familiares ven cómo su dirección predeterminada cambia constantemente a la del destinatario del regalo.',
      },
      {
        title: 'Comerciantes B2B',
        description:
          'Los compradores empresariales que envían a sus propios clientes acaban con direcciones predeterminadas incorrectas, lo que altera los pedidos futuros.',
      },
      {
        title: 'Tiendas integradas con un CRM',
        description:
          'Las tiendas que dependen de datos de cliente exactos para marketing o logística sufren problemas de integridad de datos.',
      },
      {
        title: 'Negocios de suscripción',
        description:
          'Un envío puntual de regalo puede sustituir la dirección de entrega de la suscripción y hacer que los envíos recurrentes lleguen al lugar equivocado.',
      },
    ] satisfies ProblemCard[],
    howItWorksHeading: 'Cómo funciona',
    howItWorksIntro:
      'Nuestra app supervisa de forma inteligente los cambios de dirección y restaura automáticamente la dirección predeterminada original cuando Shopify intenta sobrescribirla.',
    features: [
      {
        title: 'Detección inteligente',
        description:
          'Distingue entre los cambios provocados por un pedido y las actualizaciones manuales intencionadas. Los cambios manuales de los clientes o del personal se conservan.',
      },
      {
        title: 'Restauración automática',
        description:
          'Cuando un pedido sobrescribe una dirección predeterminada, la app restaura la original en tiempo real, en el momento en que se realiza el pedido.',
      },
      {
        title: 'Panel de actividad',
        description:
          'Consulte todos los eventos de protección en un solo panel, con el historial completo de las direcciones que ha restaurado la app.',
      },
      {
        title: 'Privacidad ante todo',
        description:
          'Solo almacenamos identificadores de dirección, nunca el contenido real de la dirección. Los datos de sus clientes siguen protegidos en Shopify.',
      },
    ] satisfies FeatureCardContent[],
    diagram: {
      heading: 'Default Address Lock',
      withoutApp: 'Sin nuestra app',
      withApp: 'Con nuestra app',
      stepLabel: 'Paso {number}',
      step1: 'La dirección predeterminada es {a} (su casa)',
      step2: 'Usted envía un regalo a {b} (la dirección de un amigo)',
      step3Without: 'Shopify cambia la dirección predeterminada a {b}',
      step3With: 'La app detecta el cambio y restaura {a}',
      resultWithoutTitle: 'La dirección predeterminada ya es incorrecta',
      resultWithoutBody: 'Los pedidos futuros podrían enviarse al lugar equivocado',
      resultWithTitle: 'La dirección predeterminada sigue siendo correcta',
      resultWithBody: 'La dirección de su casa queda protegida',
      summaryHeading: 'Qué hacemos',
      summaryNegative: 'No cambiamos las direcciones de los pedidos',
      summaryPositive: 'Protegemos su dirección predeterminada',
    },
    ctaHeading: '¿Listo para proteger las direcciones de sus clientes?',
    ctaBody:
      'Instale Default Address Lock hoy mismo y evite que Shopify sobrescriba la dirección predeterminada de sus clientes. Hay un plan gratuito para tiendas pequeñas.',
  },

  llmsTxt: {
    title: 'LLMs-full.txt',
    tagline:
      'Prepare su tienda de Shopify para la IA. Genere {agentsMd}, {llmsTxt} y {llmsFullTxt} para que los asistentes de IA entiendan sus productos, colecciones y páginas.',
    problemHeading: 'Por qué su tienda necesita llms.txt',
    problemIntro:
      'El {standardLink} ayuda a los modelos de IA a entender su sitio web. Igual que {robotsTxt} guía a los motores de búsqueda, {llmsTxt} guía a los asistentes de IA y les ayuda a recomendar sus productos y a responder con precisión a las preguntas de los clientes.',
    standardLinkLabel: 'estándar llms.txt',
    problems: [
      {
        title: 'Los compradores preguntan primero a la IA',
        description:
          'Cada vez más clientes investigan productos a través de ChatGPT, Claude y Gemini. Sin un resumen claro de su catálogo, esos asistentes trabajan con lo que puedan rastrear por su cuenta.',
      },
      {
        title: 'El HTML de la tienda tiene mucho ruido',
        description:
          'El marcado del tema, los scripts y la navegación entierran los detalles que importan. Los modelos leen markdown con mucha más fiabilidad que una página de tienda renderizada.',
      },
      {
        title: 'Escribirlo a mano no es viable',
        description:
          'Mantener un archivo escrito a mano con cientos de productos, colecciones y artículos de blog es tedioso y queda desactualizado en cuanto cambia su catálogo.',
      },
      {
        title: 'El hosting complica las cosas',
        description:
          'Los asistentes de IA buscan el archivo en su propio dominio. Alojarlo en cualquier otro lugar implica configuración y redirecciones adicionales.',
      },
    ] satisfies ProblemCard[],
    featuresHeading: 'Qué obtiene',
    featuresIntro:
      'Elija su contenido, genere sus archivos y deje que Shopify los sirva desde su propio dominio. Sin hosting adicional y sin edición manual.',
    features: [
      {
        title: 'Generación con un clic',
        description:
          'Genere agents.md, llms.txt y llms-full.txt desde su panel. Elija exactamente qué productos, colecciones, páginas y artículos incluir.',
      },
      {
        title: 'Editor de plantillas',
        description:
          'Edite los encabezados y el formato de los elementos en un editor de plantillas con vista previa en directo, para que el resultado describa su tienda como usted quiere.',
      },
      {
        title: 'Servido de forma nativa',
        description:
          'Los archivos se publican en su tema y Shopify los sirve en /agents.md, /llms.txt y /llms-full.txt, sin necesidad de hosting adicional.',
      },
      {
        title: 'Usted elige el contenido',
        description:
          'Incluya productos, colecciones, páginas, artículos del blog y políticas, por tipo de contenido completo o elemento a elemento. Deje fuera todo lo que no quiera que resuman los asistentes de IA.',
      },
      {
        title: 'Regeneración programada',
        description:
          'Vuelva a generar sus archivos automáticamente cada hora, cada día o cada semana en su propia zona horaria, con un historial de cada ejecución.',
      },
      {
        title: 'Markdown limpio',
        description:
          'El contenido de su tienda se convierte en markdown limpio que los asistentes de IA pueden leer sin conjeturas.',
      },
    ] satisfies FeatureCardContent[],
    howItWorksHeading: 'Cómo funciona',
    howItWorksIntro: 'Tres pasos desde la instalación hasta una tienda legible por la IA.',
    steps: [
      {
        title: 'Instale y configure',
        description:
          'Seleccione qué contenido incluir: productos, colecciones, páginas, artículos del blog y políticas.',
      },
      {
        title: 'Genere los archivos',
        description:
          'Pulse generar. La app lee el contenido de su tienda y lo convierte en markdown limpio.',
      },
      {
        title: 'Lista para la IA',
        description:
          'Sus archivos ya están publicados en su propio dominio, donde asistentes de IA como ChatGPT, Claude y Gemini pueden leerlos. Active la regeneración programada para mantenerlos al día.',
      },
    ] satisfies FeatureCardContent[],
    ctaHeading: '¿Listo para dar el salto a la IA?',
    ctaBody:
      'Instale LLMs-full.txt hoy mismo y ofrezca a los asistentes de IA una imagen fiel de su tienda. Instalación gratuita.',
  },

  // Todavía no están en la App Store: cada una tiene una página de detalle (sin
  // enlace de instalación ni precios hasta que se publique la ficha), una página
  // de demostración y, en Best Store Locator y Checkout Probe, una página de
  // ayuda. Los datos salen del borrador de la ficha de cada app; afirme solo lo
  // que la app ya hace.
  japanMultiship: {
    title: 'Japan Multiship',
    tagline:
      'Permita que sus compradores envíen un pedido a hasta 20 destinatarios en todo Japón desde la página del carrito, paguen una sola vez y vean el envío calculado para cada destino.',
    problemHeading: 'El problema',
    problemIntro:
      'El checkout de Shopify envía cada pedido a una sola dirección. En Japón, quienes compran regalos suelen enviar el mismo pedido a familiares, amigos y clientes, así que pasan por el checkout una vez por destinatario o le envían por correo electrónico una lista que usted debe organizar a mano.',
    problems: [
      {
        title: 'Un checkout por destinatario',
        description:
          'Los compradores repiten el checkout para cada dirección. Es lento, y muchos abandonan antes del último regalo.',
      },
      {
        title: 'Envío calculado a mano',
        description:
          'Sin una tarifa para cada destino, usted tiene que estimar el envío o corregir el total después del pago.',
      },
      {
        title: 'Listas de direcciones por correo electrónico',
        description:
          'Los destinatarios enviados en una nota o en una hoja de cálculo deben copiarse uno a uno en los pedidos y en los archivos de la transportista.',
      },
      {
        title: 'Seguimiento de cada paquete',
        description:
          'Cada paquete tiene su propio número de seguimiento, e introducirlos de nuevo en Shopify lleva tiempo.',
      },
    ] satisfies ProblemCard[],
    howItWorksHeading: 'Cómo funciona',
    howItWorksIntro:
      'Los compradores reparten el carrito en la página del carrito y pagan una sola vez. Después, cada destino se convierte en una preparación independiente, lista para su transportista.',
    features: [
      {
        title: 'Hasta 20 destinatarios',
        description:
          'En la página del carrito, los compradores asignan los artículos del carrito a hasta 20 destinatarios y pagan una sola vez.',
      },
      {
        title: 'Autocompletado por código postal',
        description:
          'Un código postal japonés rellena la prefectura y la ciudad, con campos en kana para los nombres.',
      },
      {
        title: 'Envío por destino',
        description:
          'El envío se calcula para cada destino a partir de sus zonas de envío y se muestra antes del checkout.',
      },
      {
        title: 'Una preparación por destino',
        description:
          'Tras el pago, cada destino se convierte en su propia orden de preparación, y la página del pedido muestra todos los destinatarios.',
      },
      {
        title: 'CSV de Yamato B2 Cloud',
        description:
          'Exporte un CSV de Yamato B2 Cloud para pedidos con varios destinos y para pedidos con una sola dirección.',
      },
      {
        title: 'Importación del seguimiento',
        description:
          'Suba el CSV de la transportista para añadir los números de seguimiento y preparar cada destino.',
      },
    ] satisfies FeatureCardContent[],
    goodToKnowHeading: 'Conviene saber',
    goodToKnow: [
      'Creada para tiendas en Japón: la moneda de la tienda debe ser JPY.',
      'Requiere el canal de ventas Tienda online y una página del carrito. En Shopify Plus, un bloque del checkout también permite a los compradores añadir destinos durante el checkout.',
      'Un descuento de tipo "Monto del pedido" también reduce los gastos de envío, y la app marca cada uno de esos pedidos. Un descuento de tipo "Monto de productos" no los reduce.',
      'La app está disponible en inglés y japonés.',
    ],
    ctaHeading: '¿Quiere Japan Multiship para su tienda?',
    ctaBody:
      'Japan Multiship aún no está en la Shopify App Store. Envíenos un mensaje si quiere usarla en su tienda.',
  },
  bestStoreLocator: {
    title: 'Best Store Locator',
    tagline:
      'Muestre sus tiendas, puntos de venta o distribuidores en un mapa con búsqueda en su tienda online, sin claves de API ni cuentas de mapas que configurar.',
    problemHeading: 'El problema',
    problemIntro:
      'Los compradores que quieren visitarle necesitan encontrar el punto más cercano. Muchos localizadores de tiendas exigen primero una clave de API de mapas y una cuenta de facturación, y mantener al día a mano una larga lista de ubicaciones lleva tiempo.',
    problems: [
      {
        title: 'Claves de API y facturación de mapas',
        description:
          'Muchos localizadores requieren una cuenta con un proveedor de mapas, una clave de API y una tarjeta registrada antes de mostrar el mapa.',
      },
      {
        title: 'Listas largas de ubicaciones',
        description:
          'Añadir cientos de puntos de venta uno a uno es lento, y una importación defectuosa puede sobrescribir datos correctos.',
      },
      {
        title: 'Marcadores en el lugar equivocado',
        description: 'Una dirección situada en el punto equivocado lleva a los compradores a la puerta equivocada.',
      },
      {
        title: 'Compradores que se rinden',
        description:
          'Sin búsqueda por ciudad o código postal ni horarios de apertura, los compradores se van en lugar de visitarle.',
      },
    ] satisfies ProblemCard[],
    howItWorksHeading: 'Cómo funciona',
    howItWorksIntro:
      'Añada sus ubicaciones a mano o desde un CSV, y en su tienda online aparecerá un mapa con búsqueda como bloque del tema.',
    features: [
      {
        title: 'Mapas integrados',
        description:
          'Los mapas y la búsqueda de direcciones están incluidos en todos los planes, sin cuenta de mapas ni clave de API.',
      },
      {
        title: 'Importación CSV con vista previa',
        description:
          'Vea una vista previa completa antes de guardar nada. Las nuevas importaciones actualizan las tiendas existentes y detectan duplicados.',
      },
      {
        title: 'Pendientes de revisión',
        description:
          'Las direcciones que no se pueden situar con precisión quedan pendientes de revisión en lugar de publicarse con el marcador equivocado.',
      },
      {
        title: 'Bloque del tema',
        description: 'Añada el mapa como bloque del tema con sus colores, su diseño, su unidad de distancia y sus textos.',
      },
      {
        title: 'Búsqueda y tiendas abiertas ahora',
        description:
          'Los compradores buscan por ciudad o código postal, usan su ubicación, filtran por etiqueta y ven qué tiendas están abiertas ahora. Los clientes que han iniciado sesión pueden guardar una tienda favorita.',
      },
      {
        title: 'Páginas de ubicación',
        description:
          'Las páginas de ubicación con datos estructurados ayudan a los motores de búsqueda y a los asistentes de IA a encontrar cada tienda (plan Pro y superiores).',
      },
    ] satisfies FeatureCardContent[],
    goodToKnowHeading: 'Conviene saber',
    goodToKnow: [
      'Requiere el canal de ventas Tienda online: el mapa es un bloque de app del tema.',
      'La importación CSV está incluida en todos los planes.',
      'La búsqueda de direcciones procesa aproximadamente una fila por segundo. Incluya columnas de latitud y longitud para importar al instante un archivo grande.',
      'Funciona para tiendas de cualquier país.',
    ],
    ctaHeading: '¿Quiere Best Store Locator para su tienda?',
    ctaBody:
      'Best Store Locator aún no está en la Shopify App Store. Envíenos un mensaje si quiere usarla en su tienda.',
  },
  checkoutProbe: {
    title: 'Checkout Probe',
    tagline:
      'Prepare su checkout para WebMCP. Descubra qué detendría a los agentes de compras con IA en su checkout, con una solución para cada problema que encuentre la prueba. Nunca se realiza ningún pedido.',
    problemHeading: 'El problema',
    problemIntro:
      'Desde septiembre de 2026, el checkout de Shopify ofrece herramientas WebMCP, así que los agentes de IA que funcionan en el navegador del comprador pueden leer y completar un checkout. Cuando un checkout pide algo que un agente no puede proporcionar, el agente se detiene, la venta se pierde y nada en sus pedidos indica por qué.',
    problems: [
      {
        title: 'Reglas que requieren datos del comprador',
        description:
          'Una regla del checkout que pide al comprador algo adicional puede detener a un agente que no puede responder.',
      },
      {
        title: 'Sin Shop Pay',
        description: 'Sin Shop Pay, algunos agentes no pueden completar el paso del pago.',
      },
      {
        title: 'Envío no disponible',
        description: 'Si no se ofrece ninguna tarifa de envío para la dirección, el agente no puede completar el checkout.',
      },
      {
        title: 'Nada que ver en los pedidos',
        description: 'Un checkout fallido de un agente no deja ningún pedido, así que el problema permanece oculto.',
      },
    ] satisfies ProblemCard[],
    howItWorksHeading: 'Cómo funciona',
    howItWorksIntro:
      'Checkout Probe abre un checkout de prueba como lo haría un agente, introduce un comprador de prueba y una dirección de envío, y después lo cancela.',
    features: [
      {
        title: 'Prueba con un clic',
        description: 'Ejecute un checkout de prueba como lo haría un agente de compras con IA, con un solo clic.',
      },
      {
        title: 'Dónde se atasca un agente',
        description: 'Vea cada punto en el que un agente se detendría, con el mensaje que devolvió el checkout.',
      },
      {
        title: 'Una solución para cada problema',
        description:
          'Obtenga una solución y un enlace a la página de configuración correspondiente para cada problema que encuentre la prueba.',
      },
      {
        title: 'Lo que la prueba no puede ver',
        description: 'El informe indica lo que la prueba no puede comprobar, para que sepa qué revisar usted mismo.',
      },
      {
        title: 'Su producto y su dirección',
        description: 'Elija el producto de prueba y la dirección de envío que usa la prueba.',
      },
      {
        title: 'Nunca realiza un pedido',
        description: 'El checkout de prueba siempre se cancela. No se realiza ningún pedido.',
      },
    ] satisfies FeatureCardContent[],
    goodToKnowHeading: 'Conviene saber',
    goodToKnow: [
      'Pensado para las herramientas WebMCP del checkout de Shopify. La prueba se hace a través de Checkout MCP de Shopify, por lo que algunos pasos que solo aparecen en el navegador, como ciertas extensiones de la interfaz del checkout, pueden no detectarse. El informe indica lo que la prueba no puede comprobar.',
      'Solo lectura: la app nunca cambia la configuración de su tienda y nunca realiza un pedido.',
      'Requiere al menos un producto activo que se pueda comprar y una dirección de envío: la dirección de la tienda o una dirección de prueba que usted configure en la app.',
      'Sin cambios en el tema y sin bloques de app.',
    ],
    ctaHeading: '¿Quiere Checkout Probe para su tienda?',
    ctaBody:
      'Checkout Probe aún no está en la Shopify App Store. Envíenos un mensaje si quiere usarla en su tienda.',
  },
};
