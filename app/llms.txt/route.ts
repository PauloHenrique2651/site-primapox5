import { company } from "@/data/site";
import { siteUrl } from "@/data/seo";

export const dynamic = "force-static";

export function GET() {
  const text = `# Primapox

> Pintura eletrostática a pó para componentes metálicos em Vigário Geral, Rio de Janeiro. Fundada em ${company.foundedOn}.

## Conteúdo
- [Empresa](${siteUrl}/empresa): história, atendimento e capacidade informada de peças de até 6,5 m.
- [Serviços](${siteUrl}/solucoes/pintura-eletrostatica-a-po): preparação, pintura a pó, resina híbrida para interiores e poliéster para exteriores.
- [Processo](${siteUrl}/processo): avaliação, preparação, aplicação, cura e controle.
- [Aplicações](${siteUrl}/aplicacoes): arquitetura, indústria, varejo, mobiliário e aplicações navais descritas no acervo.
- [Galeria](${siteUrl}/galeria): 46 fotografias do acervo histórico da Primapox.
- [Manutenção](${siteUrl}/manutencao): limpeza e conservação da pintura poliéster.
- [Central técnica](${siteUrl}/central-tecnica): orientações e dados históricos de referência, não garantias de desempenho.
- [Contato](${siteUrl}/contato): orçamento e dúvidas pelo e-mail ${company.email} ou WhatsApp ${company.whatsappLabel}.
- [Privacidade](${siteUrl}/politica-de-privacidade): uso dos dados de contato.

## Limites
A escolha do sistema depende do material, das dimensões e do ambiente de uso. Os valores do catálogo histórico não substituem o boletim técnico da tinta. As imagens antes/depois são ilustrativas, geradas por IA; a galeria é acervo real. O site prepara a mensagem de orçamento no aplicativo de e-mail do visitante, que anexa os arquivos e confirma o envio; o site não armazena dados nem anexos.
`;
  return new Response(text, {headers:{"Content-Type":"text/plain; charset=utf-8"}});
}
