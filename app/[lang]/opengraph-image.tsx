import { translations } from "@/dictionaries";
import { hasLocale, locales } from "@/lib/i18n";
import { ogSize, renderProfileOg } from "@/lib/og";

export const alt = "Aiky Andrew Rarijason — Full Stack Developer";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = translations[hasLocale(lang) ? lang : "en"];
  return renderProfileOg({ role: t.hero.role, availability: t.hero.availability });
}
