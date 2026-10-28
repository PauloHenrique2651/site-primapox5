import type { MetadataRoute } from "next";
import { siteRoutes, siteUrl } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map((route) => ({ url: `${siteUrl}${route}`, changeFrequency: route === "/" ? "weekly" : "monthly", priority: route === "/" ? 1 : .7 }));
}
