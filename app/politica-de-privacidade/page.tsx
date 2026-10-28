import { pageMetadata } from "@/data/seo";
import { PageHero } from "@/components/PageHero";

export const metadata = pageMetadata("/politica-de-privacidade", "Política de privacidade", "Saiba como os dados de contato e arquivos são utilizados no orçamento da Primapox e nos serviços externos.");

export default function PrivacidadePage() {
  return (
    <><PageHero eyebrow="Primapox / Privacidade" marker="DADOS" title={<>Informação usada<br /><em>com finalidade.</em></>} copy="Esta política explica o tratamento dos dados enviados nos canais de contato da Primapox." /><section className="content-section"><div className="shell legal-copy"><h2>Dados de contato</h2><p>Nome, empresa, e-mail, telefone e informações de projeto são utilizados somente para analisar e responder à solicitação enviada.</p><h2>Arquivos</h2><p>Desenhos, fotografias e documentos enviados devem conter apenas informações necessárias para a avaliação do projeto.</p><p>O formulário não envia dados nem arquivos ao servidor do site. Ele prepara uma mensagem no aplicativo de e-mail do visitante, que revisa o conteúdo, adiciona os anexos e confirma o envio para a Primapox.</p><h2>Serviços externos e cookies</h2><p>O site não utiliza Google Analytics, Tag Manager, Meta Pixel ou cookies próprios de publicidade. O mapa incorporado é fornecido pelo Google e pode utilizar cookies ou outros recursos conforme as configurações do navegador e a política desse serviço.</p><h2>Direitos</h2><p>O titular pode solicitar acesso, correção ou exclusão de dados por meio do e-mail primapox@primapox.com.</p></div></section></>
  );
}
