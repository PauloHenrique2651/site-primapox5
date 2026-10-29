import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/data/seo";
import { CountUp } from "@/components/CountUp";
import { HeroBackgroundVideo } from "@/components/HeroBackgroundVideo";
import { LegacyContactForm } from "@/components/LegacyContactForm";
import { PhotoGallery } from "@/components/PhotoGallery";
import { about, contact, galleryTitle, home, services, tabs } from "@/data/primapox";
import styles from "./home.module.css";

export const metadata = pageMetadata("/", "Primapox | Pintura eletrostática a pó no Rio de Janeiro", "Executamos pintura eletrostática com tinta em pó, ideais para: esquadrias, batentes, caixilhos, forros, divisórias, fachadas, telhas metálicas, coberturas, estruturas espaciais, etc.");

// Every visible text comes verbatim from data/primapox.ts (legacy primapox.com).
const [paintingFirst, paintingSecond] = services.painting.split(" A tinta em pó tem");
const [beforeFirst] = services.before.split(" A função básica");

const cards = [
  { title: services.pretreatmentTitle, text: services.pretreatment[1], href: "/servicos" },
  { title: services.paintingTitle, text: paintingFirst, href: "/servicos" },
  { title: services.cureTitle, text: services.after[0], href: "/servicos" },
  { title: "Manutenção", text: "A pintura Poliéster deve ser limpa regularmente para manter suas propriedades decorativas.", href: "/manutencao" },
];

const timeline = [
  { number: "01", title: services.pretreatmentTitle, text: services.pretreatment[2] },
  { number: "02", title: services.paintingTitle, text: `A tinta em pó tem${paintingSecond}` },
  { number: "03", title: services.cureTitle, text: beforeFirst },
];

const materialPhotos = ["/gallery/17.webp", "/gallery/40.webp", "/gallery/44.webp", "/gallery/45.webp", "/gallery/5.webp"];
const typePhotos = ["/gallery/40.webp", "/gallery/25.webp"];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="titulo-principal">
        <div className={styles.media}>
          <HeroBackgroundVideo src="/media/hero-olgacolor.webm" poster="/media/primapox-hero-poster.webp" className={styles.video} buttonClassName={styles.videoToggle} />
        </div>
        <div className={`shell ${styles.heroInner}`}>
          <p className={styles.kicker}>{home.servicesTitle}</p>
          <h1 id="titulo-principal">{services.closing}</h1>
          <p className={styles.tagline}>{services.sloganTitle}</p>
          <p className={styles.lead}>{home.servicesText}</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/contato">{home.contactTitle}</Link>
            <Link className={styles.secondary} href="/servicos">{home.more}</Link>
          </div>
        </div>
        <nav className={styles.quick} aria-label="Acesso rápido">
          <div className="shell">
            {tabs.slice(1, 5).map((tab) => <Link key={tab.href} href={tab.href}>{tab.label}</Link>)}
          </div>
        </nav>
      </section>

      <section className={styles.numbers} aria-label={home.aboutTitle}>
        <dl className="shell">
          <div><dt><CountUp to={20} prefix="+" /></dt><dd>anos no ramo de pintura industrial</dd></div>
          <div><dt><CountUp to={6.5} decimals={1} suffix="m" /></dt><dd>peças com até 6,5m de comprimento</dd></div>
          <div><dt><CountUp to={18} suffix=" metros" /></dt><dd>estufa de 18 metros de comprimento</dd></div>
          <div><dt><CountUp to={200} suffix="ºC" /></dt><dd>à uma temperatura de 200ºC</dd></div>
        </dl>
      </section>

      <section className={styles.about} aria-labelledby="institucional">
        <div className={`shell ${styles.aboutGrid}`}>
          <div className={styles.aboutPhoto}><Image src="/gallery/12.webp" alt="Letreiro da Primapox" fill sizes="(max-width: 900px) 92vw, 45vw" /></div>
          <div>
            <h2 id="institucional">{home.aboutTitle}</h2>
            <p className={styles.lead2}>{home.aboutText}</p>
            <p>{about.paragraphs[2]}</p>
            <p className={styles.ticksTitle}>{home.advantagesTitle}</p>
            <ul className={styles.ticks}>{home.advantages.map((advantage) => <li key={advantage}>{advantage}</li>)}</ul>
            <Link className={styles.textLink} href="/empresa">{home.more}</Link>
          </div>
        </div>
      </section>

      <section className={styles.services} aria-labelledby="servicos">
        <div className="shell">
          <div className={styles.head}>
            <h2 id="servicos">{home.servicesTitle}</h2>
            <p>{home.servicesText}</p>
          </div>
          <div className={styles.serviceGrid}>
            {cards.map((card, index) => (
              <Link key={card.title} className={styles.serviceCard} href={card.href}>
                <span className={styles.serviceIndex} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <span className={styles.more}>{home.more}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="processo">
        <div className="shell">
          <div className={styles.head}>
            <h2 id="processo">{services.sloganTitle}</h2>
            <p>{services.sloganParagraphs[0]}</p>
          </div>
          <ol className={`${styles.timeline} ${styles.timelineThree}`}>
            {timeline.map((step) => (
              <li key={step.number}>
                <span className={styles.dot}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <p className={styles.result}>{services.after[1]}</p>
        </div>
      </section>

      <section className={styles.markets} aria-labelledby="mercados">
        <div className="shell">
          <div className={styles.head}>
            <h2 id="mercados">{services.materialTitle}</h2>
            <p>{services.materialIntro}</p>
          </div>
          <div className={`${styles.marketGrid} ${styles.marketGridFive}`}>
            {services.materials.map(([title, text], index) => (
              <article key={title}>
                <Image src={materialPhotos[index]} alt={title} fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 20vw" />
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <p className={styles.naval}><strong>{services.closing}</strong></p>
        </div>
      </section>

      <section className={styles.finishes} aria-labelledby="acabamentos">
        <div className="shell">
          <div className={styles.head}>
            <h2 id="acabamentos">{services.typesTitle}</h2>
            <p>{services.typesNote}</p>
          </div>
          <div className={`${styles.finishGrid} ${styles.finishGridTwo}`}>
            {services.types.slice(0, 2).map(([name, text], index) => (
              <article key={name}>
                <div className={styles.finishPhoto}><Image src={typePhotos[index]} alt={name} fill sizes="(max-width: 800px) 92vw, 45vw" /></div>
                <h3>{name}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <h3 className={styles.benefitsTitle}>{services.benefitsTitle}</h3>
          <ul className={styles.benefitList}>{services.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
        </div>
      </section>

      <section className={styles.projects} aria-labelledby="obras">
        <div className="shell">
          <div className={styles.head}>
            <h2 id="obras">{galleryTitle}</h2>
            <Link className={styles.textLink} href="/galeria">{home.more}</Link>
          </div>
          <PhotoGallery limit={8} />
        </div>
      </section>

      <section className={styles.contact} aria-labelledby="titulo-orcamento">
        <div className={`shell ${styles.contactGrid}`}>
          <div>
            <h2 id="titulo-orcamento">{home.contactTitle}</h2>
            <p>{contact.intro}</p>
            <div className={styles.contactLines}>
              <strong>{home.locationTitle}</strong>
              <p>{home.locationText}</p>
              {contact.phoneLines.map((line) => <p key={line}>{line}</p>)}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
          <div className={styles.formCard}><LegacyContactForm /></div>
        </div>
      </section>
    </>
  );
}
