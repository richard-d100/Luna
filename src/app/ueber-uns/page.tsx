"use client";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { ScaleIn } from "@/components/animations/scale-in";
import { siteConfig } from "@/config/site";
import { Heart, ShieldCheck, Star, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function UeberUns() {
  return (
    <div className="pt-32 pb-24 lg:pt-48 bg-white text-slate-900 overflow-hidden">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-700 mb-8 text-sm font-semibold border border-slate-200 shadow-sm backdrop-blur-sm">
              Die Geschichte von Luna
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]">
              Mehr als <br />
              nur eine Fahrt.<br />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-500">Ein sicheres Gefühl.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-normal max-w-lg">
              Luna ist aus einer einfachen Frage entstanden: Wie können wir den Heimweg nach einer langen Nacht, einem tollen Event oder einfach im Alltag für Frauen in Erlangen sicherer und angenehmer machen?
            </p>
          </ScrollReveal>
          
          <ScaleIn delay={0.2} className="relative h-[500px] lg:h-[700px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1542361730-22db34053912?auto=format&fit=crop&q=80&w=1200" alt="Erlangen at Night" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </ScaleIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-32 items-center">
          <ScaleIn delay={0.2} className="relative aspect-square rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl flex flex-col justify-end group">
            <Image src="https://images.unsplash.com/photo-1621252178385-2e6ca418aa84?auto=format&fit=crop&q=80&w=800" alt="Luna Founder / Driver" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="relative z-10 p-8 lg:p-12 mt-auto">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Die Gründerin</p>
              <p className="text-3xl font-bold text-white mb-4">{siteConfig.person.founder}</p>
              <p className="text-white/80 italic text-xl leading-relaxed">»Sicherheit ist kein Privileg, sondern ein Grundrecht für jede Frau in unserer Stadt.«</p>
            </div>
          </ScaleIn>

          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight">Unser Versprechen an dich.</h2>
            <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
              <p>
                Wir sind kein gewöhnliches Taxiunternehmen. Luna steht für ein klares Versprechen: Vertrauen, Respekt und Verlässlichkeit, sobald du einsteigst.
              </p>
              <p>
                Egal, ob du von der Bergkirchweih kommst, die letzte Vorlesung länger gedauert hat oder du spät von der Arbeit nach Hause musst. Wir möchten, dass du an nichts anderes denken musst, als entspannt anzukommen.
              </p>
              <div className="p-8 rounded-[2rem] border border-slate-200 bg-slate-50 text-slate-900 font-medium shadow-sm mt-10 text-lg flex gap-4 items-start">
                <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <p>
                  Dafür setzen wir auf geschultes Personal, auf Wunsch Frauen am Steuer und einen Service, der auf Augenhöhe kommuniziert.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 lg:p-24 border border-slate-800 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">Unsere Werte</h3>
              <p className="text-xl text-slate-400">Das Fundament, auf dem jede Fahrt bei Luna aufbaut.</p>
            </div>
            
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: ShieldCheck, title: "Sicherheit", desc: "Kompromissloser Fokus auf ein geschütztes Ankommen bis zur Tür." },
                { icon: Users, title: "Ausgewählt", desc: "Nur geprüftes Personal für absolute Diskretion jederzeit." },
                { icon: Heart, title: "Für Frauen", desc: "Ein Angebot, das die Bedürfnisse von Frauen in der Nacht versteht." },
                { icon: Star, title: "Premium", desc: "Moderne Autos, gepflegtes Personal, beste Erfahrung." }
              ].map((val, i) => (
                <StaggerItem key={i} className="flex flex-col p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md transition-colors hover:bg-white/10 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <val.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">{val.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-lg">{val.desc}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        <section className="mt-32 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight">Erlebe den Unterschied.</h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Buche deine nächste Fahrt mit Luna und überzeuge dich selbst von unserem Premium-Service.
            </p>
            <Button size="lg" className="rounded-2xl gap-3 font-semibold shadow-xl shadow-primary/20 h-16 px-10 text-lg bg-slate-900 text-white hover:bg-slate-800 transition-all hover:scale-105" asChild>
              <a href="/kontakt">
                Jetzt kontaktieren
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </ScrollReveal>
        </section>
      </Container>
    </div>
  );
}
