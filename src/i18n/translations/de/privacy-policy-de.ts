import type { PrivacyPolicyDictionary } from '../content-types';

/**
 * Privacy policy copy in German, mirroring the block order of the English
 * version. `{email}` becomes the support mailto link and `{edpb}` the EDPB link.
 *
 * Written for merchants: what each app holds, why, for how long, who
 * processes it, and where. Implementation detail (cipher names, Shopify
 * event topics, access scopes, hosting regions) lives in each app's own repo.
 * This is a translation of a legal document: have it reviewed by a
 * German-speaking reviewer before treating it as the authoritative text.
 */
export const privacyPolicyDe: PrivacyPolicyDictionary = {
  title: 'Datenschutzerklärung',
  lastUpdated: 'Zuletzt aktualisiert: 29. September 2026',

  blocks: [
    {
      kind: 'paragraph',
      text: 'Bei Gemify ("wir", "uns" oder "unser") nehmen wir Ihren Datenschutz ernst. Diese Datenschutzerklärung beschreibt, wie unsere Shopify-Anwendungen, darunter Bulk Delete Orders, Default Address Lock, LLMs-full.txt, Japan Multiship, Best Store Locator und Checkout Probe (zusammen "unsere Apps"), Ihre Informationen erheben, verwenden, speichern und schützen, wenn Sie unsere Dienste nutzen.',
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
    {
      kind: 'list',
      items: [
        {
          label: 'Store-Informationen:',
          text: 'Store-Name, Domain, E-Mail-Adresse des Store-Inhabers und Zeitzone sowie der Zugriffsschlüssel, den Shopify ausstellt, damit sich unsere Apps mit Ihrem Store verbinden können',
        },
        {
          label: 'Kontakt und Support:',
          text: 'Ihr Name, Ihre E-Mail-Adresse und die Nachrichten, die Sie uns senden',
        },
        {
          label: 'Nutzung und Protokolle:',
          text: 'Die Funktionen, die Sie nutzen, die Einstellungen, die Sie wählen, Fehler und übliche Serverprotokolle (IP-Adresse, Browsertyp und Zugriffszeiten)',
        },
        {
          label: 'Kundendaten:',
          text: 'Die meisten unserer Apps speichern keine personenbezogenen Daten über Ihre Kunden. Abschnitt 2 führt genau auf, was jede App speichert',
        },
      ],
    },

    { kind: 'heading', text: '2. Was jede App speichert' },
    {
      kind: 'paragraph',
      text: 'Jede App speichert nur, was sie für ihre Funktion benötigt. Die Daten bleiben Ihrem Store zugeordnet, und die App verwendet sie ausschließlich, um Ihnen ihre Funktionen bereitzustellen.',
    },
    { kind: 'subheading', text: '2.1 Bulk Delete Orders' },
    {
      kind: 'list',
      items: [
        {
          label: 'Daten:',
          text: 'Die IDs der Bestellungen, Bestellentwürfe und Kunden, die Sie auswählen, sowie die Zähler jedes Jobs. Keine Kundennamen, Adressen, E-Mail-Adressen oder Zahlungsdetails',
        },
        {
          label: 'Zweck:',
          text: 'Um die von Ihnen gestarteten Lösch- und Anonymisierungsjobs auszuführen und ihren Verlauf anzuzeigen',
        },
        { label: 'Speicherdauer:', text: 'Solange die App installiert ist, danach Löschung innerhalb von 30 Tagen nach der Deinstallation' },
      ],
    },
    { kind: 'subheading', text: '2.2 Default Address Lock' },
    {
      kind: 'list',
      items: [
        {
          label: 'Daten:',
          text: 'Ausschließlich Kunden-IDs und Adress-IDs. Namen, Adressen und Telefonnummern verbleiben bei Shopify',
        },
        {
          label: 'Zweck:',
          text: 'Um die Standardadresse eines Kunden wiederherzustellen, nachdem eine Bestellung sie geändert hat, und um den Aktivitätsverlauf anzuzeigen',
        },
        { label: 'Speicherdauer:', text: 'Solange die App installiert ist, danach Löschung innerhalb von 30 Tagen nach der Deinstallation' },
      ],
    },
    { kind: 'subheading', text: '2.3 LLMs-full.txt' },
    {
      kind: 'list',
      items: [
        {
          label: 'Daten:',
          text: 'Die Store-Inhalte, die Sie einbeziehen: Produkte, Kategorien, Seiten, Blog-Artikel und Richtlinien. Keine Kunden- oder Bestelldaten',
        },
        {
          label: 'Zweck:',
          text: 'Um Ihre llms.txt-Dateien zu erzeugen und in Ihrem Theme zu veröffentlichen. Die veröffentlichten Dateien sind wie Ihre übrigen Store-Inhalte in Ihrer Storefront öffentlich zugänglich',
        },
        { label: 'Speicherdauer:', text: 'Solange die App installiert ist, danach Löschung innerhalb von 30 Tagen nach der Deinstallation' },
      ],
    },
    { kind: 'subheading', text: '2.4 Japan Multiship' },
    {
      kind: 'list',
      items: [
        {
          label: 'Daten:',
          text: 'Bei Geschenkbestellungen Name, Adresse und Telefonnummer jedes Empfängers, die der Käufer auf der Warenkorbseite eingibt, dazu Lieferdatum und Lieferzeit sowie die Sendungsverfolgungsnummer. Ein Empfänger steht möglicherweise in keiner Beziehung zum Store',
        },
        {
          label: 'Zweck:',
          text: 'Um die Bestellung in eine Sendung je Empfänger aufzuteilen, die Yamato B2 Cloud-Versanddatei zu erzeugen und Sendungsverfolgungsnummern hinzuzufügen, damit der Käufer benachrichtigt wird. Die App verwendet Empfängerdaten zu keinem anderen Zweck',
        },
        {
          label: 'Schutz:',
          text: 'Empfängerdaten werden verschlüsselt und ausschließlich in Japan gespeichert. Die App zeichnet auf, welche Mitarbeitenden des Händlers Empfängerdaten angesehen haben und wann, um Missbrauch zu erkennen. Diese Aufzeichnung enthält keine Empfängerdaten und wird nach einem Jahr gelöscht',
        },
        {
          label: 'Speicherdauer:',
          text: 'Empfängerdaten werden 90 Tage nach Versand oder Stornierung der Bestellung automatisch gelöscht. Der Händler kann eine kürzere Frist wählen. Nichts wird länger als 180 Tage aufbewahrt',
        },
        {
          label: 'Japans APPI:',
          text: 'Der Händler bleibt nach Japans Gesetz zum Schutz personenbezogener Informationen (APPI) für die Empfängerdaten verantwortlich. Japan Multiship verarbeitet sie ausschließlich im Auftrag des Händlers',
        },
      ],
    },
    { kind: 'subheading', text: '2.5 Best Store Locator' },
    {
      kind: 'list',
      items: [
        {
          label: 'Daten:',
          text: 'Die Standorte, die Sie eingeben oder importieren, etwa Namen, Adressen, Kontaktdaten und Öffnungszeiten. Dies sind Geschäftsinformationen, die Sie bewusst in Ihrer Storefront veröffentlichen',
        },
        {
          label: 'Besucher der Storefront:',
          text: 'Suchanfragen und die Position aus "Meinen Standort verwenden" werden nur zur Beantwortung dieser Suche verwendet und nicht gespeichert. Die Karte fügt keine Cookies, Analyse-Tools oder Werbe-Tracker hinzu',
        },
        {
          label: 'Lieblingsgeschäft (optional):',
          text: 'Standardmäßig ausgeschaltet. Wenn Sie die Funktion aktivieren, wird das gewählte Geschäft eines angemeldeten Kunden in dessen eigenem Shopify-Kundenprofil gespeichert, nicht auf unseren Servern',
        },
        { label: 'Speicherdauer:', text: 'Löschung etwa 48 Stunden nach der Deinstallation der App' },
      ],
    },
    { kind: 'subheading', text: '2.6 Checkout Probe' },
    {
      kind: 'list',
      items: [
        {
          label: 'Daten:',
          text: 'Ihre Testeinstellungen (das Testprodukt und die Test-Lieferadresse) und Ihre letzten 10 Testberichte',
        },
        {
          label: 'Zweck:',
          text: 'Um Ihren Checkout so zu testen, wie es ein KI-Einkaufsagent tun würde, und die Ergebnisse anzuzeigen. Ein Test gibt nie eine Bestellung auf, belastet nie etwas und ändert nie Ihre Store-Einstellungen',
        },
        {
          label: 'Keine Kundendaten:',
          text: 'Jeder Test verwendet einen fiktiven Testkäufer, keine reale Person. Die App liest nur Ihre Produkte und Versandeinstellungen',
        },
        { label: 'Speicherdauer:', text: 'Nur die letzten 10 Berichte werden aufbewahrt. Alle Daten werden bei der Deinstallation der App gelöscht' },
      ],
    },

    { kind: 'heading', text: '3. Wie wir Ihre Informationen verwenden' },
    {
      kind: 'list',
      items: [
        'Um die von Ihnen genutzten App-Funktionen bereitzustellen und eine sichere Verbindung zu Ihrem Store herzustellen',
        'Um Ihre Supportanfragen zu beantworten',
        'Um wichtige Hinweise zu unseren Apps zu senden, etwa Sicherheitsupdates und Änderungen am Dienst',
        'Um Sie über neue Funktionen zu informieren, nur wenn Sie zugestimmt haben',
        'Um Probleme zu beheben und unsere Apps zu verbessern',
        'Um Betrug und Missbrauch zu verhindern, gesetzliche Pflichten zu erfüllen und Betroffenenanfragen zu beantworten',
      ],
    },
    { kind: 'paragraph', text: 'Wir verwenden Ihre Informationen nicht für:', strong: true },
    {
      kind: 'list',
      items: [
        'Marketing oder Werbung, sofern Sie dem nicht ausdrücklich zugestimmt haben',
        'Den Verkauf oder die Weitergabe an Dritte für deren Marketingzwecke',
        'Automatisierte Entscheidungen mit rechtlicher oder ähnlich erheblicher Wirkung für Händler oder Kunden',
      ],
    },

    { kind: 'heading', text: '4. Speicherdauer' },
    {
      kind: 'list',
      items: [
        { label: 'Solange eine App installiert ist:', text: 'Wir speichern die Daten, die die App für ihre Funktion benötigt' },
        {
          label: 'Nach der Deinstallation:',
          text: 'Ihre Daten werden innerhalb von 30 Tagen gelöscht, bei einigen Apps früher (siehe Abschnitt 2). Anonyme, aggregierte Nutzungsstatistiken bewahren wir gegebenenfalls auf',
        },
        { label: 'Support-E-Mails:', text: '2 Jahre, um bei laufenden Anliegen zu helfen' },
        { label: 'Serverprotokolle:', text: '90 Tage, für Sicherheit und Fehlerbehebung' },
        { label: 'Gesetzlich vorgeschriebene Unterlagen:', text: 'So lange, wie das Gesetz es verlangt, zum Beispiel für steuerliche Zwecke' },
      ],
    },

    { kind: 'heading', text: '5. Wo wir Daten speichern und wie wir sie schützen' },
    {
      kind: 'paragraph',
      text: 'Ihre Daten werden bei Cloud-Hosting-Anbietern in den Vereinigten Staaten gespeichert, mit Ausnahme der Daten von Japan Multiship, die ausschließlich in Japan gespeichert werden.',
    },
    {
      kind: 'paragraph',
      text: 'Wenn Sie sich im Europäischen Wirtschaftsraum (EWR), im Vereinigten Königreich oder in einer anderen Region mit Vorschriften für Datenübermittlungen befinden, werden Ihre Daten gegebenenfalls außerhalb Ihres Landes verarbeitet. Wir sichern diese Übermittlungen mit Standardvertragsklauseln und zusätzlichen Sicherheitsmaßnahmen ab.',
    },
    {
      kind: 'list',
      items: [
        { label: 'Verschlüsselung:', text: 'Daten werden bei der Übertragung und im Ruhezustand verschlüsselt' },
        { label: 'Zugriffskontrollen:', text: 'Nur befugte Personen können auf Ihre Daten zugreifen' },
        { label: 'Sichere Anmeldung:', text: 'Unsere Apps verbinden sich über die sichere Anmeldung von Shopify mit Ihrem Store' },
        { label: 'Sicherheitsaudits und Überwachung:', text: 'Wir führen regelmäßig Sicherheitsprüfungen durch und überwachen unsere Systeme auf Bedrohungen' },
        { label: 'Sichere Entwicklung:', text: 'Wir folgen sicheren Entwicklungspraktiken und führen Code-Reviews durch' },
      ],
    },
    {
      kind: 'paragraph',
      text: 'Keine Methode der Übertragung oder Speicherung ist zu 100 % sicher. Wenn Sie Bedenken hinsichtlich der Sicherheit Ihrer Daten haben, wenden Sie sich bitte an {email}.',
    },

    { kind: 'heading', text: '6. Dienstleister und Weitergabe' },
    {
      kind: 'paragraph',
      text: 'Wir verkaufen, vermieten oder tauschen Ihre personenbezogenen Daten nicht. Wir geben sie nur in den folgenden Fällen weiter:',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Dienstleister:',
          text: 'Shopify (die Plattform, auf der unsere Apps laufen), Cloud-Hosting-Anbieter wie Fly.io und Amazon Web Services sowie Werkzeuge für Fehlerüberwachung und Support. Für Best Store Locator erhält die OpenStreetMap Foundation nur die Adressen der Geschäfte, um sie auf der Karte zu platzieren, und OpenFreeMap liefert die Kartenbilder an Besucher aus. Diese Dienstleister müssen die Daten schützen und dürfen sie ausschließlich für die von uns festgelegten Zwecke verwenden',
        },
        {
          label: 'Gesetzliche Anforderungen:',
          text: 'Wenn das Gesetz es verlangt (zum Beispiel ein Gerichtsbeschluss), zum Schutz unserer Rechte, unserer Nutzer oder der Öffentlichkeit oder zur Behebung von Betrug und Sicherheitsproblemen',
        },
        {
          label: 'Unternehmensübergänge:',
          text: 'Ist Gemify an einer Fusion, einer Übernahme oder einem Verkauf von Vermögenswerten beteiligt, können Ihre Informationen übertragen werden. Wir informieren Sie per E-Mail oder auf unserer Website, bevor eine andere Datenschutzerklärung gilt',
        },
      ],
    },

    { kind: 'heading', text: '7. Ihre Rechte' },
    {
      kind: 'paragraph',
      text: 'Je nach Ihrem Wohnort können Sie von uns verlangen:',
    },
    {
      kind: 'list',
      items: [
        'Eine Kopie Ihrer personenbezogenen Daten in einem übertragbaren Format',
        'Die Berichtigung unrichtiger oder unvollständiger Daten',
        'Die Löschung Ihrer Daten. Die Deinstallation einer App löscht deren Daten innerhalb von 30 Tagen, oder schreiben Sie an {email} für eine sofortige Löschung',
        'Die Einschränkung bestimmter Verarbeitungen oder den Widerspruch dagegen',
        'Den Widerruf einer früher erteilten Einwilligung',
        'Die Abmeldung von Marketing-E-Mails über den Link zum Abbestellen in jeder dieser E-Mails',
      ],
    },
    {
      kind: 'paragraph',
      text: 'Um eines dieser Rechte auszuüben, schreiben Sie an {email}. Wir antworten innerhalb von 30 Tagen.',
    },

    { kind: 'heading', text: '8. Datenschutzgesetze' },
    { kind: 'subheading', text: '8.1 DSGVO (EWR und Vereinigtes Königreich)' },
    {
      kind: 'paragraph',
      text: 'Wir verarbeiten personenbezogene Daten nach der DSGVO und der UK GDPR auf den folgenden Rechtsgrundlagen:',
    },
    {
      kind: 'list',
      items: [
        { label: 'Vertragserfüllung:', text: 'Zur Bereitstellung unserer Apps für Sie' },
        { label: 'Berechtigte Interessen:', text: 'Zur Verbesserung unserer Dienste, zu ihrer Sicherheit und zur Bereitstellung von Support' },
        { label: 'Einwilligung:', text: 'Soweit Sie ausdrücklich zugestimmt haben' },
        { label: 'Gesetzliche Pflichten:', text: 'Zur Einhaltung geltender Gesetze' },
      ],
    },
    { kind: 'subheading', text: '8.2 CPRA (Kalifornien)' },
    {
      kind: 'paragraph',
      text: 'Personen mit Wohnsitz in Kalifornien haben das Recht zu erfahren, welche personenbezogenen Daten wir erheben und wie wir sie verwenden, diese löschen oder berichtigen zu lassen, die Verwendung sensibler personenbezogener Daten einzuschränken, deren Verkauf oder Weitergabe zu widersprechen (wir verkaufen sie nicht und geben sie nicht weiter) und wegen der Ausübung dieser Rechte nicht benachteiligt zu werden.',
    },
    { kind: 'subheading', text: '8.3 Weitere Gesetze' },
    {
      kind: 'paragraph',
      text: 'Wir halten außerdem Japans Gesetz zum Schutz personenbezogener Informationen (APPI), den Colorado Privacy Act, den Virginia Consumer Data Protection Act und weitere geltende Gesetze ein.',
    },
    { kind: 'subheading', text: '8.4 Anfragen zu Kundendaten über Shopify' },
    {
      kind: 'paragraph',
      text: 'Wenn eine Ihrer Kundinnen oder einer Ihrer Kunden die eigenen Daten oder deren Löschung anfordert, leitet Shopify uns die Anfrage weiter. Wir stellen alle personenbezogenen Daten, die wir über diese Person speichern, innerhalb von 30 Tagen bereit oder löschen sie. Apps, die keine Kundendaten speichern, bestätigen, dass es nichts bereitzustellen gibt. Wenn Sie eine App deinstallieren oder Ihren Store schließen, fordert Shopify uns auf, die Daten Ihres Stores zu löschen, und wir tun dies wie in Abschnitt 4 beschrieben.',
    },

    { kind: 'heading', text: '9. Datenschutz von Kindern' },
    {
      kind: 'paragraph',
      text: 'Unsere Apps richten sich nicht an Personen unter 18 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Kindern. Wenn Sie vermuten, dass wir Daten eines Kindes erhoben haben, kontaktieren Sie uns bitte, und wir löschen sie.',
    },

    { kind: 'heading', text: '10. Links zu Dritten' },
    {
      kind: 'paragraph',
      text: 'Unsere Apps oder unsere Website können Links zu Websites oder Diensten Dritter enthalten. Für deren Datenschutzpraktiken sind wir nicht verantwortlich. Bitte lesen Sie daher deren Datenschutzerklärungen.',
    },

    { kind: 'heading', text: '11. Änderungen dieser Datenschutzerklärung' },
    {
      kind: 'paragraph',
      text: 'Wir aktualisieren diese Datenschutzerklärung gegebenenfalls, um Änderungen unserer Praktiken oder der Gesetzeslage abzubilden. Bei wesentlichen Änderungen aktualisieren wir das Datum "Zuletzt aktualisiert", benachrichtigen Sie per E-Mail, sofern uns Ihre E-Mail-Adresse vorliegt, und zeigen einen Hinweis in unseren Apps an. Wenn Sie unsere Apps nach Inkrafttreten der Änderungen weiter nutzen, stimmen Sie der überarbeiteten Datenschutzerklärung zu.',
    },

    { kind: 'heading', text: '12. Kontakt' },
    {
      kind: 'paragraph',
      text: 'Bei Fragen oder Anfragen zu dieser Datenschutzerklärung oder zu Ihren Daten wenden Sie sich bitte an uns. Für Datenschutzanfragen verwenden Sie bitte die Betreffzeile "Datenschutzanfrage".',
    },
    { kind: 'contact', brand: 'Gemify', emailLabel: 'E-Mail:', websiteLabel: 'Website:' },
    {
      kind: 'paragraph',
      text: 'Wenn Sie der Ansicht sind, dass wir Ihre personenbezogenen Daten nicht ordnungsgemäß behandelt haben, können Sie bei Ihrer zuständigen Datenschutzbehörde Beschwerde einlegen. Für Personen im EWR ist eine Liste der Behörden unter {edpb} verfügbar.',
    },

    { kind: 'divider' },
    {
      kind: 'closing',
      text: 'Diese Datenschutzerklärung wurde zuletzt am 29. September 2026 aktualisiert. Mit der Nutzung unserer Apps bestätigen Sie, dass Sie diese Datenschutzerklärung gelesen und verstanden haben und sich damit einverstanden erklären.',
    },
  ],
};
