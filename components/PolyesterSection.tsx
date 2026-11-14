import { services } from "@/data/primapox";
import styles from "./PolyesterSection.module.css";

// Replaces the legacy "Tipos de Tinta em pó" list: Primapox works only with polyester.
export function PolyesterSection() {
  const p = services.polyester;
  const l = services.line;
  return (
    <section className={styles.section}>
      <div className="shell">
        <div className={styles.head}>
          <div>
            <p className={styles.eyebrow}>{p.eyebrow}</p>
            <h2>{p.title}</h2>
          </div>
          <p className={styles.intro}>{p.intro}</p>
        </div>

        <ul className={styles.grid}>
          {p.advantages.map(([title, text]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>

        <div className={styles.line}>
          <p className={styles.figure}><b>{l.value}</b> {l.unit}</p>
          <div>
            <h3>{l.title}</h3>
            <p>{l.text}</p>
          </div>
          {/* the bar fills as the block scrolls into view, like a part travelling the line */}
          <span className={styles.track} aria-hidden="true"><i /></span>
        </div>
      </div>
    </section>
  );
}
