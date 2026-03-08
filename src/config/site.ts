export const siteConfig = {
  name: "Luna",
  description: "Modernes, vertrauenswürdiges und sicheres Taxi-Angebot für Frauen in Erlangen.",
  url: "https://luna-taxi-erlangen.de",
  contact: {
    phone: "+49 (0) 123 456789", // [TELEFONNUMMER]
    phoneFormatted: "0123 / 456 789", // [TELEFONNUMMER]
    whatsapp: "https://wa.me/49123456789", // [WHATSAPP-LINK]
    email: "hallo@luna-taxi.de", // [E-MAIL]
    address: "Hauptstraße 1, 91054 Erlangen" // [ADRESSE]
  },
  hours: {
    weekdays: "18:00 - 04:00 Uhr", // [ÖFFNUNGSZEITEN]
    weekend: "24 Stunden",
    events: "Durchgehend während Groß-Events"
  },
  social: {
    instagram: "https://instagram.com/lunataxierlangen",
    facebook: "https://facebook.com/lunataxierlangen"
  },
  person: {
    founder: "Maria Mustermann" // [NAME]
  }
};

export type SiteConfig = typeof siteConfig;
