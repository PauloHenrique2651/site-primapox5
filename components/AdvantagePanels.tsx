"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { home } from "@/data/primapox";
import styles from "./AdvantagePanels.module.css";

// The three "Principais Vantagens" pills are buttons; each one with content opens its panel
// right below the row, as part of the home page. Only "Alto Padrão de Qualidade" has a panel so far.
const PANELS: Record<string, "aplicacoes"> = { "Alto Padrão de Qualidade": "aplicacoes" };
// pills that go to another page; "Cores" points to the gallery until the colour catalogue arrives
const LINKS: Record<string, string> = { "Cores Diversificadas e vivas": "/galeria" };

export function AdvantagePanels() {
  const [open, setOpen] = useState<string | null>(null);
  const a = home.aplicacoes;
  const c = home.competencia;

  return (
    <>
      <ul className={styles.row}>
        {home.advantages.map((item, i) => {
          const has = item in PANELS;
          if (LINKS[item]) return <li key={item}><Link className={styles.pill} href={LINKS[item]}>{item}<b aria-hidden="true">→</b></Link></li>;
          return (
            <li key={item}>
              <button
                type="button"
                className={styles.pill}
                aria-expanded={has ? open === item : undefined}
                aria-controls={has ? `vantagem-${i}` : undefined}
                onClick={() => has && setOpen(open === item ? null : item)}
              >
                {item}
                {has && <i aria-hidden="true" />}
              </button>
            </li>
          );
        })}
      </ul>

      <div id={`vantagem-${home.advantages.indexOf("Alto Padrão de Qualidade")}`} className={styles.panel} data-open={open === "Alto Padrão de Qualidade"}>
        <div className={styles.inner}>
          <div className={styles.comp}>
            <div className={styles.compText}>
              <p className={styles.eyebrow}>{c.eyebrow}</p>
              <h2>{c.title[0]}<br />{c.title[1]}</h2>
              <p className={styles.aside}>{c.text}</p>
              <ul className={styles.points}>
                {c.points.map((pt, i) => <li key={pt}><b>{String(i + 1).padStart(2, "0")}</b>{pt}</li>)}
              </ul>
            </div>
            <div className={styles.poly}>
              <span className={styles.tag}>{c.polyester.tag}</span>
              <h3>{c.polyester.title}</h3>
              <p>{c.polyester.text}</p>
              <Link className={styles.polyLink} href="/servicos#poliester">{c.polyester.link} <b aria-hidden="true">→</b></Link>
            </div>
          </div>
          <p className={styles.slogan}>{c.slogan.before}<span className={styles.word}>{c.slogan.word}</span>{c.slogan.after}</p>
          <div className={`${styles.head} ${styles.headApps}`}>
            <div>
              <p className={styles.eyebrow}>{a.eyebrow}</p>
              <h2>{a.title[0]}<br />{a.title[1]}</h2>
            </div>
            <p className={styles.aside}>{a.text}</p>
          </div>
          <div className={styles.grid}>
            {a.items.map((it, i) => (
              <article key={it.title} className={styles.card} style={{ "--i": i } as React.CSSProperties}>
                <div className={styles.photo}>
                  <Image src={it.image} alt={it.alt} fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 22vw" />
                </div>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
