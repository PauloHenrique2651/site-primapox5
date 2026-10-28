import type { Metadata } from "next";

// Set to the public deployment URL until the main domain is migrated.
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://siteprimapox.vercel.app";
export const siteUrl = new URL(configuredUrl).origin;
export const siteRoutes = ["/", "/empresa", "/solucoes", "/solucoes/pintura-eletrostatica-a-po", "/processo", "/aplicacoes", "/galeria", "/manutencao", "/central-tecnica", "/contato", "/politica-de-privacidade"] as const;

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title: title.includes("Primapox") ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: title.includes("Primapox") ? title : `${title} | Primapox`,
      description, url, type: "website", locale: "pt_BR", siteName: "Primapox",
      images: [{ url: `${siteUrl}/brand/primapox-og.jpg`, width:1200, height:630, alt:"Primapox — pintura eletrostática a pó" }],
    },
    twitter: {
      card: "summary_large_image", title, description,
      images: [`${siteUrl}/brand/primapox-og.jpg`],
    },
  };
}
