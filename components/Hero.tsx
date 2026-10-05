"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiArrowDownDoubleFill, RiArrowRightLine } from "react-icons/ri";
import { useLanguage } from "@/context/LanguageContext";
import { cvPath } from "@/lib/i18n";

// Rang dans la cascade d'entrée du Hero (voir .hero-in dans globals.css)
const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

const socialLinkClass =
  "p-3 bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 rounded-xl hover:border-cyan-500/50 hover:text-cyan-500 dark:hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-1 shadow-sm";

export default function Hero() {
  const { t, language } = useLanguage();
  const cvFile = cvPath[language];

  return (
    <section
      className="relative flex flex-col min-h-screen bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 overflow-hidden pt-20 transition-colors duration-300"
      id="home"
    >
      {/* Glow Orbs légers en arrière-plan */}
      <div className="absolute top-20 left-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] pointer-events-none z-0 bg-[radial-gradient(closest-side,rgb(6_182_212/0.13),transparent)]" />
      <div className="absolute top-1/2 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] pointer-events-none z-0 bg-[radial-gradient(closest-side,rgb(37_99_235/0.13),transparent)]" />

      {/* --- VECTEUR HERO (SVG) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 dark:opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          <path
            d="M -50 200 L 250 200 L 400 350 L 800 350 L 950 200 L 1400 200 L 1600 400"
            fill="none"
            stroke="url(#heroGrad)"
            strokeWidth="2.5"
            strokeDasharray="140 100"
            className="animate-vector-flow"
          />
          <path
            d="M 100 600 L 450 600 L 600 450 L 1100 450 L 1300 650"
            fill="none"
            stroke="url(#heroGrad)"
            strokeWidth="2"
            strokeDasharray="180 120"
            className="animate-vector-flow-reverse opacity-60"
          />

          <circle cx="250" cy="200" r="4" fill="#06b6d4" />
          <circle cx="400" cy="350" r="5" fill="#3b82f6" className="animate-ping origin-center text-cyan-400 opacity-75" />
          <circle cx="400" cy="350" r="4" fill="#06b6d4" />
          <circle cx="800" cy="350" r="4" fill="#3b82f6" />
          <circle cx="950" cy="200" r="5" fill="#06b6d4" className="animate-ping origin-center text-blue-500 opacity-75" />
        </svg>
      </div>

      <div className="flex flex-col lg:flex-row flex-1 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-14 items-center z-10">
        {/* Colonne gauche : Présentation */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center py-12">
          <div className="flex flex-col items-start space-y-5">
            {/* Badge de disponibilité */}
            <a
              href="#contact"
              style={stagger(0)}
              data-umami-event="hero-availability"
              className="hero-in group inline-flex items-center gap-2.5 pl-2.5 pr-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium backdrop-blur-md hover:border-emerald-500/60 transition-colors"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              {t.hero.availability}
              <RiArrowRightLine className="transition-transform group-hover:translate-x-0.5" />
            </a>

            <span
              style={stagger(1)}
              className="hero-in text-cyan-600 dark:text-cyan-400 font-semibold tracking-wide uppercase text-sm sm:text-base"
            >
              {t.hero.greeting}
            </span>

            <h1
              style={stagger(2)}
              className="hero-in text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight"
            >
              Aiky Andrew <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500 bg-[length:200%_auto] animate-gradient-x">
                RARIJASON
              </span>
            </h1>

            <p style={stagger(3)} className="hero-in text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-medium">
              {t.hero.role}
            </p>

            {/* Appels à l'action */}
            <div style={stagger(4)} className="hero-in pt-2 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                data-umami-event="hero-view-projects"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <span className="relative">{t.hero.viewProjects}</span>
                <RiArrowRightLine className="relative transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={cvFile}
                download={cvFile.split("/").pop()}
                data-umami-event="cv-download"
                data-umami-event-lang={language}
                data-umami-event-location="hero"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-cyan-500/50 dark:border-cyan-500/40 text-cyan-700 dark:text-cyan-300 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md hover:bg-cyan-500/10 hover:border-cyan-500 hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaDownload className="transition-transform group-hover:translate-y-0.5" />
                {t.hero.downloadCv}
              </a>
            </div>

            <div style={stagger(5)} className="hero-in pt-2 flex flex-row gap-3">
              <a href="https://github.com/AndrewRarijason" target="_blank" rel="noopener noreferrer" className={socialLinkClass} aria-label="GitHub" data-umami-event="social-github">
                <FaGithub className="text-lg" />
              </a>
              <a href="https://www.linkedin.com/in/andrew-rarijason" target="_blank" rel="noopener noreferrer" className={socialLinkClass} aria-label="LinkedIn" data-umami-event="social-linkedin">
                <FaLinkedinIn className="text-lg" />
              </a>
              <a href="mailto:rarijasonaiky@gmail.com" className={socialLinkClass} aria-label="Email" data-umami-event="social-email">
                <IoIosMail className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Colonne droite : Photo + Bulles animées */}
        <div className="w-full lg:w-[40%] flex items-center justify-center relative py-12">
          <div className="hero-pop relative z-10">
            {/* Anneau dégradé en rotation */}
            <div className="absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,#06b6d4,#3b82f6,#2dd4bf,transparent_70%,#06b6d4)] animate-spin-slow opacity-80" />
            <div className="relative p-2 rounded-full bg-slate-50 dark:bg-[#0F172A]">
              <div className="animate-float">
                <Image
                  src="/andrew.webp"
                  alt="Andrew Rarijason"
                  width={310}
                  height={310}
                  sizes="(min-width: 1024px) 310px, (min-width: 640px) 280px, 220px"
                  quality={90}
                  className="rounded-full object-cover w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[310px] lg:h-[310px]"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="absolute top-6 right-6 w-24 sm:w-32 h-24 sm:h-32 bg-cyan-500/20 rounded-full blur-sm animate-orbit1 pointer-events-none" />
          <div className="absolute bottom-10 left-4 w-20 sm:w-24 h-20 sm:h-24 bg-blue-500/20 rounded-full blur-sm animate-orbit2 pointer-events-none" />
          <div className="absolute top-1/3 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-teal-400/20 rounded-full blur-sm animate-orbit3 pointer-events-none" />
        </div>
      </div>

      {/* Footer Hero */}
      <footer
        style={stagger(5)}
        className="hero-in w-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 mt-auto z-10 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto py-8 px-6 sm:px-10 lg:px-14 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="w-full lg:w-[65%]">
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">{t.hero.footerDesc}</p>
          </div>

          <div className="w-full lg:w-[30%] flex flex-col items-center justify-center">
            <a
              href="#about"
              className="px-6 py-3 border border-cyan-500/50 dark:border-cyan-500/40 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 rounded-xl transition-all duration-300 font-semibold text-sm shadow-lg shadow-cyan-500/5"
            >
              {t.hero.knowMore}
            </a>

            <RiArrowDownDoubleFill className="text-2xl text-cyan-500 dark:text-cyan-400 animate-bounce-custom mt-3" />
          </div>
        </div>
      </footer>
    </section>
  );
}
