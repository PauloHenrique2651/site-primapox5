"use client";

import type { MouseEvent, MouseEventHandler } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./BrandMark.module.css";

// Official Primapox logo, reproduced as supplied (only the transparent margin was trimmed).
// Width is set by the --logo-width custom property of the surrounding header or footer.
export function BrandMark({ className = "", priority = false, sizes = "(max-width: 800px) 180px, 300px", onClick }: { className?: string; priority?: boolean; sizes?: string; onClick?: MouseEventHandler<HTMLAnchorElement> }) {
  function goHome(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (window.location.pathname === "/") {
      event.preventDefault();
      window.history.replaceState(window.history.state, "", "/");
      window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  }

  return (
    <Link className={`${styles.brand} ${className}`} href="/" prefetch={false} aria-label="Primapox — pintura eletrostática a pó — página inicial" onClick={goHome}>
      <Image
        className={styles.logo}
        src="/brand/primapox-logo.webp"
        alt="Primapox"
        width={1658}
        height={672}
        sizes={sizes}
        quality={100}
        preload={priority}
        fetchPriority={priority ? "high" : undefined}
      />
    </Link>
  );
}
