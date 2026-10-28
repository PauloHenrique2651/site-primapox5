// Thin reading-progress bar at the top of the page (CSS scroll-driven animation where supported).
export function ScrollTone() {
  return <div className="scroll-progress" aria-hidden="true" />;
}
