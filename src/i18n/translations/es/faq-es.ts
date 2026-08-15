import type { FaqDictionary } from '../dictionary-types';

/** FAQ page copy in Spanish. `{email}` and `{privacyPolicy}` become links. */
export const faqEs: FaqDictionary = {
  title: 'Preguntas frecuentes',
  intro:
    'Aquí encontrará respuestas a las preguntas más habituales sobre Gemify y nuestras apps. ¿No encuentra lo que busca? Escríbanos a {email}',
  questionPrefix: 'P:',

  sections: [
    {
      title: 'Preguntas generales',
      items: [
        {
          question: '¿Qué es Gemify?',
          paragraphs: [
            'Gemify es una empresa de desarrollo de apps para Shopify centrada en crear herramientas simples y potentes para comerciantes. Creamos apps que resuelven problemas reales sin complejidad innecesaria.',
          ],
        },
        {
          question: '¿Es seguro usar sus apps?',
          paragraphs: [
            'Sí, totalmente. Todas nuestras apps siguen las mejores prácticas y las directrices de seguridad de Shopify. Utilizamos cifrado estándar del sector y autenticación segura, y nunca compartimos sus datos con terceros. Los datos de su tienda están protegidos en todo momento.',
          ],
        },
        {
          question: '¿Cómo puedo obtener soporte?',
          paragraphs: [
            'Puede contactar con nuestro equipo de soporte escribiendo a {email}. Normalmente respondemos en menos de 24 horas en días hábiles.',
          ],
        },
        {
          question: '¿Ofrecen reembolsos?',
          paragraphs: [
            'Nuestras apps siguen la política de reembolsos estándar de Shopify. Si no queda satisfecho con alguna de nuestras apps, contáctenos y trabajaremos con usted para resolver cualquier problema o tramitar un reembolso si corresponde.',
          ],
        },
      ],
    },
    {
      title: 'App Bulk Delete Orders',
      items: [
        {
          question: '¿Qué hace la app Bulk Delete Orders?',
          paragraphs: [
            'Bulk Delete Orders le permite eliminar de forma eficiente varios pedidos de su tienda de Shopify a la vez. Puede usar filtros potentes para seleccionar pedidos concretos por estado, fecha, etiquetas u otros criterios. La app cancela automáticamente los pedidos antes de eliminarlos, lo que le ahorra tiempo y trabajo manual.',
          ],
        },
        {
          question: '¿Es seguro eliminar pedidos?',
          paragraphs: [
            'Sí, pero conviene actuar con cuidado. La app cancela automáticamente los pedidos antes de eliminarlos para garantizar un tratamiento correcto. Sin embargo, una vez eliminados, los pedidos no se pueden recuperar. Le recomendamos:',
          ],
          bullets: [
            'Usar los filtros con cuidado para seleccionar únicamente los pedidos que quiere eliminar',
            'Empezar con un lote de prueba pequeño',
            'Exportar sus pedidos como copia de seguridad antes de una eliminación masiva',
          ],
        },
        {
          question: '¿Puedo deshacer una eliminación?',
          paragraphs: [
            'No. Una vez eliminados de Shopify, los pedidos no se pueden restaurar ni desde nuestra app ni desde el panel de administración de Shopify. Por eso recomendamos revisar muy bien los filtros y empezar con lotes de prueba pequeños.',
          ],
        },
        {
          question: '¿Qué filtros están disponibles?',
          paragraphs: ['Puede filtrar los pedidos por:'],
          bullets: [
            'Estado del pedido (pendiente, pagado, preparado, etc.)',
            'Estado financiero (pagado, pendiente, reembolsado, etc.)',
            'Estado de preparación (sin preparar, preparado, preparado parcialmente)',
            'Rango de fechas (fecha de creación, fecha de actualización)',
            'Etiquetas del pedido',
            'Y más',
          ],
        },
        {
          question: '¿Cuánto tarda la eliminación de pedidos?',
          paragraphs: [
            'La velocidad de eliminación depende del número de pedidos y de los límites de la API de Shopify. La app procesa las eliminaciones en segundo plano y usted puede seguir el progreso en la sección Historial de trabajos. En lotes grandes, el proceso puede tardar de varios minutos a algunas horas.',
          ],
        },
        {
          question: '¿Puedo hacer un seguimiento de los trabajos de eliminación?',
          paragraphs: [
            'Sí. La app incluye la función Historial de trabajos, donde puede consultar todos los trabajos de eliminación y su estado, además de exportar informes para sus registros.',
          ],
        },
        {
          question: '¿Esto afectará a las analíticas de mi tienda de Shopify?',
          paragraphs: [
            'Sí. Al eliminar pedidos, estos desaparecen de las analíticas y los informes de Shopify. Los datos asociados a esos pedidos dejarán de aparecer en las estadísticas de su tienda. Por eso recomendamos valorar con cuidado qué pedidos quiere eliminar.',
          ],
        },
        {
          question: '¿Qué ocurre con la información del cliente cuando elimino pedidos?',
          paragraphs: [
            'Al eliminar un pedido se borra el registro del pedido, pero no la cuenta del cliente. Los perfiles de cliente permanecen en su tienda salvo que los elimine por separado desde la gestión de clientes de Shopify.',
          ],
        },
        {
          question: '¿Puedo eliminar borradores de pedidos o pagos abandonados?',
          paragraphs: [
            'Sí. Bulk Delete Orders admite tanto pedidos normales como borradores de pedidos. Puede eliminar de forma masiva cualquiera de los dos tipos con filtros potentes.',
          ],
        },
        {
          question: '¿Cuánto cuesta Bulk Delete Orders?',
          paragraphs: ['Nuestros precios son sencillos:'],
          bullets: [
            {
              label: 'Plan Free (gratuito):',
              text: '50 operaciones de eliminación masiva de pedidos o borradores de pedidos',
            },
            {
              label: 'Plan Complete ($36/año):',
              text: 'Operaciones ilimitadas de eliminación masiva de pedidos o borradores de pedidos',
            },
          ],
        },
      ],
    },
    {
      title: 'App Default Address Lock',
      items: [
        {
          question: '¿Qué hace Default Address Lock?',
          paragraphs: [
            'Default Address Lock evita que Shopify sobrescriba automáticamente la dirección predeterminada de sus clientes cuando realizan pedidos con una dirección de envío distinta. Cuando un cliente envía un regalo a otra persona, Shopify normalmente cambia su dirección predeterminada por la del destinatario del regalo. Nuestra app impide que eso ocurra y mantiene intacta la dirección predeterminada original.',
          ],
        },
        {
          question: '¿Por qué Shopify cambia las direcciones predeterminadas de los clientes?',
          paragraphs: [
            'Se trata de un comportamiento antiguo de Shopify (desde 2015) por el cual la plataforma actualiza automáticamente la dirección predeterminada del cliente para que coincida con la dirección de envío de su pedido más reciente. Aunque busca ser una comodidad, causa problemas en:',
          ],
          bullets: [
            'Tiendas de regalos, donde los clientes envían a destinatarios distintos',
            'Comerciantes B2B, donde los compradores envían a sus propios clientes',
            'Tiendas con integraciones de CRM que dependen de direcciones de cliente exactas',
            'Negocios de cajas por suscripción',
          ],
        },
        {
          question: '¿Cómo detecta la app qué cambios debe bloquear?',
          paragraphs: [
            'Nuestro sistema de detección inteligente distingue entre los cambios de dirección provocados por un pedido y las actualizaciones manuales intencionadas. Si un cliente actualiza deliberadamente su dirección desde su cuenta, ese cambio se conserva. Solo se revierten las sobrescrituras automáticas causadas por la realización de pedidos.',
          ],
        },
        {
          question: '¿Afectará a la capacidad de mis clientes de actualizar sus direcciones?',
          paragraphs: [
            'No. Los clientes pueden seguir actualizando manualmente su dirección predeterminada en cualquier momento desde su cuenta. La app solo impide las sobrescrituras automáticas que se producen cuando se realizan pedidos con direcciones de envío distintas.',
          ],
        },
        {
          question: '¿Qué datos almacena Default Address Lock?',
          paragraphs: [
            'Seguimos un enfoque de privacidad ante todo y solo almacenamos identificadores de dirección. Nunca guardamos el contenido real de la dirección, como nombres de calle o ciudades. Esta huella mínima de datos garantiza que la información de sus clientes siga estando segura sin renunciar a una protección completa.',
          ],
        },
        {
          question: '¿Cuánto cuesta Default Address Lock?',
          paragraphs: [
            'Ofrecemos precios basados en el volumen de pedidos, para que sea accesible a tiendas de cualquier tamaño:',
          ],
          bullets: [
            { label: 'Free (gratuito):', text: 'Hasta 30 pedidos al mes' },
            {
              label: 'Basic ($4.99/mes):',
              text: 'Hasta 100 pedidos al mes, o $49.90/año con un 17% de ahorro',
            },
            {
              label: 'Growth ($24.99/mes):',
              text: 'Hasta 500 pedidos al mes, o $249.90/año con un 17% de ahorro',
            },
            {
              label: 'Enterprise ($99/mes):',
              text: 'Pedidos ilimitados, o $990/año con un 17% de ahorro',
            },
          ],
        },
        {
          question: '¿Default Address Lock ya está disponible?',
          paragraphs: [
            'Sí. Default Address Lock está disponible en la Shopify App Store. Puede instalarla directamente desde su ficha. Si tiene alguna duda antes de empezar, escríbanos a {email}.',
          ],
        },
      ],
    },
    {
      title: 'App LLMs-full.txt',
      items: [
        {
          question: '¿Qué hace la app LLMs-full.txt?',
          paragraphs: [
            'LLMs-full.txt genera los archivos agents.md, llms.txt y llms-full.txt de su tienda de Shopify, para que asistentes de IA como ChatGPT, Claude y Gemini puedan entender sus productos, colecciones y páginas. Los archivos se publican en su tema y Shopify los sirve en /agents.md, /llms.txt y /llms-full.txt desde su propio dominio, sin necesidad de hosting adicional.',
          ],
        },
        {
          question: '¿Qué son agents.md, llms.txt y llms-full.txt?',
          paragraphs: [
            'Son archivos de markdown simple basados en el estándar llms.txt. Igual que robots.txt guía a los motores de búsqueda, estos archivos guían a los asistentes de IA. llms.txt es un índice conciso de su tienda, llms-full.txt contiene el contenido completo de todo lo que decida incluir y agents.md publica la misma descripción de la tienda con el nombre de archivo que buscan los agentes de IA. Los modelos de IA leen estos archivos con mucha más fiabilidad que el HTML renderizado de una tienda.',
          ],
        },
        {
          question: '¿Qué contenido puedo incluir?',
          paragraphs: [
            'Usted decide exactamente qué entra en los archivos y puede dejar fuera todo lo que no quiera que resuman los asistentes de IA. Puede incluir:',
          ],
          bullets: [
            'Productos',
            'Colecciones',
            'Páginas',
            'Artículos del blog',
            'Políticas de la tienda',
          ],
        },
        {
          question: '¿LLMs-full.txt accede a datos de clientes?',
          paragraphs: [
            'No. LLMs-full.txt solo lee contenido de la tienda (productos, colecciones, páginas, artículos del blog y políticas) a través de la API GraphQL de Shopify. Nunca accede a pedidos ni a información de clientes.',
          ],
        },
        {
          question: '¿Quién puede ver los archivos generados?',
          paragraphs: [
            'Los archivos son de acceso público en el dominio de su tienda, igual que las páginas de su tienda online. Solo contienen el contenido que usted haya decidido incluir, que ya es público en su tienda.',
          ],
        },
        {
          question: '¿Los archivos ralentizarán mi tienda?',
          paragraphs: [
            'No. Los archivos generados son archivos de texto estáticos que Shopify sirve junto con su tema. No añaden ningún script a su tienda y no afectan a la velocidad de carga.',
          ],
        },
        {
          question: '¿Qué ocurre cuando cambia mi catálogo?',
          paragraphs: [
            'Vuelva a generar los archivos desde el panel de la app cada vez que cambien sus productos, colecciones o páginas. La generación se hace con un clic y los archivos publicados se actualizan en el mismo lugar.',
          ],
        },
        {
          question: '¿Cuánto cuesta LLMs-full.txt?',
          paragraphs: [
            'LLMs-full.txt tiene un plan gratuito con hasta 50 elementos por tipo de contenido. El plan Complete cuesta 9,99 $/mes por productos, colecciones, páginas y artículos de blog ilimitados, además de soporte por correo electrónico.',
          ],
        },
      ],
    },
    {
      title: 'Precios y facturación',
      items: [
        {
          question: '¿Cuánto cuestan sus apps?',
          paragraphs: [
            'Los precios varían según la app. Puede consultar los detalles en la página de cada app en este sitio o en su ficha de la Shopify App Store. Todas nuestras apps ofrecen un plan gratuito para que pueda probarlas antes de mejorar de plan.',
          ],
        },
        {
          question: '¿Cómo se me factura?',
          paragraphs: [
            'Toda la facturación se gestiona a través de Shopify. Los cargos de la app aparecen en su factura habitual de Shopify y siguen su ciclo de facturación. Puede cancelar en cualquier momento desde el panel de administración de Shopify.',
          ],
        },
        {
          question: '¿Hay un plan gratuito?',
          paragraphs: ['Sí, todas nuestras apps ofrecen un plan gratuito:'],
          bullets: [
            { label: 'Bulk Delete Orders:', text: '50 operaciones de eliminación masiva gratuitas' },
            { label: 'Default Address Lock:', text: 'Gratis hasta 30 pedidos al mes' },
            { label: 'LLMs-full.txt:', text: 'Gratis hasta 50 elementos por tipo de contenido' },
          ],
        },
        {
          question: '¿Puedo cancelar en cualquier momento?',
          paragraphs: [
            'Sí, puede cancelar cualquiera de nuestras apps cuando quiera desde el panel de administración de Shopify. Basta con desinstalar la app y no se le cobrará el siguiente ciclo de facturación.',
          ],
        },
      ],
    },
    {
      title: 'Privacidad y seguridad',
      items: [
        {
          question: '¿Qué datos recopilan?',
          paragraphs: [
            'Solo recopilamos los datos mínimos necesarios para prestar los servicios de nuestras apps. Normalmente incluyen información de la tienda y los datos concretos que la app necesita para funcionar (por ejemplo, datos de pedidos para Bulk Delete Orders, o contenido de productos y páginas para LLMs-full.txt). Para conocer todos los detalles, consulte nuestra {privacyPolicy}.',
          ],
        },
        {
          question: '¿Venden mis datos?',
          paragraphs: [
            'No, nunca. No vendemos, alquilamos ni intercambiamos sus datos con terceros. Los datos de su tienda se usan únicamente para prestar los servicios de las apps que haya instalado.',
          ],
        },
        {
          question: '¿Cómo se protegen mis datos?',
          paragraphs: ['Aplicamos medidas de seguridad estándar del sector, entre ellas:'],
          bullets: [
            'Cifrado en tránsito (TLS 1.2+) y en reposo (AES-256)',
            'Autenticación segura mediante OAuth 2.0',
            'Auditorías de seguridad periódicas',
            'Controles de acceso estrictos',
          ],
        },
        {
          question: '¿Qué ocurre con mis datos si desinstalo una app?',
          paragraphs: [
            'Cuando desinstala una de nuestras apps, conservamos datos mínimos (el identificador de la tienda y los tokens de acceso) durante 30 días para facilitar una posible reinstalación. Pasados 30 días, todos sus datos se eliminan de forma permanente de nuestros sistemas.',
          ],
        },
        {
          question: '¿Cumplen con el RGPD?',
          paragraphs: [
            'Sí, cumplimos con el RGPD, la CPRA y otras normativas de privacidad. Estamos suscritos a los webhooks de cumplimiento obligatorios de Shopify y gestionamos adecuadamente las solicitudes de los interesados. Consulte nuestra {privacyPolicy} para más detalles.',
          ],
        },
      ],
    },
    {
      title: 'Preguntas técnicas',
      items: [
        {
          question: '¿Qué planes de Shopify son compatibles?',
          paragraphs: [
            'Nuestras apps funcionan con todos los planes de Shopify, incluidos Basic, Shopify, Advanced y Shopify Plus. Algunas funciones pueden variar según el acceso a la API que permita su plan.',
          ],
        },
        {
          question: '¿Sus apps funcionan con Shopify Plus?',
          paragraphs: [
            'Sí, todas nuestras apps son totalmente compatibles con las tiendas de Shopify Plus.',
          ],
        },
        {
          question: '¿Sus apps ralentizarán mi tienda?',
          paragraphs: [
            'No. Nuestras apps están diseñadas para ser ligeras y eficientes. Funcionan principalmente en el backend y no añaden scripts a las páginas de su tienda, por lo que no afectan a su velocidad de carga. Los archivos publicados por LLMs-full.txt son texto estático simple y tampoco influyen en el tiempo de carga.',
          ],
        },
        {
          question: '¿Necesito conocimientos técnicos para usar sus apps?',
          paragraphs: [
            'No hacen falta conocimientos técnicos. Nuestras apps están diseñadas para ser intuitivas y fáciles de usar. Si sabe manejar el panel de administración de Shopify, sabrá usar nuestras apps. Además, le damos soporte si necesita ayuda.',
          ],
        },
        {
          question: '¿Puedo usar varias apps de Gemify a la vez?',
          paragraphs: [
            'Sí, nuestras apps están diseñadas para funcionar de forma independiente y no entran en conflicto entre sí. Puede instalar y usar tantas apps de Gemify como necesite.',
          ],
        },
      ],
    },
  ],

  contactBox: {
    heading: '¿Todavía tiene dudas?',
    body: '¿No encuentra la respuesta que busca? Estamos aquí para ayudarle.',
    cta: 'Contactar con soporte',
  },
};
