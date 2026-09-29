import type { MetadataRoute } from "next";
import { projectsData } from "@/data/projectsData";
import { locales, SITE_URL } from "@/lib/i18n";

// Chaque page est déclarée dans les deux langues avec ses équivalents hreflang
function localized(path: string, priority: number): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`]));
  return locales.map((lang) => ({
    url: `${SITE_URL}/${lang}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...localized("", 1),
    ...projectsData.flatMap((p) => localized(`/projects/${p.slug}`, p.featured ? 0.9 : 0.7)),
  ];
}
