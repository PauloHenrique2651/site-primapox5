import { pageMetadata } from "@/data/seo";
import { ServicesContent } from "@/components/LegacyPages";
import { PageHero } from "@/components/PageHero";

export const metadata = pageMetadata("/servicos", "Serviços", "Pintura eletrostática com tinta em pó: benefícios, tipos de tinta, tabela técnica do poliéster, aplicações, pré-tratamento, pintura e cura.");

export default function ServicosPage() {
  return (
    <>
      <PageHero image="/gallery/31.webp" eyebrow="Primapox / Serviços" marker="" title="Serviços" copy="" />
      <ServicesContent />
    </>
  );
}
