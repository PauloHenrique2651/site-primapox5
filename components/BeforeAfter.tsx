"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./BeforeAfter.module.css";

// Before/after slider brought over from the reference site (siteprimapox.vercel.app).
export function BeforeAfter() {
  const [position, setPosition] = useState(48);

  return (
    <div className={styles.wrap}>
      <div className={styles.canvas} style={{ "--position": `${position}%` } as React.CSSProperties}>
        <div className={styles.layer}>
          <Image src="/surfaces/untreated-rust.webp" alt="Gabinete de aço com ferrugem superficial, antes da preparação" fill sizes="(max-width: 1100px) 90vw, 1320px" quality={90} className={styles.photo} />
        </div>
        <div className={`${styles.layer} ${styles.after}`}>
          <Image src="/surfaces/powder-coated.webp" alt="O mesmo gabinete após preparação e revestimento azul acetinado" fill sizes="(max-width: 1100px) 90vw, 1320px" quality={90} className={styles.photo} />
        </div>
        <span className={`${styles.label} ${styles.beforeLabel}`}>Antes · sem tratamento</span>
        <span className={`${styles.label} ${styles.afterLabel}`}>Depois · preparado e revestido</span>
        <div className={styles.divider} aria-hidden="true"><i className={styles.arrows} /></div>
        <span className={styles.hint} aria-hidden="true">Arraste para comparar</span>
        <input
          className={styles.range}
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Comparar gabinete enferrujado e gabinete preparado e revestido"
          name="comparison"
          aria-valuetext={`${position}% da imagem antes do tratamento`}
        />
      </div>
    </div>
  );
}
