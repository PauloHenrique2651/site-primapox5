"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { SocialLinks } from "@/components/SocialLinks";
import { useHeaderState } from "@/components/useHeaderState";
import { company } from "@/data/site";
import { whatsappLink } from "@/data/whatsapp";
import { menu } from "@/data/menu";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const quoteHref = "/contato";
  const { open, setOpen, close, scrolled, menu: mobileMenu, toggle } = useHeaderState(1180);
  const [group, setGroup] = useState<string | null>(null);
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!group) return;
    const onPointer = (event: PointerEvent) => { if (!nav.current?.contains(event.target as Node)) setGroup(null); };
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setGroup(null); };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("pointerdown", onPointer); document.removeEventListener("keydown", onKey); };
  }, [group]);

  return (
    <header className={styles.header} data-scrolled={scrolled} data-open={open}>
      <div className={styles.utility}>
        <div className={`shell ${styles.utilityInner}`}>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp {company.whatsappLabel}</a>
          <a href="tel:+552134487320">{company.phoneMain}</a>
          <span>Praça Itapitanga 10, Vigário Geral</span>
          <SocialLinks className={styles.social} />
        </div>
      </div>
      <div className={`shell ${styles.main}`}>
        <BrandMark className={styles.brand} priority onClick={close} />
        <nav ref={nav} className={styles.nav} aria-label="Navegação principal">
          {menu.map((entry) => "items" in entry ? (
            <div key={entry.label} className={styles.group}>
              <button type="button" aria-expanded={group === entry.label} aria-controls={`grupo-${entry.label}`} onClick={() => setGroup(group === entry.label ? null : entry.label)}>
                {entry.label}<i aria-hidden="true" />
              </button>
              <ul id={`grupo-${entry.label}`} hidden={group !== entry.label}>
                {entry.items.map((item) => <li key={item.href}><Link href={item.href} onClick={() => setGroup(null)}>{item.label}</Link></li>)}
              </ul>
            </div>
          ) : (
            <Link key={entry.href} href={entry.href} aria-current={pathname === entry.href ? "page" : undefined}>{entry.label}</Link>
          ))}
        </nav>
        <a className={styles.cta} href={quoteHref}>Fale Conosco</a>
        <button ref={toggle} className={styles.toggle} type="button" aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>
          <i /><i /><i />
        </button>
      </div>
      <div ref={mobileMenu} className={styles.mobile} id="menu-mobile" hidden={!open}>
        <nav className="shell" aria-label="Navegação mobile">
          {menu.map((entry) => "items" in entry ? (
            <div key={entry.label}>
              <p>{entry.label}</p>
              {entry.items.map((item) => <Link key={item.href} href={item.href} onClick={close}>{item.label}</Link>)}
            </div>
          ) : (
            <Link key={entry.href} href={entry.href} aria-current={pathname === entry.href ? "page" : undefined} onClick={close}>{entry.label}</Link>
          ))}
          <a className={styles.mobileCta} href={quoteHref} onClick={close}>Fale Conosco</a>
        </nav>
      </div>
    </header>
  );
}
