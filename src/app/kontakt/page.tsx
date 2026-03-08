"use client";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { ScaleIn } from "@/components/animations/scale-in";
import { siteConfig } from "@/config/site";
import { Phone, MessageCircle, Mail, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Kontakt() {
  return (
    <div className="pt-32 pb-24 lg:pt-48 bg-slate-50 text-slate-900 overflow-hidden min-h-screen">
      <Container className="relative z-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-20 lg:mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-700 mb-8 text-sm font-semibold border border-slate-200 shadow-sm backdrop-blur-sm">
            Einfach. Direkt. Persönlich.
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]">
            Wir sind für<br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-500">dich da.</span>
          </h1>
          <p className="text-2xl text-slate-600 leading-relaxed font-normal">
            Keine komplizierten Formulare. Ruf uns an oder schreib uns eine Nachricht.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto mb-20 lg:mb-32">
          <StaggerItem>
            <div className="h-full bg-slate-900 text-white rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col justify-between group">
              {/* Decorative element */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/30 rounded-full blur-[60px] group-hover:bg-primary/40 transition-colors pointer-events-none" />
              
              <div>
                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-10 z-10 backdrop-blur-md border border-white/10 shadow-lg">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 z-10 tracking-tight">Direktanruf</h2>
                <p className="text-slate-300 mb-12 z-10 text-xl font-normal leading-relaxed max-w-sm">Für Ad-hoc Bestellungen, akute Anfragen in der Nacht oder wenn du sofort jemanden sprechen musst.</p>
              </div>
              
              <Button size="lg" className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-2xl z-10 h-16 text-lg shadow-xl shadow-white/5 transition-transform hover:scale-105" asChild>
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center justify-center gap-2">
                  {siteConfig.contact.phoneFormatted}
                  <ArrowUpRight className="w-5 h-5 ml-1 text-slate-400" />
                </a>
              </Button>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="h-full bg-white rounded-[3rem] p-10 lg:p-16 border border-slate-200 shadow-xl flex flex-col justify-between group relative overflow-hidden">
               {/* Decorative element */}
               <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#25D366]/10 rounded-full blur-[60px] group-hover:bg-[#25D366]/20 transition-colors pointer-events-none" />
               
               <div>
                  <div className="w-20 h-20 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mb-10 z-10 border border-[#25D366]/20 shadow-lg">
                    <MessageCircle className="w-10 h-10 text-[#25D366]" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 z-10 text-slate-900 tracking-tight">WhatsApp</h2>
                  <p className="text-slate-600 mb-12 z-10 text-xl font-normal leading-relaxed max-w-sm">Der entspannteste Weg. Für Vorbestellungen am Tag oder kurze Nachfragen von unterwegs.</p>
               </div>
               
               <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BE5C] text-white rounded-2xl gap-3 font-bold h-16 text-lg shadow-xl shadow-[#25D366]/20 transition-transform hover:scale-105 z-10 border-none" asChild>
                 <a href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-center">
                   Chat starten
                   <ArrowUpRight className="w-5 h-5 ml-1 text-white/70" />
                 </a>
               </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <ScaleIn delay={0.2} className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[3rem] p-12 lg:p-16 border border-slate-200 grid md:grid-cols-3 gap-12 lg:gap-16 shadow-xl relative overflow-hidden">
            {/* Map Placeholder Graphic Background */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Erlangen,Germany&zoom=13&size=800x400&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x9ca3af&style=feature:all|element:labels.text.stroke|color:0xf8f9fa&style=feature:all|element:labels.icon|visibility:off&style=feature:administrative|element:geometry.fill|color:0x000000&style=feature:administrative|element:geometry.stroke|color:0x144b53&style=feature:landscape|element:all|color:0xf3f4f6&style=feature:poi|element:all|visibility:off&style=feature:road|element:all|saturation:-100|lightness:45&style=feature:transit|element:all|visibility:off&style=feature:water|element:all|color:0xd1d5db&style=feature:water|element:geometry.fill|color:0xe5e7eb')] bg-cover bg-center opacity-30 pointer-events-none" style={{ filter: 'grayscale(1) contrast(1.2) brightness(1.1)' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white" />
            
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 border border-slate-200 shadow-md">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">Servicezeiten</h4>
              <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line font-medium">
                Mo-Do: {siteConfig.hours.weekdays}
                {"\n"}Wochenende: {siteConfig.hours.weekend}
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center relative z-10 md:border-l md:border-slate-200/60 md:pl-12 lg:pl-16">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 border border-slate-200 shadow-md">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">Einsatzgebiet</h4>
              <p className="text-lg text-slate-600 font-medium">Zentrum Erlangen {"\n"}& bis zu 20km Umgebung</p>
            </div>
            
            <div className="flex flex-col items-center text-center relative z-10 md:border-l md:border-slate-200/60 md:pl-12 lg:pl-16">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 border border-slate-200 shadow-md">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">Geschäftlich</h4>
              <p className="text-lg text-slate-600 font-medium transition-colors hover:text-primary">
                <a href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="text-sm mt-2 text-slate-400">Für Partnerschaften & Feedback</p>
            </div>
          </div>
        </ScaleIn>
      </Container>
    </div>
  );
}
