import { Container } from "@/components/layout/container";

export const metadata = {
  title: "Impressum",
};

export default function Impressum() {
  return (
    <div className="pt-32 pb-24 lg:pt-48 bg-white min-h-[80vh]">
      <Container className="max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-bold mb-10 text-slate-900 tracking-tight">Impressum</h1>
        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>TODO: [FIRMENNAME EINTRAGEN]</strong><br />
            TODO: [STRASSE HAUSNUMMER]<br />
            TODO: [PLZ ORT]
          </p>
          
          <h2>Vertreten durch:</h2>
          <p>TODO: [NAME DES VERTRETUNGSBERECHTIGTEN]</p>

          <h2>Kontakt</h2>
          <p>
            Telefon: TODO: [TELEFONNUMMER]<br />
            E-Mail: <a href="mailto:TODO:[EMAIL]" className="text-primary hover:underline">TODO: [EMAIL]</a>
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            TODO: [UST-ID EINTRAGEN]
          </p>

          <h2>Aufsichtsbehörde</h2>
          <p>TODO: [AUFSICHTSBEHÖRDE FÜR TAXIKONZESSION EINTRAGEN]</p>

          <h2>Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr" className="text-primary hover:underline" target="_blank" rel="noreferrer"> https://ec.europa.eu/consumers/odr</a>. Unsere E-Mail-Adresse finden Sie oben im Impressum.<br />
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </Container>
    </div>
  );
}
