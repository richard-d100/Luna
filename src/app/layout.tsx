import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/config/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Premium & Sicheres Frauen-Taxi in Erlangen`,
    template: `%s | ${siteConfig.name}`
  },
  description: "Erleben Sie sichere, diskrete und komfortable Fahrten mit Luna. Das moderne Frauen-Taxi für Erlangen und Umgebung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col font-sans selection:bg-primary/30 selection:text-white`}
      >
        <Header />
        <main className="flex-1 overflow-x-hidden pt-20 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
