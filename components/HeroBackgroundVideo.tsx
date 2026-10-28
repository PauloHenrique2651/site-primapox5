"use client";

import { useEffect, useRef, useState } from "react";

type NetworkNavigator = Navigator & { connection?: { saveData?: boolean } };

// Muted, looping hero background rendered with HyperFrames from real Primapox photos.
// Shows only the poster for reduced motion or data saver; pauses off-screen and in hidden tabs.
export function HeroBackgroundVideo({ src, poster, className, buttonClassName }: { src: string; poster: string; className?: string; buttonClassName?: string }) {
  const video = useRef<HTMLVideoElement>(null);
  const allowed = useRef(false);
  const visible = useRef(true);
  const manuallyPaused = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const tryPlay = () => {
      if (allowed.current && visible.current && !document.hidden && !manuallyPaused.current) void element.play().catch(() => setPaused(true));
    };
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      allowed.current = !motion.matches && !(navigator as NetworkNavigator).connection?.saveData;
      setEnabled(allowed.current);
      if (allowed.current) tryPlay();
      else element.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible.current = entry.isIntersecting;
      if (entry.isIntersecting) tryPlay();
      else element.pause();
    });
    const onVisibility = () => (document.hidden ? element.pause() : tryPlay());
    apply();
    observer.observe(element);
    motion.addEventListener("change", apply);
    document.addEventListener("visibilitychange", onVisibility);
    element.addEventListener("canplay", tryPlay);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", apply);
      document.removeEventListener("visibilitychange", onVisibility);
      element.removeEventListener("canplay", tryPlay);
    };
  }, []);

  // The <source> is only added once motion is allowed, so load it explicitly then.
  useEffect(() => { if (enabled) video.current?.load(); }, [enabled]);

  function toggle() {
    const element = video.current;
    if (!element) return;
    manuallyPaused.current = !paused;
    if (paused) void element.play().catch(() => setPaused(true));
    else element.pause();
  }

  return (
    <>
      <video ref={video} className={className} poster={poster} muted loop playsInline preload={enabled ? "auto" : "none"} aria-hidden="true" onPlay={() => setPaused(false)} onPause={() => setPaused(true)}>
        {enabled && <source src={src} type="video/webm" />}
      </video>
      {enabled && (
        <button className={buttonClassName} type="button" onClick={toggle} aria-label={paused ? "Reproduzir vídeo de fundo" : "Pausar vídeo de fundo"}>
          <span data-icon={paused ? "play" : "pause"} aria-hidden="true" />
        </button>
      )}
    </>
  );
}
