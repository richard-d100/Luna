import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { siteConfig } from "@/config/site";
import { Heart, ShieldCheck, Star, Users } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Über uns",
  description: "Erfahre mehr über Luna, dein vertrauenswürdiges und sicheres Taxi-Angebot für Frauen in Erlangen.",
};

export default function UeberUns() {
  return (
    <div className="pt-32 pb-24 lg:pt-48 bg-white text-slate-900 overflow-hidden">
      <Container className="relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mb-20 lg:mb-32">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Mehr als nur eine Fahrt. <br className="hidden md:block" />
              <span className="text-primary">Ein sicheres Gefühl.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-normal">
              Luna ist aus einer einfachen Frage entstanden: Wie können wir den Heimweg nach einer langen Nacht, einem tollen Event oder einfach im Alltag für Frauen in Erlangen sicherer und angenehmer machen?
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-32 items-center">
          <ScrollReveal delay={0.1} className="order-2 lg:order-1">
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Wir sind kein gewöhnliches Taxiunternehmen. Luna steht für ein klares Versprechen: Vertrauen, Respekt und Verlässlichkeit, sobald du einsteigst.
              </p>
              <p>
                Egal, ob du von der Bergkirchweih kommst, die letzte Vorlesung länger gedauert hat oder du spät von der Arbeit nach Hause musst. Wir möchten, dass du an nichts anderes denken musst, als ankommen.
              </p>
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 font-medium shadow-sm mt-8">
                Dafür setzen wir auf geschultes Personal, auf Wunsch Frauen am Steuer und einen Service, der auf Augenhöhe kommuniziert.
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="order-1 lg:order-2">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl flex flex-col justify-end">
              <Image src="https://images.unsplash.com/photo-1621252178385-2e6ca418aa84?auto=format&fit=crop&q=80&w=800" alt="Luna Founder / Driver" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="relative z-10 bg-white/95 backdrop-blur-md p-6 lg:p-8 border border-white/20 rounded-2xl m-6 inline-block w-[calc(100%-3rem)] shadow-lg">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Gründerin</p>
                <p className="text-2xl font-bold text-slate-900 mb-3">{siteConfig.person.founder}</p>
                <p className="text-slate-600 italic text-lg leading-relaxed">»Sicherheit ist kein Privileg, sondern ein Grundrecht.«</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="bg-slate-50 rounded-[3rem] p-10 md:p-16 lg:p-24 border border-slate-200 relative">
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-5xl font-bold mb-16 text-center tracking-tight text-slate-900">Unsere Werte</h3>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: ShieldCheck, title: "Sicherheit", desc: "Kompromissloser Fokus auf ein geschütztes Ankommen." },
                { icon: Users, title: "Respektvoll", desc: "Aufmerksamer Service und absolute Diskretion jederzeit." },
                { icon: Heart, title: "Für Frauen", desc: "Ein Angebot, das die Bedürfnisse von Frauen versteht." },
                { icon: Star, title: "Premium", desc: "Moderne Autos, gepflegtes Personal, beste Erfahrung." }
              ].map((val, i) => (
                <StaggerItem key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-200 shadow-sm transition-shadow hover:shadow-md group">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <val.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-slate-900">{val.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm lg:text-base">{val.desc}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>
      </Container>
    </div>
  );
}
