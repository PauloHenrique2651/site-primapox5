"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { galleryItems } from "@/data/gallery";
import styles from "./LegacyContent.module.css";
import box from "./PhotoGallery.module.css";

// Photo grid as on the legacy "Galeria de Fotos" tab: photos only, opened in a lightbox.
export function PhotoGallery({ limit }: { limit?: number }) {
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (index === null) { if (element.open) element.close(); return; }
    if (!element.open) element.showModal();
  }, [index]);

  const move = (step: number) => setIndex((current) => current === null ? null : (current + step + items.length) % items.length);
  const current = index === null ? null : items[index];

  return (
    <>
      <ul className={styles.gallery}>
        {items.map((item, position) => (
          <li key={item.id}>
            <button type="button" onClick={() => setIndex(position)} aria-label={`Ampliar foto ${item.id}`}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 900px) 46vw, 23vw" />
            </button>
          </li>
        ))}
      </ul>
      <dialog ref={dialog} className={box.dialog} onClose={() => setIndex(null)} onClick={(event) => { if (event.target === event.currentTarget) setIndex(null); }} onKeyDown={(event) => { if (event.key === "ArrowRight") move(1); if (event.key === "ArrowLeft") move(-1); }}>
        {current && <div className={box.image}><Image src={current.src} alt={current.alt} fill sizes="92vw" quality={90} /></div>}
        <button className={box.close} type="button" onClick={() => setIndex(null)} aria-label="Fechar" />
        <button className={`${box.nav} ${box.prev}`} type="button" onClick={() => move(-1)} aria-label="Foto anterior" />
        <button className={`${box.nav} ${box.next}`} type="button" onClick={() => move(1)} aria-label="Próxima foto" />
      </dialog>
    </>
  );
}
