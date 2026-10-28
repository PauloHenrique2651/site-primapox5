import { pageMetadata } from "@/data/seo";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { company } from "@/data/site";
import { legacy } from "@/data/legacy";

export const metadata = pageMetadata("/empresa", "A empresa", "Conheça a Primapox, empresa de pintura eletrostática a pó em Vigário Geral, Rio de Janeiro.");

export default function EmpresaPage() {
  return (
    <>
      <PageHero image="/gallery/12.webp" eyebrow="Primapox / Empresa" marker={`DESDE ${company.foundedYear}`} title={<>Experiência que<br /><em>ganha camada.</em></>} copy="Uma operação construída em torno da preparação, da aplicação eletrostática e do acabamento de componentes metálicos." />
      <section className="content-section">
        <div className="shell editorial-grid">
          <div className="editorial-grid__index">01</div>
          <div className="editorial-grid__lead">
            <h2>Metal bem tratado começa por um processo bem conduzido.</h2>
          </div>
          <div className="editorial-grid__copy">
            <p>Fundada em {company.foundedOn}, a Primapox atua há mais de {company.yearsOfExperience} anos no segmento de pintura industrial. Nossa especialidade é a pintura eletrostática a pó, aplicada a peças e componentes metálicos que exigem cobertura uniforme, resistência e qualidade visual.</p>
            <p>{legacy.credibility}</p>
            <p>{legacy.protection}</p>
            <p>Atendemos a partir de Vigário Geral, no Rio de Janeiro, com uma linha de trabalho que integra análise da peça, preparação da superfície, aplicação, cura e controle final.</p>
            <p>O atendimento personalizado acompanha projetos de esquadrias, batentes, caixilhos, forros, divisórias, fachadas, telhas metálicas, coberturas e estruturas espaciais, com cores e acabamentos definidos para cada uso.</p>
            <p>A capacidade informada pela Primapox é de peças com até <strong>6,5 m de comprimento</strong>. Consulte a equipe sobre a geometria, o material e as demais dimensões do seu projeto.</p>
            <p><strong>{legacy.consult}</strong></p>
          </div>
        </div>
      </section>
      <section className="value-section">
        <div className="shell value-grid">
          {[
            ["Preparação", "A qualidade da película depende do que acontece antes da aplicação."],
            ["Uniformidade", "A deposição eletrostática favorece a cobertura de cantos, bordas e arestas."],
            ["Critério", "Resina, acabamento e processo precisam conversar com o uso real da peça."],
          ].map(([title, copy], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
