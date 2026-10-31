import { pageMetadata } from "@/data/seo";
import { AboutContent } from "@/components/LegacyPages";
import { PageHero } from "@/components/PageHero";

export const metadata = pageMetadata("/empresa", "A Primapox", "Atuando há mais de 20 anos no ramo de pintura industrial, a Primapox é uma empresa que vem se destacando no mercado.");

export default function EmpresaPage() {
  return (
    <>
      <PageHero image="/gallery/12.webp" eyebrow="Primapox / A Primapox" marker="" title="Quem Somos" copy="" />
      <AboutContent />
    </>
  );
}
