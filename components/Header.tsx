"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

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
      { threshold: 0.5 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const getTextColor = () => {
    switch (activeSection) {
      case "home":
        return "text-white";
      case "about":
        return "text-black";
      case "projects":
        return "text-white";
      case "skills":
        return "text-white";
      case "contact":
        return "text-black";
      default:
        return "text-black";
    }
  };

    // Couleur du burger selon la section active
  const getBurgerColor = () => {
    // blanc : hero (home), skills, projects (fonds sombres)
    if (activeSection === "skills" || activeSection === "projects") {
      return "bg-white";
    }
    // noir : about, contact, autres
    return "bg-black";
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Informer le reste de l'app quand le menu est ouvert/fermé
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent("menu-toggled", { detail: menuOpen }));
  }, [menuOpen]);

  // Bloquer le scroll de la page quand le menu mobile est ouvert
  useEffect(() => {
    if (typeof document === "undefined") return;

    const originalOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-open");
    } else {
      document.body.style.overflow = originalOverflow || "";
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.style.overflow = originalOverflow || "";
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);
  const linkBaseClasses = `transition text-[16px] px-6 py-3 ${getTextColor()} relative z-10 group-hover:text-white duration-200`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 w-full text-black px-4 sm:px-6 md:px-8 lg:px-14 py-4 lg:py-8 z-50 transition-shadow duration-300
        ${
          menuOpen
            ? "bg-[#394054] shadow-[0_0_32px_#00000080]"
            : scrolled
            ? "bg-transparent backdrop-blur-[8px] shadow-[0_0_32px_#00000040]"
            : ""
        }`}
    >
      {/* Barre principale */}
      <div className="flex items-center justify-between">
        <div className="flex-1" />

        {/* Menu desktop */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-4">
            <li>
              <button className="relative overflow-hidden group">
                <span
                  className="absolute inset-0 left-0 w-0 group-hover:w-full bg-[#5DA5B3] transition-all duration-300 z-0"
                  style={{
                    clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
                    transitionProperty: "width",
                  }}
                />
                <a href="#about" className={linkBaseClasses}>
                  About
                </a>
              </button>
            </li>
            <li>
              <button className="relative overflow-hidden group">
                <span
                  className="absolute inset-0 left-0 w-0 group-hover:w-full bg-[#5DA5B3] transition-all duration-300 z-0"
                  style={{
                    clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
                    transitionProperty: "width",
                  }}
                />
                <a href="#skills" className={linkBaseClasses}>
                  Skills
                </a>
              </button>
            </li>
            <li>
              <button className="relative overflow-hidden group">
                <span
                  className="absolute inset-0 left-0 w-0 group-hover:w-full bg-[#5DA5B3] transition-all duration-300 z-0"
                  style={{
                    clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
                    transitionProperty: "width",
                  }}
                />
                <a href="#projects" className={linkBaseClasses}>
                  Projects
                </a>
              </button>
            </li>
            <li>
              <div className="hover:scale-115 duration-300">
                <a
                  href="#contact"
                  className="relative overflow-hidden rounded-[48px] px-6 py-3 text-black transition text-[16px] group bg-white"
                >
                  <span
                    className="absolute inset-0 left-0 w-0 group-hover:w-full bg-[#5DA5B3] transition-all duration-300 z-0 rounded-[48px] pointer-events-none"
                    style={{ transitionProperty: "width" }}
                  />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Contact
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </nav>

        {/* Bouton burger mobile / tablette */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span
            className={`h-[2px] w-6 ${getBurgerColor()} transition-transform duration-200 ${
              menuOpen ? "translate-y-[6px] rotate-45" : "-translate-y-[5px]"
            }`}
          />
          <span
            className={`h-[2px] w-6 ${getBurgerColor()} transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[2px] w-6 ${getBurgerColor()} transition-transform duration-200 ${
              menuOpen ? "-translate-y-[6px] -rotate-45" : "translate-y-[5px]"
            }`}
          />
        </button>
      </div>

      {/* Menu mobile / tablette plein écran */}
      {menuOpen && (
        <nav className="lg:hidden fixed inset-0 bg-[#394054]/95 backdrop-blur-sm z-[9999]">
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center"
            onClick={closeMenu}
            aria-label="Close navigation"
          >
            <span className="relative block w-6 h-6">
              <span className="absolute inset-0 h-[2px] w-6 bg-white rotate-45 top-1/2 -translate-y-1/2" />
              <span className="absolute inset-0 h-[2px] w-6 bg-white -rotate-45 top-1/2 -translate-y-1/2" />
            </span>
          </button>

          <ul className="h-full w-full flex flex-col justify-center items-center space-y-10">
            <li>
              <button className="relative overflow-hidden group" onClick={closeMenu}>
                <span
                  className="absolute inset-0 left-0 w-0 group-hover:w-full bg-[#5DA5B3] transition-all duration-300 z-0"
                  style={{
                    clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
                    transitionProperty: "width",
                  }}
                />
                <a
                  href="#about"
                  className="transition text-[18px] px-6 py-3 text-white relative z-10 group-hover:text-white duration-200"
                >
                  About
                </a>
              </button>
            </li>
            <li>
              <button className="relative overflow-hidden group" onClick={closeMenu}>
                <span
                  className="absolute inset-0 left-0 w-0 group-hover:w-full bg-[#5DA5B3] transition-all duration-300 z-0"
                  style={{
                    clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
                    transitionProperty: "width",
                  }}
                />
                <a
                  href="#skills"
                  className="transition text-[18px] px-6 py-3 text-white relative z-10 group-hover:text-white duration-200"
                >
                  Skills
                </a>
              </button>
            </li>
            <li>
              <button className="relative overflow-hidden group" onClick={closeMenu}>
                <span
                  className="absolute inset-0 left-0 w-0 group-hover:w-full bg-[#5DA5B3] transition-all duration-300 z-0"
                  style={{
                    clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
                    transitionProperty: "width",
                  }}
                />
                <a
                  href="#projects"
                  className="transition text-[18px] px-6 py-3 text-white relative z-10 group-hover:text-white duration-200"
                >
                  Projects
                </a>
              </button>
            </li>
            <li>
              <div className="pt-6 md:pt-0 hover:scale-105 duration-300" onClick={closeMenu}>
                <a
                  href="#contact"
                  className="relative overflow-hidden rounded-[48px] px-6 py-3 text-black transition text-[18px] group bg-white"
                >
                  <span
                    className="absolute inset-0 left-0 w-0 group-hover:w-full bg-[#5DA5B3] transition-all duration-300 z-0 rounded-[48px] pointer-events-none"
                    style={{ transitionProperty: "width" }}
                  />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Contact
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}