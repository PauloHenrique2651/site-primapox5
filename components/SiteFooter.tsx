import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { company } from "@/data/site";
import { footerRights, tabs } from "@/data/primapox";
import styles from "./SiteFooter.module.css";

// Footer: closing line, logo, site map and contact details, then the rights line.
export function SiteFooter() {
  return (
    <footer className={styles.footer} id="rodape">
      <div className={styles.closing}>
        <div className={`shell ${styles.closingInner}`}>
          <p>Se é metal, Primapox pinta e protege!</p>
          <Link className={styles.cta} href="/contato">Fale conosco</Link>
        </div>
      </div>

      <div className={`shell ${styles.inner}`}>
        <div className={styles.about}>
          <BrandMark className={styles.brand} sizes="(max-width: 800px) 240px, 320px" />
          <p>{company.name}. Pintura eletrostática com tinta em pó poliéster, em peças de até 8 metros de comprimento.</p>
        </div>

        <nav className={styles.col} aria-label="Mapa do site">
          <h2>Páginas</h2>
          <ul>
            {tabs.map((t) => <li key={t.href}><Link href={t.href}>{t.label}</Link></li>)}
          </ul>
        </nav>

        <div className={styles.col}>
          <h2>Serviços</h2>
          <ul>
            <li><Link href="/servicos#poliester">Tinta em pó poliéster</Link></li>
            <li><Link href="/servicos#ficha-tecnica">Ficha técnica</Link></li>
            <li><Link href="/manutencao">Manutenção</Link></li>
            <li><Link href="/galeria">Galeria de Fotos</Link></li>
          </ul>
        </div>

        <address className={styles.col}>
          <h2>Contato</h2>
          <ul>
            <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><a href={company.mapsUrl} target="_blank" rel="noopener noreferrer">{company.address}</a></li>
          </ul>
        </address>
      </div>

      <div className={styles.bottom}>
        <div className={`shell ${styles.bottomInner}`}>
          <p>{footerRights}</p>
          <p>© {new Date().getFullYear()} {company.shortName}</p>
        </div>
      </div>
    </footer>
  );
}
