"use client";

import { MdFullscreen } from "react-icons/md";
import Image from "next/image";
import { FaGithub, FaTimes, FaLock } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";
import Reveal from "@/components/ui/Reveal";
import type { ProjectData } from "../data/projectsData";

interface ProjectDetailProps {
  project: ProjectData;
  prev: ProjectData;
  next: ProjectData;
}

function NeighbourLink({ project, direction }: { project: ProjectData; direction: "prev" | "next" }) {
  const { language, t } = useLanguage();
  const cover = project.imagebg ?? project.images[0];
  const isNext = direction === "next";

  return (
    <Link
      href={`/${language}/projects/${project.slug}`}
      data-umami-event="project-nav"
      data-umami-event-direction={direction}
      className={`group relative flex items-center gap-4 p-4 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 ${
        isNext ? "flex-row-reverse text-right" : ""
      }`}
    >
      <div className="relative w-20 h-16 sm:w-28 sm:h-20 shrink-0 rounded-xl overflow-hidden">
        <Image src={cover.src} alt="" fill sizes="112px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="min-w-0 flex-1">
        <span className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 ${isNext ? "justify-end" : ""}`}>
          {!isNext && <IoIosArrowBack className="transition-transform group-hover:-translate-x-1" />}
          {isNext ? t.projectDetails.next : t.projectDetails.previous}
          {isNext && <IoIosArrowForward className="transition-transform group-hover:translate-x-1" />}
        </span>
        <span className="mt-1 block text-sm sm:text-base font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {project.title[language]}
        </span>
      </div>
    </Link>
  );
}

export default function ProjectDetails({ project, prev, next }: ProjectDetailProps) {
  const { title, description_gm, stack, images, github } = project;
  const { language, t } = useLanguage();
  const dict = t.projectDetails;
  const backUrl = `/${language}#projects`;

  const [zoomedImg, setZoomedImg] = useState<null | { src: string; alt: string }>(null);

  useEffect(() => {
    if (!zoomedImg) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoomedImg(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomedImg]);

  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 md:px-12 text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-[#0F172A] min-h-screen transition-colors duration-300">

      {/* Glow Orbs */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none z-0 bg-[radial-gradient(closest-side,rgb(6_182_212/0.13),transparent)]" />
      <div className="absolute top-[800px] right-10 w-[500px] h-[500px] pointer-events-none z-0 bg-[radial-gradient(closest-side,rgb(37_99_235/0.13),transparent)]" />
      <div className="absolute top-[1600px] left-10 w-[600px] h-[600px] pointer-events-none z-0 bg-[radial-gradient(closest-side,rgb(6_182_212/0.13),transparent)]" />

      {/* --- ENSEMBLE DE VECTEURS ANIMÉS ---
          Masqué sur mobile : ce SVG fait toute la hauteur de la page (~9 000 px) */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none opacity-30 dark:opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="projectGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="projectGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* GROUPE 1 */}
          <g>
            <path
              d="M -50 800 L 400 500 L 500 200 L 900 150 L 1400 400 L 1600 100"
              fill="none"
              stroke="url(#projectGrad1)"
              strokeWidth="2.5"
              strokeDasharray="150 100"
              className="animate-vector-flow"
            />
            <path
              d="M 100 100 L 350 350 L 700 350 L 1200 650 L 1500 700"
              fill="none"
              stroke="url(#projectGrad1)"
              strokeWidth="2"
              strokeDasharray="120 120"
              className="animate-vector-flow-reverse opacity-60"
            />
            <circle cx="400" cy="500" r="5" fill="#06b6d4" />
            <circle cx="700" cy="350" r="6" fill="#3b82f6" className="animate-ping origin-center text-cyan-400 opacity-75" />
            <circle cx="1200" cy="650" r="5" fill="#3b82f6" />
          </g>

          {/* GROUPE 2 */}
          <g className="translate-y-[600px]">
            <path
              d="M -100 200 L 300 50 L 600 450 L 1000 200 L 1300 0 L 1500 300 L 1800 150"
              fill="none"
              stroke="url(#projectGrad2)"
              strokeWidth="2"
              strokeDasharray="200 100"
              className="animate-vector-fast"
            />
            <path
              d="M -50 400 L 400 600 L 800 100 L 1300 500 L 1700 300"
              fill="none"
              stroke="url(#projectGrad1)"
              strokeWidth="1.5"
              strokeDasharray="80 140"
              className="animate-vector-slow opacity-70"
            />
            <circle cx="600" cy="450" r="4" fill="#38bdf8" className="animate-ping origin-center" />
            <circle cx="1300" cy="500" r="5" fill="#06b6d4" />
          </g>

          {/* GROUPE 3 */}
          <g className="translate-y-[1300px]">
            <path
              d="M 1700 700 L 1200 400 L 900 600 L 400 250 L -100 500"
              fill="none"
              stroke="url(#projectGrad1)"
              strokeWidth="2.5"
              strokeDasharray="180 120"
              className="animate-vector-flow-reverse"
            />
            <path
              d="M 1500 150 L 1000 200 L 600 50 L 200 300"
              fill="none"
              stroke="url(#projectGrad2)"
              strokeWidth="1.8"
              strokeDasharray="100 100"
              className="animate-vector-fast opacity-50"
            />
            <circle cx="900" cy="600" r="6" fill="#818cf8" className="animate-ping origin-center opacity-75" />
            <circle cx="400" cy="250" r="4" fill="#06b6d4" />
          </g>

          {/* GROUPE 4 */}
          <g className="translate-y-[2000px]">
            <path
              d="M -50 300 L 500 100 L 900 500 L 1700 200"
              fill="none"
              stroke="url(#projectGrad1)"
              strokeWidth="2"
              strokeDasharray="140 100"
              className="animate-vector-slow"
            />
            <circle cx="900" cy="500" r="5" fill="#38bdf8" />
          </g>
        </svg>
      </div>

      {/* Barre supérieure : retour + langue + thème */}
      <div className="fixed top-0 inset-x-0 z-50 px-4 sm:px-8 py-4 flex items-center justify-between pointer-events-none">
        <Link
          href={backUrl}
          className="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-300 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 shadow-xl transition-all duration-300 group"
        >
          <IoIosArrowBack className="transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium">{dict.back}</span>
        </Link>
        <div className="pointer-events-auto flex items-center gap-2 p-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-300 dark:border-slate-700/60 shadow-xl">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>

      {/* Lightbox / Modal Zoom */}
      <AnimatePresence>
        {zoomedImg && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 dark:bg-slate-950/90 backdrop-blur-md p-4"
            onClick={() => setZoomedImg(null)}
            role="dialog"
            aria-modal="true"
            aria-label={zoomedImg.alt}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-slate-300 hover:text-white text-2xl transition-colors cursor-pointer"
                onClick={() => setZoomedImg(null)}
                aria-label={dict.closeLabel}
                autoFocus
              >
                <FaTimes />
              </button>
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 dark:border-slate-800 shadow-2xl">
                <Image
                  src={zoomedImg.src}
                  alt={zoomedImg.alt}
                  width={1600}
                  height={1000}
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="w-full h-auto max-h-[85vh] object-contain bg-slate-900"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Conteneur principal : très haut, donc ni flou d'arrière-plan ni transformation animée (trop coûteux sur mobile) */}
      <div className="fade-in relative z-10 max-w-5xl mx-auto mt-12 bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-12 shadow-xl transition-colors duration-300">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white text-center tracking-tight mb-8">
          {title[language]}
        </h1>

        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed text-justify mb-8">
          <p>{description_gm[language]}</p>
        </div>

        {/* Tag Stack Technique */}
        <div className="flex flex-wrap items-center gap-2 mb-12 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
          <span className="text-xs uppercase font-bold tracking-wider text-cyan-600 dark:text-cyan-400 mr-2">
            {dict.stackLabel}
          </span>
          {stack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="px-3 py-1 rounded-md text-xs font-medium bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Grille de captures d'écran */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {images.map((img, idx) => (
            <Reveal
              key={img.src}
              delay={(idx % 2) * 0.1}
              className="flex flex-col bg-slate-50 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden group hover:border-cyan-500/40 transition-[border-color,box-shadow,translate] duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <button
                type="button"
                className="relative h-60 w-full overflow-hidden cursor-zoom-in bg-slate-200 dark:bg-slate-950"
                onClick={() => setZoomedImg({ src: img.src, alt: img.alt[language] })}
                aria-label={img.alt[language]}
              >
                <Image
                  src={img.src}
                  alt={img.alt[language]}
                  fill
                  sizes="(min-width: 768px) 460px, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors shadow">
                  <MdFullscreen size={20} />
                </span>
              </button>

              <div className="p-5 flex flex-col justify-between flex-grow">
                {img.caption && (
                  <h2 className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-1">{img.caption[language]}</h2>
                )}
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">{img.explanation?.[language]}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bouton GitHub principal */}
        <div className="mt-14 flex justify-center">
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="project-github"
              data-umami-event-project={project.slug}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white dark:text-slate-950 font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaGithub size={20} /> {dict.viewGithub}
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <FaLock size={12} /> {t.projects.privateProjectLabel}
            </span>
          )}
        </div>
      </div>

      {/* Navigation projet précédent / suivant */}
      <nav aria-label={dict.allProjects} className="relative z-10 max-w-5xl mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Reveal>
            <NeighbourLink project={prev} direction="prev" />
          </Reveal>
          <Reveal delay={0.08}>
            <NeighbourLink project={next} direction="next" />
          </Reveal>
        </div>
        <div className="mt-6 text-center">
          <Link
            href={backUrl}
            className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            {dict.allProjects}
          </Link>
        </div>
      </nav>
    </section>
  );
}
