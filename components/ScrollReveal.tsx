"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Reveals headings, cards, list items and figures as they scroll into view, staggered among siblings.
// Content stays visible without JavaScript: elements are only hidden once html[data-reveal-ready] is set.
const TARGETS = "main h2, main h3, main article, main li, main figure, main details, main dl > div, main form, main table, main [data-reveal]";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.dataset.revealReady = "true";
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.setAttribute("data-revealed", "true");
        observer.unobserve(entry.target);
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

    // Tracked per effect run: a re-run (route change, dev double-mount) must observe the elements again.
    const bound = new Set<Element>();
    const register = () => {
      document.querySelectorAll<HTMLElement>(TARGETS).forEach((element) => {
        if (bound.has(element) || element.dataset.revealed || element.closest("[data-reveal-skip]")) return;
        // Skip nested targets (a heading inside an animated card animates with its card).
        if (element.parentElement?.closest("main article, main li, main figure, main details, main form, main [data-reveal]")) return;
        bound.add(element);
        element.dataset.revealBound = "true";
        const siblings = element.parentElement ? Array.from(element.parentElement.children) : [];
        element.style.setProperty("--reveal-delay", `${Math.min(siblings.indexOf(element), 6) * 80}ms`);
        observer.observe(element);
      });
    };

    register();
    const mutations = new MutationObserver(register);
    mutations.observe(document.querySelector("main") ?? document.body, { childList: true, subtree: true });
    return () => { observer.disconnect(); mutations.disconnect(); };
  }, [pathname]);

  return null;
}
