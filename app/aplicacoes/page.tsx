import { pageMetadata } from "@/data/seo";
import { ApplicationVisual } from "@/components/ApplicationVisual";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { applications } from "@/data/site";
import { supportedMetals } from "@/data/services";
import styles from "@/components/ServiceContent.module.css";

export const metadata = pageMetadata("/aplicacoes", "Aplicações", "Aplicações da pintura eletrostática a pó em arquitetura, indústria, varejo e mobiliário metálico.");

export default function AplicacoesPage() {
  return (
    <>
      <PageHero image="/gallery/25.webp" eyebrow="Primapox / Aplicações" marker="METAL / USO" title={<>Uma superfície.<br /><em>Muitas funções.</em></>} copy="A viabilidade depende do material, das dimensões da peça, da geometria e do ambiente em que ela será usada." />
      <section className="content-section">
        <div className="shell application-index">
          {applications.map((application, index) => (
            <article key={application.code}>
              <ApplicationVisual className={`application-index__code application-index__code--${application.tone}`} image={application.image} alt={application.imageAlt} position={application.imagePosition} />
              <div><span>0{index + 1}</span><h2>{application.title}</h2><p>{application.description}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.content}>
        <div className="shell">
          <p className="eyebrow">Outras aplicações do acervo</p>
          <h2 className={styles.heading}>Também na indústria naval.</h2>
          <p className={styles.intro}>O site anterior inclui gaiútas, esquadrias e painéis para aplicações navais. A definição do sistema de pintura exige avaliação da peça e do ambiente de exposição.</p>
          <ul className={styles.metals} aria-label="Metais citados no acervo">{supportedMetals.map((metal) => <li key={metal}>{metal}</li>)}</ul>
          <a className="text-link" href="/solucoes/pintura-eletrostatica-a-po#materiais">Ver materiais e aplicações detalhadas <span className="icon icon--north-east" aria-hidden="true" /></a>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
