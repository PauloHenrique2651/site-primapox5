import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { SocialLinks } from "@/components/SocialLinks";
import { whatsappLink } from "@/data/whatsapp";
import { company } from "@/data/site";
import { menu } from "@/data/menu";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer} id="rodape">
      <div className={styles.band}>
        <div className={`shell ${styles.bandInner}`}>
          <BrandMark className={styles.brand} sizes="(max-width: 800px) 220px, 280px" />
          <p>Pintura eletrostática a pó com preparação controlada, cobertura uniforme e acabamento de alto padrão. Desde {company.foundedYear}.</p>
          <Link className={styles.bandCta} href="/contato#orcamento">Solicitar orçamento</Link>
        </div>
      </div>
      <div className={`shell ${styles.columns}`}>
        {menu.filter((entry) => "items" in entry).map((entry) => (
          <nav key={entry.label} aria-label={entry.label}>
            <h2>{entry.label}</h2>
            {"items" in entry && entry.items.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
        ))}
        <nav aria-label="Mais páginas">
          <h2>Atuação</h2>
          <Link href="/processo">Processo</Link>
          <Link href="/aplicacoes">Aplicações</Link>
          <Link href="/galeria">Galeria de projetos</Link>
        </nav>
        <div>
          <h2>Contato</h2>
          <a className={styles.mail} href={`mailto:${company.email}`}>{company.email}</a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp {company.whatsappLabel}</a>
          {company.phones.map((phone) => <a key={phone} href={`tel:+55${phone.replace(/\D/g, "")}`}>{phone}</a>)}
          <SocialLinks className={styles.social} />
        </div>
        <div>
          <h2>Endereço</h2>
          <p>{company.address}</p>
          <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer">Traçar rota no mapa</a>
        </div>
      </div>
      <div className={`shell ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} {company.name}</span>
        <Link href="/politica-de-privacidade">Política de privacidade</Link>
      </div>
    </footer>
  );
}
