import { pageMetadata } from "@/data/seo";
import Link from "next/link";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { TechnicalReference } from "@/components/TechnicalReference";
import { serviceApplications, serviceBenefits, supportedMetals } from "@/data/services";
import { legacy } from "@/data/legacy";
import styles from "@/components/ServiceContent.module.css";

export const metadata = pageMetadata("/solucoes/pintura-eletrostatica-a-po", "Pintura eletrostática a pó", "Pintura eletrostática a pó no Rio de Janeiro: preparação de superfície, aplicação uniforme e cura controlada para peças metálicas.");

export default function PinturaEletrostaticaPage() {
  return (
    <>
      <PageHero image="/gallery/13.webp" eyebrow="Primapox / Serviços" marker="ELETROSTÁTICA" title={<>Cobertura uniforme.<br /><em>Desempenho contínuo.</em></>} copy="Pintura eletrostática a pó com resinas híbrida e poliéster para peças metálicas de uso interno ou externo, conforme a aplicação." />
      <section className="content-section">
        <div className="shell editorial-grid">
          <div className="editorial-grid__index">01</div>
          <div className="editorial-grid__lead"><h2>Por que a carga eletrostática faz diferença?</h2></div>
          <div className="editorial-grid__copy">
            <p><strong>{legacy.slogan}</strong> {legacy.finish}</p>
            <p>Ao ser pulverizado, o pó é atraído pela superfície metálica. Essa relação favorece uma distribuição regular e ajuda a recobrir cantos, bordas e arestas.</p>
            <p>Depois da aplicação, a peça passa pela cura. O aquecimento ativa o sistema de resinas e transforma o pó depositado em uma película contínua.</p>
            <p>Cores e efeitos podem ser brilhantes ou foscos. A escolha da tinta considera o uso da peça e as exigências de resistência térmica, química, mecânica e de aderência.</p>
            <p>{legacy.noMicrochannels} {legacy.price}</p>
            <p>Cortes feitos depois da pintura exigem cuidado com as áreas expostas, incluindo reparo e selagem conforme a orientação de manutenção.</p>
          </div>
        </div>
      </section>
      <section className={styles.content} id="beneficios">
        <div className="shell">
          <p className="eyebrow">Benefícios da tinta em pó</p>
          <h2 className={styles.heading}>O que a superfície ganha.</h2>
          <p className={styles.intro}>Características do processo descritas no acervo Primapox. O desempenho final depende do substrato, da preparação, da resina e da cura.</p>
          <ul className={styles.benefits}>{serviceBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
        </div>
      </section>
      <section className="resin-section" id="resinas">
        <div className="shell">
          <p className={styles.intro}><strong>A Primapox trabalha com resinas híbrida e poliéster.</strong> As demais famílias descritas no material antigo são referências de catálogo, não serviços oferecidos pela empresa.</p>
          <div className="resin-grid">
            <article><span>HÍBRIDA</span><h3>Uso interior</h3><p>Combinação de resinas epóxi e poliéster para superfícies metálicas em peças de uso interno.</p></article>
            <article><span>POLIÉSTER</span><h3>Uso exterior</h3><p>Resinas poliésteres para peças metálicas externas, especialmente aplicações arquitetônicas.</p></article>
          </div>
          <div className={styles.archive}>
            <details><summary>Outras resinas citadas no catálogo histórico</summary><p><strong>Epóxi:</strong> citada para peças em ambientes quimicamente agressivos.</p><p><strong>Poliuretano:</strong> descrito com características semelhantes às do poliéster, maior alastramento e possibilidade de camadas inferiores a 40 µm em cores escuras.</p><p className={styles.note}>Essas duas famílias não fazem parte da oferta da Primapox indicada no site anterior.</p></details>
          </div>
        </div>
      </section>
      <section className={styles.content} id="materiais">
        <div className="shell">
          <p className="eyebrow">Materiais e aplicações</p>
          <h2 className={styles.heading}>Metal, geometria e ambiente.</h2>
          <p className={styles.intro}>O acervo apresenta aplicações em latão, cobre, alumínio e chapa de ferro. A viabilidade de cada peça depende das dimensões e da avaliação técnica. {legacy.europe}</p>
          <ul className={styles.metals} aria-label="Metais citados no acervo">{supportedMetals.map((metal) => <li key={metal}>{metal}</li>)}</ul>
          <p className={styles.intro}><strong>{legacy.closing}</strong></p>
          <div className={styles.grid}>{serviceApplications.map(({ title, pieces }) => <article key={title}><h3>{title}</h3><p>{pieces}</p></article>)}</div>
          <div className={styles.links}><Link className="text-link" href="/processo">Entender o pré-tratamento, a pintura e a cura <span className="icon icon--north-east" aria-hidden="true" /></Link><Link className="text-link" href="/manutencao">Consultar manutenção <span className="icon icon--north-east" aria-hidden="true" /></Link></div>
        </div>
      </section>
      <TechnicalReference />
      <ContactBand />
    </>
  );
}
