import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { Button } from "@/components/ui/button";
import { ShieldAlert, MapPin, PhoneCall, Car, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Events & Bergkirchweih",
  description: "Erfahre, wie Luna dich nach der Bergkirchweih oder anderen Groß-Events sicher nach Hause bringt. Unser Safe Point Konzept.",
};

export default function Events() {
  const steps = [
    {
      icon: MapPin,
      title: "1. Safe Point aufsuchen",
      desc: "Begib dich zu unserer markierten Anlaufstelle in der Nähe des Events. Dort bist du sicher und gut aufgehoben."
    },
    {
      icon: PhoneCall,
      title: "2. Kontakt",
      desc: "Unsere Mitarbeiter koordinieren vor Ort, oder du rufst uns direkt an. Wir organisieren sofort dein Taxi."
    },
    {
      icon: Car,
      title: "3. Abholung",
      desc: "Das Luna Taxi fährt direkt zum Safe Point. Kein Suchen in dunklen Straßen, kein langes Warten allein."
    },
    {
      icon: CheckCircle,
      title: "4. Sicher ankommen",
      desc: "Wir bringen dich direkt vor deine Haustür und warten, bis du im Haus bist."
    }
  ];

  return (
    <div className="pt-32 pb-24 lg:pt-48 bg-white text-slate-900 overflow-hidden">
      <Container className="relative z-10">
        <ScrollReveal className="max-w-4xl mx-auto text-center mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 text-primary mb-8 text-sm font-semibold tracking-wider uppercase border border-rose-100">
            <ShieldAlert className="w-4 h-4" />
            <span>Spezielles Sicherheitskonzept</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Sicher feiern. <br />
            <span className="text-primary">Sicher heimkommen.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Die Bergkirchweih und andere große Events in Erlangen sind Highlights des Jahres. Doch gerade in vollen und unübersichtlichen Nächten ist ein sicherer Heimweg entscheidend. Wir haben dafür das Luna Safe-Point-Konzept entwickelt.
          </p>
        </ScrollReveal>

        {/* The Safe Point Concept */}
        <ScrollReveal>
          <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 lg:p-16 border border-slate-200 relative overflow-hidden mb-24 lg:mb-32">
            <div className="relative z-10 grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Wie funktioniert das vor Ort?</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Je nach Eventorganisation richten wir offizielle Safe Points ein oder definieren klare, sichere Abholpunkte. Dies stellt sicher, dass du nachts nicht alleine durch dunkle Straßen laufen musst. (Details werden für jedes Event aktuell auf Instagram gepostet).
                </p>
                <Button size="lg" className="rounded-xl gap-3 font-bold h-14 w-full text-lg sm:w-auto px-8" asChild>
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}>
                    <PhoneCall className="w-5 h-5" />
                    Taxi Vorbestellen
                  </a>
                </Button>
              </div>
              
              <div className="lg:col-span-3">
                <StaggerContainer className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                  {steps.map((step, idx) => (
                    <StaggerItem key={idx} className="bg-white border border-slate-200 p-8 rounded-3xl group shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-slate-100">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-slate-900">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm lg:text-base">{step.desc}</p>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Event FAQ / Need Help Now */}
        <ScrollReveal delay={0.2} className="max-w-3xl mx-auto text-center bg-white rounded-3xl p-10 md:p-16 border border-slate-200 shadow-sm">
          <h3 className="text-3xl font-bold mb-6 text-slate-900">Jetzt gerade Hilfe nötig?</h3>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed font-normal">
            Zögere nicht. Wenn du dich unwohl fühlst, ruf uns an. Auch wenn wir gerade ausgelastet sein sollten, versuchen wir dir eine sofortige Anlaufstelle oder eine sichere Option zu vermitteln.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button size="lg" className="rounded-xl gap-3 h-14 text-lg px-8 bg-primary text-white hover:bg-primary/90" asChild>
               <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5" />
                Zentrale anrufen
               </a>
             </Button>
          </div>
        </ScrollReveal>
      </Container>
    </div>
  );
}
