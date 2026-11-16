import Link from "next/link";
import { home } from "@/data/primapox";
import styles from "./Competencia.module.css";

// "Competência técnica" screen: central competence, polyester emphasis and the colour-changing slogan.
export function Competencia() {
  const c = home.competencia;
  return (
    <section className={styles.section} aria-labelledby="competencia">
      <div className="shell">
        <div className={styles.comp}>
          <div className={styles.compText}>
            <h2 id="competencia">{c.title[0]}<br />{c.title[1]}</h2>
            <p className={styles.aside}>{c.text}</p>
            <ul className={styles.points}>
              {c.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
          </div>
          <div className={styles.poly}>
            <span className={styles.tag}>{c.polyester.tag}</span>
            <h3>{c.polyester.title}</h3>
            <p>{c.polyester.text}</p>
            <Link className={styles.polyLink} href="/servicos#poliester">{c.polyester.link}</Link>
          </div>
        </div>
        <p className={styles.slogan}>{c.slogan.before}<span className={styles.word}>{c.slogan.word}</span>{c.slogan.after}</p>
      </div>
    </section>
  );
}
