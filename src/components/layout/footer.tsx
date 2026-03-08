import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./container";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 relative overflow-hidden mt-auto">
      <div className="pt-24 pb-12 relative z-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <Link href="/" className="inline-block relative z-50 flex items-center gap-2 group mb-6">
                <div className="relative w-10 h-10 overflow-hidden rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="text-primary font-bold text-xl block absolute">L</span>
                </div>
                <span className="text-3xl font-bold tracking-tight text-foreground">
                  Luna<span className="text-primary">.</span>
                </span>
              </Link>
              <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed text-lg font-light">
                {siteConfig.description}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-6 text-lg">Direktkontakt</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary" />
                    {siteConfig.contact.phoneFormatted}
                  </a>
                </li>
                <li>
                  <a href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-3">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-6 text-lg">Informationen</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <Link href="/ueber-uns" className="hover:text-primary transition-colors">Über uns</Link>
                </li>
                <li>
                  <Link href="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <p>© {currentYear} {siteConfig.name}. Alle Rechte vorbehalten. Design Demo.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-1">Made with <span className="text-primary">🤍</span> in Erlangen</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
