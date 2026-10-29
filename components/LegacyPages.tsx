import Image from "next/image";
import { about, contact, services } from "@/data/primapox";
import { company } from "@/data/site";
import { whatsappLink } from "@/data/whatsapp";
import { LegacyContactForm } from "@/components/LegacyContactForm";
import styles from "./LegacyContent.module.css";

export function AboutContent() {
  return (
    <section className={styles.section}>
      <div className={`shell ${styles.split}`}>
        <div>
          <h2 className={styles.h2}>{about.title}</h2>
          {about.paragraphs.map((paragraph) => <p key={paragraph} className={paragraph.startsWith("CONSULTE") ? styles.strong : undefined}>{paragraph}</p>)}
        </div>
        <figure className={styles.photo}><Image src="/gallery/25.webp" alt="Fachada envidraçada com estrutura metálica" fill sizes="(max-width: 900px) 92vw, 38vw" /></figure>
      </div>
    </section>
  );
}

function Rows({ rows }: { rows: string[][] }) {
  return (
    <dl className={styles.rows}>
      {rows.map(([name, value], index) => <div key={`${name}-${index}`} data-heading={!value}><dt>{name}</dt>{value && <dd>{value}</dd>}</div>)}
    </dl>
  );
}

export function ServicesContent() {
  return (
    <>
      <section className={styles.section}>
        <div className={`shell ${styles.split}`}>
          <div>
            <h2 className={styles.h2}>{services.benefitsTitle}</h2>
            <ul className={styles.list}>{services.benefits.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <figure className={styles.photo}><Image src="/gallery/13.webp" alt="Amostras de acabamentos coloridos em perfis" fill sizes="(max-width: 900px) 92vw, 38vw" /></figure>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`}>
        <div className="shell">
          <h2 className={styles.h2}>{services.typesTitle}</h2>
          <div className={styles.cards}>
            {services.types.map(([name, text]) => <article key={name}><h3>{name}</h3><p>{text}</p></article>)}
          </div>
          <p className={styles.note}>{services.typesNote}</p>
        </div>
      </section>

      <section className={styles.section} id="ficha-tecnica">
        <div className="shell">
          <div className={styles.sheet}>
            <h2 className={styles.sheetTitle}>{services.tableTitle}</h2>
            <div className={styles.columns}>
              <div><h4>{services.physicalTitle}</h4><Rows rows={services.physical} /></div>
              <div><h4>{services.chemicalTitle}</h4><Rows rows={services.chemical} /></div>
            </div>
            <p className={styles.legendTitle}>{services.legendTitle}</p>
            <ul className={styles.legend}>{services.legend.map((item) => <li key={item}>{item}</li>)}</ul>
            <p className={styles.source}>{services.source}</p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className="shell">
          <h2 className={styles.slogan}>{services.sloganTitle}</h2>
          {services.sloganParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <h3 className={styles.h3} style={{ marginTop: "2.5rem" }}>{services.materialTitle}</h3>
          <p>{services.materialIntro}</p>
          <dl className={styles.materials}>
            {services.materials.map(([name, text]) => <div key={name}><dt>{name}</dt><dd>{text}</dd></div>)}
          </dl>
          <p className={styles.closing}>{services.closing}</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`}>
        <div className={`shell ${styles.steps}`}>
          <div className={styles.step}>
            <div>
              <h2 className={styles.h3}>{services.pretreatmentTitle}</h2>
              {services.pretreatment.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <figure className={styles.photo}><Image src="/gallery/2.webp" alt="Perfis metálicos claros após acabamento" fill sizes="(max-width: 900px) 92vw, 30vw" /></figure>
          </div>
          <div className={styles.step}>
            <div>
              <h2 className={styles.h3}>{services.paintingTitle}</h2>
              <p>{services.painting}</p>
            </div>
            <figure className={styles.photo}><Image src="/gallery/31.webp" alt="Linha aérea com perfis metálicos suspensos" fill sizes="(max-width: 900px) 92vw, 30vw" /></figure>
          </div>
          <div className={styles.step}>
            <div>
              <h2 className={styles.h3}>{services.cureTitle}</h2>
              <p>{services.cureIntro}</p>
              <h3 className={styles.h3}>{services.beforeTitle}</h3>
              <p>{services.before}</p>
              <h3 className={styles.h3}>{services.afterTitle}</h3>
              {services.after.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className={styles.stepPhotos}>
              <figure className={styles.photo}><Image src="/legacy/antes.webp" alt="Linha de pintura com perfis antes da cura" fill sizes="(max-width: 900px) 92vw, 30vw" /><figcaption>{services.beforeTitle}</figcaption></figure>
              <figure className={styles.photo}><Image src="/legacy/depois.webp" alt="Telha metálica com acabamento laranja depois da cura" fill sizes="(max-width: 900px) 92vw, 30vw" /><figcaption>{services.afterTitle}</figcaption></figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function ContactContent() {
  return (
    <section className={styles.section}>
      <div className={`shell ${styles.contactGrid}`}>
        <div>
          <h2 className={styles.h2}>{contact.title}</h2>
          <p>{contact.intro}</p>
          <div className={styles.contactCard}>
            <strong>{contact.company}</strong>
            {contact.addressLines.map((line) => <span key={line}>{line}</span>)}
            {contact.phoneLines.map((line) => <span key={line}>{line}</span>)}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp {company.whatsappLabel}</a>
          </div>
          <h3 className={styles.h3} style={{ marginTop: "2rem" }}>{contact.mapTitle}</h3>
          <iframe className={styles.map} src={company.mapsEmbedUrl} title="Localização da Primapox no Google Maps" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        </div>
        <LegacyContactForm />
      </div>
    </section>
  );
}
