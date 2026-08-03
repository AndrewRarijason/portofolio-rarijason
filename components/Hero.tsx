"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const [showHello, setShowHello] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    setShowHello(true);
    const t1 = setTimeout(() => setShowName(true), 150);
    const t2 = setTimeout(() => setShowBottom(true), 350);
    const t3 = setTimeout(() => setShowFooter(true), 500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section
      className="relative flex flex-col min-h-screen bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 overflow-hidden pt-20 transition-colors duration-300"
      id="home"
    >
      {/* Glow Orbs légers en arrière-plan */}
      <div className="absolute top-20 left-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none z-0" />

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
          <circle
            cx="400"
            cy="350"
            r="5"
            fill="#3b82f6"
            className="animate-ping origin-center text-cyan-400 opacity-75"
          />
          <circle cx="400" cy="350" r="4" fill="#06b6d4" />
          <circle cx="800" cy="350" r="4" fill="#3b82f6" />
          <circle
            cx="950"
            cy="200"
            r="5"
            fill="#06b6d4"
            className="animate-ping origin-center text-blue-500 opacity-75"
          />
        </svg>
      </div>

      <div className="flex flex-col lg:flex-row flex-1 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-14 items-center z-10">
        {/* Colonne gauche : Présentation */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center py-12">
          <div className="flex flex-col items-start space-y-4">
            <span
              className={`text-cyan-600 dark:text-cyan-400 font-semibold tracking-wide uppercase text-sm sm:text-base transition-all duration-500 ${
                showHello ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
              }`}
            >
              {t.hero.greeting}
            </span>

            <h1
              className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white transition-all duration-500 leading-tight ${
                showName ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
            >
              Aiky Andrew <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
                RARIJASON
              </span>
            </h1>

            <p
              className={`text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-medium transition-all duration-500 ${
                showBottom ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {t.hero.role}
            </p>

            <div
              className={`pt-4 flex flex-row gap-4 transition-all duration-500 ${
                showBottom ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href="https://github.com/AndrewRarijason"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 rounded-xl hover:border-cyan-500/50 hover:text-cyan-500 dark:hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-1 shadow-sm"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/andrew-rarijason"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 rounded-xl hover:border-cyan-500/50 hover:text-cyan-500 dark:hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-1 shadow-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a
                href="mailto:rarijasonaiky@gmail.com"
                className="p-3.5 bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 rounded-xl hover:border-cyan-500/50 hover:text-cyan-500 dark:hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-1 shadow-sm"
                aria-label="Email"
              >
                <IoIosMail className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Colonne droite : Photo + Bulles animées */}
        <div className="w-full lg:w-[40%] flex items-center justify-center relative py-12">
          <div className="relative z-10 p-2 rounded-full bg-gradient-to-b from-cyan-500/20 to-blue-500/10 dark:from-cyan-500/30 dark:to-blue-500/10 backdrop-blur-md border border-cyan-500/30 dark:border-cyan-500/20 shadow-xl shadow-cyan-500/10">
            <Image
              src="/andrew.png"
              alt="Andrew Rarijason"
              width={310}
              height={310}
              className="rounded-full object-cover w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[310px] lg:h-[310px]"
              priority
            />
          </div>

          <div className="absolute top-6 right-6 w-24 sm:w-32 h-24 sm:h-32 bg-cyan-500/20 rounded-full blur-sm animate-orbit1 pointer-events-none" />
          <div className="absolute bottom-10 left-4 w-20 sm:w-24 h-20 sm:h-24 bg-blue-500/20 rounded-full blur-sm animate-orbit2 pointer-events-none" />
          <div className="absolute top-1/3 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-teal-400/20 rounded-full blur-sm animate-orbit3 pointer-events-none" />
        </div>
      </div>

      {/* Footer Hero */}
      <footer className="w-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 mt-auto z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto py-8 px-6 sm:px-10 lg:px-14 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="w-full lg:w-[65%]">
            <p
              className={`text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed transition-all duration-500 ${
                showFooter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {t.hero.footerDesc}
            </p>
          </div>

          <div className="w-full lg:w-[30%] flex flex-col items-center justify-center">
            <a
              href="#about"
              className={`transition-all duration-500 ${
                showFooter ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
              }`}
            >
              <button className="px-6 py-3 border border-cyan-500/50 dark:border-cyan-500/40 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 rounded-xl transition-all duration-300 font-semibold text-sm cursor-pointer shadow-lg shadow-cyan-500/5">
                {t.hero.knowMore}
              </button>
            </a>

            <RiArrowDownDoubleFill className="text-2xl text-cyan-500 dark:text-cyan-400 animate-bounce-custom mt-3" />
          </div>
        </div>
      </footer>
    </section>
  );
}