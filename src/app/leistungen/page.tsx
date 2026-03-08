import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { CalendarClock, MapPin, Moon, Users, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Leistungen",
  description: "Entdecke das Leistungsangebot von Luna. Sichere Fahrten, Vorbestellungen und Event-Shuttles in Erlangen.",
};

export default function Leistungen() {
  const services = [
    {
      icon: Moon,
      title: "Sichere Heimfahrten",
      desc: "Egal wie spät es ist. Wir bringen dich sicher und auf dem schnellen Weg bis direkt vor deine Haustür. Zögere nicht, uns anzurufen.",
    },
    {
      icon: CalendarClock,
      title: "Vorbestellungen",
      desc: "Du planst einen Abend? Bestelle uns gerne vor, damit wir fest pünktlich für dich bereitstehen und du eine Sorge weniger hast.",
    },
    {
      icon: Users,
      title: "Gruppenfahrten",
      desc: "Ihr seid mehrere Personen? Kein Problem. Wir schicken euch auf Wunsch auch ein Großraumtaxi, ohne Kompromisse beim Komfort.",
    },
    {
      icon: MapPin,
      title: "Event- & Bergfahrten",
      desc: "Spezielle Koordination während der Bergkirchweih und an anderen Groß-Events für maximale Sicherheit im absoluten Trubel.",
    },
  ];

  return (
    <div className="pt-32 pb-24 lg:pt-48 bg-white text-slate-900 min-h-[90vh]">
      <Container className="relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mb-16 lg:mb-24">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight shrink-0">
              Bereit, wenn du es bist.
            </h1>
            <p className="text-xl text-slate-600 font-normal leading-relaxed">
              Unser Service ist darauf ausgelegt, dir das Leben in Erlangen einfacher, flexibler und vor allem sicherer zu machen. Wähle das, was gerade zu dir passt.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-32">
          {services.map((svc, idx) => (
             <StaggerItem key={idx} className="h-full">
               <div className="h-full bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-200 transition-colors hover:border-slate-300 relative overflow-hidden flex flex-col group">
                 <div className="relative z-10">
                   <div className="w-16 h-16 rounded-2xl bg-white text-primary border border-slate-200 shadow-sm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                     <svc.icon className="w-7 h-7" />
                   </div>
                   <h3 className="text-2xl font-bold mb-4 text-slate-900">{svc.title}</h3>
                   <p className="text-lg text-slate-600 leading-relaxed mb-4">
                     {svc.desc}
                   </p>
                 </div>
               </div>
             </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto bg-primary rounded-3xl p-10 lg:p-16 border border-primary text-center relative overflow-hidden shadow-lg">
             <div className="relative z-10">
               <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white tracking-tight">Noch Fragen zum Angebot?</h2>
               <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
                 Unser Team ist rund um die Uhr für dich da. Schreib uns eine kurze Nachricht über WhatsApp und wir melden uns sofort.
               </p>
               <Button size="lg" asChild className="rounded-xl gap-3 text-lg h-16 px-10 bg-white text-primary hover:bg-slate-50 font-bold shadow-md">
                 <a href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3">
                   <MessageCircle className="w-6 h-6" />
                   WhatsApp Support kontaktieren
                 </a>
               </Button>
             </div>
          </div>
        </ScrollReveal>
      </Container>
    </div>
  );
}
