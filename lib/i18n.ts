import type { Language } from "@/dictionaries";

export const locales = ["en", "fr"] as const satisfies readonly Language[];
export const defaultLocale: Language = "en";
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const hasLocale = (value: string): value is Language =>
  (locales as readonly string[]).includes(value);

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://andrew-rarijason.vercel.app").replace(/\/$/, "");

export const ogLocale: Record<Language, string> = { en: "en_US", fr: "fr_FR" };

export const cvPath: Record<Language, string> = {
  en: "/cv/Resume_AndrewRarijason.pdf",
  fr: "/cv/CV_AndrewRarijason.pdf",
};

// Remplace le préfixe de langue d'un chemin : /en/projects/crm -> /fr/projects/crm
export function switchLocalePath(pathname: string, target: Language) {
  const segments = pathname.split("/");
  if (hasLocale(segments[1] ?? "")) segments[1] = target;
  else segments.splice(1, 0, target);
  return segments.join("/") || `/${target}`;
}

// Liens hreflang pour un chemin sans préfixe de langue ("" pour l'accueil)
export function languageAlternates(lang: Language, path: string) {
  return {
    canonical: `/${lang}${path}`,
    languages: {
      en: `/en${path}`,
      fr: `/fr${path}`,
      "x-default": `/en${path}`,
    },
  };
}
