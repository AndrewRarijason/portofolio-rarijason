import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";
import ScrollProgress from "@/components/ui/ScrollProgress";
import JsonLd from "@/components/ui/JsonLd";
import { translations } from "@/dictionaries";
import { hasLocale, SITE_URL } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = translations[lang];

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aiky Andrew Rarijason",
    alternateName: "Andrew Rarijason",
    url: `${SITE_URL}/${lang}`,
    image: `${SITE_URL}/andrew.webp`,
    jobTitle: t.hero.role,
    description: t.seo.description,
    email: "mailto:rarijasonaiky@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Antananarivo", addressCountry: "MG" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "IT University Madagascar", url: "https://www.ituniversity-mg.com" },
    knowsLanguage: ["fr", "en", "mg"],
    knowsAbout: ["Java", "Spring Boot", "React", "Next.js", "Angular", "Node.js", "TypeScript", "PostgreSQL", "REST APIs"],
    sameAs: ["https://github.com/AndrewRarijason", "https://www.linkedin.com/in/andrew-rarijason"],
  };

  return (
    <>
      <JsonLd data={person} />
      <ScrollProgress />
      <Header />
      <main className="bg-[#E0E2E8]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
