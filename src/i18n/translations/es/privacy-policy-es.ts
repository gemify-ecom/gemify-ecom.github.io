import type { PrivacyPolicyDictionary } from '../dictionary-types';

/**
 * Privacy policy copy in Spanish, mirroring the block order of the English
 * version. This is a translation of a legal document: have it reviewed by a
 * Spanish-speaking reviewer before treating it as the authoritative text.
 */
export const privacyPolicyEs: PrivacyPolicyDictionary = {
  title: 'Política de privacidad',
  lastUpdated: 'Última actualización: 12 de agosto de 2026',

  blocks: [
    {
      kind: 'paragraph',
      text: 'En Gemify (en adelante, "nosotros" o "nuestro"), nos tomamos su privacidad en serio. Esta Política de privacidad explica cómo nuestras aplicaciones de Shopify, incluidas Bulk Delete Orders, Default Address Lock y LLMs.txt (conjuntamente, "nuestras Apps"), recopilan, utilizan, almacenan y protegen su información cuando usted usa nuestros servicios.',
    },
    {
      kind: 'highlight',
      heading: 'Puntos clave:',
      items: [
        'Solo recopilamos los datos mínimos necesarios para prestar nuestros servicios',
        'No vendemos ni compartimos sus datos con terceros con fines de marketing',
        'Usted mantiene el control total de sus datos y puede solicitar su eliminación en cualquier momento',
        'Cumplimos con el RGPD, la CPRA y otras leyes de privacidad aplicables',
      ],
    },

    { kind: 'heading', text: '1. Información que recopilamos' },
    { kind: 'subheading', text: '1.1 Información recopilada a través de las API de Shopify' },
    {
      kind: 'paragraph',
      text: 'Cuando instala y utiliza nuestras Apps, accedemos a la siguiente información a través de las API de Shopify:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Información de la tienda:',
          text: 'Nombre de la tienda, dominio, correo electrónico del propietario y zona horaria de la tienda',
        },
        {
          label: 'Datos de pedidos:',
          text: 'Detalles del pedido, incluidos número, fecha, estado, estado financiero y estado de preparación (para la app Bulk Delete Orders)',
        },
        {
          label: 'Datos de clientes:',
          text: 'Únicamente identificadores de cliente e identificadores de dirección (para la app Default Address Lock). Nunca almacenamos información personal como nombres, direcciones o datos de contacto',
        },
        {
          label: 'Contenido de la tienda:',
          text: 'Productos, colecciones, páginas, artículos del blog y políticas de la tienda leídos mediante la API GraphQL de Shopify, además del acceso al tema para publicar los archivos generados (para la app LLMs.txt)',
        },
        {
          label: 'Tokens de acceso a la API:',
          text: 'Tokens necesarios para autenticarse y comunicarse con su tienda de Shopify',
        },
      ],
    },
    { kind: 'subheading', text: '1.2 Información recopilada directamente de los comerciantes' },
    {
      kind: 'paragraph',
      text: 'Podemos recopilar la siguiente información directamente de usted:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Información de contacto:',
          text: 'Dirección de correo electrónico y nombre (si los facilita a través de solicitudes de soporte o formularios)',
        },
        {
          label: 'Datos de uso:',
          text: 'Información sobre cómo interactúa con nuestras Apps, incluidas las funciones utilizadas y las opciones configuradas',
        },
        {
          label: 'Comunicaciones de soporte:',
          text: 'Mensajes, comentarios y otras comunicaciones que nos envía',
        },
      ],
    },
    { kind: 'subheading', text: '1.3 Información recopilada de los clientes de los comerciantes' },
    {
      kind: 'paragraph',
      text: 'Nuestras Apps están diseñadas para minimizar la recopilación de datos de los clientes finales:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Bulk Delete Orders:',
          text: 'No accedemos directamente a información personal de los clientes (como nombres, direcciones o datos de pago) ni la almacenamos. Los datos de pedidos a los que se accede mediante las API de Shopify pueden contener referencias a clientes, pero no almacenamos ni tratamos por separado datos personales de clientes.',
        },
        {
          label: 'Default Address Lock:',
          text: 'Diseño con la privacidad ante todo: solo almacenamos identificadores de cliente e identificadores de dirección para habilitar la función de bloqueo de direcciones. Nunca almacenamos información personal (nombres, direcciones, números de teléfono, etc.). Todos los datos personales permanecen protegidos dentro de Shopify.',
        },
        {
          label: 'LLMs.txt:',
          text: 'No accedemos a datos de clientes ni los almacenamos. La app solo lee el contenido de la tienda (productos, colecciones, páginas, artículos del blog y políticas) que usted decide incluir. Tenga en cuenta que los archivos llms.txt generados se publican en su tienda online y son de acceso público, igual que el resto del contenido de su tienda.',
        },
        'No utilizamos cookies ni tecnologías de seguimiento en las tiendas online de cara al cliente',
      ],
    },
    { kind: 'subheading', text: '1.4 Información recopilada automáticamente' },
    {
      kind: 'paragraph',
      text: 'Recopilamos automáticamente cierta información técnica cuando usted usa nuestras Apps:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Datos de registro:',
          text: 'Direcciones IP, tipo de navegador, sistema operativo, horas de acceso y registros de errores',
        },
        {
          label: 'Información del dispositivo:',
          text: 'Tipo de dispositivo e identificadores únicos',
        },
        {
          label: 'Datos de rendimiento de la app:',
          text: 'Información sobre el rendimiento, los errores y los fallos de la app',
        },
      ],
    },

    { kind: 'heading', text: '2. Cómo utilizamos su información' },
    {
      kind: 'paragraph',
      text: 'Utilizamos la información que recopilamos con los siguientes fines:',
    },
    { kind: 'subheading', text: '2.1 Para prestar y mantener nuestros servicios' },
    {
      kind: 'list',
      items: [
        'Para operar nuestras Apps y ofrecer las funciones que usted solicita',
        'Para procesar eliminaciones de pedidos y otras operaciones (para la app Bulk Delete Orders)',
        'Para gestionar las preferencias de bloqueo de direcciones de los clientes (para la app Default Address Lock)',
        'Para generar y publicar archivos llms.txt en su tema (para la app LLMs.txt)',
        'Para autenticar su tienda y mantener un acceso seguro',
        'Para supervisar y mejorar el rendimiento y la fiabilidad de la app',
      ],
    },
    { kind: 'subheading', text: '2.2 Para comunicarnos con usted' },
    {
      kind: 'list',
      items: [
        'Para responder a sus solicitudes de soporte y consultas',
        'Para enviar notificaciones importantes sobre nuestras Apps (por ejemplo, actualizaciones de seguridad o cambios en el servicio)',
        'Para informarle sobre nuevas funciones o mejoras (solo si ha dado su consentimiento)',
      ],
    },
    { kind: 'subheading', text: '2.3 Para mejorar nuestros servicios' },
    {
      kind: 'list',
      items: [
        'Para analizar patrones de uso e identificar áreas de mejora',
        'Para resolver incidencias y corregir errores',
        'Para desarrollar nuevas funciones a partir de las necesidades de los usuarios',
      ],
    },
    { kind: 'subheading', text: '2.4 Para garantizar la seguridad y el cumplimiento' },
    {
      kind: 'list',
      items: [
        'Para detectar y prevenir fraudes, abusos e incidentes de seguridad',
        'Para cumplir con obligaciones legales y hacer valer nuestros Términos del servicio',
        'Para responder a las solicitudes de los interesados conforme exigen las leyes de privacidad',
      ],
    },
    { kind: 'paragraph', text: 'No utilizamos su información para:', strong: true },
    {
      kind: 'list',
      items: [
        'Campañas de marketing o publicidad (salvo que usted lo autorice expresamente)',
        'Vender o compartir sus datos con terceros para sus propios fines de marketing',
        'Decisiones automatizadas con efectos jurídicos o significativos para comerciantes o clientes',
      ],
    },

    { kind: 'heading', text: '3. Conservación de los datos' },
    {
      kind: 'paragraph',
      text: 'Conservamos sus datos únicamente durante el tiempo necesario para prestar nuestros servicios y cumplir los fines descritos en esta Política de privacidad:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Tiendas activas:',
          text: 'Mientras tenga nuestras Apps instaladas y utilice activamente nuestros servicios, conservamos los datos necesarios para operarlas',
        },
        {
          label: 'Tras desinstalar la app:',
          text: 'Cuando desinstala nuestras Apps, conservamos datos mínimos (identificador de la tienda y tokens de acceso) durante 30 días para facilitar una posible reinstalación. Pasados 30 días, todos los datos, salvo las estadísticas de uso agregadas, se eliminan de forma permanente',
        },
        {
          label: 'Comunicaciones de soporte:',
          text: 'Los correos y las comunicaciones de soporte se conservan durante 2 años para ayudar a resolver incidencias en curso y mejorar nuestros servicios',
        },
        {
          label: 'Datos de registro:',
          text: 'Los registros del servidor y de errores se conservan durante 90 días con fines de seguridad y depuración',
        },
        {
          label: 'Datos de cumplimiento:',
          text: 'Conservamos los datos que exijan la ley o la normativa aplicable (por ejemplo, registros financieros con fines fiscales)',
        },
      ],
    },

    { kind: 'heading', text: '4. Almacenamiento y seguridad de los datos' },
    { kind: 'subheading', text: '4.1 Dónde almacenamos sus datos' },
    {
      kind: 'paragraph',
      text: 'Gemify tiene su establecimiento en Vietnam. Sus datos se almacenan en servidores seguros proporcionados por proveedores de infraestructura en la nube de confianza ubicados en los Estados Unidos.',
    },
    {
      kind: 'paragraph',
      text: 'Si se encuentra en el Espacio Económico Europeo (EEE), el Reino Unido u otras jurisdicciones con restricciones a la transferencia de datos, tenga en cuenta que sus datos pueden transferirse y tratarse en países distintos del suyo. Nos aseguramos de que dichas transferencias cumplan la legislación aplicable mediante garantías adecuadas, entre ellas:',
    },
    {
      kind: 'list',
      items: [
        'Cláusulas Contractuales Tipo aprobadas por la Comisión Europea',
        'Adhesión al Marco de Privacidad de Datos UE-EE. UU. (cuando corresponda)',
        'Aplicación de medidas de seguridad y protecciones contractuales adicionales',
      ],
    },
    { kind: 'subheading', text: '4.2 Cómo protegemos sus datos' },
    {
      kind: 'paragraph',
      text: 'Aplicamos medidas de seguridad estándar del sector para proteger su información:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Cifrado:',
          text: 'Todos los datos se cifran en tránsito (TLS 1.2+) y en reposo (AES-256)',
        },
        {
          label: 'Controles de acceso:',
          text: 'Controles de acceso estrictos garantizan que solo el personal autorizado pueda acceder a sus datos',
        },
        {
          label: 'Autenticación:',
          text: 'Utilizamos métodos de autenticación seguros, incluido OAuth 2.0, para acceder a la API de Shopify',
        },
        {
          label: 'Auditorías de seguridad periódicas:',
          text: 'Realizamos evaluaciones de seguridad y análisis de vulnerabilidades de forma periódica',
        },
        {
          label: 'Supervisión:',
          text: 'Supervisamos nuestros sistemas de forma continua para detectar actividad sospechosa y amenazas de seguridad',
        },
        {
          label: 'Desarrollo seguro:',
          text: 'Seguimos prácticas de programación segura y realizamos revisiones de código',
        },
      ],
    },
    {
      kind: 'paragraph',
      text: 'Aunque adoptamos medidas razonables para proteger sus datos, ningún método de transmisión o almacenamiento es seguro al 100%. Si tiene dudas sobre la seguridad de sus datos, escríbanos a {email}.',
    },

    { kind: 'heading', text: '5. Comunicación y divulgación de datos' },
    {
      kind: 'paragraph',
      text: 'No vendemos, alquilamos ni intercambiamos su información personal. Solo podemos compartir su información en las siguientes circunstancias limitadas:',
    },
    { kind: 'subheading', text: '5.1 Proveedores de servicios' },
    {
      kind: 'paragraph',
      text: 'Podemos compartir datos con proveedores de servicios externos de confianza que nos ayudan a operar nuestras Apps, como:',
    },
    {
      kind: 'list',
      items: [
        'Proveedores de alojamiento en la nube (por ejemplo, AWS o Google Cloud)',
        'Servicios de seguimiento de errores y analítica',
        'Herramientas de atención al cliente',
      ],
    },
    {
      kind: 'paragraph',
      text: 'Estos proveedores están obligados contractualmente a proteger sus datos y a utilizarlos únicamente para los fines que les indicamos.',
    },
    { kind: 'subheading', text: '5.2 Requisitos legales' },
    {
      kind: 'paragraph',
      text: 'Podemos divulgar su información si la ley así lo exige o en respuesta a solicitudes válidas de autoridades públicas, incluidas:',
    },
    {
      kind: 'list',
      items: [
        'Para cumplir obligaciones legales (por ejemplo, órdenes judiciales o requerimientos)',
        'Para proteger nuestros derechos, propiedad o seguridad, o los de nuestros usuarios o del público',
        'Para detectar, prevenir o abordar fraudes o problemas de seguridad o técnicos',
      ],
    },
    { kind: 'subheading', text: '5.3 Transmisiones empresariales' },
    {
      kind: 'paragraph',
      text: 'Si Gemify participa en una fusión, adquisición o venta de activos, su información puede transferirse como parte de esa operación. Se lo notificaremos por correo electrónico o mediante un aviso destacado en nuestro sitio web antes de que su información quede sujeta a una política de privacidad distinta.',
    },

    { kind: 'heading', text: '6. Sus derechos y opciones' },
    {
      kind: 'paragraph',
      text: 'Según el lugar donde se encuentre, es posible que disponga de los siguientes derechos sobre sus datos personales:',
    },
    { kind: 'subheading', text: '6.1 Acceso y portabilidad' },
    {
      kind: 'paragraph',
      text: 'Tiene derecho a solicitar una copia de los datos personales que conservamos sobre usted. También puede pedirnos que le facilitemos sus datos en un formato portátil.',
    },
    { kind: 'subheading', text: '6.2 Rectificación' },
    {
      kind: 'paragraph',
      text: 'Tiene derecho a solicitar que corrijamos cualquier dato personal inexacto o incompleto.',
    },
    { kind: 'subheading', text: '6.3 Supresión' },
    {
      kind: 'paragraph',
      text: 'Tiene derecho a solicitar la eliminación de sus datos personales. Puede eliminar sus datos de las siguientes formas:',
    },
    {
      kind: 'list',
      items: [
        'Desinstalando nuestras Apps de su tienda de Shopify (los datos se eliminarán automáticamente en un plazo de 30 días)',
        'Escribiéndonos a {email} para solicitar la eliminación inmediata',
      ],
    },
    { kind: 'subheading', text: '6.4 Limitación y oposición' },
    {
      kind: 'paragraph',
      text: 'Tiene derecho a limitar determinados tratamientos de sus datos personales o a oponerse a ellos.',
    },
    { kind: 'subheading', text: '6.5 Baja de las comunicaciones de marketing' },
    {
      kind: 'paragraph',
      text: 'Puede darse de baja de las comunicaciones de marketing en cualquier momento haciendo clic en el enlace de baja incluido en cualquier correo de marketing o poniéndose en contacto con nosotros.',
    },
    { kind: 'subheading', text: '6.6 Retirada del consentimiento' },
    {
      kind: 'paragraph',
      text: 'Cuando el tratamiento de sus datos se base en su consentimiento, tiene derecho a retirarlo en cualquier momento.',
    },
    { kind: 'subheading', text: '6.7 Cómo ejercer sus derechos' },
    {
      kind: 'paragraph',
      text: 'Para ejercer cualquiera de estos derechos, escríbanos a {email}. Responderemos a su solicitud en un plazo de 30 días.',
    },

    { kind: 'heading', text: '7. Cumplimiento de las leyes de privacidad' },
    { kind: 'subheading', text: '7.1 RGPD (Espacio Económico Europeo)' },
    {
      kind: 'paragraph',
      text: 'Si se encuentra en el EEE, tratamos sus datos de acuerdo con el Reglamento General de Protección de Datos (RGPD). Nuestras bases legales para el tratamiento de sus datos incluyen:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Necesidad contractual:',
          text: 'Para prestar nuestras Apps y cumplir nuestro contrato con usted',
        },
        {
          label: 'Intereses legítimos:',
          text: 'Para mejorar nuestros servicios, garantizar la seguridad y ofrecer soporte',
        },
        {
          label: 'Consentimiento:',
          text: 'Cuando usted haya consentido expresamente actividades de tratamiento concretas',
        },
        { label: 'Obligaciones legales:', text: 'Para cumplir la legislación aplicable' },
      ],
    },
    { kind: 'subheading', text: '7.2 CPRA (California)' },
    {
      kind: 'paragraph',
      text: 'Si reside en California, dispone de derechos adicionales en virtud de la Ley de Derechos de Privacidad de California (CPRA), entre ellos:',
    },
    {
      kind: 'list',
      items: [
        'Derecho a saber qué información personal recopilamos y cómo se utiliza',
        'Derecho a eliminar su información personal',
        'Derecho a oponerse a la venta o la comunicación de su información personal (nota: no vendemos ni comunicamos información personal)',
        'Derecho a corregir información personal inexacta',
        'Derecho a limitar el uso de información personal sensible',
        'Derecho a no sufrir discriminación por ejercer sus derechos de privacidad',
      ],
    },
    { kind: 'subheading', text: '7.3 Otras jurisdicciones' },
    {
      kind: 'paragraph',
      text: 'Cumplimos las leyes de privacidad de las demás jurisdicciones en las que operamos, incluidos el RGPD del Reino Unido, la Colorado Privacy Act, la Virginia Consumer Data Protection Act y otras normas aplicables.',
    },

    { kind: 'heading', text: '8. Webhooks obligatorios de Shopify' },
    {
      kind: 'paragraph',
      text: 'Como desarrollador de apps de Shopify, estamos suscritos a los webhooks de cumplimiento obligatorios para gestionar las solicitudes de los interesados:',
    },
    { kind: 'subheading', text: '8.1 Solicitud de datos del cliente' },
    {
      kind: 'paragraph',
      text: 'Cuando un cliente solicita sus datos a un comerciante, facilitamos todos los datos que hayamos recopilado sobre ese cliente (si los hubiera).',
    },
    { kind: 'subheading', text: '8.2 Eliminación de datos del cliente' },
    {
      kind: 'paragraph',
      text: 'Cuando un cliente solicita la eliminación de sus datos, eliminamos de forma permanente cualquier dato personal que hayamos recopilado sobre ese cliente en un plazo de 30 días.',
    },
    { kind: 'subheading', text: '8.3 Eliminación de datos de la tienda' },
    {
      kind: 'paragraph',
      text: 'Cuando un comerciante desinstala nuestras Apps o cierra su tienda de Shopify, eliminamos todos los datos asociados en un plazo de 30 días (tal como se indica en la sección 3).',
    },

    { kind: 'heading', text: '9. Marketing y publicidad' },
    {
      kind: 'paragraph',
      text: 'Actualmente no realizamos campañas de marketing ni de publicidad con datos de clientes. Si en el futuro incorporamos funciones de marketing:',
    },
    {
      kind: 'list',
      items: [
        'Ofreceremos mecanismos claros de suscripción y obtendremos el consentimiento expreso',
        'Respetaremos las preferencias de consentimiento y las solicitudes de baja de los clientes',
        'Cumpliremos la legislación de marketing aplicable, incluidas CAN-SPAM, CASL y el RGPD',
      ],
    },

    { kind: 'heading', text: '10. Privacidad de los menores' },
    {
      kind: 'paragraph',
      text: 'Nuestras Apps no están dirigidas a personas menores de 18 años. No recopilamos conscientemente información personal de menores. Si cree que hemos recopilado información de un menor de forma involuntaria, contáctenos de inmediato y tomaremos medidas para eliminarla.',
    },

    { kind: 'heading', text: '11. Transferencias internacionales de datos' },
    {
      kind: 'paragraph',
      text: 'Operamos a escala global y podemos transferir sus datos a países distintos del suyo. Cuando lo hacemos, garantizamos que existan las salvaguardas adecuadas, entre ellas:',
    },
    {
      kind: 'list',
      items: [
        'Cláusulas Contractuales Tipo (CCT) aprobadas por las autoridades competentes',
        'Decisiones de adecuación de la Comisión Europea u otros organismos reguladores',
        'Medidas de seguridad técnicas y organizativas adicionales',
      ],
    },

    { kind: 'heading', text: '12. Enlaces a terceros' },
    {
      kind: 'paragraph',
      text: 'Nuestras Apps o nuestro sitio web pueden contener enlaces a sitios web o servicios de terceros. No somos responsables de las prácticas de privacidad de esos terceros. Le recomendamos revisar la política de privacidad de cualquier sitio de terceros que visite.',
    },

    { kind: 'heading', text: '13. Cambios en esta Política de privacidad' },
    {
      kind: 'paragraph',
      text: 'Podemos actualizar esta Política de privacidad cada cierto tiempo para reflejar cambios en nuestras prácticas, requisitos legales u otros motivos operativos. Cuando introduzcamos cambios significativos:',
    },
    {
      kind: 'list',
      items: [
        'Actualizaremos la fecha de "Última actualización" al inicio de esta política',
        'Se lo notificaremos por correo electrónico (si nos ha facilitado su dirección)',
        'Mostraremos un aviso destacado dentro de nuestras Apps',
      ],
    },
    {
      kind: 'paragraph',
      text: 'El uso continuado de nuestras Apps tras la entrada en vigor de los cambios constituye su aceptación de la Política de privacidad revisada.',
    },

    { kind: 'heading', text: '14. Delegado de protección de datos' },
    {
      kind: 'paragraph',
      text: 'Si tiene preguntas sobre cómo tratamos sus datos personales o desea ejercer sus derechos de privacidad, puede contactar con nuestro delegado de protección de datos en:',
    },
    {
      kind: 'list',
      items: [
        { label: 'Correo electrónico:', text: '{email}' },
        { label: 'Asunto:', text: '"Consulta de privacidad" o "Solicitud de protección de datos"' },
      ],
    },

    { kind: 'heading', text: '15. Contacto' },
    {
      kind: 'paragraph',
      text: 'Si tiene preguntas, inquietudes o solicitudes relativas a esta Política de privacidad o a nuestras prácticas de datos, contáctenos:',
    },
    { kind: 'contact', brand: 'Gemify', emailLabel: 'Correo electrónico:', websiteLabel: 'Sitio web:' },

    { kind: 'heading', text: '16. Reclamaciones y autoridades de control' },
    {
      kind: 'paragraph',
      text: 'Si considera que no hemos tratado sus datos personales de forma adecuada, tiene derecho a presentar una reclamación ante su autoridad local de protección de datos. Los residentes en el EEE pueden consultar la lista de autoridades de protección de datos en {edpb}.',
    },

    { kind: 'divider' },
    {
      kind: 'closing',
      text: 'Esta Política de privacidad se actualizó por última vez el 12 de agosto de 2026. Al usar nuestras Apps, usted reconoce que ha leído y comprendido esta Política de privacidad y que acepta quedar vinculado por ella.',
    },
  ],
};
