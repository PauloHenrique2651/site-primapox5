"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { GalleryItem } from "@/data/gallery";

export default function GalleryLightbox({ selected, items, onSelect, onClose }: {selected:GalleryItem;items:GalleryItem[];onSelect:(item:GalleryItem)=>void;onClose:()=>void}) {
  const dialog = useRef<HTMLDialogElement>(null);
  function move(direction:number) {
    const index = items.findIndex(item=>item.id===selected.id);
    onSelect(items[(index+direction+items.length)%items.length]);
  }

  useEffect(() => {
    const element = dialog.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus({preventScroll:true});
    };
  }, []);

  return <dialog ref={dialog} className="gallery-lightbox" aria-label={selected.alt} onCancel={event=>{event.preventDefault();onClose();}} onClick={event=>{if(event.target===event.currentTarget)onClose();}} onKeyDown={event=>{
    if (event.key === "Tab") {
      const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>("button:not([disabled])");
      const first = buttons[0], last = buttons[buttons.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    if(event.key==="ArrowRight"){event.preventDefault();move(1);}
    if(event.key==="ArrowLeft"){event.preventDefault();move(-1);}
  }}>
    <button className="gallery-lightbox__close" type="button" onClick={onClose} aria-label="Fechar imagem" />
    <button className="gallery-lightbox__nav gallery-lightbox__nav--prev" type="button" onClick={()=>move(-1)} aria-label="Imagem anterior" />
    <div className="gallery-lightbox__image"><Image src={selected.src} alt={selected.alt} fill sizes="(max-width: 800px) 90vw, 95vw" quality={90} loading="eager" /></div>
    <div className="gallery-lightbox__caption" aria-live="polite"><span>{String(selected.id).padStart(2,"0")} / {selected.category}</span><p>{selected.alt}</p></div>
    <button className="gallery-lightbox__nav gallery-lightbox__nav--next" type="button" onClick={()=>move(1)} aria-label="Próxima imagem" />
  </dialog>;
}
