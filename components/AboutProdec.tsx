import Image from "next/image";
import Link from "next/link";
import styles from "./AboutProdec.module.css";

// "Quem Somos" block in the style of the Prodec reference: dark band, photo collage on the left
// (two stacked + one tall), light large headline, short text and an outlined button.
export function AboutProdec({ eyebrow, title, text, cta, id }: { eyebrow: string; title: string; text: string; cta: { label: string; href: string }; id?: string }) {
  return (
    <section className={styles.band} aria-labelledby={id}>
      <div className={`shell ${styles.grid}`}>
        <div className={styles.collage}>
          <div className={`${styles.ph} ${styles.a}`}><Image src="/gallery/26.webp" alt="Fachada de edifício com esquadrias pintadas pela Primapox" fill sizes="(max-width: 900px) 46vw, 20vw" /></div>
          <div className={`${styles.ph} ${styles.b}`}><Image src="/gallery/11.webp" alt="Equipe da Primapox trabalhando na linha de pintura" fill sizes="(max-width: 900px) 46vw, 20vw" /></div>
          <div className={`${styles.ph} ${styles.c}`}><Image src="/gallery/31.webp" alt="Galpão da linha de pintura eletrostática da Primapox" fill sizes="(max-width: 900px) 46vw, 20vw" /></div>
        </div>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id={id}>{title}</h2>
          <p>{text}</p>
          <Link className={styles.btn} href={cta.href}>{cta.label}<i aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
