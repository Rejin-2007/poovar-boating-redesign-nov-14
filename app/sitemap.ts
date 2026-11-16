import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-metadata";
import { poovarSeoPages } from "@/lib/poovar-seo-pages";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  ...poovarSeoPages.map(({ slug }) => ({ path: `/${slug}`, priority: 0.8, changeFrequency: "monthly" as const })),
  { path: "/services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.5, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));
}
