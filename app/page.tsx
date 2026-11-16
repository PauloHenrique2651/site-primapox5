import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/data/seo";
import { HeroBackgroundVideo } from "@/components/HeroBackgroundVideo";
import { BeforeAfter } from "@/components/BeforeAfter";
import { AboutProdec } from "@/components/AboutProdec";
import { AdvantagePanels } from "@/components/AdvantagePanels";
import { company } from "@/data/site";
import { home, services, tabs } from "@/data/primapox";
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
          <h1 id="nossos-servicos">{home.heroTitle[0]}<br /><em>{home.heroTitle[1]}</em></h1>
          <p className={styles.lead}>{home.heroText}</p>
        </div>
      </section>

      <section className={styles.numbers} aria-labelledby="vantagens">
        <div className="shell">
          <p id="vantagens" className={styles.numbersTitle}>{home.advantagesTitle}</p>
          <AdvantagePanels />
        </div>
      </section>

      <AboutProdec id="a-primapox" eyebrow={home.aboutTitle} title={home.aboutHeadline} text={home.aboutText} cta={{ label: home.aboutCta, href: "/empresa" }} />

      <section className={styles.compare} aria-labelledby="visualizacao">
        <div className="shell">
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.eyebrow}>{home.comparison.eyebrow}</p>
              <h2 id="visualizacao">{home.comparison.title[0]}<br />{home.comparison.title[1]}</h2>
            </div>
            <p>{home.comparison.text}</p>
          </div>
          <BeforeAfter />
        </div>
      </section>

      <section className={styles.lineBand} aria-labelledby="linha-8m">
        <div className={`shell ${styles.lineInner}`}>
          <p className={styles.lineFigure}><b>{services.line.value}</b> {services.line.unit}</p>
          <div>
            <h2 id="linha-8m">{services.line.title}</h2>
            <p>{services.line.text}</p>
            <Link className={styles.lineLink} href="/servicos">{tabs.find((t) => t.href === "/servicos")?.label}</Link>
          </div>
        </div>
      </section>

      <section className={styles.galleryPrev} aria-labelledby="galeria-home">
        <div className="shell">
          <div className={styles.sectionHead}>
            <h2 id="galeria-home">{home.galleryTitle}</h2>
          </div>
          <ul className={styles.galleryGrid}>
            {home.galleryPreview.map((n) => (
              <li key={n}><Link href="/galeria"><Image src={`/gallery/${n}.webp`} alt="" fill sizes="(max-width: 700px) 46vw, 30vw" /></Link></li>
            ))}
          </ul>
          <div className={styles.centerRow}><Link className={styles.textLink} href="/galeria">{home.galleryTitle}</Link></div>
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
