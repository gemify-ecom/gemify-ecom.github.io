import type { PrivacyPolicyDictionary } from '../dictionary-types';

/**
 * Privacy policy copy in German, mirroring the block order of the English
 * version. This is a translation of a legal document: have it reviewed by a
 * German-speaking reviewer before treating it as the authoritative text.
 */
export const privacyPolicyDe: PrivacyPolicyDictionary = {
  title: 'Datenschutzerklärung',
  lastUpdated: 'Zuletzt aktualisiert: 12. August 2026',

  blocks: [
    {
      kind: 'paragraph',
      text: 'Bei Gemify ("wir", "uns" oder "unser") nehmen wir Ihren Datenschutz ernst. Diese Datenschutzerklärung beschreibt, wie unsere Shopify-Anwendungen, darunter Bulk Delete Orders, Default Address Lock und LLMs.txt (zusammen "unsere Apps"), Ihre Informationen erheben, verwenden, speichern und schützen, wenn Sie unsere Dienste nutzen.',
    },
    {
      kind: 'highlight',
      heading: 'Die wichtigsten Punkte:',
      items: [
        'Wir erheben nur die Daten, die zur Bereitstellung unserer Dienste unbedingt erforderlich sind',
        'Wir verkaufen Ihre Daten nicht und geben sie nicht zu Marketingzwecken an Dritte weiter',
        'Sie behalten die volle Kontrolle über Ihre Daten und können jederzeit deren Löschung verlangen',
        'Wir halten die DSGVO, den CPRA und weitere geltende Datenschutzgesetze ein',
      ],
    },

    { kind: 'heading', text: '1. Informationen, die wir erheben' },
    { kind: 'subheading', text: '1.1 Über Shopify-APIs erhobene Informationen' },
    {
      kind: 'paragraph',
      text: 'Wenn Sie unsere Apps installieren und nutzen, greifen wir über die APIs von Shopify auf die folgenden Informationen zu:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Store-Informationen:',
          text: 'Store-Name, Store-Domain, E-Mail-Adresse des Store-Inhabers und Zeitzone des Stores',
        },
        {
          label: 'Bestelldaten:',
          text: 'Bestelldetails wie Bestellnummern, Daten, Status, Zahlungsstatus und Fulfillment-Status (für die App Bulk Delete Orders)',
        },
        {
          label: 'Kundendaten:',
          text: 'Ausschließlich Kunden-IDs und Adress-IDs (für die App Default Address Lock). Personenbezogene Angaben wie Namen, Adressen oder Kontaktdaten speichern wir nie.',
        },
        {
          label: 'Store-Inhalte:',
          text: 'Produkte, Kategorien, Seiten, Blog-Artikel und Store-Richtlinien, die über die Shopify GraphQL API gelesen werden, sowie Theme-Zugriff zur Veröffentlichung der erzeugten Dateien (für die App LLMs.txt)',
        },
        {
          label: 'API-Zugriffstoken:',
          text: 'Token, die für die Authentifizierung und die Kommunikation mit Ihrem Shopify-Store erforderlich sind',
        },
      ],
    },
    { kind: 'subheading', text: '1.2 Direkt von Händlern erhobene Informationen' },
    {
      kind: 'paragraph',
      text: 'Die folgenden Informationen erheben wir gegebenenfalls direkt bei Ihnen:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Kontaktdaten:',
          text: 'E-Mail-Adresse, Name (sofern über Supportanfragen oder Formulare angegeben)',
        },
        {
          label: 'Nutzungsdaten:',
          text: 'Informationen darüber, wie Sie mit unseren Apps arbeiten, einschließlich genutzter Funktionen und vorgenommener Einstellungen',
        },
        {
          label: 'Support-Kommunikation:',
          text: 'Nachrichten, Feedback und sonstige Mitteilungen, die Sie uns senden',
        },
      ],
    },
    { kind: 'subheading', text: '1.3 Von Kunden der Händler erhobene Informationen' },
    {
      kind: 'paragraph',
      text: 'Unsere Apps sind darauf ausgelegt, die Erhebung von Endkundendaten so gering wie möglich zu halten:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Bulk Delete Orders:',
          text: 'Wir greifen nicht direkt auf personenbezogene Kundendaten (etwa Namen, Adressen oder Zahlungsdetails) zu und speichern sie nicht. Über die APIs von Shopify abgerufene Bestelldaten können Verweise auf Kunden enthalten, wir speichern oder verarbeiten personenbezogene Kundendaten jedoch nicht gesondert.',
        },
        {
          label: 'Default Address Lock:',
          text: 'Datenschutzfreundliches Design: Wir speichern ausschließlich Kunden-IDs und Adress-IDs, um die Adresssperre zu ermöglichen. Personenbezogene Daten (Namen, Adressen, Telefonnummern usw.) speichern wir nie. Alle personenbezogenen Daten verbleiben sicher innerhalb von Shopify.',
        },
        {
          label: 'LLMs.txt:',
          text: 'Wir greifen auf keinerlei Kundendaten zu und speichern sie nicht. Die App liest ausschließlich die Store-Inhalte (Produkte, Kategorien, Seiten, Blog-Artikel und Richtlinien), die Sie auswählen. Bitte beachten Sie, dass die erzeugten llms.txt-Dateien in Ihrer Storefront veröffentlicht und wie Ihre übrigen Storefront-Inhalte öffentlich zugänglich sind.',
        },
        'Auf kundenseitigen Storefronts setzen wir weder Cookies noch Tracking-Technologien ein',
      ],
    },
    { kind: 'subheading', text: '1.4 Automatisch erhobene Informationen' },
    {
      kind: 'paragraph',
      text: 'Bei der Nutzung unserer Apps erheben wir automatisch bestimmte technische Informationen:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Protokolldaten:',
          text: 'IP-Adressen, Browsertyp, Betriebssystem, Zugriffszeiten und Fehlerprotokolle',
        },
        { label: 'Geräteinformationen:', text: 'Gerätetyp und eindeutige Kennungen' },
        {
          label: 'App-Leistungsdaten:',
          text: 'Informationen zu Leistung, Fehlern und Abstürzen der App',
        },
      ],
    },

    { kind: 'heading', text: '2. Wie wir Ihre Informationen verwenden' },
    {
      kind: 'paragraph',
      text: 'Die erhobenen Informationen verwenden wir für die folgenden Zwecke:',
    },
    { kind: 'subheading', text: '2.1 Zur Bereitstellung und Aufrechterhaltung unserer Dienste' },
    {
      kind: 'list',
      items: [
        'Um unsere Apps zu betreiben und die von Ihnen angeforderten Funktionen bereitzustellen',
        'Um Bestelllöschungen und andere Vorgänge auszuführen (für die App Bulk Delete Orders)',
        'Um Einstellungen zur Adresssperre zu verwalten (für die App Default Address Lock)',
        'Um llms.txt-Dateien zu erzeugen und in Ihrem Theme zu veröffentlichen (für die App LLMs.txt)',
        'Um Ihren Store zu authentifizieren und einen sicheren Zugriff aufrechtzuerhalten',
        'Um Leistung und Zuverlässigkeit der Apps zu überwachen und zu verbessern',
      ],
    },
    { kind: 'subheading', text: '2.2 Zur Kommunikation mit Ihnen' },
    {
      kind: 'list',
      items: [
        'Um Ihre Supportanfragen und sonstigen Anfragen zu beantworten',
        'Um wichtige Hinweise zu unseren Apps zu senden (zum Beispiel Sicherheitsupdates, Änderungen am Dienst)',
        'Um über neue Funktionen oder Verbesserungen zu informieren (nur nach Ihrer Zustimmung)',
      ],
    },
    { kind: 'subheading', text: '2.3 Zur Verbesserung unserer Dienste' },
    {
      kind: 'list',
      items: [
        'Um Nutzungsmuster auszuwerten und Verbesserungsmöglichkeiten zu erkennen',
        'Um Probleme einzugrenzen und Fehler zu beheben',
        'Um neue Funktionen auf Basis der Anforderungen unserer Nutzer zu entwickeln',
      ],
    },
    { kind: 'subheading', text: '2.4 Zur Gewährleistung von Sicherheit und Compliance' },
    {
      kind: 'list',
      items: [
        'Um Betrug, Missbrauch und Sicherheitsvorfälle zu erkennen und zu verhindern',
        'Um gesetzliche Pflichten zu erfüllen und unsere Nutzungsbedingungen durchzusetzen',
        'Um Betroffenenanfragen zu beantworten, soweit Datenschutzgesetze dies verlangen',
      ],
    },
    { kind: 'paragraph', text: 'Wir verwenden Ihre Informationen nicht für:', strong: true },
    {
      kind: 'list',
      items: [
        'Marketing- oder Werbekampagnen (sofern Sie dem nicht ausdrücklich zugestimmt haben)',
        'Den Verkauf oder die Weitergabe Ihrer Daten an Dritte für deren Marketingzwecke',
        'Automatisierte Entscheidungen mit rechtlicher oder ähnlich erheblicher Wirkung für Händler oder Kunden',
      ],
    },

    { kind: 'heading', text: '3. Speicherdauer' },
    {
      kind: 'paragraph',
      text: 'Wir speichern Ihre Daten nur so lange, wie es für die Bereitstellung unserer Dienste und die in dieser Datenschutzerklärung genannten Zwecke erforderlich ist:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Aktive Stores:',
          text: 'Solange unsere Apps installiert sind und Sie unsere Dienste aktiv nutzen, speichern wir die für den Betrieb der Apps erforderlichen Daten',
        },
        {
          label: 'Nach der Deinstallation:',
          text: 'Wenn Sie unsere Apps deinstallieren, bewahren wir minimale Daten (Store-ID und Zugriffstoken) 30 Tage lang auf, um eine mögliche Neuinstallation zu erleichtern. Nach 30 Tagen werden alle Daten mit Ausnahme aggregierter Nutzungsstatistiken dauerhaft gelöscht',
        },
        {
          label: 'Support-Kommunikation:',
          text: 'Support-E-Mails und sonstige Mitteilungen bewahren wir 2 Jahre lang auf, um laufende Anliegen zu klären und unsere Dienste zu verbessern',
        },
        {
          label: 'Protokolldaten:',
          text: 'Server- und Fehlerprotokolle bewahren wir zu Sicherheits- und Fehlerbehebungszwecken 90 Tage lang auf',
        },
        {
          label: 'Compliance-Daten:',
          text: 'Daten bewahren wir auf, soweit Gesetze oder Vorschriften dies verlangen (zum Beispiel Finanzunterlagen für steuerliche Zwecke)',
        },
      ],
    },

    { kind: 'heading', text: '4. Datenspeicherung und Sicherheit' },
    { kind: 'subheading', text: '4.1 Wo wir Ihre Daten speichern' },
    {
      kind: 'paragraph',
      text: 'Gemify hat seinen Sitz in Vietnam. Ihre Daten werden auf sicheren Servern vertrauenswürdiger Cloud-Infrastrukturanbieter in den Vereinigten Staaten gespeichert.',
    },
    {
      kind: 'paragraph',
      text: 'Wenn Sie sich im Europäischen Wirtschaftsraum (EWR), im Vereinigten Königreich oder in einer anderen Rechtsordnung mit Beschränkungen für Datenübermittlungen befinden, beachten Sie bitte, dass Ihre Daten in Länder außerhalb Ihrer Rechtsordnung übermittelt und dort verarbeitet werden können. Wir stellen sicher, dass solche Übermittlungen den geltenden Gesetzen entsprechen, und setzen dafür geeignete Garantien ein, darunter:',
    },
    {
      kind: 'list',
      items: [
        'Von der Europäischen Kommission genehmigte Standardvertragsklauseln',
        'Einhaltung des EU-U.S. Data Privacy Framework (sofern anwendbar)',
        'Zusätzliche Sicherheitsmaßnahmen und vertragliche Schutzvorkehrungen',
      ],
    },
    { kind: 'subheading', text: '4.2 Wie wir Ihre Daten schützen' },
    {
      kind: 'paragraph',
      text: 'Zum Schutz Ihrer Informationen setzen wir branchenübliche Sicherheitsmaßnahmen ein:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Verschlüsselung:',
          text: 'Alle Daten werden bei der Übertragung (TLS 1.2+) und im Ruhezustand (AES-256) verschlüsselt',
        },
        {
          label: 'Zugriffskontrollen:',
          text: 'Strenge Zugriffskontrollen stellen sicher, dass nur befugte Personen auf Ihre Daten zugreifen können',
        },
        {
          label: 'Authentifizierung:',
          text: 'Wir verwenden sichere Authentifizierungsverfahren, darunter OAuth 2.0 für den Zugriff auf die Shopify-API',
        },
        {
          label: 'Regelmäßige Sicherheitsaudits:',
          text: 'Wir führen regelmäßig Sicherheitsbewertungen und Schwachstellenscans durch',
        },
        {
          label: 'Überwachung:',
          text: 'Wir überwachen unsere Systeme fortlaufend auf verdächtige Aktivitäten und Sicherheitsbedrohungen',
        },
        {
          label: 'Sichere Entwicklung:',
          text: 'Wir folgen sicheren Entwicklungspraktiken und führen Code-Reviews durch',
        },
      ],
    },
    {
      kind: 'paragraph',
      text: 'Wir treffen angemessene Maßnahmen zum Schutz Ihrer Daten, jedoch ist keine Methode der Übertragung oder Speicherung zu 100 % sicher. Wenn Sie Bedenken hinsichtlich der Sicherheit Ihrer Daten haben, wenden Sie sich bitte an {email}.',
    },

    { kind: 'heading', text: '5. Weitergabe und Offenlegung von Daten' },
    {
      kind: 'paragraph',
      text: 'Wir verkaufen, vermieten oder tauschen Ihre personenbezogenen Daten nicht. Eine Weitergabe Ihrer Informationen erfolgt nur in den folgenden, eng begrenzten Fällen:',
    },
    { kind: 'subheading', text: '5.1 Dienstleister' },
    {
      kind: 'paragraph',
      text: 'Wir geben Daten gegebenenfalls an vertrauenswürdige Dienstleister weiter, die uns beim Betrieb unserer Apps unterstützen, zum Beispiel:',
    },
    {
      kind: 'list',
      items: [
        'Cloud-Hosting-Anbieter (zum Beispiel AWS, Google Cloud)',
        'Dienste zur Fehlerüberwachung und Analyse',
        'Werkzeuge für den Kundensupport',
      ],
    },
    {
      kind: 'paragraph',
      text: 'Diese Dienstleister sind vertraglich verpflichtet, Ihre Daten zu schützen und ausschließlich für die von uns festgelegten Zwecke zu verwenden.',
    },
    { kind: 'subheading', text: '5.2 Gesetzliche Anforderungen' },
    {
      kind: 'paragraph',
      text: 'Wir legen Ihre Informationen offen, wenn wir gesetzlich dazu verpflichtet sind oder auf berechtigte Anfragen von Behörden reagieren, unter anderem:',
    },
    {
      kind: 'list',
      items: [
        'Zur Erfüllung gesetzlicher Pflichten (zum Beispiel Gerichtsbeschlüsse, Vorladungen)',
        'Zum Schutz unserer Rechte, unseres Eigentums oder unserer Sicherheit sowie der unserer Nutzer oder der Öffentlichkeit',
        'Zur Erkennung, Verhinderung oder Behebung von Betrug sowie von Sicherheits- oder technischen Problemen',
      ],
    },
    { kind: 'subheading', text: '5.3 Unternehmensübergänge' },
    {
      kind: 'paragraph',
      text: 'Ist Gemify an einer Fusion, einer Übernahme oder einem Verkauf von Vermögenswerten beteiligt, können Ihre Informationen im Rahmen dieser Transaktion übertragen werden. Wir informieren Sie per E-Mail und/oder durch einen deutlichen Hinweis auf unserer Website, bevor Ihre Informationen einer anderen Datenschutzerklärung unterliegen.',
    },

    { kind: 'heading', text: '6. Ihre Rechte und Wahlmöglichkeiten' },
    {
      kind: 'paragraph',
      text: 'Je nach Ihrem Standort stehen Ihnen im Hinblick auf Ihre personenbezogenen Daten die folgenden Rechte zu:',
    },
    { kind: 'subheading', text: '6.1 Auskunft und Datenübertragbarkeit' },
    {
      kind: 'paragraph',
      text: 'Sie haben das Recht, eine Kopie der personenbezogenen Daten anzufordern, die wir über Sie gespeichert haben. Sie können außerdem verlangen, dass wir Ihnen Ihre Daten in einem übertragbaren Format bereitstellen.',
    },
    { kind: 'subheading', text: '6.2 Berichtigung' },
    {
      kind: 'paragraph',
      text: 'Sie haben das Recht, die Berichtigung unrichtiger oder unvollständiger personenbezogener Daten zu verlangen.',
    },
    { kind: 'subheading', text: '6.3 Löschung' },
    {
      kind: 'paragraph',
      text: 'Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen. Sie können Ihre Daten auf folgende Weise löschen lassen:',
    },
    {
      kind: 'list',
      items: [
        'Indem Sie unsere Apps aus Ihrem Shopify-Store deinstallieren (die Daten werden automatisch innerhalb von 30 Tagen gelöscht)',
        'Indem Sie uns unter {email} kontaktieren und eine sofortige Löschung verlangen',
      ],
    },
    { kind: 'subheading', text: '6.4 Einschränkung und Widerspruch' },
    {
      kind: 'paragraph',
      text: 'Sie haben das Recht, bestimmte Verarbeitungen Ihrer personenbezogenen Daten einschränken zu lassen oder ihnen zu widersprechen.',
    },
    { kind: 'subheading', text: '6.5 Abmeldung von Marketingnachrichten' },
    {
      kind: 'paragraph',
      text: 'Sie können sich jederzeit von Marketingnachrichten abmelden, indem Sie in einer Marketing-E-Mail auf den Link zum Abbestellen klicken oder uns kontaktieren.',
    },
    { kind: 'subheading', text: '6.6 Widerruf der Einwilligung' },
    {
      kind: 'paragraph',
      text: 'Soweit wir Ihre Daten auf Grundlage Ihrer Einwilligung verarbeiten, können Sie diese Einwilligung jederzeit widerrufen.',
    },
    { kind: 'subheading', text: '6.7 So machen Sie Ihre Rechte geltend' },
    {
      kind: 'paragraph',
      text: 'Um eines dieser Rechte auszuüben, wenden Sie sich bitte an {email}. Wir beantworten Ihre Anfrage innerhalb von 30 Tagen.',
    },

    { kind: 'heading', text: '7. Einhaltung von Datenschutzgesetzen' },
    { kind: 'subheading', text: '7.1 DSGVO (Europäischer Wirtschaftsraum)' },
    {
      kind: 'paragraph',
      text: 'Wenn Sie sich im EWR befinden, verarbeiten wir Ihre Daten in Übereinstimmung mit der Datenschutz-Grundverordnung (DSGVO). Unsere Rechtsgrundlagen für die Verarbeitung Ihrer Daten sind unter anderem:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Vertragserfüllung:',
          text: 'Zur Bereitstellung unserer Apps und zur Erfüllung unseres Vertrags mit Ihnen',
        },
        {
          label: 'Berechtigte Interessen:',
          text: 'Zur Verbesserung unserer Dienste, zur Gewährleistung der Sicherheit und zur Bereitstellung von Support',
        },
        {
          label: 'Einwilligung:',
          text: 'Soweit Sie einer bestimmten Verarbeitung ausdrücklich zugestimmt haben',
        },
        { label: 'Gesetzliche Pflichten:', text: 'Zur Einhaltung geltender Gesetze' },
      ],
    },
    { kind: 'subheading', text: '7.2 CPRA (Kalifornien)' },
    {
      kind: 'paragraph',
      text: 'Wenn Sie Ihren Wohnsitz in Kalifornien haben, stehen Ihnen nach dem California Privacy Rights Act (CPRA) zusätzliche Rechte zu, darunter:',
    },
    {
      kind: 'list',
      items: [
        'Das Recht zu erfahren, welche personenbezogenen Daten wir erheben und wie wir sie verwenden',
        'Das Recht auf Löschung Ihrer personenbezogenen Daten',
        'Das Recht, dem Verkauf oder der Weitergabe Ihrer personenbezogenen Daten zu widersprechen (Hinweis: Wir verkaufen personenbezogene Daten nicht und geben sie nicht weiter)',
        'Das Recht auf Berichtigung unrichtiger personenbezogener Daten',
        'Das Recht, die Verwendung sensibler personenbezogener Daten einzuschränken',
        'Das Recht, wegen der Ausübung Ihrer Datenschutzrechte nicht benachteiligt zu werden',
      ],
    },
    { kind: 'subheading', text: '7.3 Weitere Rechtsordnungen' },
    {
      kind: 'paragraph',
      text: 'Wir halten die Datenschutzgesetze weiterer Rechtsordnungen ein, in denen wir tätig sind, darunter die UK GDPR, den Colorado Privacy Act, den Virginia Consumer Data Protection Act und andere geltende Gesetze.',
    },

    { kind: 'heading', text: '8. Verpflichtende Shopify-Webhooks' },
    {
      kind: 'paragraph',
      text: 'Als Entwickler von Shopify-Apps abonnieren wir die verpflichtenden Compliance-Webhooks, um Betroffenenanfragen zu bearbeiten:',
    },
    { kind: 'subheading', text: '8.1 Auskunftsanfrage von Kunden' },
    {
      kind: 'paragraph',
      text: 'Fordert eine Kundin oder ein Kunde bei einem Händler die eigenen Daten an, stellen wir alle Daten bereit, die wir über diese Person erhoben haben (sofern vorhanden).',
    },
    { kind: 'subheading', text: '8.2 Löschung von Kundendaten' },
    {
      kind: 'paragraph',
      text: 'Verlangt eine Kundin oder ein Kunde die Löschung der eigenen Daten, löschen wir alle über diese Person erhobenen personenbezogenen Daten innerhalb von 30 Tagen dauerhaft.',
    },
    { kind: 'subheading', text: '8.3 Löschung von Store-Daten' },
    {
      kind: 'paragraph',
      text: 'Deinstalliert ein Händler unsere Apps oder schließt seinen Shopify-Store, löschen wir alle zugehörigen Daten innerhalb von 30 Tagen (wie in Abschnitt 3 beschrieben).',
    },

    { kind: 'heading', text: '9. Marketing und Werbung' },
    {
      kind: 'paragraph',
      text: 'Derzeit führen wir keine Marketing- oder Werbekampagnen mit Kundendaten durch. Sollten wir künftig Marketingfunktionen einführen, gilt:',
    },
    {
      kind: 'list',
      items: [
        'Wir stellen klare Opt-in-Mechanismen bereit und holen eine ausdrückliche Einwilligung ein',
        'Wir respektieren die Einwilligungen der Kunden sowie Abmeldungen von Marketingnachrichten',
        'Wir halten die geltenden Marketinggesetze ein, darunter CAN-SPAM, CASL und die DSGVO',
      ],
    },

    { kind: 'heading', text: '10. Datenschutz von Kindern' },
    {
      kind: 'paragraph',
      text: 'Unsere Apps richten sich nicht an Personen unter 18 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Kindern. Wenn Sie vermuten, dass wir versehentlich Daten eines Kindes erhoben haben, kontaktieren Sie uns bitte umgehend. Wir werden dann Schritte einleiten, um diese Daten zu löschen.',
    },

    { kind: 'heading', text: '11. Internationale Datenübermittlungen' },
    {
      kind: 'paragraph',
      text: 'Wir sind weltweit tätig und übermitteln Ihre Daten gegebenenfalls in Länder außerhalb Ihrer Rechtsordnung. In diesen Fällen stellen wir geeignete Garantien sicher, darunter:',
    },
    {
      kind: 'list',
      items: [
        'Von den zuständigen Behörden genehmigte Standardvertragsklauseln (SCC)',
        'Angemessenheitsbeschlüsse der Europäischen Kommission oder anderer Aufsichtsbehörden',
        'Zusätzliche technische und organisatorische Sicherheitsmaßnahmen',
      ],
    },

    { kind: 'heading', text: '12. Links zu Dritten' },
    {
      kind: 'paragraph',
      text: 'Unsere Apps oder unsere Website können Links zu Websites oder Diensten Dritter enthalten. Für die Datenschutzpraktiken dieser Dritten sind wir nicht verantwortlich. Wir empfehlen Ihnen, die Datenschutzerklärungen der von Ihnen besuchten Websites Dritter zu lesen.',
    },

    { kind: 'heading', text: '13. Änderungen dieser Datenschutzerklärung' },
    {
      kind: 'paragraph',
      text: 'Wir aktualisieren diese Datenschutzerklärung von Zeit zu Zeit, um Änderungen unserer Praktiken, gesetzliche Anforderungen oder andere betriebliche Gründe abzubilden. Bei wesentlichen Änderungen werden wir:',
    },
    {
      kind: 'list',
      items: [
        'Das Datum "Zuletzt aktualisiert" am Anfang dieser Erklärung aktualisieren',
        'Sie per E-Mail benachrichtigen (sofern Sie uns Ihre E-Mail-Adresse mitgeteilt haben)',
        'Einen deutlichen Hinweis in unseren Apps anzeigen',
      ],
    },
    {
      kind: 'paragraph',
      text: 'Wenn Sie unsere Apps nach Inkrafttreten der Änderungen weiter nutzen, gilt dies als Ihre Zustimmung zur überarbeiteten Datenschutzerklärung.',
    },

    { kind: 'heading', text: '14. Datenschutzbeauftragter' },
    {
      kind: 'paragraph',
      text: 'Wenn Sie Fragen zum Umgang mit Ihren personenbezogenen Daten haben oder Ihre Datenschutzrechte ausüben möchten, erreichen Sie unseren Datenschutzbeauftragten unter:',
    },
    {
      kind: 'list',
      items: [
        { label: 'E-Mail:', text: '{email}' },
        {
          label: 'Betreffzeile:',
          text: '"Datenschutzanfrage" oder "Datenschutzrechtliches Ersuchen"',
        },
      ],
    },

    { kind: 'heading', text: '15. Kontakt' },
    {
      kind: 'paragraph',
      text: 'Wenn Sie Fragen, Anliegen oder Anfragen zu dieser Datenschutzerklärung oder zu unserem Umgang mit Daten haben, wenden Sie sich bitte an uns:',
    },
    { kind: 'contact', brand: 'Gemify', emailLabel: 'E-Mail:', websiteLabel: 'Website:' },

    { kind: 'heading', text: '16. Beschwerden und Aufsichtsbehörden' },
    {
      kind: 'paragraph',
      text: 'Wenn Sie der Ansicht sind, dass wir Ihre personenbezogenen Daten nicht ordnungsgemäß behandelt haben, haben Sie das Recht, bei Ihrer zuständigen Datenschutzbehörde Beschwerde einzulegen. Für Personen im EWR ist eine Liste der Datenschutzbehörden unter {edpb} verfügbar.',
    },

    { kind: 'divider' },
    {
      kind: 'closing',
      text: 'Diese Datenschutzerklärung wurde zuletzt am 12. August 2026 aktualisiert. Mit der Nutzung unserer Apps bestätigen Sie, dass Sie diese Datenschutzerklärung gelesen und verstanden haben und sich damit einverstanden erklären.',
    },
  ],
};
