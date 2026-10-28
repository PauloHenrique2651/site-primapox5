import { pageMetadata } from "@/data/seo";
import { IndustrialGallery } from "@/components/IndustrialGallery";
import { PageHero } from "@/components/PageHero";

export const metadata = pageMetadata("/galeria", "Galeria", "Galeria de aplicações e acabamentos da Primapox.");

export default function GaleriaPage() {
  return (
    <>
      <PageHero image="/gallery/14.webp" eyebrow="Primapox / Galeria" marker="46 IMAGENS" title={<>Cor, processo<br /><em>e metal em campo.</em></>} copy="Acervo histórico real da Primapox: linha produtiva, acabamentos, componentes e aplicações arquitetônicas." />
      <section className="gallery-page"><div className="shell"><IndustrialGallery /></div></section>
    </>
  );
}
