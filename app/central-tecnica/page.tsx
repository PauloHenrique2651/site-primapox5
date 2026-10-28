import { pageMetadata } from "@/data/seo";
import { PageHero } from "@/components/PageHero";
import styles from "@/components/ServiceContent.module.css";

export const metadata = pageMetadata("/central-tecnica", "Central técnica", "Conteúdo técnico sobre pintura eletrostática a pó, preparação e acabamento de componentes metálicos.");

const topics = [
  { title: "Pintura eletrostática a pó", copy: "A carga eletrostática distribui o pó sobre o metal preparado. A cura ativa o sistema de resinas e consolida a película.", href: "/solucoes/pintura-eletrostatica-a-po", label: "Ver serviços" },
  { title: "Pré-tratamento e cura", copy: "Limpeza, preparação e tratamento químico removem contaminantes e criam as condições de aderência antes da aplicação e do aquecimento.", href: "/processo", label: "Conhecer o processo" },
  { title: "Híbrida ou poliéster", copy: "A Primapox utiliza resina híbrida para peças de uso interior e poliéster para uso exterior, especialmente em arquitetura.", href: "/solucoes/pintura-eletrostatica-a-po#resinas", label: "Entender as resinas" },
  { title: "Manutenção da pintura", copy: "Detergente neutro, materiais macios e intervalos de limpeza compatíveis com o ambiente ajudam a conservar o acabamento poliéster.", href: "/manutencao", label: "Consultar cuidados" },
  { title: "Referência técnica do poliéster", copy: "Propriedades físicas, agentes químicos, ensaios ambientais e legendas do catálogo histórico publicado pela Primapox.", href: "/solucoes/pintura-eletrostatica-a-po#ficha-tecnica", label: "Consultar tabela técnica" },
  { title: "Preparar o orçamento", copy: "Informe material, dimensões, quantidade, uso e prazo. Fotos e desenhos ajudam na avaliação de peças, incluindo a capacidade informada de até 6,5 m de comprimento.", href: "/contato#orcamento", label: "Enviar projeto" },
];

export default function CentralTecnicaPage() {
  return (
    <>
      <PageHero image="/gallery/11.webp" eyebrow="Primapox / Central técnica" marker="CONTEÚDO" title={<>Conhecimento que<br /><em>prepara decisões.</em></>} copy="Uma base de conteúdo direto para compradores, projetistas e profissionais que especificam componentes metálicos." />
      <section className={styles.content}><div className={`shell ${styles.grid}`}>{topics.map(({ title, copy, href, label }) => <article key={title}><h2>{title}</h2><p>{copy}</p><div className={styles.links}><a className="text-link" href={href}>{label} <span className="icon icon--north-east" aria-hidden="true" /></a></div></article>)}</div></section>
    </>
  );
}
