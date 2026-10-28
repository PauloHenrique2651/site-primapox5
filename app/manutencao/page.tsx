import { pageMetadata } from "@/data/seo";
import { MaintenanceSection } from "@/components/MaintenanceSection";
import { PageHero } from "@/components/PageHero";

export const metadata = pageMetadata("/manutencao", "Manutenção", "Manutenção da pintura Poliéster: fatores de limpeza, intervalos recomendados, fatores ambientais, requisitos de garantia, retoque e silicone industrial.");

export default function ManutencaoPage() {
  return (
    <>
      <PageHero image="/gallery/26.webp" eyebrow="Primapox / Manutenção" marker="" title="Manutenção" copy="" />
      <MaintenanceSection />
    </>
  );
}
