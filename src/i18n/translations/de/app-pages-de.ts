import type { FeatureCardContent, ProblemCard } from '../content-types';
import type { AppPagesDictionary } from '../dictionary-types';

/** App detail and screencast page copy in German. */
export const appPagesDe: AppPagesDictionary = {
  bulkDeleteOrders: {
    title: 'Bulk Delete Orders',
    tagline:
      'Räumen Sie Ihren Shopify-Store auf: Testbestellungen, Bestellentwürfe und Kunden löschen Sie in großen Mengen, mit leistungsstarken Filtern und automatischer Stornierung.',
    problemHeading: 'Das Problem',
    problemIntro:
      'Shopify bietet keine native Möglichkeit, Bestellungen in großen Mengen zu löschen. Hunderte oder Tausende Bestellungen einzeln von Hand zu löschen, kostet viel Zeit und ist fehleranfällig.',
    problems: [
      {
        title: 'Testbestellungen verfälschen Ihre Daten',
        description:
          'Entwicklung und Tests hinterlassen fiktive Bestellungen, die Ihre Analysen verwässern und den Blick auf die tatsächliche Geschäftsentwicklung verstellen.',
      },
      {
        title: 'Aufräumen nach der Migration',
        description:
          'Nach dem Umzug von einer anderen Plattform sind womöglich Bestellungen importiert worden, die Sie nicht mehr benötigen und entfernen möchten.',
      },
      {
        title: 'Doppelte Bestellungen',
        description:
          'Systemfehler oder Probleme bei Integrationen können doppelte Bestellungen erzeugen, die effizient bereinigt werden müssen.',
      },
      {
        title: 'DSGVO und Datenschutz',
        description:
          'Datenschutzvorschriften können verlangen, alte Kundendaten einschließlich Bestelldatensätzen nach einer bestimmten Frist zu löschen.',
      },
    ],
    howItWorksHeading: 'So funktioniert es',
    howItWorksIntro:
      'Unsere App macht das Löschen großer Bestellmengen einfach, sicher und nachvollziehbar. Filtern Sie Bestellungen präzise und löschen Sie sie mit einem einzigen Klick.',
    features: [
      {
        title: 'Leistungsstarke Filter',
        description:
          'Filtern Sie Bestellungen nach Zeitraum, Status, Tags, Kunde, Zahlungsstatus und weiteren Kriterien. So treffen Sie genau die Bestellungen, die Sie löschen möchten.',
      },
      {
        title: 'Automatisch stornieren und löschen',
        description:
          'Bestellungen werden vor dem Löschen automatisch storniert, ganz ohne manuelle Schritte. Auch bereits ausgeführte Bestellungen lassen sich löschen.',
      },
      {
        title: 'Job-Verlauf',
        description:
          'Verfolgen Sie jeden Löschvorgang in Echtzeit, mit Status, Fortschritt und etwaigen Fehlern.',
      },
      {
        title: 'Berichte exportieren',
        description:
          'Exportieren Sie Ihren Job-Verlauf als CSV für Ihre Unterlagen. Hilfreich für Compliance-Nachweise und Prüfpfade.',
      },
      {
        title: 'Bestätigung vor dem Löschen',
        description:
          'Ein Bestätigungsschritt listet jede Bestellung auf, die gelöscht wird, und weist darauf hin, dass das Löschen endgültig ist. So können Sie alles prüfen, bevor Sie fortfahren.',
      },
      {
        title: 'Kunden bereinigen',
        description:
          'Bereinigen Sie Kunden in großen Mengen auf zwei Arten: Anonymisieren Sie sie, um ihre personenbezogenen Daten zu maskieren, oder löschen Sie sie dauerhaft zusammen mit ihren Bestellungen.',
      },
    ],
    ctaHeading: 'Bereit, Ihren Store aufzuräumen?',
    ctaBody:
      'Installieren Sie Bulk Delete Orders noch heute und sparen Sie sich Stunden manueller Arbeit. Für den Einstieg steht ein kostenloser Tarif bereit.',
  },

  defaultAddressLock: {
    title: 'Default Address Lock',
    tagline:
      'Verhindern Sie, dass Shopify die Standardadressen Ihrer Kunden überschreibt, wenn diese Bestellungen an andere Adressen versenden.',
    problemHeading: 'Das Problem',
    problemIntro:
      'Seit 2015 ändert Shopify die Standardadresse eines Kunden automatisch, sobald dieser mit einer abweichenden Lieferadresse bestellt. Für Händler sorgt das für erheblichen Ärger.',
    problems: [
      {
        title: 'Geschenkshops',
        description:
          'Kunden, die Geschenke an Freunde und Familie senden, stellen fest, dass sich ihre Standardadresse ständig in die Adresse der beschenkten Person ändert.',
      },
      {
        title: 'B2B-Händler',
        description:
          'Geschäftskunden, die an ihre eigenen Kunden liefern lassen, behalten falsche Standardadressen zurück, was künftige Bestellungen stört.',
      },
      {
        title: 'Shops mit CRM-Anbindung',
        description:
          'Stores, die für Marketing oder Fulfillment auf korrekte Kundendaten angewiesen sind, kämpfen mit Problemen bei der Datenintegrität.',
      },
      {
        title: 'Abo-Geschäfte',
        description:
          'Eine einmalige Geschenksendung kann die Lieferadresse des Abos überschreiben, sodass wiederkehrende Sendungen an den falschen Ort gehen.',
      },
    ],
    howItWorksHeading: 'So funktioniert es',
    howItWorksIntro:
      'Unsere App überwacht Adressänderungen intelligent und stellt die ursprüngliche Standardadresse automatisch wieder her, sobald Shopify sie überschreiben will.',
    features: [
      {
        title: 'Intelligente Erkennung',
        description:
          'Unterscheidet zwischen bestellbedingten Änderungen und bewussten manuellen Aktualisierungen. Manuelle Änderungen durch Kunden oder Mitarbeitende bleiben erhalten.',
      },
      {
        title: 'Automatische Wiederherstellung',
        description:
          'Überschreibt eine Bestellung eine Standardadresse, stellt die App die ursprüngliche Adresse in Echtzeit wieder her, direkt beim Aufgeben der Bestellung.',
      },
      {
        title: 'Aktivitäts-Dashboard',
        description:
          'Sehen Sie alle Schutzereignisse in einem Dashboard, mit einem vollständigen Verlauf der Adressen, die die App wiederhergestellt hat.',
      },
      {
        title: 'Datenschutz zuerst',
        description:
          'Wir speichern ausschließlich Adress-IDs, niemals die tatsächlichen Adressinhalte. Ihre Kundendaten bleiben sicher in Shopify.',
      },
    ],
    diagram: {
      heading: 'Default Address Lock',
      withoutApp: 'Ohne unsere App',
      withApp: 'Mit unserer App',
      stepLabel: 'Schritt {number}',
      step1: 'Die Standardadresse ist {a} (Ihre Privatadresse)',
      step2: 'Sie senden ein Geschenk an {b} (Adresse einer befreundeten Person)',
      step3Without: 'Shopify ändert die Standardadresse in {b}',
      step3With: 'Die App erkennt die Änderung und setzt sie auf {a} zurück',
      resultWithoutTitle: 'Die Standardadresse ist jetzt falsch!',
      resultWithoutBody: 'Künftige Bestellungen gehen möglicherweise an den falschen Ort',
      resultWithTitle: 'Die Standardadresse bleibt korrekt!',
      resultWithBody: 'Ihre Privatadresse bleibt geschützt',
      summaryHeading: 'Was wir tun',
      summaryNegative: 'Wir ändern keine Bestelladressen',
      summaryPositive: 'Wir schützen Ihre Standardadresse',
    },
    ctaHeading: 'Bereit, die Adressen Ihrer Kunden zu schützen?',
    ctaBody:
      'Installieren Sie Default Address Lock noch heute und verhindern Sie, dass Shopify die Standardadressen Ihrer Kunden überschreibt. Für kleine Stores steht ein kostenloser Tarif bereit.',
  },

  llmsTxt: {
    title: 'LLMs-full.txt',
    tagline:
      'Machen Sie Ihren Shopify-Store bereit für KI. Erzeugen Sie {agentsMd}, {llmsTxt} und {llmsFullTxt}, damit KI-Assistenten Ihre Produkte, Kategorien und Seiten verstehen.',
    problemHeading: 'Warum Ihr Store llms.txt braucht',
    problemIntro:
      'Der {standardLink} hilft KI-Modellen, Ihre Website zu verstehen. So wie {robotsTxt} Suchmaschinen leitet, leitet {llmsTxt} KI-Assistenten und hilft ihnen, Ihre Produkte zu empfehlen und Kundenfragen korrekt zu beantworten.',
    standardLinkLabel: 'llms.txt-Standard',
    problems: [
      {
        title: 'Käufer fragen zuerst die KI',
        description:
          'Immer mehr Kunden recherchieren Produkte über ChatGPT, Claude und Gemini. Ohne eine saubere Zusammenfassung Ihres Katalogs arbeiten diese Assistenten mit dem, was sie zufällig auslesen können.',
      },
      {
        title: 'Storefront-HTML ist unübersichtlich',
        description:
          'Theme-Markup, Skripte und Navigation überdecken die entscheidenden Details. Modelle lesen Markdown deutlich zuverlässiger als eine gerenderte Storefront-Seite.',
      },
      {
        title: 'Handarbeit lässt sich nicht skalieren',
        description:
          'Eine handgeschriebene Datei über Hunderte Produkte, Kategorien und Blog-Artikel hinweg zu pflegen, ist mühsam und veraltet, sobald sich Ihr Katalog ändert.',
      },
      {
        title: 'Das Hosting steht im Weg',
        description:
          'KI-Assistenten suchen die Datei auf Ihrer eigenen Domain. Sie anderswo zu hosten, bedeutet zusätzlichen Einrichtungsaufwand und Weiterleitungen.',
      },
    ],
    featuresHeading: 'Das erhalten Sie',
    featuresIntro:
      'Inhalte auswählen, Ihre Dateien erzeugen und von Shopify auf Ihrer eigenen Domain ausliefern lassen. Kein zusätzliches Hosting, keine manuelle Bearbeitung.',
    features: [
      {
        title: 'Erzeugung mit einem Klick',
        description:
          'Erzeugen Sie agents.md, llms.txt und llms-full.txt direkt aus Ihrem Dashboard. Wählen Sie genau aus, welche Produkte, Kategorien, Seiten und Artikel enthalten sein sollen.',
      },
      {
        title: 'Vorlagen-Editor',
        description:
          'Bearbeiten Sie Überschriften und die Formatierung der Einträge in einem Vorlagen-Editor mit Live-Vorschau, damit die Ausgabe Ihren Store so beschreibt, wie Sie es möchten.',
      },
      {
        title: 'Native Auslieferung',
        description:
          'Die Dateien werden in Ihrem Theme veröffentlicht und von Shopify unter /agents.md, /llms.txt und /llms-full.txt ausgeliefert, ohne zusätzliches Hosting.',
      },
      {
        title: 'Sie bestimmen die Inhalte',
        description:
          'Nehmen Sie Produkte, Kategorien, Seiten, Blog-Artikel und Richtlinien auf, wahlweise als ganzen Inhaltstyp oder Element für Element. Lassen Sie alles weg, was nicht für KI-Assistenten zusammengefasst werden soll.',
      },
      {
        title: 'Zeitgesteuerte Neuerzeugung',
        description:
          'Lassen Sie Ihre Dateien automatisch stündlich, täglich oder wöchentlich in Ihrer eigenen Zeitzone neu erzeugen, mit einem Verlauf aller Durchläufe.',
      },
      {
        title: 'Sauberes Markdown',
        description:
          'Ihre Store-Inhalte werden in sauberes Markdown umgewandelt, das KI-Assistenten ohne Raten lesen können.',
      },
    ],
    howItWorksHeading: 'So funktioniert es',
    howItWorksIntro: 'Drei Schritte von der Installation zur KI-lesbaren Storefront.',
    steps: [
      {
        title: 'Installieren und einrichten',
        description:
          'Wählen Sie aus, welche Inhalte aufgenommen werden: Produkte, Kategorien, Seiten, Blog-Artikel und Richtlinien.',
      },
      {
        title: 'Dateien erzeugen',
        description:
          'Auf Erzeugen klicken. Die App liest Ihre Store-Inhalte und wandelt sie in sauberes Markdown um.',
      },
      {
        title: 'Bereit für KI',
        description:
          'Ihre Dateien sind auf Ihrer eigenen Domain live, wo KI-Assistenten wie ChatGPT, Claude und Gemini sie lesen können. Aktivieren Sie die zeitgesteuerte Neuerzeugung, damit sie aktuell bleiben.',
      },
    ],
    ctaHeading: 'Bereit für den KI-Auftritt?',
    ctaBody:
      'Installieren Sie LLMs-full.txt noch heute und geben Sie KI-Assistenten ein zutreffendes Bild Ihres Stores. Installation kostenlos.',
  },

  // Noch nicht im App Store: Jede App hat eine Detailseite (ohne Installationslink
  // und ohne Preise, bis der Eintrag live ist), eine Screencast-Seite und für
  // Best Store Locator und Checkout Probe eine Hilfeseite.
  japanMultiship: {
    title: 'Japan Multiship',
    tagline:
      'Käufer senden eine Bestellung über die Warenkorbseite an bis zu 20 Empfänger in ganz Japan, bezahlen einmal und sehen die Versandkosten für jedes Ziel.',
    problemHeading: 'Das Problem',
    problemIntro:
      'Der Shopify-Checkout versendet eine Bestellung an eine einzige Adresse. Wer in Japan Geschenke kauft, schickt dieselbe Bestellung oft an Familie, Freunde und Geschäftskunden. Also durchlaufen Käufer den Checkout einmal pro Empfänger oder senden Ihnen per E-Mail eine Liste, die Sie von Hand abarbeiten.',
    problems: [
      {
        title: 'Ein Checkout pro Empfänger',
        description:
          'Käufer wiederholen den Checkout für jede Adresse. Das dauert, und viele geben vor dem letzten Geschenk auf.',
      },
      {
        title: 'Versandkosten von Hand berechnet',
        description:
          'Ohne Versandtarif für jedes Ziel schätzen Sie die Versandkosten oder korrigieren den Gesamtbetrag nach der Zahlung.',
      },
      {
        title: 'Adresslisten per E-Mail',
        description:
          'Empfänger aus einer Notiz oder einer Tabelle müssen einzeln in Bestellungen und Dateien für den Versanddienstleister übertragen werden.',
      },
      {
        title: 'Sendungsverfolgung für jedes Paket',
        description:
          'Jedes Paket erhält eine eigene Sendungsnummer, und diese wieder in Shopify einzutragen, kostet Zeit.',
      },
    ] satisfies ProblemCard[],
    howItWorksHeading: 'So funktioniert es',
    howItWorksIntro:
      'Käufer teilen den Warenkorb auf der Warenkorbseite auf und bezahlen einmal. Jedes Ziel wird anschließend zu einer eigenen Ausführung, bereit für Ihren Versanddienstleister.',
    features: [
      {
        title: 'Bis zu 20 Empfänger',
        description:
          'Auf der Warenkorbseite ordnen Käufer die Artikel im Warenkorb bis zu 20 Empfängern zu und bezahlen einmal.',
      },
      {
        title: 'Automatisches Ausfüllen per PLZ',
        description: 'Eine japanische PLZ füllt Präfektur und Stadt aus, mit Kana-Feldern für Namen.',
      },
      {
        title: 'Versandkosten pro Ziel',
        description:
          'Die Versandkosten werden für jedes Ziel anhand Ihrer Versandzonen berechnet und vor dem Checkout angezeigt.',
      },
      {
        title: 'Eine Ausführung pro Ziel',
        description:
          'Nach der Zahlung wird jedes Ziel zu einem eigenen Ausführungsauftrag, und die Bestellseite listet alle Empfänger auf.',
      },
      {
        title: 'Yamato B2 Cloud CSV',
        description:
          'Exportieren Sie eine Yamato B2 Cloud CSV für Bestellungen mit mehreren Zielen und für Bestellungen an eine einzige Adresse.',
      },
      {
        title: 'Import der Sendungsnummern',
        description:
          'Laden Sie die CSV des Versanddienstleisters hoch, um Sendungsnummern hinzuzufügen und jedes Ziel auszuführen.',
      },
    ] satisfies FeatureCardContent[],
    goodToKnowHeading: 'Gut zu wissen',
    goodToKnow: [
      'Für Stores in Japan entwickelt: Die Store-Währung muss JPY sein.',
      'Erfordert den Vertriebskanal Onlineshop und eine Warenkorbseite. Unter Shopify Plus können Käufer über einen Checkout-Block auch im Checkout Ziele hinzufügen.',
      'Ein Rabatt vom Typ „Betrag von Bestellung“ senkt auch die Versandgebühr, und die App markiert jede solche Bestellung. Ein Rabatt vom Typ „Betrag von Produkten“ tut das nicht.',
      'Die App ist auf Englisch und Japanisch verfügbar.',
    ],
    ctaHeading: 'Möchten Sie Japan Multiship in Ihrem Store nutzen?',
    ctaBody:
      'Japan Multiship ist noch nicht im Shopify App Store. Schreiben Sie uns eine Nachricht, wenn Sie die App in Ihrem Store nutzen möchten.',
  },
  bestStoreLocator: {
    title: 'Best Store Locator',
    tagline:
      'Zeigen Sie Ihre Filialen, Verkaufsstellen oder Händler auf einer durchsuchbaren Karte in Ihrer Storefront, ganz ohne API-Schlüssel oder Kartenkonten einzurichten.',
    problemHeading: 'Das Problem',
    problemIntro:
      'Kunden, die Sie besuchen möchten, müssen den nächstgelegenen Standort finden. Viele Store Locator verlangen zuerst einen API-Schlüssel für Karten und ein Abrechnungskonto, und eine lange Liste von Standorten von Hand aktuell zu halten, kostet Zeit.',
    problems: [
      {
        title: 'API-Schlüssel und Kartenabrechnung',
        description:
          'Viele Locator benötigen ein Konto bei einem Kartenanbieter, einen API-Schlüssel und eine hinterlegte Kreditkarte, bevor die Karte erscheint.',
      },
      {
        title: 'Lange Standortlisten',
        description:
          'Hunderte Verkaufsstellen einzeln anzulegen, dauert lange, und ein fehlerhafter Import kann korrekte Daten überschreiben.',
      },
      {
        title: 'Pins an der falschen Stelle',
        description: 'Eine Adresse an der falschen Position schickt Kunden zur falschen Tür.',
      },
      {
        title: 'Kunden, die aufgeben',
        description:
          'Ohne Suche nach Stadt oder PLZ und ohne Öffnungszeiten gehen Kunden, statt Sie zu besuchen.',
      },
    ] satisfies ProblemCard[],
    howItWorksHeading: 'So funktioniert es',
    howItWorksIntro:
      'Fügen Sie Ihre Standorte von Hand oder per CSV hinzu, und in Ihrer Storefront erscheint eine durchsuchbare Karte als Theme-Block.',
    features: [
      {
        title: 'Integrierte Karten',
        description: 'Karten und Adresssuche sind in jedem Tarif enthalten, ohne Kartenkonto oder API-Schlüssel.',
      },
      {
        title: 'CSV-Import mit Vorschau',
        description:
          'Sehen Sie eine vollständige Vorschau, bevor etwas gespeichert wird. Erneute Importe aktualisieren bestehende Filialen und erkennen Duplikate.',
      },
      {
        title: 'Zur Prüfung zurückgehalten',
        description:
          'Adressen, die sich nicht genau platzieren lassen, werden zur Prüfung zurückgehalten, statt mit einem falschen Pin live zu gehen.',
      },
      {
        title: 'Theme-Block',
        description:
          'Fügen Sie die Karte als Theme-Block hinzu, mit Ihren Farben, Ihrem Layout, Ihrer Entfernungseinheit und Ihren Texten.',
      },
      {
        title: 'Suche und „Jetzt geöffnet“',
        description:
          'Kunden suchen nach Stadt oder PLZ, nutzen ihren Standort, filtern nach Tag und sehen, welche Filialen gerade geöffnet sind. Angemeldete Kunden können eine Lieblingsfiliale speichern.',
      },
      {
        title: 'Standortseiten',
        description:
          'Standortseiten mit strukturierten Daten helfen Suchmaschinen und KI-Assistenten, jede Filiale zu finden (ab dem Pro-Tarif).',
      },
    ] satisfies FeatureCardContent[],
    goodToKnowHeading: 'Gut zu wissen',
    goodToKnow: [
      'Erfordert den Vertriebskanal Onlineshop: Die Karte ist ein Theme-App-Block.',
      'Der CSV-Import ist in jedem Tarif enthalten.',
      'Die Adresssuche verarbeitet etwa eine Zeile pro Sekunde. Fügen Sie Spalten für Breiten- und Längengrad hinzu, um eine große Datei sofort zu importieren.',
      'Funktioniert für Stores in jedem Land.',
    ],
    ctaHeading: 'Möchten Sie Best Store Locator in Ihrem Store nutzen?',
    ctaBody:
      'Best Store Locator ist noch nicht im Shopify App Store. Schreiben Sie uns eine Nachricht, wenn Sie die App in Ihrem Store nutzen möchten.',
  },
  checkoutProbe: {
    title: 'Checkout Probe',
    tagline:
      'Machen Sie Ihren Checkout bereit für WebMCP. Finden Sie heraus, was KI-Shopping-Agenten in Ihrem Checkout aufhalten würde, mit einer Lösung für jedes Problem, das der Test findet. Es wird nie eine Bestellung aufgegeben.',
    problemHeading: 'Das Problem',
    problemIntro:
      'Seit September 2026 bietet der Shopify-Checkout WebMCP-Tools, sodass KI-Agenten im Browser der Käufer einen Checkout lesen und abschließen können. Verlangt ein Checkout Angaben, die ein Agent nicht machen kann, bricht der Agent ab, der Verkauf geht verloren, und in Ihren Bestellungen ist nicht zu sehen, warum.',
    problems: [
      {
        title: 'Regeln, die Angaben vom Käufer verlangen',
        description:
          'Eine Checkout-Regel, die vom Käufer zusätzliche Angaben verlangt, kann einen Agenten stoppen, der nicht antworten kann.',
      },
      {
        title: 'Kein Shop Pay',
        description: 'Ohne Shop Pay können manche Agenten den Zahlungsschritt nicht abschließen.',
      },
      {
        title: 'Kein Versand angeboten',
        description:
          'Wird für die Adresse kein Versandtarif angeboten, kann der Agent den Checkout nicht abschließen.',
      },
      {
        title: 'Nichts in den Bestellungen zu sehen',
        description:
          'Ein gescheiterter Checkout durch einen Agenten hinterlässt keine Bestellung, daher bleibt das Problem verborgen.',
      },
    ] satisfies ProblemCard[],
    howItWorksHeading: 'So funktioniert es',
    howItWorksIntro:
      'Checkout Probe öffnet einen Test-Checkout so, wie es ein Agent tun würde, gibt einen Testkäufer und eine Lieferadresse ein und bricht den Checkout dann ab.',
    features: [
      {
        title: 'Test mit einem Klick',
        description:
          'Führen Sie mit einem Klick einen Test-Checkout so durch, wie es ein KI-Shopping-Agent tun würde.',
      },
      {
        title: 'Wo ein Agent hängen bleibt',
        description:
          'Sehen Sie jede Stelle, an der ein Agent abbrechen würde, mit der Meldung, die der Checkout zurückgegeben hat.',
      },
      {
        title: 'Eine Lösung für jedes Problem',
        description:
          'Erhalten Sie für jedes Problem, das der Test findet, eine Lösung und einen Link zur passenden Einstellungsseite.',
      },
      {
        title: 'Was der Test nicht sehen kann',
        description:
          'Der Bericht listet auf, was der Test nicht prüfen kann, damit Sie wissen, was Sie selbst kontrollieren sollten.',
      },
      {
        title: 'Ihr Produkt und Ihre Adresse',
        description: 'Wählen Sie das Testprodukt und die Lieferadresse, die der Test verwendet.',
      },
      {
        title: 'Nie eine Bestellung',
        description: 'Der Test-Checkout wird immer abgebrochen. Es wird keine Bestellung aufgegeben.',
      },
    ] satisfies FeatureCardContent[],
    goodToKnowHeading: 'Gut zu wissen',
    goodToKnow: [
      'Für die WebMCP-Tools des Shopify-Checkouts gemacht. Der Test läuft über Shopifys Checkout MCP, daher erscheinen einige Schritte, die nur im Browser sichtbar sind, etwa manche Checkout-UI-Erweiterungen, möglicherweise nicht. Der Bericht listet auf, was der Test nicht prüfen kann.',
      'Nur lesend: Die App ändert nie Ihre Store-Einstellungen und gibt nie eine Bestellung auf.',
      'Erfordert mindestens ein aktives, kaufbares Produkt und eine Lieferadresse: die Store-Adresse oder eine Testadresse, die Sie in der App festlegen.',
      'Keine Theme-Änderungen und keine App-Blöcke.',
    ],
    ctaHeading: 'Möchten Sie Checkout Probe in Ihrem Store nutzen?',
    ctaBody:
      'Checkout Probe ist noch nicht im Shopify App Store. Schreiben Sie uns eine Nachricht, wenn Sie die App in Ihrem Store nutzen möchten.',
  },
};
