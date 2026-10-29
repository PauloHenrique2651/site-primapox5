import { pageMetadata } from "@/data/seo";
import { AboutContent } from "@/components/LegacyPages";
import { PageHero } from "@/components/PageHero";

export const metadata = pageMetadata("/empresa", "A Primapox", "Quem Somos: a Primapox atua no ramo de pintura industrial com pintura eletrostática com tinta em pó em Vigário Geral, Rio de Janeiro.");

export default function EmpresaPage() {
  return (
    <>
      <PageHero image="/gallery/12.webp" eyebrow="Primapox / A Primapox" marker="" title="A Primapox" copy="" />
      <AboutContent />
    </>
  );
}
