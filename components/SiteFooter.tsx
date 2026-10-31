import { BrandMark } from "@/components/BrandMark";
import { footerLines, footerRights } from "@/data/primapox";
import styles from "./SiteFooter.module.css";

// Footer text exactly as the legacy primapox.com footer (rdp.gif). The logo sits directly on the
// background: only the cloud itself is white.
export function SiteFooter() {
  return (
    <footer className={styles.footer} id="rodape">
      <div className={`shell ${styles.inner}`}>
        <BrandMark className={styles.brand} sizes="(max-width: 800px) 180px, 220px" />
        <div className={styles.text}>
          <p className={styles.rights}>{footerRights}</p>
          {footerLines.map((line) => <p key={line}>{line}</p>)}
        </div>
      </div>
    </footer>
  );
}
