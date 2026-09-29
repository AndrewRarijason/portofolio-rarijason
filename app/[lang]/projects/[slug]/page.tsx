import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetails from "@/components/Project_details";
import JsonLd from "@/components/ui/JsonLd";
import { projectsData } from "@/data/projectsData";
import { translations } from "@/dictionaries";
import { hasLocale, languageAlternates, ogLocale, SITE_URL } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

function findProject(slug: string) {
  const index = projectsData.findIndex((p) => p.slug === slug);
  return index === -1 ? null : { project: projectsData[index], index };
}

export async function generateMetadata({ params }: PageProps<"/[lang]/projects/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const found = findProject(slug);
  if (!hasLocale(lang) || !found) return {};
  const { project } = found;

  const title = project.title[lang];
  const description = `${project.description?.[lang] ?? project.description_gm[lang]} Stack : ${project.stack.join(", ")}.`;

  return {
    title,
    description,
    keywords: [...project.stack, "Andrew Rarijason", "portfolio"],
    alternates: languageAlternates(lang, `/projects/${slug}`),
    openGraph: {
      type: "article",
      title: `${title} · Andrew Rarijason`,
      description,
      url: `/${lang}/projects/${slug}`,
      locale: ogLocale[lang],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ProjectDetailPage({ params }: PageProps<"/[lang]/projects/[slug]">) {
  const { lang, slug } = await params;
  const found = findProject(slug);
  if (!hasLocale(lang) || !found) notFound();
  const { project, index } = found;

  const total = projectsData.length;
  const prev = projectsData[(index - 1 + total) % total];
  const next = projectsData[(index + 1) % total];
  const t = translations[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: project.title[lang],
        description: project.description_gm[lang],
        url: `${SITE_URL}/${lang}/projects/${slug}`,
        image: project.imagebg ? `${SITE_URL}${project.imagebg.src}` : undefined,
        inLanguage: lang,
        keywords: project.stack.join(", "),
        author: { "@type": "Person", name: "Aiky Andrew Rarijason", url: `${SITE_URL}/${lang}` },
        ...(project.github ? { codeRepository: project.github } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Andrew Rarijason", item: `${SITE_URL}/${lang}` },
          { "@type": "ListItem", position: 2, name: t.nav.projects, item: `${SITE_URL}/${lang}#projects` },
          { "@type": "ListItem", position: 3, name: project.title[lang] },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ProjectDetails project={project} prev={prev} next={next} />
    </>
  );
}
