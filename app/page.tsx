import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/data/seo";
import { CountUp } from "@/components/CountUp";
import { HeroBackgroundVideo } from "@/components/HeroBackgroundVideo";
import { IndustrialGallery } from "@/components/IndustrialGallery";
import { ProtectionExplorer } from "@/components/ProtectionExplorer";
import { QuoteForm } from "@/components/QuoteForm";
import { applications, company, processSteps } from "@/data/site";
import { serviceApplications } from "@/data/services";
import { legacy } from "@/data/legacy";
import styles from "./home.module.css";

export const metadata = pageMetadata("/", "Primapox | Pintura eletrostática a pó no Rio de Janeiro", "Pintura eletrostática a pó para componentes metálicos, com preparação controlada, cobertura uniforme e acabamento de alto padrão no Rio de Janeiro.");

const services = [
  { title: "Pintura eletrostática a pó", copy: "A carga eletrostática distribui o pó sobre o metal preparado. A cura ativa o sistema de resinas e consolida a película.", href: "/solucoes/pintura-eletrostatica-a-po" },
  { title: "Pré-tratamento", copy: "Limpeza, preparação e tratamento químico removem contaminantes e criam as condições de aderência antes da aplicação.", href: "/processo" },
  { title: "Cura e controle", copy: "O aquecimento polimeriza a tinta e consolida o acabamento antes da verificação final.", href: "/processo" },
  { title: "Manutenção", copy: "Detergente neutro, materiais macios e intervalos de limpeza compatíveis com o ambiente conservam o acabamento poliéster.", href: "/manutencao" },
];

