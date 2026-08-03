"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle"; // <--- Import
import { useLanguage } from "@/context/LanguageContext"; // <--- Import

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage(); // <--- Hook de traduction

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (menuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // Labels dynamiques selon la langue
  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-8 lg:px-16 ${
        scrolled
          ? "bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-3"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-xl font-extrabold tracking-wider text-slate-900 dark:text-white group">
          ANDREW<span className="text-cyan-500 dark:text-cyan-400 group-hover:animate-pulse"> RARIJASON</span>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-5 py-2 text-sm font-medium transition-colors duration-200 group ${
                  isActive ? "text-cyan-600 dark:text-cyan-400" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className={`absolute inset-0 bg-cyan-500/10 rounded-lg transition-all duration-300 ${
                    isActive ? "scale-100 opacity-100" : "scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                  }`}
                />
              </a>
            );
          })}

          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 transition-all duration-300"
          >
            {t.nav.contact}
          </a>

          <div className="ml-3 flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>

        {/* Actions Mobile */}
        <div
          className={`lg:hidden flex items-center transition-all duration-300 z-[10000] relative ${
            menuOpen ? "gap-3 pr-2" : "gap-2 pr-0"
          }`}
        >
          <LanguageToggle />
          <ThemeToggle />
          <button
            className="flex flex-col justify-center items-center w-10 h-10 text-slate-900 dark:text-white focus:outline-none p-1"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span
              className={`h-[2px] w-6 bg-cyan-500 dark:bg-cyan-400 transition-all duration-300 rounded-full ${
                menuOpen ? "translate-y-[2px] rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-cyan-500 dark:bg-cyan-400 transition-all duration-300 rounded-full ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-cyan-500 dark:bg-cyan-400 transition-all duration-300 rounded-full ${
                menuOpen ? "-translate-y-[2px] -rotate-45" : "translate-y-[5px]"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menu Mobile Fullscreen */}
      {menuOpen && (
        <nav className="lg:hidden fixed inset-0 h-dvh w-screen bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-xl z-[9999] flex flex-col justify-center items-center">
          <ul className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className="text-2xl font-bold text-slate-800 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contact"
                onClick={closeMenu}
                className="px-8 py-3 text-lg font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/20"
              >
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}