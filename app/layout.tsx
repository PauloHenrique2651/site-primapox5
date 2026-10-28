import type { Metadata, Viewport } from "next";
import { Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import { StructuredData } from "@/components/StructuredData";
import { siteUrl } from "@/data/seo";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollTone } from "@/components/ScrollTone";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";
import "./responsive-refinements.css";
import "./theme.css";

const display = Red_Hat_Display({ subsets: ["latin"], weight: ["500", "700", "800", "900"], variable: "--font-display", display: "swap" });
const body = Red_Hat_Text({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Primapox | Pintura eletrostática a pó no Rio de Janeiro",
    template: "%s | Primapox",
  },
  description: "Pintura eletrostática a pó para componentes metálicos, com preparação controlada, cobertura uniforme e acabamento de alto padrão no Rio de Janeiro.",
  icons: {
    icon: [{ url: "/icons/primapox-32.png", type: "image/png", sizes:"32x32" }, {url:"/icons/primapox-192.png",type:"image/png",sizes:"192x192"}],
    shortcut: "/icons/primapox-32.png",
    apple: {url:"/icons/primapox-180.png",sizes:"180x180",type:"image/png"},
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Primapox",
    title: "Primapox | Pintura eletrostática a pó",
    description: "Precisão no processo. Proteção em cada camada.",
  },
};

export const viewport: Viewport = {themeColor:"#002398"};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable}`}>
      <body>
        <StructuredData />
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
        <ScrollReveal />
        <ScrollTone />
        <aside aria-label="Contato rápido"><WhatsAppButton /></aside>
      </body>
    </html>
  );
}
