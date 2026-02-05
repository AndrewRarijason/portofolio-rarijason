import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#E0E2E8]">
        {/* Hero */}
        <Hero />
        <About />
        {/* Autres sections */}
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}