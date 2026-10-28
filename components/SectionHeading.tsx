import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  aside,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? "section-heading--light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {aside && <div className="section-heading__aside">{aside}</div>}
    </div>
  );
}
