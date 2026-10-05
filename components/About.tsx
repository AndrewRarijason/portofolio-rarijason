"use client";

import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { MdAddToHomeScreen } from "react-icons/md";
import { RiStackLine } from "react-icons/ri";
import { useEffect, useState, useRef } from "react";
import Typewriter from "./Typewriter";
import { GrCertificate } from "react-icons/gr";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  const { t } = useLanguage();
  const [showFormations, setShowFormations] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isDesktop = window.innerWidth >= 768;

    if (!isDesktop) {
      setShowFormations(true);
      setShowServices(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setShowFormations(true);
          setTimeout(() => setShowServices(true), 300);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="relative overflow-hidden py-28 px-4 sm:px-6 md:px-12 bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 min-h-screen flex flex-col justify-center transition-colors duration-300" ref={sectionRef}>
      
      {/* Background Continuous Orbs */}
      <div className="absolute top-12 left-10 w-72 sm:w-96 h-72 sm:h-96 animate-orbit1 pointer-events-none z-0 bg-[radial-gradient(closest-side,rgb(6_182_212/0.195),transparent)]" />
      <div className="absolute bottom-12 right-10 w-80 sm:w-[450px] h-80 sm:h-[450px] animate-orbit2 pointer-events-none z-0 bg-[radial-gradient(closest-side,rgb(37_99_235/0.195),transparent)]" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 animate-orbit3 pointer-events-none z-0 bg-[radial-gradient(closest-side,rgb(45_212_191/0.13),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-20 w-full">
        {/* Header */}
        <Reveal blur className="text-center">
          <span className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2 block">
            {t.about.subtitle}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.about.titleAbout}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
              {t.about.titleMe}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </Reveal>

        {/* SECTION 1: FORMATIONS */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <FaGraduationCap size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">{t.about.formations.title}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl transition-all duration-500 hover:border-cyan-500/30 ${showFormations ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {t.about.formations.degree}
                </h4>
                <a href="https://www.ituniversity-mg.com" target="_blank" rel="noopener noreferrer" className="self-start">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors">
                    IT University, MG
                  </span>
                </a>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed min-h-[3rem]">
                <Typewriter key={t.about.formations.degreeDesc} text={t.about.formations.degreeDesc} start={showFormations} speed={8} />
              </p>
            </div>

            <div className={`p-6 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl transition-all duration-500 hover:border-cyan-500/30 ${showFormations ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="mb-4">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{t.about.formations.aiMastering}</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed min-h-[3rem]">
                <Typewriter key={t.about.formations.aiDesc} text={t.about.formations.aiDesc} start={showFormations} speed={8} />
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: CERTIFICATIONS */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <GrCertificate size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">{t.about.certifications.title}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl transition-all duration-500 hover:border-blue-500/30 ${showFormations ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">DELF B2</h4>
                <a href="https://www.afantananarivo.mg/" target="_blank" rel="noopener noreferrer" className="self-start">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30 hover:bg-blue-500/20 transition-colors">
                    Alliance Française, MG
                  </span>
                </a>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed min-h-[3rem]">
                <Typewriter key={t.about.certifications.delfDesc} text={t.about.certifications.delfDesc} start={showFormations} speed={8} />
              </p>
            </div>

            <div className={`p-6 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl transition-all duration-500 hover:border-blue-500/30 ${showFormations ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="mb-4">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">English C2</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed min-h-[3rem]">
                <Typewriter key={t.about.certifications.englishC2Desc} text={t.about.certifications.englishC2Desc} start={showFormations} speed={8} />
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: AREA SPECIALITY */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <RiStackLine size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">{t.about.speciality.title}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`relative p-6 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:border-cyan-500/30 ${showServices ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <FaLaptopCode className="absolute -right-4 -bottom-4 text-9xl text-slate-200 dark:text-cyan-500/5 pointer-events-none" />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{t.about.speciality.backendTitle}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed min-h-[4rem] relative z-10">
                <Typewriter key={t.about.speciality.backendDesc} text={t.about.speciality.backendDesc} start={showServices} speed={8} />
              </p>
            </div>

            <div className={`relative p-6 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:border-cyan-500/30 ${showServices ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <MdAddToHomeScreen className="absolute -right-4 -bottom-4 text-9xl text-slate-200 dark:text-cyan-500/5 pointer-events-none" />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{t.about.speciality.frontendTitle}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed min-h-[4rem] relative z-10">
                <Typewriter key={t.about.speciality.frontendDesc} text={t.about.speciality.frontendDesc} start={showServices} speed={8} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}