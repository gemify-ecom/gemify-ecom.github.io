import type { FeatureCardContent, ProblemCard } from '../content-types';
import type { AppPagesDictionary } from '../dictionary-types';

/** App detail and screencast page copy in Spanish. */
export const appPagesEs: AppPagesDictionary = {
  bulkDeleteOrders: {
    title: 'Bulk Delete Orders',
    tagline:
      'Ordene su tienda de Shopify eliminando de forma masiva pedidos de prueba, datos antiguos o pedidos innecesarios, con filtros potentes y cancelación automática.',
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
          'Filtre los pedidos por rango de fechas, estado, etiquetas, cliente, estado financiero y más. Seleccione exactamente los pedidos que quiere eliminar.',
      },
      {
        title: 'Cancelación y eliminación automáticas',
        description:
          'Los pedidos se cancelan automáticamente antes de eliminarse, sin pasos manuales. Los pedidos ya preparados se gestionan con cuidado.',
      },
      {
        title: 'Historial de trabajos',
        description:
          'Siga todos los trabajos de eliminación con registros detallados. Exporte informes con fines de cumplimiento y auditoría.',
      },
      {
        title: 'Exportación de informes',
        description:
          'Genere informes detallados de los pedidos eliminados para sus registros. Ideal para documentación de cumplimiento y pistas de auditoría.',
      },
      {
        title: 'Vista previa segura antes de eliminar',
        description:
          'Consulte los pedidos antes de eliminarlos. Vea exactamente qué se va a borrar y confirme antes de continuar.',
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
          'Distingue entre los cambios provocados por un pedido y las actualizaciones manuales intencionadas. Los cambios manuales se conservan.',
      },
      {
        title: 'Restauración automática',
        description:
          'Cuando Shopify sobrescribe una dirección predeterminada tras un pedido, nosotros restauramos automáticamente la original.',
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
    title: 'LLMs.txt',
    tagline:
      'Prepare su tienda de Shopify para la IA. Genere {llmsTxt} y {llmsFullTxt} para que los asistentes de IA entiendan sus productos, colecciones y páginas.',
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
          'El estándar espera encontrar el archivo en su dominio raíz. Servirlo desde un host externo o desde la ruta de un proxy de app implica infraestructura y redirecciones adicionales.',
      },
    ] satisfies ProblemCard[],
    featuresHeading: 'Qué obtiene',
    featuresIntro:
      'Elija su contenido, genere ambos archivos y deje que Shopify los sirva desde su propio dominio. Sin hosting adicional y sin edición manual.',
    features: [
      {
        title: 'Generación con un clic',
        description:
          'Genere llms.txt y llms-full.txt desde su panel. Elija exactamente qué productos, colecciones, páginas y artículos incluir.',
      },
      {
        title: 'Salida personalizable',
        description:
          'Reordene las secciones y personalice el formato de sus archivos llms, para que el resultado describa su tienda como usted quiere.',
      },
      {
        title: 'Servido de forma nativa',
        description:
          'Los archivos se publican en su tema y Shopify los sirve en /llms.txt y /llms-full.txt, sin necesidad de hosting adicional.',
      },
      {
        title: 'Usted elige el contenido',
        description:
          'Incluya productos, colecciones, páginas, artículos del blog y políticas. Deje fuera todo lo que no quiera que resuman los asistentes de IA.',
      },
      {
        title: 'Markdown limpio',
        description:
          'Los datos de la tienda se obtienen a través de la API GraphQL de Shopify y se convierten en markdown limpio que los modelos pueden interpretar sin conjeturas.',
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
          'Pulse generar. La app obtiene los datos de su tienda mediante GraphQL y los convierte en markdown limpio.',
      },
      {
        title: 'Lista para la IA',
        description:
          'Su archivo llms.txt ya es de acceso público. Asistentes de IA como ChatGPT, Claude y Gemini pueden leer y entender su tienda.',
      },
    ] satisfies FeatureCardContent[],
    ctaHeading: '¿Listo para dar el salto a la IA?',
    ctaBody:
      'Instale LLMs.txt hoy mismo y ofrezca a los asistentes de IA una imagen fiel de su tienda. Instalación gratuita.',
  },
};
