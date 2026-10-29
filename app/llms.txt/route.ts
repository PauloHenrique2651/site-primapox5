import { company } from "@/data/site";
import { siteUrl } from "@/data/seo";

export const dynamic = "force-static";

export function GET() {
  const text = `# Primapox

> Pintura eletrostática a pó para componentes metálicos em Vigário Geral, Rio de Janeiro. Fundada em ${company.foundedOn}.

## Conteúdo
- [Home](${siteUrl}/): Nossos Serviços, Principais Vantagens, A Primapox, Localização e Fale Conosco.
- [A Primapox](${siteUrl}/empresa): Quem Somos; pintura em peças com até 6,5m de comprimento.
- [Serviços](${siteUrl}/servicos): benefícios da tinta em pó, tipos de tinta, tabela da tinta em pó à base de poliéster, material, pré-tratamento, pintura e cura.
- [Manutenção](${siteUrl}/manutencao): limpeza, intervalos, fatores ambientais, requisitos de garantia, retoque e silicone industrial.
- [Galeria de Fotos](${siteUrl}/galeria): 46 fotografias.
- [Fale Conosco](${siteUrl}/contato): telefone (21) 3448-7320, e-mail ${company.email} e WhatsApp ${company.whatsappLabel}.

## Limites
A escolha do sistema depende do material, das dimensões e do ambiente de uso. Os valores do catálogo histórico não substituem o boletim técnico da tinta. As imagens antes/depois são ilustrativas, geradas por IA; a galeria é acervo real. O site prepara a mensagem de orçamento no aplicativo de e-mail do visitante, que anexa os arquivos e confirma o envio; o site não armazena dados nem anexos.
`;
  return new Response(text, {headers:{"Content-Type":"text/plain; charset=utf-8"}});
}
