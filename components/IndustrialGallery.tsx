"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { galleryItems, galleryPreviewIds, type GalleryItem } from "@/data/gallery";

const filters = ["Todos", "Processo", "Acabamentos", "Arquitetura", "Componentes", "Institucional"] as const;
const GalleryLightbox = dynamic(() => import("./GalleryLightbox"));

export function IndustrialGallery({ preview = false }: { preview?: boolean }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const items = useMemo(() => {
    if (preview) return galleryPreviewIds.map((id) => galleryItems[id - 1]);
    return filter === "Todos" ? galleryItems : galleryItems.filter((item) => item.category === filter);
  }, [filter, preview]);

  return (
    <>
      {!preview && (
        <div className="gallery-filters" role="group" aria-label="Filtrar galeria">
          {filters.map((option) => (
            <button key={option} type="button" aria-pressed={filter === option} onClick={() => setFilter(option)}>{option}</button>
          ))}
        </div>
      )}
      <div className={`industrial-gallery ${preview ? "industrial-gallery--preview" : ""}`}>
        {items.map((item, index) => (
          <button
            className={`industrial-gallery__item industrial-gallery__item--${index % 7}`}
            key={item.id}
            type="button"
            onClick={() => setSelected(item)}
            aria-label={`${String(item.id).padStart(2, "0")} ${item.category} — Abrir imagem: ${item.alt}`}
          >
            <Image src={item.src} alt={item.alt} fill sizes={preview
              ? `(max-width: 520px) 90vw, (max-width: 800px) 45vw, ${index === items.length - 1 ? "50vw" : index === 0 ? "37vw" : "25vw"}`
              : index % 7 === 0 || index % 7 === 5 ? "(max-width: 800px) 90vw, 43vw" : "(max-width: 800px) 45vw, 22vw"} />
            <span><i>{String(item.id).padStart(2, "0")}</i>{" "}{item.category}</span>
          </button>
        ))}
      </div>
      {selected && <GalleryLightbox selected={selected} items={items} onSelect={setSelected} onClose={() => setSelected(null)} />}
    </>
  );
}
