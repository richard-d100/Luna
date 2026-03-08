"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { siteConfig } from "@/config/site";
import { Phone, ShieldCheck, Clock, CheckCircle2, ChevronRight, Star, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <Container className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <ScrollReveal className="max-w-xl z-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 mb-8 text-sm font-semibold border border-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Jetzt direkt verfügbar in Erlangen
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-slate-900 leading-[1.1]">
              Sicher ankommen.<br />
              <span className="text-primary">Jederzeit.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-normal">
              Luna ist dein Premium Frauen-Taxi für Erlangen. Diskret, zuverlässig und vor allem sicher – wir bringen dich entspannt an dein Ziel, egal zu welcher Uhrzeit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-xl gap-2 font-semibold shadow-sm h-14" asChild>
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}>
                  <Phone className="w-5 h-5" />
                  Direkt anrufen
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="rounded-xl gap-2 font-semibold h-14 shadow-sm" asChild>
                <a href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp Nachricht
                </a>
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center">
                     <Star className="w-3 h-3 text-primary" fill="currentColor" />
                  </div>
                ))}
              </div>
              <p>Von hunderten Frauen in Erlangen <strong className="text-slate-800">geprüft & empfohlen</strong>.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="relative h-[450px] lg:h-[650px] w-full rounded-3xl overflow-hidden block shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200/50 bg-slate-50">
            <Image 
              src="/images/hero-3d.png" 
              alt="3D Illustration Luna Taxi" 
              fill 
              className="object-cover object-center relative z-10 transition-transform duration-1000 hover:scale-105"
              priority
            />
            {/* Soft highlight overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 via-transparent to-white/20 z-20 pointer-events-none" />
            
            {/* Floating Trust Badge */}
            <motion.div 
               animate={{ y: [0, -8, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/95 backdrop-blur-md p-4 pr-6 rounded-2xl flex items-center gap-4 shadow-xl border border-white/20 z-30"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                 <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-0.5">Sicherheit</p>
                 <p className="text-sm font-bold text-slate-900">Geprüfte Fahrerinnen</p>
              </div>
            </motion.div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-slate-100 bg-slate-50">
        <Container>
           <div className="flex flex-wrap justify-between lg:justify-center items-center gap-8 md:gap-24 text-slate-600">
             <div className="flex flex-col items-center gap-2"><ShieldCheck size={28} className="text-slate-400"/><span className="font-semibold text-sm">Geprüfte Sicherheit</span></div>
             <div className="flex flex-col items-center gap-2"><CheckCircle2 size={28} className="text-slate-400"/><span className="font-semibold text-sm">Pünktlichkeit</span></div>
             <div className="flex flex-col items-center gap-2"><Heart size={28} className="text-slate-400"/><span className="font-semibold text-sm">Persönlicher Service</span></div>
             <div className="flex flex-col items-center gap-2"><Star size={28} className="text-slate-400"/><span className="font-semibold text-sm">Höchster Komfort</span></div>
           </div>
        </Container>
      </section>

      {/* Value Proposition / Benefits */}
      <section className="py-24 bg-white relative">
        <Container>
          <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">Mehr als nur ein Taxi.</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Wir haben den Transport für Frauen in Erlangen neu gedacht. Keine Kompromisse bei Sicherheit, Sauberkeit und Service.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem className="md:col-span-2">
              <div className="h-full bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Kompromisslose Sicherheit</h3>
                  <p className="text-slate-600 leading-relaxed max-w-md text-lg">
                    Jede Fahrt wird durch unser streng geprüftes Personal durchgeführt. Wir warten, bis du sicher in deiner Haustür bist. Dein Wohlbefinden steht an erster Stelle.
                  </p>
                </div>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="h-full bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Absolute Verlässlichkeit</h3>
                <p className="text-slate-600 leading-relaxed">
                  Pünktlich auf die Minute. Ob für den frühen Flug, das wichtige Meeting oder den sicheren Heimweg tief in der Nacht.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem className="md:col-span-3">
               <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-slate-200 items-stretch bg-white">
                 <div className="p-8 lg:p-16 flex flex-col justify-center">
                   <h3 className="text-3xl font-bold mb-6 text-slate-900 tracking-tight">Der Premium-Standard.</h3>
                   <ul className="space-y-5 mb-8">
                     {["Gepflegte, moderne Fahrzeuge", "Hilfsbereiter Tür-zu-Tür Service", "Transparente Kommunikation", "Flexible Buchung per WhatsApp"].map((item, i) => (
                       <li key={i} className="flex items-start gap-3 text-slate-600">
                         <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                         <span className="text-lg leading-tight pt-0.5">{item}</span>
                       </li>
                     ))}
                   </ul>
                   <Button variant="outline" className="rounded-xl w-fit border-slate-300 text-slate-700 hover:bg-slate-50">Mehr über uns erfahren</Button>
                 </div>
                 <div className="relative h-64 md:h-auto min-h-[400px]">
                    <Image src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800" alt="Luna Interieur Details" fill className="object-cover" />
                 </div>
               </div>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <Container>
          <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">So einfach geht's.</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Kein langes Warten, keine komplizierten Apps. Einfach, direkt und persönlich – weil gute Dinge einfach sein sollten.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 text-center relative z-10">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[40px] left-1/6 right-1/6 h-[2px] bg-slate-200 z-0"></div>
            
            {[
              { step: "1", title: "Anfrage senden", desc: "Kontaktiere uns bequem per WhatsApp oder Telefon. Sag uns, wann und wo du uns brauchst." },
              { step: "2", title: "Bestätigung erhalten", desc: "Wir bestätigen deine Fahrt sofort und schicken dir die Details zu Fahrerin und Fahrzeug." },
              { step: "3", title: "Sicher ankommen", desc: "Lehn dich zurück. Wir holen dich pünktlich ab und bringen dich sicher bis an die Haustür." }
            ].map((s, i) => (
              <StaggerItem key={i} className="relative z-10">
                <div className="w-20 h-20 mx-auto rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl font-bold text-primary mb-6">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Safety Editorial / Driver Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <ScrollReveal>
               <div className="relative h-[600px] rounded-3xl overflow-hidden border border-slate-100 shadow-xl">
                 <Image src="https://images.unsplash.com/photo-1621252178385-2e6ca418aa84?auto=format&fit=crop&q=80&w=800" alt="Luna Fahrerin" fill className="object-cover" />
               </div>
             </ScrollReveal>
             <ScrollReveal delay={0.2}>
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 mb-6 text-sm font-semibold uppercase tracking-widest border border-slate-200">
                  Unser Versprechen
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.1] text-slate-900 tracking-tight">Die Menschen hinter dem Steuer.</h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10">
                  <p>
                    Bei Luna fährst du nicht mit anonymen Algorithmen, sondern mit engagierten Menschen. Jede unserer Fahrerinnen durchläuft einen gezielten Auswahlprozess und ist bestens ausgebildet.
                  </p>
                  <p>
                    Wir glauben daran, dass eine Fahrt mehr sein sollte als nur Transport. Es geht um das gute Gefühl, sicher aufgehoben zu sein. Wir lassen dich nie im Dunkeln stehen.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                   <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                     <p className="font-bold text-slate-900 text-2xl mb-1">100%</p>
                     <p className="text-sm text-slate-500 font-medium">Geprüftes Personal</p>
                   </div>
                   <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                     <p className="font-bold text-slate-900 text-2xl mb-1">Nr. 1</p>
                     <p className="text-sm text-slate-500 font-medium">Frauen-Service in ER</p>
                   </div>
                </div>
             </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <Container>
           <ScrollReveal className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">Noch Fragen?</h2>
             <p className="text-lg text-slate-600">Alles was du über deine Fahrt mit Luna wissen musst.</p>
           </ScrollReveal>

           <div className="max-w-3xl mx-auto space-y-4">
             {[
               { q: "Muss ich die Fahrt im Voraus buchen?", a: "Du kannst uns spontan anrufen, wir empfehlen bei wichtigen Terminen oder Nachteinsätzen jedoch eine kurze WhatsApp-Nachricht zur Vorbestellung." },
               { q: "Kann ich den Service auch tagsüber nutzen?", a: "Absolut! Zwar liegt unser Fokus stark auf der Sicherheit bei Nacht, unser Premium-Service steht dir aber rund um die Uhr zur Verfügung." },
               { q: "Sind die Preise höher als beim normalen Taxi?", a: "Nein. Wir rechnen nach den offiziellen Taxitarifen ab. Der Premium-Service und die Sicherheit kosten dich keinen Cent extra." },
               { q: "Dürfen auch Männer mitfahren?", a: "Selbstverständlich. Als Frauen-Taxi-Unternehmen ist unser Personal primär weiblich und unser Service fokussiert auf das Sicherheitsbedürfnis von Frauen. Wir befördern aber jeden Fahrgast mit demselben hohen Standard." }
             ].map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <details className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors cursor-pointer shadow-sm">
                    <summary className="flex items-center justify-between font-bold text-lg p-6 list-none text-slate-900">
                      {faq.q}
                      <span className="transition group-open:rotate-180 text-primary">
                        <ChevronRight />
                      </span>
                    </summary>
                    <div className="text-slate-600 px-6 pb-6 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                </ScrollReveal>
             ))}
           </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white relative">
        <Container>
          <ScrollReveal>
            <div className="bg-primary rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight tracking-tight">Bereit für eine sichere Heimfahrt?</h2>
                <p className="text-lg md:text-xl text-white/90 mb-10 font-normal">
                  Speichere dir unsere Nummer für das nächste Mal oder kontaktiere uns direkt für deine Fahrt heute Nacht.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" className="rounded-xl gap-2 font-bold bg-white text-primary hover:bg-slate-50 h-14 shadow-md px-8" asChild>
                    <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}>
                      <Phone className="w-5 h-5" />
                      Jetzt {siteConfig.contact.phoneFormatted} anrufen
                    </a>
                  </Button>
                  <Button size="lg" className="rounded-xl gap-2 font-bold bg-primary-foreground/10 text-white hover:bg-primary-foreground/20 border-none h-14 px-8" asChild>
                    <a href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer">
                      Per WhatsApp kontaktieren
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
