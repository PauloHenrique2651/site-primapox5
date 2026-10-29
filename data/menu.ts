import { tabs } from "./primapox";

// Navigation mirrors the legacy site's tabs exactly.
export const menu: ReadonlyArray<{ label: string; href: string } | { label: string; items: ReadonlyArray<{ label: string; href: string }> }> = tabs;
