import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return <><PageHero eyebrow="" marker="" title="404" copy="" /><section className="content-section"><div className="shell"><Link className="text-link" href="/">Home</Link></div></section></>;
}
