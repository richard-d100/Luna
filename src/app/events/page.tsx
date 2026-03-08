"use client";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { ScaleIn } from "@/components/animations/scale-in";
import { Button } from "@/components/ui/button";
import { ShieldAlert, MapPin, PhoneCall, Car, CheckCircle, Navigation, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Events() {
  const steps = [
    {
      icon: MapPin,
      title: "1. Safe Point aufsuchen",
      desc: "Begib dich zu unserer markierten Anlaufstelle in der Nähe des Events. Dort bist du sicher und in bester Gesellschaft."
    },
    {
      icon: PhoneCall,
      title: "2. Kontakt",
      desc: "Unsere Mitarbeiter koordinieren vor Ort, oder du rufst uns direkt an. Wir organisieren sofort dein Taxi."
    },
    {
      icon: Car,
      title: "3. Abholung",
      desc: "Das Luna Taxi fährt direkt zum Safe Point. Kein langes Suchen in dunklen Nebenstraßen, kein langes Warten allein."
    },
    {
      icon: CheckCircle,
      title: "4. Sicher ankommen",
      desc: "Wir bringen dich direkt vor deine Haustür und warten, bis du im Haus bist. Deine Sicherheit steht an erster Stelle."
    }
  ];

  return (
    <div className="pt-32 pb-24 lg:pt-48 bg-white text-slate-900 overflow-hidden min-h-screen">
      <Container className="relative z-10">
        <ScrollReveal className="max-w-4xl mx-auto text-center mb-20 lg:mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-primary mb-8 text-sm font-semibold tracking-wider uppercase border border-rose-100 shadow-sm">
            <ShieldAlert className="w-4 h-4" />
            <span>Spezielles Sicherheitskonzept</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]">
            Sicher feiern. <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-500">Sicher heimkommen.</span>
          </h1>
          <p className="text-2xl text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
            Die Bergkirchweih und andere große Events in Erlangen sind absolute Highlights. Doch gerade in vollen und unübersichtlichen Nächten ist ein sicherer Heimweg entscheidend. 
          </p>
        </ScrollReveal>

        <div className="mb-32 relative">
          <ScaleIn className="w-full h-[400px] lg:h-[600px] rounded-[3rem] overflow-hidden relative shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200" alt="Concert/Event" fill className="object-cover" />
            <div className="absolute inset-0 bg-slate-900/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
              <Navigation className="w-16 h-16 text-primary mb-6 drop-shadow-lg" />
              <h2 className="text-4xl lg:text-6xl font-bold mb-4">Das Luna Safe-Point-Konzept.</h2>
              <p className="text-xl max-w-2xl font-medium">Extra für Nächte entwickelt, in denen die Stadt nicht schläft.</p>
            </div>
          </ScaleIn>
        </div>

        {/* The Safe Point Concept */}
        <ScrollReveal>
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 lg:p-24 border border-slate-200 relative overflow-hidden mb-24 lg:mb-32 shadow-sm">
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="lg:pr-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight">Wie funktioniert das vor Ort?</h2>
                <div className="space-y-6 text-xl text-slate-600 mb-10 leading-relaxed">
                  <p>
                    Je nach Eventorganisation richten wir offizielle Safe Points ein oder definieren klare, sichere Abholpunkte. 
                  </p>
                  <p>
                    Dies stellt sicher, dass du nachts nicht alleine durch dunkle Straßen laufen musst. Die genauen Standorte für die Bergkirchweih teilen wir rechtzeitig über unsere Kanäle.
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mt-8 block">
                    Folge uns für Live Updates auf Instagram
                  </p>
                </div>
                <Button size="lg" className="rounded-2xl gap-3 font-bold h-16 text-lg w-full sm:w-auto px-10 bg-slate-900 text-white hover:bg-slate-800 shadow-xl transition-transform hover:scale-105" asChild>
                  <a href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                    Fragen per WhatsApp
                  </a>
                </Button>
              </div>
              
              <div>
                <StaggerContainer className="grid sm:grid-cols-2 gap-6">
                  {steps.map((step, idx) => (
                    <StaggerItem key={idx} className="bg-white border border-slate-200 p-8 rounded-3xl group shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-primary/20">
                        <step.icon className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-slate-900">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Action Call */}
        <ScaleIn>
          <div className="max-w-4xl mx-auto text-center bg-primary text-white rounded-[3rem] p-12 md:p-20 border border-primary shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-md">
                 <ShieldAlert className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Jetzt gerade Hilfe nötig?</h3>
              <p className="text-xl text-white/90 mb-12 leading-relaxed font-normal max-w-2xl mx-auto">
                Zögere nicht. Wenn du dich unwohl fühlst, ruf uns an. Auch wenn wir gerade ausgelastet sein sollten, versuchen wir dir eine sofortige Anlaufstelle in Erlangen zu vermitteln.
              </p>
              <Button size="lg" className="rounded-2xl gap-3 h-16 text-xl px-12 bg-white text-primary border-none hover:bg-slate-100 font-bold shadow-xl transition-transform hover:scale-105" asChild>
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3">
                  <PhoneCall className="w-6 h-6" />
                  Zentrale anrufen
                </a>
              </Button>
            </div>
          </div>
        </ScaleIn>
      </Container>
    </div>
  );
}
