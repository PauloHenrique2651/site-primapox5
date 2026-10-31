import { pageMetadata } from "@/data/seo";
import { ServicesContent } from "@/components/LegacyPages";
import { PageHero } from "@/components/PageHero";

export const metadata = pageMetadata("/servicos", "Serviços", "As aplicações para a pintura em pó pelo processo Primapox são as seguintes:");

export default function ServicosPage() {
  return (
    <>
      <PageHero image="/gallery/31.webp" eyebrow="Primapox / Serviços" marker="" title="Serviços" copy="" />
      <ServicesContent />
    </>
  );
}
