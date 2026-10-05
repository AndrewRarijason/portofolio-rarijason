import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { notFound } from "next/navigation";
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import MotionProvider from "@/components/ui/MotionProvider";
import DisableContextMenu from "@/components/ui/DisableContextMenu";
import { translations } from "@/dictionaries";
import { hasLocale, languageAlternates, locales, ogLocale, SITE_URL } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  // Utilisée seulement pour l'heure du footer : pas besoin de la précharger
  preload: false,
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const seo = translations[lang].seo;

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: seo.title, template: "%s · Andrew Rarijason" },
    description: seo.description,
    applicationName: "Andrew Rarijason Portfolio",
    authors: [{ name: "Aiky Andrew Rarijason", url: SITE_URL }],
    creator: "Aiky Andrew Rarijason",
    keywords: [
      "Andrew Rarijason",
      "Aiky Andrew Rarijason",
      lang === "fr" ? "développeur full stack" : "full stack developer",
      lang === "fr" ? "développeur Madagascar" : "developer Madagascar",
      "Antananarivo",
      "Java",
      "Spring Boot",
      "React",
      "Next.js",
      "Angular",
      "Node.js",
      "freelance",
    ],
    alternates: languageAlternates(lang, ""),
    openGraph: {
      type: "website",
      siteName: "Andrew Rarijason",
      title: seo.title,
      description: seo.description,
      url: `/${lang}`,
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
    robots: { index: true, follow: true },
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : undefined,
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const umamiId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL ?? "https://cloud.umami.is/script.js";

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <DisableContextMenu />
        <ThemeProvider>
          <LanguageProvider language={lang}>
            <MotionProvider>{children}</MotionProvider>
          </LanguageProvider>
        </ThemeProvider>
        {umamiId && <Script src={umamiSrc} data-website-id={umamiId} strategy="afterInteractive" />}
      </body>
    </html>
  );
}
