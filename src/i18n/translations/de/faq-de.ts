import type { FaqDictionary } from '../dictionary-types';

/** FAQ page copy in German. `{email}` and `{privacyPolicy}` become links. */
export const faqDe: FaqDictionary = {
  title: 'Häufig gestellte Fragen',
  intro:
    'Hier finden Sie Antworten auf häufige Fragen zu Gemify und unseren Apps. Sie finden nicht, wonach Sie suchen? Schreiben Sie uns an {email}',
  questionPrefix: 'F:',

  sections: [
    {
      title: 'Allgemeine Fragen',
      items: [
        {
          question: 'Was ist Gemify?',
          paragraphs: [
            'Gemify ist ein Entwicklungsunternehmen für Shopify-Apps, das sich auf einfache, leistungsstarke Tools für Händler konzentriert. Wir entwickeln Apps, die echte Probleme lösen, ohne unnötige Komplexität.',
          ],
        },
        {
          question: 'Ist die Nutzung Ihrer Apps sicher?',
          paragraphs: [
            'Ja, absolut. Alle unsere Apps folgen den Best Practices und Sicherheitsrichtlinien von Shopify. Wir verwenden branchenübliche Verschlüsselung und sichere Authentifizierung und geben Ihre Daten niemals an Dritte weiter. Ihre Store-Daten sind jederzeit geschützt.',
          ],
        },
        {
          question: 'Wie erhalte ich Support?',
          paragraphs: [
            'Sie erreichen unser Support-Team per E-Mail an {email}. An Werktagen antworten wir in der Regel innerhalb von 24 Stunden.',
          ],
        },
        {
          question: 'Bieten Sie Rückerstattungen an?',
          paragraphs: [
            'Unsere Apps folgen den Standard-Rückerstattungsrichtlinien von Shopify. Wenn Sie mit einer unserer Apps nicht zufrieden sind, kontaktieren Sie uns bitte. Wir arbeiten mit Ihnen an einer Lösung oder veranlassen bei Bedarf eine Rückerstattung.',
          ],
        },
      ],
    },
    {
      title: 'App Bulk Delete Orders',
      items: [
        {
          question: 'Was macht die App Bulk Delete Orders?',
          paragraphs: [
            'Mit Bulk Delete Orders löschen Sie mehrere Bestellungen Ihres Shopify-Stores in einem Durchgang. Mit leistungsstarken Filtern wählen Sie gezielt Bestellungen nach Status, Datum, Tags oder anderen Kriterien aus. Die App storniert Bestellungen automatisch vor dem Löschen und erspart Ihnen so Zeit und manuelle Arbeit.',
          ],
        },
        {
          question: 'Ist es sicher, Bestellungen zu löschen?',
          paragraphs: [
            'Ja, gehen Sie dabei aber bitte sorgfältig vor. Die App storniert Bestellungen automatisch, bevor sie gelöscht werden, damit alles korrekt abläuft. Einmal gelöschte Bestellungen lassen sich jedoch nicht wiederherstellen. Wir empfehlen:',
          ],
          bullets: [
            'Die Filter sorgfältig einzusetzen und nur die Bestellungen auszuwählen, die Sie wirklich löschen möchten',
            'Zunächst mit einem kleinen Testdurchlauf zu beginnen',
            'Ihre Bestellungen vor der Massenlöschung als Sicherung zu exportieren',
          ],
        },
        {
          question: 'Kann ich eine Löschung rückgängig machen?',
          paragraphs: [
            'Nein. Sobald Bestellungen aus Shopify gelöscht sind, lassen sie sich weder über unsere App noch über den Shopify-Adminbereich wiederherstellen. Deshalb empfehlen wir, die Filter sehr sorgfältig zu setzen und mit kleinen Testdurchläufen zu beginnen.',
          ],
        },
        {
          question: 'Welche Filter stehen zur Verfügung?',
          paragraphs: ['Sie können Bestellungen filtern nach:'],
          bullets: [
            'Bestellstatus (ausstehend, bezahlt, ausgeführt usw.)',
            'Zahlungsstatus (bezahlt, ausstehend, erstattet usw.)',
            'Fulfillment-Status (nicht ausgeführt, ausgeführt, teilweise ausgeführt)',
            'Zeitraum (Erstellungsdatum, Aktualisierungsdatum)',
            'Bestell-Tags',
            'Und weiteren Kriterien',
          ],
        },
        {
          question: 'Wie lange dauert das Löschen von Bestellungen?',
          paragraphs: [
            'Die Geschwindigkeit hängt von der Anzahl der Bestellungen und den API-Ratenbegrenzungen von Shopify ab. Die App verarbeitet Löschungen im Hintergrund, und Sie verfolgen den Fortschritt im Bereich Job-Verlauf. Bei großen Mengen kann es einige Minuten bis mehrere Stunden dauern.',
          ],
        },
        {
          question: 'Kann ich Löschvorgänge nachverfolgen?',
          paragraphs: [
            'Ja! Die App enthält einen Job-Verlauf, in dem Sie alle Löschvorgänge und deren Status einsehen und Berichte für Ihre Unterlagen exportieren können.',
          ],
        },
        {
          question: 'Wirkt sich das auf meine Shopify-Analysen aus?',
          paragraphs: [
            'Ja, gelöschte Bestellungen verschwinden aus Ihren Shopify-Analysen und Berichten. Die zugehörigen Daten erscheinen dann nicht mehr in den Statistiken Ihres Stores. Deshalb empfehlen wir, sorgfältig zu prüfen, welche Bestellungen Sie löschen möchten.',
          ],
        },
        {
          question: 'Was passiert mit Kundendaten, wenn ich Bestellungen lösche?',
          paragraphs: [
            'Beim Löschen einer Bestellung wird der Bestelldatensatz entfernt, das Kundenkonto bleibt jedoch bestehen. Kundenprofile verbleiben in Ihrem Store, solange Sie sie nicht separat über die Kundenverwaltung von Shopify löschen.',
          ],
        },
        {
          question: 'Kann ich Entwürfe von Bestellungen oder abgebrochene Checkouts löschen?',
          paragraphs: [
            'Ja! Bulk Delete Orders unterstützt sowohl reguläre Bestellungen als auch Bestellentwürfe. Beide Arten können Sie mit leistungsstarken Filtern in großen Mengen löschen.',
          ],
        },
        {
          question: 'Was kostet Bulk Delete Orders?',
          paragraphs: ['Wir bieten eine einfache Preisgestaltung:'],
          bullets: [
            {
              label: 'Free-Tarif:',
              text: '50 Massenlöschungen von Bestellungen oder Bestellentwürfen',
            },
            {
              label: 'Complete-Tarif ($36/Jahr):',
              text: 'Unbegrenzte Massenlöschungen von Bestellungen oder Bestellentwürfen',
            },
          ],
        },
      ],
    },
    {
      title: 'App Default Address Lock',
      items: [
        {
          question: 'Was macht Default Address Lock?',
          paragraphs: [
            'Default Address Lock verhindert, dass Shopify die Standardadressen Ihrer Kunden automatisch überschreibt, wenn diese mit einer abweichenden Lieferadresse bestellen. Verschickt eine Kundin oder ein Kunde ein Geschenk an jemand anderen, ändert Shopify normalerweise die Standardadresse in die Adresse der beschenkten Person. Unsere App unterbindet das und behält die ursprüngliche Standardadresse bei.',
          ],
        },
        {
          question: 'Warum ändert Shopify die Standardadressen von Kunden?',
          paragraphs: [
            'Dieses Verhalten besteht bei Shopify schon lange (seit 2015): Die Standardadresse eines Kunden wird automatisch an die Lieferadresse der jüngsten Bestellung angepasst. Was als Komfortfunktion gedacht ist, führt in der Praxis zu Problemen bei:',
          ],
          bullets: [
            'Geschenkshops, deren Kunden an unterschiedliche Empfänger versenden',
            'B2B-Händlern, deren Käufer an ihre eigenen Kunden liefern lassen',
            'Stores mit CRM-Anbindung, die auf korrekte Kundenadressen angewiesen sind',
            'Anbietern von Abo-Boxen',
          ],
        },
        {
          question: 'Wie erkennt die App, welche Änderungen blockiert werden müssen?',
          paragraphs: [
            'Unsere intelligente Erkennung unterscheidet zwischen bestellbedingten Adressänderungen und bewussten manuellen Aktualisierungen. Aktualisiert eine Kundin oder ein Kunde die Adresse absichtlich im eigenen Konto, bleibt diese Änderung erhalten. Nur automatische Überschreibungen durch Bestellungen werden zurückgesetzt.',
          ],
        },
        {
          question: 'Können meine Kunden ihre Adressen weiterhin selbst aktualisieren?',
          paragraphs: [
            'Ja. Ihre Kunden können ihre Standardadresse jederzeit manuell über ihr Konto ändern. Die App verhindert ausschließlich automatische Überschreibungen, die beim Bestellen mit abweichender Lieferadresse entstehen.',
          ],
        },
        {
          question: 'Welche Daten speichert Default Address Lock?',
          paragraphs: [
            'Wir verfolgen einen datenschutzfreundlichen Ansatz und speichern ausschließlich Adress-IDs. Tatsächliche Adressinhalte wie Straßennamen oder Orte speichern wir nie. Durch diesen minimalen Datenbestand bleiben Ihre Kundendaten sicher, und der Schutz greift trotzdem vollständig.',
          ],
        },
        {
          question: 'Was kostet Default Address Lock?',
          paragraphs: [
            'Wir bieten eine bestellbasierte Preisgestaltung, damit die App für Stores jeder Größe erschwinglich bleibt:',
          ],
          bullets: [
            { label: 'Free:', text: 'Bis zu 30 Bestellungen pro Monat' },
            {
              label: 'Basic ($4,99/Monat):',
              text: 'Bis zu 100 Bestellungen pro Monat, oder $49,90/Jahr und 17 % sparen',
            },
            {
              label: 'Growth ($24,99/Monat):',
              text: 'Bis zu 500 Bestellungen pro Monat, oder $249,90/Jahr und 17 % sparen',
            },
            {
              label: 'Enterprise ($99/Monat):',
              text: 'Unbegrenzte Bestellungen, oder $990/Jahr und 17 % sparen',
            },
          ],
        },
        {
          question: 'Ist Default Address Lock bereits verfügbar?',
          paragraphs: [
            'Ja! Default Address Lock ist im Shopify App Store verfügbar und lässt sich direkt aus dem App-Eintrag installieren. Wenn Sie vorab Fragen haben, schreiben Sie uns an {email}.',
          ],
        },
      ],
    },
    {
      title: 'App LLMs-full.txt',
      items: [
        {
          question: 'Was macht die App LLMs-full.txt?',
          paragraphs: [
            'LLMs-full.txt erzeugt die Dateien llms.txt und llms-full.txt für Ihren Shopify-Store, damit KI-Assistenten wie ChatGPT, Claude und Gemini Ihre Produkte, Kategorien und Seiten verstehen. Die Dateien werden in Ihrem Theme veröffentlicht und von Shopify unter /llms.txt und /llms-full.txt auf Ihrer eigenen Domain ausgeliefert, ganz ohne zusätzliches Hosting.',
          ],
        },
        {
          question: 'Was sind llms.txt und llms-full.txt?',
          paragraphs: [
            'Es handelt sich um einfache Markdown-Dateien nach dem llms.txt-Standard. So wie robots.txt Suchmaschinen leitet, leitet llms.txt KI-Assistenten. llms.txt ist ein kompaktes Verzeichnis Ihres Stores, während llms-full.txt die vollständigen Inhalte aller ausgewählten Elemente enthält. KI-Modelle lesen diese Dateien deutlich zuverlässiger als gerendertes Storefront-HTML.',
          ],
        },
        {
          question: 'Welche Inhalte kann ich aufnehmen?',
          paragraphs: [
            'Sie bestimmen genau, was in die Dateien aufgenommen wird, und können alles weglassen, was nicht für KI-Assistenten zusammengefasst werden soll. Aufnehmen können Sie:',
          ],
          bullets: ['Produkte', 'Kategorien', 'Seiten', 'Blog-Artikel', 'Store-Richtlinien'],
        },
        {
          question: 'Greift LLMs-full.txt auf Kundendaten zu?',
          paragraphs: [
            'Nein. LLMs-full.txt liest über die Shopify GraphQL API ausschließlich Store-Inhalte (Produkte, Kategorien, Seiten, Blog-Artikel und Richtlinien). Auf Bestellungen oder Kundendaten greift die App nie zu.',
          ],
        },
        {
          question: 'Wer kann die erzeugten Dateien sehen?',
          paragraphs: [
            'Die Dateien sind auf Ihrer Store-Domain öffentlich zugänglich, genau wie Ihre Storefront-Seiten. Sie enthalten nur die von Ihnen ausgewählten Store-Inhalte, die in Ihrer Storefront ohnehin bereits öffentlich sind.',
          ],
        },
        {
          question: 'Verlangsamen die Dateien meinen Store?',
          paragraphs: [
            'Nein. Die erzeugten Dateien sind statische Textdateien, die Shopify zusammen mit Ihrem Theme ausliefert. Sie fügen Ihrer Storefront keine Skripte hinzu und wirken sich nicht auf die Ladegeschwindigkeit aus.',
          ],
        },
        {
          question: 'Was passiert, wenn sich mein Katalog ändert?',
          paragraphs: [
            'Erzeugen Sie die Dateien im App-Dashboard einfach neu, sobald sich Produkte, Kategorien oder Seiten ändern. Die Erzeugung erfolgt mit einem Klick, und die veröffentlichten Dateien werden direkt aktualisiert.',
          ],
        },
        {
          question: 'Was kostet LLMs-full.txt?',
          paragraphs: [
            'LLMs-full.txt bietet einen kostenlosen Plan für bis zu 50 Elemente je Inhaltstyp. Der Complete-Plan kostet 9,99 $/Monat für unbegrenzt viele Produkte, Kategorien, Seiten und Blog-Artikel sowie E-Mail-Support.',
          ],
        },
      ],
    },
    {
      title: 'Preise und Abrechnung',
      items: [
        {
          question: 'Was kosten Ihre Apps?',
          paragraphs: [
            'Die Preise unterscheiden sich je nach App. Details finden Sie auf der jeweiligen App-Seite dieser Website oder im zugehörigen Eintrag im Shopify App Store. Alle unsere Apps bieten einen kostenlosen Tarif, damit Sie sie vor einem Upgrade testen können.',
          ],
        },
        {
          question: 'Wie erfolgt die Abrechnung?',
          paragraphs: [
            'Die gesamte Abrechnung läuft über Shopify. App-Gebühren erscheinen auf Ihrer regulären Shopify-Rechnung und folgen dem Abrechnungszyklus von Shopify. Sie können jederzeit über Ihren Shopify-Adminbereich kündigen.',
          ],
        },
        {
          question: 'Gibt es einen kostenlosen Tarif?',
          paragraphs: ['Ja, alle unsere Apps bieten einen kostenlosen Tarif:'],
          bullets: [
            { label: 'Bulk Delete Orders:', text: '50 kostenlose Massenlöschungen' },
            {
              label: 'Default Address Lock:',
              text: 'Kostenlos für bis zu 30 Bestellungen pro Monat',
            },
            { label: 'LLMs-full.txt:', text: 'Kostenlos für bis zu 50 Elemente je Inhaltstyp' },
          ],
        },
        {
          question: 'Kann ich jederzeit kündigen?',
          paragraphs: [
            'Ja, Sie können jede unserer Apps jederzeit über Ihren Shopify-Adminbereich kündigen. Deinstallieren Sie die App einfach, dann fallen für den nächsten Abrechnungszeitraum keine Gebühren mehr an.',
          ],
        },
      ],
    },
    {
      title: 'Datenschutz und Sicherheit',
      items: [
        {
          question: 'Welche Daten erheben Sie?',
          paragraphs: [
            'Wir erheben nur die Daten, die für die Bereitstellung unserer App-Dienste unbedingt erforderlich sind. Dazu zählen üblicherweise Store-Informationen sowie die für den Betrieb der jeweiligen App nötigen Daten (zum Beispiel Bestelldaten für Bulk Delete Orders oder Produkt- und Seiteninhalte für LLMs-full.txt). Alle Einzelheiten finden Sie in unserer {privacyPolicy}.',
          ],
        },
        {
          question: 'Verkaufen Sie meine Daten?',
          paragraphs: [
            'Nein, niemals. Wir verkaufen, vermieten oder tauschen Ihre Daten nicht an Dritte. Ihre Store-Daten werden ausschließlich für die Bereitstellung der von Ihnen installierten App-Dienste verwendet.',
          ],
        },
        {
          question: 'Wie werden meine Daten geschützt?',
          paragraphs: ['Wir setzen branchenübliche Sicherheitsmaßnahmen ein, darunter:'],
          bullets: [
            'Verschlüsselung bei der Übertragung (TLS 1.2+) und im Ruhezustand (AES-256)',
            'Sichere Authentifizierung über OAuth 2.0',
            'Regelmäßige Sicherheitsaudits',
            'Strenge Zugriffskontrollen',
          ],
        },
        {
          question: 'Was passiert mit meinen Daten, wenn ich eine App deinstalliere?',
          paragraphs: [
            'Wenn Sie eine unserer Apps deinstallieren, bewahren wir minimale Daten (Store-ID und Zugriffstoken) 30 Tage lang auf, um eine mögliche Neuinstallation zu erleichtern. Nach 30 Tagen werden alle Ihre Daten dauerhaft aus unseren Systemen gelöscht.',
          ],
        },
        {
          question: 'Sind Sie DSGVO-konform?',
          paragraphs: [
            'Ja, wir halten die DSGVO, den CPRA und weitere Datenschutzvorschriften ein. Wir abonnieren die verpflichtenden Compliance-Webhooks von Shopify und bearbeiten Betroffenenanfragen ordnungsgemäß. Einzelheiten finden Sie in unserer {privacyPolicy}.',
          ],
        },
      ],
    },
    {
      title: 'Technische Fragen',
      items: [
        {
          question: 'Welche Shopify-Tarife werden unterstützt?',
          paragraphs: [
            'Unsere Apps funktionieren mit allen Shopify-Tarifen, einschließlich Basic, Shopify, Advanced und Shopify Plus. Einzelne Funktionen können je nach API-Zugriff Ihres Tarifs abweichen.',
          ],
        },
        {
          question: 'Funktionieren Ihre Apps mit Shopify Plus?',
          paragraphs: [
            'Ja, alle unsere Apps sind vollständig mit Shopify-Plus-Stores kompatibel.',
          ],
        },
        {
          question: 'Verlangsamen Ihre Apps meinen Store?',
          paragraphs: [
            'Nein, unsere Apps sind schlank und effizient aufgebaut. Sie arbeiten überwiegend im Backend und fügen Ihren Storefront-Seiten keine Skripte hinzu, sodass die Ladegeschwindigkeit Ihres Stores unberührt bleibt. Auch die von LLMs-full.txt veröffentlichten Dateien sind reiner statischer Text und wirken sich nicht auf die Ladezeit aus.',
          ],
        },
        {
          question: 'Brauche ich technische Kenntnisse, um Ihre Apps zu nutzen?',
          paragraphs: [
            'Technische Kenntnisse sind nicht erforderlich. Unsere Apps sind bewusst einfach und intuitiv gestaltet. Wenn Sie mit dem Shopify-Adminbereich umgehen können, kommen Sie auch mit unseren Apps zurecht. Bei Bedarf unterstützen wir Sie zusätzlich.',
          ],
        },
        {
          question: 'Kann ich mehrere Gemify-Apps gemeinsam nutzen?',
          paragraphs: [
            'Ja, unsere Apps arbeiten unabhängig voneinander und stehen sich nicht im Weg. Sie können so viele Gemify-Apps installieren und nutzen, wie Sie möchten.',
          ],
        },
      ],
    },
  ],

  contactBox: {
    heading: 'Noch Fragen offen?',
    body: 'Sie finden die gesuchte Antwort nicht? Wir helfen Ihnen gerne weiter!',
    cta: 'Support kontaktieren',
  },
};
