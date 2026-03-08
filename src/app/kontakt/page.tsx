import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { siteConfig } from "@/config/site";
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Kontakt",
  description: "Kontaktiere Luna telefonisch oder per WhatsApp. Wir sind für dich erreichbar.",
};

export default function Kontakt() {
  return (
    <div className="pt-32 pb-24 lg:pt-48 bg-white text-slate-900 overflow-hidden">
      <Container className="relative z-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Wir sind für dich da.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-normal">
            Keine komplizierten Formulare. Ruf uns direkt an oder schreib uns eine Nachricht über WhatsApp. Wir melden uns umgehend zurück.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-20 lg:mb-32">
          <StaggerItem>
            <div className="h-full bg-primary text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-lg flex flex-col items-center text-center justify-center border border-primary/20 hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-8 z-10 backdrop-blur-sm border border-white/20 group-hover:scale-105 transition-transform">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 z-10">Zentrale Anrufen</h2>
              <p className="text-white/90 mb-10 z-10 text-lg font-normal">Für direkte Bestellungen & akute Anfragen.</p>
              <Button size="lg" className="w-full bg-white text-primary hover:bg-slate-50 font-bold rounded-xl z-10 h-14 text-lg shadow-sm" asChild>
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}>
                  {siteConfig.contact.phoneFormatted}
                </a>
              </Button>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="h-full bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-sm flex flex-col items-center text-center justify-center hover:border-[#25D366]/50 hover:shadow-md transition-all group">
              <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 z-10 border border-slate-100 group-hover:bg-[#25D366]/10 group-hover:border-[#25D366]/20 transition-colors">
                <MessageCircle className="w-10 h-10 text-[#25D366]" />
              </div>
              <h2 className="text-3xl font-bold mb-4 z-10 text-slate-900">WhatsApp Chat</h2>
              <p className="text-slate-600 mb-10 z-10 text-lg font-normal">Für Vorbestellungen & Fragen zwischendurch.</p>
              <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#20BE5C] text-white rounded-xl gap-3 font-bold h-14 text-lg shadow-sm z-10" asChild>
                <a href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer">
                  Nachricht schreiben
                </a>
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="bg-slate-50 rounded-3xl p-10 md:p-14 border border-slate-200 grid sm:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 border border-slate-200 shadow-sm">
                <Clock className="w-6 h-6 text-slate-700" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">Servicezeiten</h4>
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed whitespace-pre-line">
                Mo-Do: {siteConfig.hours.weekdays}
                {"\n"}Wochenende: {siteConfig.hours.weekend}
              </p>
            </div>
            
            <div className="flex flex-col items-center border-t border-slate-200 sm:border-t-0 sm:border-l pt-10 sm:pt-0">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 border border-slate-200 shadow-sm">
                <MapPin className="w-6 h-6 text-slate-700" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">Einsatzgebiet</h4>
              <p className="text-sm lg:text-base text-slate-600">Erlangen & 20km Umgebung</p>
            </div>
            
            <div className="flex flex-col items-center border-t border-slate-200 sm:border-t-0 sm:border-l pt-10 sm:pt-0">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 border border-slate-200 shadow-sm">
                <Mail className="w-6 h-6 text-slate-700" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">E-Mail Kontakt</h4>
              <p className="text-sm lg:text-base text-slate-600 border-b border-transparent hover:border-slate-400 transition-colors">
                <a href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </div>
  );
}
