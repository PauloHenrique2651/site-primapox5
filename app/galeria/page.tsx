import { pageMetadata } from "@/data/seo";
import { PageHero } from "@/components/PageHero";
import { PhotoGallery } from "@/components/PhotoGallery";
import { galleryTitle } from "@/data/primapox";
import styles from "@/components/LegacyContent.module.css";

export const metadata = pageMetadata("/galeria", "Galeria de Fotos", "Galeria de Fotos");

export default function GaleriaPage() {
  return (
    <>
      <PageHero image="/gallery/14.webp" eyebrow="Primapox / Galeria de Fotos" marker="" title={galleryTitle} copy="" />
      <section className={styles.section}><div className="shell"><PhotoGallery /></div></section>
    </>
  );
}
