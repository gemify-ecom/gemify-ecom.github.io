import type { PrivacyPolicyDictionary } from '../dictionary-types';

/**
 * Privacy policy copy in Spanish, modelled as an ordered list of blocks that
 * mirrors the English version. `{email}` becomes the support mailto link and
 * `{edpb}` the EDPB link.
 *
 * Written for merchants: what each app holds, why, for how long, who
 * processes it, and where. Implementation detail (cipher names, Shopify
 * event topics, access scopes, hosting regions) lives in each app's own repo.
 * This is a translation of a legal document: have it reviewed by a
 * Spanish-speaking reviewer before treating it as the authoritative text.
 */
export const privacyPolicyEs: PrivacyPolicyDictionary = {
  title: 'Política de privacidad',
  lastUpdated: 'Última actualización: 29 de septiembre de 2026',

  blocks: [
    {
      kind: 'paragraph',
      text: 'En Gemify (en adelante, "nosotros" o "nuestro"), nos tomamos su privacidad en serio. Esta Política de privacidad explica cómo nuestras aplicaciones de Shopify, incluidas Bulk Delete Orders, Default Address Lock, LLMs-full.txt, Japan Multiship, Best Store Locator y Checkout Probe (conjuntamente, "nuestras Apps"), recopilan, utilizan, almacenan y protegen su información cuando usted usa nuestros servicios.',
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
    {
      kind: 'list',
      items: [
        {
          label: 'Información de la tienda:',
          text: 'Nombre de la tienda, dominio, correo electrónico del propietario y zona horaria, además de la clave de acceso que Shopify emite para que nuestras Apps puedan conectarse a su tienda',
        },
        {
          label: 'Contacto y soporte:',
          text: 'Su nombre, su dirección de correo electrónico y los mensajes que nos envía',
        },
        {
          label: 'Uso y registros:',
          text: 'Las funciones que utiliza, los ajustes que elige, los errores y los registros habituales del servidor (dirección IP, tipo de navegador y horas de acceso)',
        },
        {
          label: 'Datos de clientes:',
          text: 'La mayoría de nuestras Apps no almacenan datos personales de sus clientes. La sección 2 indica exactamente qué conserva cada App',
        },
      ],
    },

    { kind: 'heading', text: '2. Qué conserva cada App' },
    {
      kind: 'paragraph',
      text: 'Cada App conserva solo lo que necesita para funcionar. Los datos permanecen vinculados a su tienda y la App los utiliza únicamente para ofrecerle sus funciones.',
    },
    { kind: 'subheading', text: '2.1 Bulk Delete Orders' },
    {
      kind: 'list',
      items: [
        {
          label: 'Datos:',
          text: 'Los identificadores de los pedidos, borradores de pedidos y clientes que usted selecciona, y los recuentos de cada trabajo. No se guardan nombres, direcciones, correos electrónicos ni datos de pago de los clientes',
        },
        {
          label: 'Para qué:',
          text: 'Para ejecutar los trabajos de eliminación y anonimización que usted inicia y mostrar su historial',
        },
        { label: 'Cuánto tiempo:', text: 'Mientras la App esté instalada; después se eliminan en un plazo de 30 días desde la desinstalación' },
      ],
    },
    { kind: 'subheading', text: '2.2 Default Address Lock' },
    {
      kind: 'list',
      items: [
        {
          label: 'Datos:',
          text: 'Solo identificadores de cliente e identificadores de dirección. Los nombres, las direcciones y los números de teléfono permanecen en Shopify',
        },
        {
          label: 'Para qué:',
          text: 'Para restaurar la dirección predeterminada de un cliente cuando un pedido la cambia y mostrar el historial de actividad',
        },
        { label: 'Cuánto tiempo:', text: 'Mientras la App esté instalada; después se eliminan en un plazo de 30 días desde la desinstalación' },
      ],
    },
    { kind: 'subheading', text: '2.3 LLMs-full.txt' },
    {
      kind: 'list',
      items: [
        {
          label: 'Datos:',
          text: 'El contenido de la tienda que usted decide incluir: productos, colecciones, páginas, artículos del blog y políticas. Ningún dato de clientes ni de pedidos',
        },
        {
          label: 'Para qué:',
          text: 'Para crear sus archivos llms.txt y publicarlos en su tema. Los archivos publicados son públicos en su tienda online, igual que el resto del contenido de su tienda',
        },
        { label: 'Cuánto tiempo:', text: 'Mientras la App esté instalada; después se eliminan en un plazo de 30 días desde la desinstalación' },
      ],
    },
    { kind: 'subheading', text: '2.4 Japan Multiship' },
    {
      kind: 'list',
      items: [
        {
          label: 'Datos:',
          text: 'En los pedidos de regalo, el nombre, la dirección y el número de teléfono de cada destinatario que el comprador introduce en la página del carrito, la fecha y la franja horaria de entrega, y el número de seguimiento. Un destinatario puede no tener ninguna relación con la tienda',
        },
        {
          label: 'Para qué:',
          text: 'Para dividir el pedido en un envío por destinatario, crear el archivo de envío de Yamato B2 Cloud y añadir los números de seguimiento para que se notifique al comprador. La App no utiliza los datos de los destinatarios para ningún otro fin',
        },
        {
          label: 'Protección:',
          text: 'Los datos de los destinatarios se cifran y se almacenan únicamente en Japón. La App registra qué miembros del personal del comerciante consultaron datos de destinatarios y cuándo, para detectar usos indebidos. Ese registro no contiene datos de los destinatarios y se elimina al cabo de un año',
        },
        {
          label: 'Cuánto tiempo:',
          text: 'Los datos del destinatario se eliminan automáticamente 90 días después del envío o la cancelación del pedido. El comerciante puede elegir un plazo más corto. Nada se conserva más de 180 días',
        },
        {
          label: 'APPI japonesa:',
          text: 'El comerciante sigue siendo responsable de los datos de los destinatarios conforme a la ley japonesa de protección de la información personal (APPI). Japan Multiship los trata únicamente en nombre del comerciante',
        },
      ],
    },
    { kind: 'subheading', text: '2.5 Best Store Locator' },
    {
      kind: 'list',
      items: [
        {
          label: 'Datos:',
          text: 'Las ubicaciones de tiendas que usted introduce o importa, como nombres, direcciones, datos de contacto y horarios de apertura. Es información comercial que usted publica intencionadamente en su tienda online',
        },
        {
          label: 'Visitantes de la tienda online:',
          text: 'Las búsquedas y la posición de "Usar mi ubicación" se usan solo para responder a esa búsqueda y no se almacenan. El mapa no añade cookies, herramientas de análisis ni rastreadores publicitarios',
        },
        {
          label: 'Tienda favorita (opcional):',
          text: 'Desactivada por defecto. Si la activa, la tienda que elige un cliente con sesión iniciada se guarda en su propio perfil de cliente de Shopify, no en nuestros servidores',
        },
        { label: 'Cuánto tiempo:', text: 'Se eliminan unas 48 horas después de desinstalar la App' },
      ],
    },
    { kind: 'subheading', text: '2.6 Checkout Probe' },
    {
      kind: 'list',
      items: [
        {
          label: 'Datos:',
          text: 'Sus ajustes de prueba (el producto de prueba y la dirección de envío de prueba) y sus últimos 10 informes de prueba',
        },
        {
          label: 'Para qué:',
          text: 'Para probar su checkout tal como lo haría un agente de compras con IA y mostrar los resultados. Una prueba nunca realiza un pedido, nunca cobra nada y nunca cambia la configuración de su tienda',
        },
        {
          label: 'Sin datos de clientes:',
          text: 'Todas las pruebas usan un comprador de prueba ficticio, no una persona real. La App solo lee sus productos y su configuración de envíos',
        },
        { label: 'Cuánto tiempo:', text: 'Solo se conservan los últimos 10 informes. Todo se elimina al desinstalar la App' },
      ],
    },

    { kind: 'heading', text: '3. Cómo utilizamos su información' },
    {
      kind: 'list',
      items: [
        'Para ofrecer las funciones de las Apps que utiliza y conectarnos a su tienda de forma segura',
        'Para responder a sus solicitudes de soporte',
        'Para enviar avisos importantes sobre nuestras Apps, como actualizaciones de seguridad y cambios en el servicio',
        'Para informarle sobre nuevas funciones, solo si ha dado su consentimiento',
        'Para resolver problemas y mejorar nuestras Apps',
        'Para prevenir fraudes y abusos, cumplir obligaciones legales y responder a solicitudes de datos',
      ],
    },
    { kind: 'paragraph', text: 'No utilizamos su información para:', strong: true },
    {
      kind: 'list',
      items: [
        'Marketing o publicidad, salvo que usted lo autorice expresamente',
        'Venderla o compartirla con terceros para sus propios fines de marketing',
        'Decisiones automatizadas con efectos jurídicos o significativos similares para comerciantes o clientes',
      ],
    },

    { kind: 'heading', text: '4. Cuánto tiempo conservamos los datos' },
    {
      kind: 'list',
      items: [
        { label: 'Mientras una App está instalada:', text: 'Conservamos los datos que la App necesita para funcionar' },
        {
          label: 'Tras desinstalar la App:',
          text: 'Sus datos se eliminan en un plazo de 30 días, y antes en algunas Apps (consulte la sección 2). Podemos conservar estadísticas de uso anónimas y agregadas',
        },
        { label: 'Correos de soporte:', text: '2 años, para ayudar con incidencias en curso' },
        { label: 'Registros del servidor:', text: '90 días, con fines de seguridad y resolución de problemas' },
        { label: 'Registros legales:', text: 'El tiempo que exija la ley, por ejemplo a efectos fiscales' },
      ],
    },

    { kind: 'heading', text: '5. Dónde almacenamos los datos y cómo los protegemos' },
    {
      kind: 'paragraph',
      text: 'Sus datos se almacenan con proveedores de alojamiento en la nube en los Estados Unidos, salvo los datos de Japan Multiship, que se almacenan únicamente en Japón.',
    },
    {
      kind: 'paragraph',
      text: 'Si se encuentra en el Espacio Económico Europeo (EEE), el Reino Unido u otra región con normas sobre transferencias de datos, sus datos pueden tratarse fuera de su país. Protegemos estas transferencias con Cláusulas Contractuales Tipo y medidas de seguridad adicionales.',
    },
    {
      kind: 'list',
      items: [
        { label: 'Cifrado:', text: 'Los datos se cifran en tránsito y en reposo' },
        { label: 'Controles de acceso:', text: 'Solo el personal autorizado puede acceder a sus datos' },
        { label: 'Inicio de sesión seguro:', text: 'Nuestras Apps se conectan a su tienda mediante el inicio de sesión seguro de Shopify' },
        { label: 'Auditorías de seguridad y supervisión:', text: 'Realizamos revisiones de seguridad periódicas y vigilamos nuestros sistemas para detectar amenazas' },
        { label: 'Desarrollo seguro:', text: 'Seguimos prácticas de programación segura y revisamos nuestro código' },
      ],
    },
    {
      kind: 'paragraph',
      text: 'Ningún método de transmisión o almacenamiento es seguro al 100%. Si tiene dudas sobre la seguridad de sus datos, escríbanos a {email}.',
    },

    { kind: 'heading', text: '6. Proveedores de servicios y comunicación de datos' },
    {
      kind: 'paragraph',
      text: 'No vendemos, alquilamos ni intercambiamos su información personal. Solo la compartimos en estos casos:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Proveedores de servicios:',
          text: 'Shopify (la plataforma en la que funcionan nuestras Apps), proveedores de alojamiento en la nube como Fly.io y Amazon Web Services, y herramientas de seguimiento de errores y de soporte. En Best Store Locator, la OpenStreetMap Foundation recibe solo las direcciones de las tiendas para situarlas en el mapa, y OpenFreeMap sirve las imágenes del mapa a los visitantes. Estos proveedores deben proteger los datos y utilizarlos únicamente para los fines que les indicamos',
        },
        {
          label: 'Requisitos legales:',
          text: 'Cuando la ley lo exija (por ejemplo, una orden judicial), o para proteger nuestros derechos, a nuestros usuarios o al público, o para hacer frente a fraudes y problemas de seguridad',
        },
        {
          label: 'Transmisiones empresariales:',
          text: 'Si Gemify participa en una fusión, adquisición o venta de activos, su información puede transferirse. Se lo notificaremos por correo electrónico o en nuestro sitio web antes de que se aplique una política de privacidad distinta',
        },
      ],
    },

    { kind: 'heading', text: '7. Sus derechos' },
    {
      kind: 'paragraph',
      text: 'Según el lugar donde resida, puede pedirnos que:',
    },
    {
      kind: 'list',
      items: [
        'Le facilitemos una copia de sus datos personales, en un formato portátil',
        'Corrijamos datos inexactos o incompletos',
        'Eliminemos sus datos. Al desinstalar una App, sus datos se eliminan en un plazo de 30 días; también puede escribir a {email} para solicitar la eliminación inmediata',
        'Limitemos determinados tratamientos o atendamos su oposición a ellos',
        'Tengamos en cuenta la retirada de un consentimiento que dio anteriormente',
        'Dejemos de enviarle correos de marketing, mediante el enlace "darse de baja" incluido en cualquiera de ellos',
      ],
    },
    {
      kind: 'paragraph',
      text: 'Para ejercer cualquiera de estos derechos, escríbanos a {email}. Respondemos en un plazo de 30 días.',
    },

    { kind: 'heading', text: '8. Leyes de privacidad' },
    { kind: 'subheading', text: '8.1 RGPD (EEE y Reino Unido)' },
    {
      kind: 'paragraph',
      text: 'Tratamos los datos personales conforme al RGPD y al RGPD del Reino Unido sobre estas bases legales:',
    },
    {
      kind: 'list',
      items: [
        { label: 'Contrato:', text: 'Para prestarle nuestras Apps' },
        { label: 'Intereses legítimos:', text: 'Para mejorar nuestros servicios, mantenerlos seguros y ofrecer soporte' },
        { label: 'Consentimiento:', text: 'Cuando usted lo haya dado expresamente' },
        { label: 'Obligaciones legales:', text: 'Para cumplir la ley' },
      ],
    },
    { kind: 'subheading', text: '8.2 CPRA (California)' },
    {
      kind: 'paragraph',
      text: 'Los residentes en California tienen derecho a saber qué información personal recopilamos y cómo la utilizamos, a eliminarla o corregirla, a limitar el uso de información personal sensible, a oponerse a su venta o comunicación (no la vendemos ni la comunicamos) y a no recibir un trato diferente por ejercer estos derechos.',
    },
    { kind: 'subheading', text: '8.3 Otras leyes' },
    {
      kind: 'paragraph',
      text: 'También cumplimos la ley japonesa de protección de la información personal (APPI), la Colorado Privacy Act, la Virginia Consumer Data Protection Act y otras normas aplicables.',
    },
    { kind: 'subheading', text: '8.4 Solicitudes de datos de clientes a través de Shopify' },
    {
      kind: 'paragraph',
      text: 'Cuando uno de sus clientes solicita sus datos o su eliminación, Shopify nos envía la solicitud. Facilitamos o eliminamos los datos personales que tengamos sobre ese cliente en un plazo de 30 días. Las Apps que no conservan datos de clientes confirman que no hay nada que facilitar. Cuando usted desinstala una App o cierra su tienda, Shopify nos pide que eliminemos los datos de su tienda, y lo hacemos tal como se describe en la sección 4.',
    },

    { kind: 'heading', text: '9. Privacidad de los menores' },
    {
      kind: 'paragraph',
      text: 'Nuestras Apps no están dirigidas a personas menores de 18 años. No recopilamos conscientemente información personal de menores. Si cree que hemos recopilado información de un menor, contáctenos y la eliminaremos.',
    },

    { kind: 'heading', text: '10. Enlaces a terceros' },
    {
      kind: 'paragraph',
      text: 'Nuestras Apps o nuestro sitio web pueden contener enlaces a sitios web o servicios de terceros. No somos responsables de sus prácticas de privacidad, por lo que le recomendamos revisar sus políticas de privacidad.',
    },

    { kind: 'heading', text: '11. Cambios en esta Política de privacidad' },
    {
      kind: 'paragraph',
      text: 'Podemos actualizar esta Política de privacidad para reflejar cambios en nuestras prácticas o en la ley. Cuando introduzcamos cambios significativos, actualizaremos la fecha de "Última actualización", se lo notificaremos por correo electrónico si tenemos su dirección y mostraremos un aviso en nuestras Apps. Si sigue usando nuestras Apps después de la entrada en vigor de los cambios, acepta la política revisada.',
    },

    { kind: 'heading', text: '12. Contacto' },
    {
      kind: 'paragraph',
      text: 'Si tiene preguntas o solicitudes sobre esta Política de privacidad o sobre sus datos, contáctenos. Para solicitudes de privacidad, utilice el asunto "Consulta de privacidad".',
    },
    { kind: 'contact', brand: 'Gemify', emailLabel: 'Correo electrónico:', websiteLabel: 'Sitio web:' },
    {
      kind: 'paragraph',
      text: 'Si considera que no hemos tratado sus datos personales de forma adecuada, puede presentar una reclamación ante su autoridad local de protección de datos. Los residentes en el EEE pueden consultar la lista de autoridades en {edpb}.',
    },

    { kind: 'divider' },
    {
      kind: 'closing',
      text: 'Esta Política de privacidad se actualizó por última vez el 29 de septiembre de 2026. Al usar nuestras Apps, usted reconoce que ha leído y comprendido esta Política de privacidad y que acepta quedar vinculado por ella.',
    },
  ],
};
