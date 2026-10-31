import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { StructuredData } from "@/components/StructuredData";
import { siteUrl } from "@/data/seo";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollTone } from "@/components/ScrollTone";
import "./globals.css";
import "./responsive-refinements.css";
import "./theme.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Primapox",
    template: "%s | Primapox",
  },
  description: "Executamos pintura eletrostática com tinta em pó, ideais para: esquadrias, batentes, caixilhos, forros, divisórias, fachadas, telhas metálicas, coberturas, estruturas espaciais, etc.",
  icons: {
    icon: [{ url: "/icons/primapox-32.png", type: "image/png", sizes:"32x32" }, {url:"/icons/primapox-192.png",type:"image/png",sizes:"192x192"}],
    shortcut: "/icons/primapox-32.png",
    apple: {url:"/icons/primapox-180.png",sizes:"180x180",type:"image/png"},
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Primapox",
    title: "Primapox",
    description: "Se é metal, Primapox pinta e protege!",
  },
};

export const viewport: Viewport = {themeColor:"#192636"};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={inter.variable}>
      <body>
        <StructuredData />
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
        <ScrollReveal />
        <ScrollTone />
      </body>
    </html>
  );
}
