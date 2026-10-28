"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Auto-advancing slide index shared by the hero carousels.
// Stops for reduced motion, hidden tabs, hover/focus inside the carousel and the manual pause button.
export function useCarousel(count: number, interval = 6500) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const hovering = useRef(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(motion.matches);
    apply();
    motion.addEventListener("change", apply);
    return () => motion.removeEventListener("change", apply);
  }, []);

  const running = !paused && !reducedMotion && count > 1;

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      if (!hovering.current && !document.hidden) setIndex((current) => (current + 1) % count);
    }, interval);
    return () => window.clearInterval(timer);
  }, [running, count, interval]);

  const go = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);

  const regionProps = {
    onMouseEnter: () => { hovering.current = true; },
    onMouseLeave: () => { hovering.current = false; },
    onFocus: () => { hovering.current = true; },
    onBlur: () => { hovering.current = false; },
  };

  return { index, go, next: () => go(index + 1), previous: () => go(index - 1), paused: paused || reducedMotion, togglePause: () => setPaused((value) => !value), regionProps };
}
