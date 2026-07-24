"use client";

import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { MdAddToHomeScreen } from "react-icons/md";
import { RiStackLine } from "react-icons/ri";
import { useEffect, useState, useRef } from "react";
import Typewriter from "./Typewriter";
import { GrCertificate } from "react-icons/gr";

export default function About() {
  const [showFormations, setShowFormations] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // md = 768px en Tailwind
    const isDesktop = window.innerWidth >= 768;

    // Sur mobile / tablette (<= md) : pas d’animation, tout visible directement
    if (!isDesktop) {
      setTimeout(() => {
        setShowFormations(true);
        setShowServices(true);
      }, 0);
      return;
    }

    // Sur écrans >= md : garder l’animation avec IntersectionObserver
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setShowFormations(false);
          setShowServices(false);
          return;
        }
        const viewportHeight = window.innerHeight;
        const sectionRect = entry.target.getBoundingClientRect();
        const fromTop = sectionRect.top;
        const fromBottom = viewportHeight - sectionRect.bottom;

        if (fromTop > fromBottom) {
          setShowFormations(true);
          setTimeout(() => setShowServices(true), 700);
        } else {
          setShowServices(true);
          setTimeout(() => setShowFormations(true), 700);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="pt-20 px-6 bg-[#E0E2E8] pb-20" ref={sectionRef}>
      <div className="w-[90%] mx-auto">
        {/* Titre de la section */}
        <div className="text-center mb-12 pt-10 pb-4">
          <h2>
            <span
              className={`
                border-4 text-[24px] px-14 py-4 font-bold text-gray-800 mb-4 inline-block
                transition-all duration-700
                ${showFormations || showServices ? "opacity-100 scale-100" : "opacity-0 scale-75"}
              `}
            >
              ABOUT ME
            </span>
          </h2>
        </div>

        {/* Contenu */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-26">
          {/* FORMATIONS */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6 relative">
              <div className="p-3">
                <FaGraduationCap className="text-[48px] text-[#394054] absolute left-2 bottom-0 opacity-14" />
              </div>
              <h3 className="text-[20px] font-bold text-gray-800">FORMATIONS</h3>
            </div>

            {/* Formations */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Formation 1 */}
              <div
                className={`
                  flex-1 p-6 shadow-lg hover:shadow-2xl duration-300
                  transition-all
                  ${showFormations ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                `}
              >
                <div className="flex flex-col items-start gap-1 md:gap-0 md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-lg lg:text-xl font-semibold text-gray-800">
                    Bachelor degree with honors in Information Technology
                  </h4>
                  <button className="transition-transform duration-200 hover:-translate-y-1">
                    <a href="https://www.ituniversity-mg.com">
                      <span className="border-1 text-[#508E9A] text-sm font-medium px-3 py-1 rounded-xl truncate">
                        IT University, Madagascar
                      </span>
                    </a>
                  </button>
                </div>
                <p className="text-gray-600 min-h-[3.5rem]">
                  <Typewriter
                    text="Formation in web and design, databases and networks, with a specialization in development."
                    start={showFormations}
                    speed={8}
                  />
                </p>
              </div>

              {/* Formation 2 */}
              <div
                className={`
                  flex-1 p-6 shadow-lg hover:shadow-2xl duration-300
                  transition-all
                  ${showFormations ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                `}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg lg:text-xl font-semibold text-gray-800">
                    AI mastering
                  </h4>
                </div>
                <p className="text-gray-600 min-h-[3.5rem]">
                  <Typewriter
                    text="By International Organisation of Employers and supported by Microsoft."
                    start={showFormations}
                    speed={8}
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6 relative">
              <div className="p-3">
                <GrCertificate className="text-[48px] text-[#394054] absolute left-2 bottom-0 opacity-14" />
              </div>
              <h3 className="text-[20px] font-bold text-gray-800">Certifications</h3>
            </div>

            {/* Certifications */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Certification 1 */}
              <div
                className={`
                  flex-1 p-6 shadow-lg hover:shadow-2xl duration-300
                  transition-all
                  ${showFormations ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                `}
              >
                <div className="flex flex-col items-start gap-1 md:gap-0 md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-lg lg:text-xl font-semibold text-gray-800">
                    DELF B2
                  </h4>
                  <button className="transition-transform duration-200 hover:-translate-y-1">
                    <a href="https://www.afantananarivo.mg/">
                      <span className="border-1 text-[#508E9A] text-sm font-medium px-3 py-1 rounded-xl truncate">
                        Alliance Française, Madagascar
                      </span>
                    </a>
                  </button>
                </div>
                <p className="text-gray-600 min-h-[3.5rem]">
                  <Typewriter
                    text="Diplôme d'études en langue française (DELF) B2 level , awarded by the French Ministry of Education."
                    start={showFormations}
                    speed={8}
                  />
                </p>
              </div>

              {/* Certification 2 */}
              <div
                className={`
                  flex-1 p-6 shadow-lg hover:shadow-2xl duration-300
                  transition-all
                  ${showFormations ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                `}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg lg:text-xl font-semibold text-gray-800">
                    English C2
                  </h4>
                </div>
                <p className="text-gray-600 min-h-[3.5rem]">
                  <Typewriter
                    text="English C2 level certification, awarded by ITTI School of English, New York."
                    start={showFormations}
                    speed={8}
                  />
                </p>
              </div>
            </div>
          </div>

          {/* AREA SPECIALITY */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6 relative">
              <div className="p-3">
                <RiStackLine className="text-[48px] text-[#394054] absolute left-2 bottom-0 opacity-14" />
              </div>
              <h3 className="text-[20px] font-bold text-gray-800">AREA SPECIALITY</h3>
            </div>

            {/* Services : colonne en ≤ sm, ligne au-delà */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Service 1 */}
              <div
                className={`
                  flex-1 p-6 shadow-lg hover:shadow-2xl duration-300 relative
                  transition-all
                  ${showServices ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                `}
              >
                <div className="flex items-start gap-4 relative">
                  <div className="flex-1">
                    <h4 className="text-lg lg:text-xl font-bold text-gray-800 mb-3">
                      Back-End Architecture & APIs
                    </h4>
                    <p className="text-gray-700 mb-4 min-h-[3.5rem]">
                      <Typewriter
                        text="I design and develop robust server architectures, relational databases, secure REST APIs, and GraphQL services. I also specialize in modeling and optimizing application architectures."
                        start={showServices}
                        speed={8}
                      />
                    </p>
                  </div>
                  <div
                    className="
                      absolute
                      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      md:top-12 md:left-60 md:-translate-x-0 md:-translate-y-0
                    "
                  >
                    <FaLaptopCode className="text-[100px] text-gray-800 opacity-10" />
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div
                className={`
                  flex-1 p-6 shadow-lg hover:shadow-2xl duration-300 relative
                  transition-all
                  ${showServices ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                `}
              >
                <div className="flex items-start gap-4 relative">
                  <div className="flex-1">
                    <h4 className="text-lg lg:text-xl font-bold text-gray-800 mb-3">
                      Mobile & Front-End Interfaces
                    </h4>
                    <p className="text-gray-700 mb-4 min-h-[3.5rem]">
                      <Typewriter
                        text="I can create reactive User Interfaces, modern web applications, and cross-platform mobile solutions. Focus on the User Experience, performance, and accessibility across all devices."
                        start={showServices}
                        speed={8}
                      />
                    </p>
                  </div>
                  <div
                    className="
                      absolute
                      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      md:top-12 md:left-60 md:-translate-x-0 md:-translate-y-0
                    "
                  >
                    <MdAddToHomeScreen className="text-[100px] text-gray-800 opacity-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}