import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/data/seo";
import { HeroBackgroundVideo } from "@/components/HeroBackgroundVideo";
import { HomeContactForm } from "@/components/HomeContactForm";
import { company } from "@/data/site";
import { home } from "@/data/primapox";
import styles from "./home.module.css";

export const metadata = pageMetadata("/", "Primapox", home.servicesText);

// Only the content of the legacy home page (index.php), in its order, styled after olgacolor.com.br.
export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="nossos-servicos">
        <div className={styles.media}>
          <HeroBackgroundVideo src="/media/hero-olgacolor.webm" poster="/media/primapox-hero-poster.webp" className={styles.video} buttonClassName={styles.videoToggle} />
        </div>
        <div className={`shell ${styles.heroInner}`}>
          <h1 id="nossos-servicos">{home.servicesTitle}</h1>
          <p className={styles.lead}>{home.servicesText}</p>
        </div>
      </section>

      <section className={styles.numbers} aria-labelledby="vantagens">
        <div className="shell">
          <p id="vantagens" className={styles.numbersTitle}>{home.advantagesTitle}</p>
          <ul className={styles.advantageRow}>{home.advantages.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className={styles.about} aria-labelledby="a-primapox">
        <div className={`shell ${styles.aboutGrid}`}>
          <div className={styles.aboutPhoto}><Image src="/gallery/12.webp" alt="Primapox" fill sizes="(max-width: 900px) 92vw, 45vw" /></div>
          <div>
            <h2 id="a-primapox">{home.aboutTitle}</h2>
            <p className={styles.lead2}>{home.aboutText}</p>
          </div>
        </div>
      </section>

      <section className={styles.contact} aria-labelledby="fale-conosco">
        <div className="shell">
          <div className={styles.head}><h2 id="fale-conosco">{home.contactTitle}</h2></div>
          <div className={styles.formCard}><HomeContactForm /></div>
        </div>
      </section>

      <section className={styles.markets} aria-labelledby="localizacao">
        <div className="shell">
          <div className={styles.head}>
            <h2 id="localizacao">{home.locationTitle}</h2>
            <p>{home.locationText}</p>
          </div>
          <iframe className={styles.map} src={company.mapsEmbedUrl} title={home.locationTitle} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          <div className={styles.centerRow}><Link className={styles.textLink} href="/contato">{home.more}</Link></div>
        </div>
      </section>
    </>
  );
}
