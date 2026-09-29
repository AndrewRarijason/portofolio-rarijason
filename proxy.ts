import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, LOCALE_COOKIE, locales } from "@/lib/i18n";

function getLocale(request: NextRequest) {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (saved && hasLocale(saved)) return saved;

  // Accept-Language: "fr-FR,fr;q=0.9,en;q=0.8" -> langues triées par préférence
  const preferred = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q)
    .find(({ lang }) => hasLocale(lang));

  return preferred && hasLocale(preferred.lang) ? preferred.lang : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasPrefix = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasPrefix) return;

  // "/" et les anciennes URL (/projects/crm) sont redirigées vers la version localisée
  request.nextUrl.pathname = `/${getLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Ignore les fichiers internes, l'API, les fichiers statiques (avec extension) et les fichiers SEO
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
