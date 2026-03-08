"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { ScaleIn } from "@/components/animations/scale-in";
import { siteConfig } from "@/config/site";
import { Phone, ShieldCheck, Clock, CheckCircle2, ChevronRight, Star, Heart, MessageCircle, MapPin, Car } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* Grand Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        
        <Container className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-700 mb-8 text-sm font-semibold border border-slate-200 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                24/7 in Erlangen verfügbar
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.05]">
                Sicherheit,<br />
                <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-500">die bewegt.</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-normal max-w-lg">
                Luna ist das exklusive Frauen-Taxi für Erlangen. Geprüfte Fahrerinnen, höchste Diskretion und Premium-Komfort für deinen sicheren Weg.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="rounded-2xl gap-3 font-semibold shadow-xl shadow-primary/20 h-16 px-8 text-base bg-slate-900 text-white hover:bg-slate-800 transition-all hover:scale-105" asChild>
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}>
                    <Phone className="w-5 h-5" />
                    Fahrt anfragen
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-2xl gap-3 font-semibold h-16 px-8 text-base border-slate-200 hover:bg-slate-50 transition-all hover:scale-105" asChild>
                  <a href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                       <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" width={40} height={40} />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-1 text-primary mb-0.5">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3.5 h-3.5" fill="currentColor" />)}
                  </div>
                  <p>Über <strong className="text-slate-900">1.000 sichere Fahrten</strong></p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScaleIn delay={0.2} duration={0.8} className="relative h-[500px] sm:h-[600px] lg:h-[750px] w-full block">
            {/* Subtle glow behind the transparent 3D render to make it pop, acting like spatial environment */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-primary/10 via-pink-500/5 to-transparent rounded-full blur-3xl -z-10" />
            <Image 
              src="/Unbenannt.png" 
              alt="Premium 3D Illustration Luna Taxi" 
              fill 
              className="object-contain object-center relative z-10 transition-transform duration-1000 md:scale-105 hover:scale-110 drop-shadow-2xl"
              priority
            />
            
            {/* Floating Elements mimicking Apple UI */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/4 -left-4 sm:left-4 bg-white/90 backdrop-blur-xl p-4 rounded-2xl flex items-center gap-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white z-30 transform -rotate-2"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              </div>
              <div>
                 <p className="text-xs font-medium text-slate-500">Status</p>
                 <p className="text-sm font-bold text-slate-900">Sofort verfügbar</p>
              </div>
            </motion.div>
          </ScaleIn>
        </Container>
      </section>

      {/* Trust & Stats Bar */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <Container>
           <div className="flex flex-wrap justify-center lg:justify-between items-center gap-10 md:gap-16 text-slate-600">
             {[
               { icon: ShieldCheck, title: "100% Sicher", desc: "Geprüfte Fahrerinnen" },
               { icon: MapPin, title: "Lokal", desc: "Für Erlangen & Umgebung" },
               { icon: Star, title: "Premium", desc: "Höchster Komfort" },
               { icon: Heart, title: "Vertraut", desc: "Von Frauen für Frauen" },
             ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-primary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
             ))}
           </div>
        </Container>
      </section>

      {/* Use Cases Grid */}
      <section className="py-32 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">Für jede deiner Fahrten.</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Egal woher du kommst oder wohin du gehst – wir sind dein sicherer Begleiter.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Sicher nach Hause", desc: "Nach der Party oder dem späten Feierabend - wir bringen dich bis vor die Haustür. Wir warten, bis du sicher drin bist.", img: "https://images.unsplash.com/photo-1517400508447-f8dd518b86e3?auto=format&fit=crop&q=80&w=800" },
              { title: "Flughafen Transfer", desc: "Entspannt in den Urlaub oder zur Geschäftsreise. Pünktlich, zuverlässig und mit genügend Platz für dein Gepäck.", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800" },
              { title: "Alltag & Termine", desc: "Zum Arzt, zum Shoppen oder zum wichtigen Meeting. Du fährst komfortabel und kommst entspannt an.", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800" },
            ].map((useCase, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={useCase.img} alt={useCase.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">{useCase.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{useCase.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Safety Deep Dive */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        
        <Container className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <ScaleIn className="order-2 lg:order-1 relative h-[500px] lg:h-[600px]">
            <Image src="/images/safety-shield.png" alt="Safety Shield" fill className="object-contain drop-shadow-2xl" />
          </ScaleIn>
          
          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white leading-[1.1]">
                Sicherheit ist<br />
                <span className="text-primary">kein Zufall.</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-12">
                Als spezialisiertes Frauen-Taxi setzen wir Maßstäbe, wenn es um deinen Schutz geht. Jeder Prozess ist darauf ausgerichtet.
              </p>
            </ScrollReveal>

            <StaggerContainer className="space-y-6">
              {[
                { title: "Verifizierte Fahrerinnen", desc: "Jede Fahrerin durchläuft einen strengen Auswahlprozess und eine spezielle Schulung." },
                { title: "Tür-zu-Tür Prinzip", desc: "Wir fahren nicht einfach weg. Wir warten aktiv, bis du sicher im Gebäude bist." },
                { title: "Live-Standort Teilen", desc: "Teile deine Fahrt in Echtzeit mit Familie oder Freunden über WhatsApp." }
              ].map((feature, i) => (
                <StaggerItem key={i}>
                  <div className="flex gap-5 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors">
                    <div className="mt-1">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                      <p className="text-slate-400">{feature.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* How it works APP Teaser */}
      <section className="py-32 bg-slate-50 border-b border-slate-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
                  Buchen in <br />Sekundenschnelle.
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  Keine komplizierte App-Installation nötig. Schreibe uns einfach eine WhatsApp oder rufe uns an. Wir kümmern uns um den Rest.
                </p>
              </ScrollReveal>

              <StaggerContainer className="space-y-8 mb-10">
                {[
                  { step: "01", title: "Nachricht senden", desc: "Schreibe uns auf WhatsApp mit deinem Standort und Ziel." },
                  { step: "02", title: "Sofortige Bestätigung", desc: "Du erhältst in Kürze Kennzeichen und Ankunftszeit." },
                  { step: "03", title: "Entspannt einsteigen", desc: "Deine Fahrerin holt dich pünktlich an deinem Standort ab." }
                ].map((s, i) => (
                  <StaggerItem key={i} className="flex gap-6">
                    <div className="text-3xl font-bold text-slate-200">{s.step}</div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">{s.title}</h4>
                      <p className="text-slate-600">{s.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <ScrollReveal>
                <Button size="lg" className="rounded-2xl gap-2 font-bold h-16 px-8 text-base bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/20 transition-all hover:scale-105" asChild>
                   <a href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer">
                     <MessageCircle className="w-6 h-6" />
                     Jetzt auf WhatsApp schreiben
                   </a>
                </Button>
              </ScrollReveal>
            </div>
            
            <ScaleIn className="relative h-[600px] lg:h-[800px] flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] h-full">
                <Image src="/images/app-mockup.png" alt="WhatsApp Booking Mockup" fill className="object-contain drop-shadow-2xl" />
              </div>
            </ScaleIn>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <Container>
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">Das sagen unsere Kundinnen.</h2>
            <p className="text-xl text-slate-600">
              Vertrauen muss man sich erarbeiten. Wir sind stolz auf das Feedback der Frauen aus Erlangen.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", role: "Studentin", text: "Endlich ein Service, bei dem ich mich auf dem Heimweg von der Bergkirchweih 100% sicher fühle." },
              { name: "Julia K.", role: "Unternehmerin", text: "Pünktlich, extrem saubere Autos und sehr freundlich. Mein Stamm-Taxi für Geschäftsreisen." },
              { name: "Elena W.", role: "Mutter", text: "Ich nutze Luna oft, wenn meine Tochter abends unterwegs ist. Das Tür-zu-Tür Prinzip ist fantastisch." }
            ].map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] h-full flex flex-col justify-between hover:shadow-xl transition-shadow">
                  <div>
                    <div className="flex gap-1 text-yellow-400 mb-6">
                      {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5" fill="currentColor" />)}
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-8">"{t.text}"</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                      <Image src={`https://i.pravatar.cc/100?img=${i + 20}`} alt={t.name} width={48} height={48} className="object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{t.name}</p>
                      <p className="text-sm text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <Container className="max-w-4xl">
           <ScrollReveal className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">Häufige Fragen.</h2>
           </ScrollReveal>

           <div className="space-y-4">
             {[
               { q: "Muss ich die Fahrt im Voraus buchen?", a: "Du kannst uns spontan anrufen, wir empfehlen bei wichtigen Terminen oder Nachteinsätzen jedoch eine kurze WhatsApp-Nachricht zur Vorbestellung." },
               { q: "Kann ich den Service auch tagsüber nutzen?", a: "Absolut! Zwar liegt unser Fokus stark auf der Sicherheit bei Nacht, unser Premium-Service steht dir aber rund um die Uhr zur Verfügung." },
               { q: "Sind die Preise höher als beim normalen Taxi?", a: "Nein. Wir rechnen nach den offiziellen Taxitarifen ab. Der Premium-Service und die Sicherheit kosten dich keinen Cent extra." },
               { q: "Dürfen auch Männer mitfahren?", a: "Selbstverständlich. Als Frauen-Taxi-Unternehmen ist unser Personal primär weiblich und unser Service fokussiert auf das Sicherheitsbedürfnis von Frauen. Wir befördern aber jeden Fahrgast mit demselben hohen Standard." }
             ].map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <details className="group bg-white border border-slate-200 rounded-[1.5rem] overflow-hidden hover:border-slate-300 transition-colors cursor-pointer shadow-sm">
                    <summary className="flex items-center justify-between font-bold text-lg md:text-xl p-8 list-none text-slate-900">
                      {faq.q}
                      <span className="transition-transform duration-300 group-open:rotate-180 text-primary flex-shrink-0 ml-4">
                        <ChevronRight className="w-6 h-6" />
                      </span>
                    </summary>
                    <div className="text-slate-600 px-8 pb-8 text-lg leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                </ScrollReveal>
             ))}
           </div>
        </Container>
      </section>

      {/* Massive Footer CTA */}
      <section className="p-4 md:p-8">
        <ScrollReveal>
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden max-w-7xl mx-auto">
            {/* Abstract gradient in background */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-slate-900 to-slate-900" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight tracking-tight">Dein sicheres Taxi in Erlangen.</h2>
              <p className="text-xl text-slate-300 mb-12 font-normal">
                Speichere dir unsere Nummer für das nächste Mal oder kontaktiere uns direkt für deine Fahrt heute.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button size="lg" className="rounded-2xl gap-3 font-bold bg-white text-slate-900 hover:bg-slate-100 h-16 px-10 text-lg shadow-xl shadow-white/10 transition-transform hover:scale-105" asChild>
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}>
                    <Phone className="w-6 h-6" />
                    {siteConfig.contact.phoneFormatted}
                  </a>
                </Button>
                <Button size="lg" className="rounded-2xl gap-3 font-bold bg-[#25D366] text-white hover:bg-[#20bd5a] border-none h-16 px-10 text-lg shadow-xl shadow-[#25D366]/20 transition-transform hover:scale-105" asChild>
                  <a href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer">
                    <MessageCircle className="w-6 h-6" />
                    WhatsApp Chat
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
