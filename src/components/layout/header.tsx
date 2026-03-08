"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Startseite" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/events", label: "Events & Shuttle" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-slate-100"
            : "bg-transparent py-6"
        )}
      >
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="relative z-50 flex items-center gap-3 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <Image 
                src="/logo.svg" 
                alt="Luna Logo" 
                fill 
                className="object-contain p-2"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-primary font-bold text-2xl block absolute">L</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-foreground transition-colors">
              Luna<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 bg-white/80 backdrop-blur-md px-8 py-2.5 rounded-full border border-slate-200 lg:flex shadow-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-all hover:text-primary relative",
                  pathname === item.href ? "text-primary" : "text-slate-600"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div layoutId="nav-indicator" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer" className="hidden xl:flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Link>
            <Button className="rounded-xl gap-2 font-semibold shadow-sm" onClick={() => window.location.href = `tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}>
              <Phone className="w-4 h-4" />
              <span>{siteConfig.contact.phoneFormatted}</span>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden overflow-hidden flex flex-col pt-24"
          >
            <div className="flex-1 flex flex-col px-8 py-8 gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-3xl font-bold tracking-tight transition-colors border-b border-slate-100 pb-4",
                    pathname === item.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              
              <Link
                href="/kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
              >
                Kontakt
              </Link>
            </div>
            
            <div className="p-8 border-t border-slate-100 pb-safe bg-slate-50">
               <Button size="lg" className="w-full rounded-xl gap-3 mb-4 h-14 text-lg" onClick={() => window.location.href = `tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}>
                 <Phone className="w-5 h-5" />
                 Jetzt anrufen
               </Button>
               <Button size="lg" variant="secondary" className="w-full rounded-xl gap-3 h-14 text-lg" onClick={() => window.open(siteConfig.contact.whatsapp, '_blank')}>
                 <MessageCircle className="w-5 h-5 text-primary" />
                 WhatsApp
               </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
