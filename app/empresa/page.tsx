import { pageMetadata } from "@/data/seo";
import { AboutContent } from "@/components/LegacyPages";
import { PageHero } from "@/components/PageHero";

export const metadata = pageMetadata("/empresa", "Quem Somos", "Atuando há mais de 20 anos no ramo de pintura industrial, a Primapox é uma empresa que vem se destacando no mercado.");

export default function EmpresaPage() {
  return (
    <>
      <PageHero image="/gallery/12.webp" eyebrow="Primapox / Quem Somos" marker="" title="Quem Somos" copy="" />
      <AboutContent />
    </>
  );
}
