import { pageMetadata } from "@/data/seo";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { company } from "@/data/site";
import { whatsappLink } from "@/data/whatsapp";
import styles from "@/components/ServiceContent.module.css";

export const metadata = pageMetadata("/contato", "Contato e orçamento", "Envie informações do seu projeto para análise da Primapox no Rio de Janeiro.");

export default function ContatoPage() {
  return (
    <>
      <PageHero image="/gallery/22.webp" eyebrow="Primapox / Contato" marker="NOVO PROJETO" title={<>Quanto melhor o escopo,<br /><em>mais precisa a conversa.</em></>} copy="Informe material, dimensões, quantidade, uso e prazo. Fotos e desenhos ajudam a equipe a entender a peça." />
      <section className="content-section contact-page"><div className="shell contact-page__grid"><div className="contact-page__details"><p className="eyebrow">E-mail e WhatsApp para dúvidas, solicitações e orçamentos</p><a href={`mailto:${company.email}`}>{company.email}</a><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp {company.whatsappLabel}</a><a href="tel:+552134487320">{company.phoneMain}</a><p>{company.address}</p><ul className={styles.phoneList} aria-label="Outros telefones da Primapox">{company.phones.slice(1).map((phone) => <li key={phone}><a href={`tel:+55${phone.replace(/\D/g, "")}`}>{phone}</a></li>)}</ul><div><span>Atendimento técnico</span><p>O orçamento depende da análise dimensional e das condições reais da peça.</p></div></div><QuoteForm /></div></section>
    </>
  );
}
