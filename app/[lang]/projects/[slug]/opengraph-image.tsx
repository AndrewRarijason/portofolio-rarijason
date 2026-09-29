import { projectsData } from "@/data/projectsData";
import { translations } from "@/dictionaries";
import { hasLocale } from "@/lib/i18n";
import { ogSize, renderProjectOg } from "@/lib/og";

export const alt = "Project by Andrew Rarijason";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const locale = hasLocale(lang) ? lang : "en";
  const project = projectsData.find((p) => p.slug === slug) ?? projectsData[0];

  return renderProjectOg({
    slug: project.slug,
    title: project.title[locale],
    stack: project.stack,
    label: translations[locale].seo.projectSuffix,
  });
}
