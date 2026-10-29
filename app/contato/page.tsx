import { pageMetadata } from "@/data/seo";
import { ContactContent } from "@/components/LegacyPages";
import { PageHero } from "@/components/PageHero";

export const metadata = pageMetadata("/contato", "Fale Conosco", "Entre em contato com a Primapox pelo telefone (21) 3448-7320, e-mail primapox@primapox.com ou formulário.");

export default function ContatoPage() {
  return (
    <>
      <PageHero image="/gallery/1.webp" eyebrow="Primapox / Fale Conosco" marker="" title="Fale Conosco" copy="" />
      <ContactContent />
    </>
  );
}
