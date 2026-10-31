import { pageMetadata } from "@/data/seo";
import { MaintenanceSection } from "@/components/MaintenanceSection";
import { PageHero } from "@/components/PageHero";

export const metadata = pageMetadata("/manutencao", "Manutenção", "A pintura Poliéster deve ser limpa regularmente para manter suas propriedades decorativas.");

export default function ManutencaoPage() {
  return (
    <>
      <PageHero image="/gallery/26.webp" eyebrow="Primapox / Manutenção" marker="" title="Manutenção" copy="" />
      <MaintenanceSection />
    </>
  );
}
