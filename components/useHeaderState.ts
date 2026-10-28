"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Shared header behaviour: scroll state, mobile menu open state, Escape to close,
// focus trap inside the open menu and auto-close when the viewport grows past the breakpoint.
export function useHeaderState(breakpoint = 1100) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); return; }
      if (event.key !== "Tab" || !menu.current) return;
      const controls = [toggle.current, ...menu.current.querySelectorAll<HTMLElement>("a[href], button")].filter(Boolean) as HTMLElement[];
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.removeEventListener("keydown", onKeyDown); delete document.body.dataset.menuOpen; };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia(`(min-width: ${breakpoint + 1}px)`);
    const onChange = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, [breakpoint]);

  return { open, setOpen, close, scrolled, menu, toggle };
}
