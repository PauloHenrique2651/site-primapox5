import { pageMetadata } from "@/data/seo";
import { ContactContent } from "@/components/LegacyPages";
import { PageHero } from "@/components/PageHero";

export const metadata = pageMetadata("/contato", "Fale Conosco", "Entre em contato pelo telefone (21) 3448-7320 ou preencha o formulário abaixo:");

export default function ContatoPage() {
  return (
    <>
      <PageHero image="/gallery/1.webp" eyebrow="Primapox / Fale Conosco" marker="" title="Contato" copy="" />
      <ContactContent />
    </>
  );
}
