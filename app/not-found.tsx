import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return <><PageHero eyebrow="Primapox / Página não encontrada" marker="404" title={<>Esta página<br /><em>não foi encontrada.</em></>} copy="O endereço pode ter mudado. Volte ao início ou fale com a equipe da Primapox." /><section className="content-section"><div className="shell hero__actions"><Link className="button button--red" href="/">Voltar ao início</Link><Link className="text-link" href="/contato">Falar com a Primapox</Link></div></section></>;
}