const finishes = [
  { title: "Híbrida", use: "Uso interior", copy: "Combinação de resinas epóxi e poliéster para superfícies metálicas em peças de uso interno.", image: "/gallery/40.webp", alt: "Divisória de vidro com estrutura metálica escura em ambiente interno" },
  { title: "Poliéster", use: "Uso exterior", copy: "Resinas poliésteres para peças metálicas externas, especialmente aplicações arquitetônicas.", image: "/gallery/25.webp", alt: "Fachada envidraçada com estrutura metálica" },
  { title: "Brilhante ou fosco", use: "Cores e efeitos", copy: "Diferentes cores, efeitos e acabamentos, definidos conforme o uso da peça.", image: "/gallery/13.webp", alt: "Amostras de acabamentos coloridos em perfis" },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="titulo-principal">
        <div className={styles.media}>
          <HeroBackgroundVideo src="/media/hero-olgacolor.webm" poster="/media/primapox-hero-poster.webp" className={styles.video} buttonClassName={styles.videoToggle} />
        </div>
        <div className={`shell ${styles.heroInner}`}>
          <p className={styles.kicker}>Primapox Pinturas Industriais · desde {company.foundedYear}</p>
          <h1 id="titulo-principal">Pintura eletrostática a pó</h1>
          <p className={styles.tagline}>Proteção que adere. Qualidade que permanece.</p>
          <p className={styles.lead}>{legacy.servicesIntro}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#orcamento">Solicitar orçamento</a>
            <Link className={styles.secondary} href="/solucoes/pintura-eletrostatica-a-po">Conhecer o serviço</Link>
          </div>
        </div>
        <nav className={styles.quick} aria-label="Acesso rápido">
          <div className="shell">
            <Link href="/empresa"><span>Institucional</span>A empresa</Link>
            <Link href="/processo"><span>Processo</span>Da peça à cura</Link>
            <Link href="/aplicacoes"><span>Mercados</span>Aplicações</Link>
            <Link href="/galeria"><span>Projetos</span>Galeria</Link>
          </div>
        </nav>
      </section>

      <section className={styles.numbers} aria-label="A Primapox em números">
        <dl className="shell">
          <div><dt><CountUp to={company.yearsOfExperience} prefix="+" /></dt><dd>anos de atuação</dd></div>
          <div><dt><CountUp to={6.5} decimals={1} suffix=" m" /></dt><dd>de comprimento máximo de peça</dd></div>
          <div><dt><CountUp to={4} /></dt><dd>etapas controladas</dd></div>
          <div><dt><CountUp to={46} /></dt><dd>fotografias do acervo real</dd></div>
        </dl>
      </section>

      <section className={styles.about} aria-labelledby="institucional">
        <div className={`shell ${styles.aboutGrid}`}>
          <div className={styles.aboutPhoto}><Image src="/gallery/12.webp" alt="Letreiro da Primapox" fill sizes="(max-width: 900px) 92vw, 45vw" /></div>
          <div>
            <h2 id="institucional">Uma empresa construída em torno da superfície</h2>
            <p className={styles.lead2}>{legacy.reputation}</p>
            <p>{legacy.location}</p>
            <ul className={styles.ticks}>{legacy.advantages.map((advantage) => <li key={advantage}>{advantage}</li>)}</ul>
            <Link className={styles.textLink} href="/empresa">Conheça a Primapox</Link>
          </div>
        </div>
      </section>

      <section className={styles.services} aria-labelledby="servicos">
        <div className="shell">
          <div className={styles.head}>
            <h2 id="servicos">Serviços</h2>
            <p>{legacy.slogan} {legacy.finish}</p>
          </div>
          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <Link key={service.title} className={styles.serviceCard} href={service.href}>
                <span className={styles.serviceIndex} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <span className={styles.more}>Saiba mais</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="processo">
        <div className="shell">
          <div className={styles.head}>
            <h2 id="processo">Processo em quatro etapas</h2>
            <p>{legacy.noMicrochannels}</p>
          </div>
          <ol className={styles.timeline}>
            {processSteps.map((step) => (
              <li key={step.number}>
                <span className={styles.dot}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
          <p className={styles.result}>{legacy.result}</p>
        </div>
      </section>

      <section className={styles.markets} aria-labelledby="mercados">
        <div className="shell">
          <div className={styles.head}>
            <h2 id="mercados">Mercados de atuação</h2>
            <p>Da arquitetura ao equipamento industrial. {legacy.closing}</p>
          </div>
          <div className={styles.marketGrid}>
            {applications.map((application) => (
              <article key={application.code}>
                <Image src={application.image} alt={application.imageAlt} fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 25vw" />
                <div><h3>{application.title}</h3><p>{application.description}</p></div>
              </article>
            ))}
          </div>
          <p className={styles.naval}><strong>{serviceApplications[4].title}:</strong> {serviceApplications[4].pieces}</p>
        </div>
      </section>

      <section className={styles.finishes} aria-labelledby="acabamentos">
        <div className="shell">
          <div className={styles.head}>
            <h2 id="acabamentos">Acabamentos</h2>
            <p>{legacy.protection}</p>
          </div>
          <div className={styles.finishGrid}>
            {finishes.map((finish) => (
              <article key={finish.title}>
                <div className={styles.finishPhoto}><Image src={finish.image} alt={finish.alt} fill sizes="(max-width: 800px) 92vw, 30vw" /></div>
                <p className={styles.use}>{finish.use}</p>
                <h3>{finish.title}</h3>
                <p>{finish.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.projects} aria-labelledby="obras">
        <div className="shell">
          <div className={styles.head}>
            <h2 id="obras">Galeria de projetos</h2>
            <Link className={styles.textLink} href="/galeria">Ver as 46 fotos</Link>
          </div>
          <IndustrialGallery preview />
        </div>
      </section>

      <section className={styles.explorer} aria-labelledby="leitura">
        <div className="shell">
          <div className={styles.head}>
            <h2 id="leitura">O que você precisa proteger?</h2>
            <p>Selecione um tipo de peça para entender como organizamos a conversa técnica inicial.</p>
          </div>
          <ProtectionExplorer />
        </div>
      </section>

      <section className={styles.contact} aria-labelledby="titulo-orcamento">
        <div className={`shell ${styles.contactGrid}`}>
          <div>
            <h2 id="titulo-orcamento">Entre em contato</h2>
            <p>{legacy.consult} Envie dimensões, quantidade, fotos ou desenhos.</p>
            <dl className={styles.contactList}>
              <div><dt>Dúvidas, solicitações e orçamentos</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>
              <div><dt>Telefone</dt><dd><a href="tel:+552134487320">{company.phoneMain}</a></dd></div>
              <div><dt>Endereço</dt><dd>{company.address}</dd></div>
            </dl>
          </div>
          <div className={styles.formCard}><QuoteForm /></div>
        </div>
      </section>
    </>
  );
}
