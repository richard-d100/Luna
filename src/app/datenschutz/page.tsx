import { Container } from "@/components/layout/container";

export const metadata = {
  title: "Datenschutzerklärung",
};

export default function Datenschutz() {
  return (
    <div className="pt-32 pb-24 lg:pt-48 bg-white min-h-[80vh]">
      <Container className="max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-bold mb-10 text-slate-900 tracking-tight">Datenschutzerklärung</h1>
        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p>
            Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
          </p>
          <p>
            <strong>TODO: [FIRMENNAME EINTRAGEN]</strong><br />
            TODO: [NAME DES VERTRETUNGSBERECHTIGTEN]<br />
            TODO: [STRASSE HAUSNUMMER]<br />
            TODO: [PLZ ORT]<br />
            E-Mail: TODO: [EMAIL]
          </p>

          <h2>1. Erfassung allgemeiner Informationen beim Besuch unserer Website</h2>
          <p>
            Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig Informationen übermitteln, 
            werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des 
            Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches.
          </p>

          <h2>2. WhatsApp Nutzung</h2>
          <p>
            Wir bieten zur Kontaktaufnahme WhatsApp an. WhatsApp Inc. (1601 Willow Road, Menlo Park, California 94025, USA) ist 
            ein Dienst der Meta Platforms, Inc. Wir weisen darauf hin, dass WhatsApp auf das Adressbuch des genutzten Mobilgeräts zugreift.
            TODO: [WHATSAPP DATENSCHUTZ HINWEIS ERGÄNZEN ODER PRÜFEN]
          </p>

          <h2>3. Cookies</h2>
          <p>
            Wie viele andere Webseiten verwenden wir auch so genannte „Cookies“. Unsere Website verwendet aktuell [TODO: ART DER COOKIES PRÜFEN] Cookies.
          </p>

          <h2>4. Ihre Betroffenenrechte</h2>
          <p>
            Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:
          </p>
          <ul>
            <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung,</li>
            <li>Berichtigung unrichtiger personenbezogener Daten,</li>
            <li>Löschung Ihrer bei uns gespeicherten Daten,</li>
            <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen,</li>
            <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns und</li>
            <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben.</li>
          </ul>

          <h2>5. Änderung unserer Datenschutzbestimmungen</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services.
          </p>
        </div>
      </Container>
    </div>
  );
}
