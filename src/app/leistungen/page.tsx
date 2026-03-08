"use client";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { ScaleIn } from "@/components/animations/scale-in";
import { CalendarClock, MapPin, Moon, Users, MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Leistungen() {
  const services = [
    {
      icon: Moon,
      title: "Sichere Heimfahrten",
      desc: "Egal wie spät es ist. Wir bringen dich sicher und auf dem schnellsten Weg bis direkt vor deine Haustür. Unser Tür-zu-Tür Prinzip bedeutet: Wir warten, bis du im Gebäude bist. Zögere nicht, uns anzurufen.",
      img: "https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: CalendarClock,
      title: "Geplante Fahrten",
      desc: "Du planst einen Abend oder hast früh morgens einen Flug? Bestelle uns gerne vor, damit wir fest und pünktlich für dich bereitstehen und du eine Sorge weniger hast. Perfekt für Flughafentransfers.",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Users,
      title: "Gruppenfahrten",
      desc: "Ihr seid mehrere Personen? Auf dem Weg zum Mädelsabend? Kein Problem. Wir schicken euch auf Wunsch ein Großraumtaxi, ohne Kompromisse beim Komfort oder der Sicherheit.",
      img: "https://images.unsplash.com/photo-1511988617509-a5708af470bd?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: MapPin,
      title: "Event- & Bergfahrten",
      desc: "Spezielle Koordination während der Bergkirchweih und an anderen Groß-Events für maximale Sicherheit im absoluten Trubel. Nutze unsere speziellen Safe Points für garantierte Abholung.",
      img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800"
    },
  ];

  return (
    <div className="pt-32 pb-24 lg:pt-48 bg-white text-slate-900 min-h-screen">
      <Container className="relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mb-24 lg:mb-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-700 mb-8 text-sm font-semibold border border-slate-200 shadow-sm backdrop-blur-sm">
              Unser Angebot
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05] shrink-0 text-slate-900">
              Bereit, wenn <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-500">du es bist.</span>
            </h1>
            <p className="text-2xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              Unser Service ist darauf ausgelegt, dir das Leben in Erlangen einfacher, flexibler und vor allem sicherer zu machen.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="space-y-16 lg:space-y-24 mb-32">
          {services.map((svc, idx) => (
             <StaggerItem key={idx}>
               <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:pl-10' : 'lg:pr-10'}`}>
                 <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                   <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 border border-primary/20">
                     <svc.icon className="w-8 h-8" />
                   </div>
                   <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900 tracking-tight">{svc.title}</h3>
                   <p className="text-xl text-slate-600 leading-relaxed max-w-lg mb-8">
                     {svc.desc}
                   </p>
                   <Button variant="outline" className="rounded-2xl h-14 px-8 text-lg font-semibold border-slate-200 text-slate-700 hover:bg-slate-50 transition-all hover:scale-105">
                     Preise anfragen
                   </Button>
                 </div>
                 
                 <div className={`relative h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                   <Image src={svc.img} alt={svc.title} fill className="object-cover transition-transform duration-1000 hover:scale-105" />
                 </div>
               </div>
             </StaggerItem>
          ))}
        </StaggerContainer>

        <ScaleIn>
          <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 lg:p-20 border border-slate-800 text-center relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#25D366] via-slate-900 to-slate-900" />
             <div className="relative z-10">
               <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white tracking-tight">Deine Fahrt buchen.</h2>
               <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                 Unser Team ist rund um die Uhr für dich da. Schreib uns eine kurze Nachricht über WhatsApp und wir melden uns sofort mit allen Details.
               </p>
               <Button size="lg" asChild className="rounded-2xl gap-3 text-xl h-16 px-12 bg-[#25D366] border-none text-white hover:bg-[#20bd5a] font-bold shadow-xl shadow-[#25D366]/20 transition-transform hover:scale-105">
                 <a href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3">
                   <MessageCircle className="w-6 h-6" />
                   WhatsApp Chat starten
                 </a>
               </Button>
             </div>
          </div>
        </ScaleIn>
      </Container>
    </div>
  );
}
