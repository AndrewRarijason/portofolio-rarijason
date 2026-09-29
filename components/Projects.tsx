"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCheckCircle, FaLock } from "react-icons/fa";
import { RiArrowRightLine } from "react-icons/ri";
import { projectsData, type ProjectCategory, type ProjectData } from "../data/projectsData";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/ui/Reveal";

type Filter = "all" | ProjectCategory;
const FILTERS: Filter[] = ["all", "web", "mobile", "backend"];
const MAX_BADGES = 4;

// Met à jour la position du halo lumineux qui suit la souris sur une carte
function trackPointer(e: React.PointerEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

function StackBadges({ stack, max = MAX_BADGES }: { stack: string[]; max?: number }) {
  const visible = stack.slice(0, max);
  const hidden = stack.length - visible.length;
  return (
    <ul className="flex flex-wrap gap-1.5">
      {visible.map((tech) => (
        <li
          key={tech}
          className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20"
        >
          {tech}
        </li>
      ))}
      {hidden > 0 && (
        <li
          title={stack.slice(max).join(", ")}
          className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300/60 dark:border-slate-700"
        >
          +{hidden}
        </li>
      )}
    </ul>
  );
}

function FeaturedProject({ project }: { project: ProjectData }) {
  const { language, t } = useLanguage();
  const dict = t.projects;
  const cover = project.imagebg ?? project.images[0];
  const preview = project.images[0];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={trackPointer}
      className="group relative mb-10 grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-cyan-500/30 bg-white/85 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/10"
    >
      {/* Halo qui suit la souris */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_circle_at_var(--x)_var(--y),rgba(6,182,212,0.12),transparent_40%)]" />

      {/* Visuel : couverture + capture flottante */}
      <div className="relative min-h-[260px] sm:min-h-[340px] overflow-hidden">
        <Image
          src={cover.src}
          alt={cover.alt[language]}
          fill
          sizes="(min-width: 1024px) 640px, 100vw"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-slate-950/30 to-transparent" />

        <div className="absolute left-5 right-5 sm:left-10 sm:right-10 bottom-6 sm:bottom-8 rounded-xl overflow-hidden border border-white/20 shadow-2xl shadow-black/40 bg-slate-900 transition-transform duration-700 ease-out [transform:perspective(1200px)_rotateX(6deg)_rotateY(-8deg)] group-hover:[transform:perspective(1200px)_rotateX(0deg)_rotateY(0deg)_translateY(-6px)]">
          <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-800/90">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="relative aspect-[16/8.5]">
            <Image src={preview.src} alt={preview.alt[language]} fill sizes="(min-width: 1024px) 560px, 90vw" className="object-cover object-top" />
          </div>
        </div>

        <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-300 to-amber-400 shadow-lg shadow-amber-500/30">
          <FaStar size={11} /> {dict.featured}
        </span>
      </div>

      {/* Contenu */}
      <div className="relative z-10 p-6 sm:p-10 flex flex-col justify-center gap-5">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
          {project.title[language]}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          {project.description?.[language]}
        </p>

        {project.highlights && (
          <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5">
            {project.highlights.map((h, i) => (
              <motion.li
                key={h.en}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
              >
                <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-500" />
                {h[language]}
              </motion.li>
            ))}
          </ul>
        )}

        <StackBadges stack={project.stack} max={7} />

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href={`/${language}/projects/${project.slug}`}
            data-umami-event="project-open"
            data-umami-event-project={project.slug}
            className="group/cta inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            {dict.viewCaseStudy}
            <RiArrowRightLine className="transition-transform group-hover/cta:translate-x-1" />
          </Link>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <FaGithub size={16} /> {dict.codeLabel}
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
              <FaLock size={11} /> {dict.privateProjectLabel}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  const { language, t } = useLanguage();
  const dict = t.projects;
  const title = project.title[language];
  const bgImage = project.imagebg || project.images[0];
  const href = `/${language}/projects/${project.slug}`;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={trackPointer}
      className="group relative bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 rounded-2xl overflow-hidden shadow-xl flex flex-col transition-[border-color,box-shadow,translate] duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      <div className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(350px_circle_at_var(--x)_var(--y),rgba(6,182,212,0.12),transparent_45%)]" />

      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={bgImage.src}
          alt={bgImage.alt[language]}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 dark:from-slate-900 dark:via-slate-900/30 to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-grow gap-3 relative z-10 -mt-8">
        <h3
          className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2 leading-snug"
          title={title}
        >
          {/* Le lien couvre toute la carte */}
          <Link
            href={href}
            data-umami-event="project-open"
            data-umami-event-project={project.slug}
            className="after:absolute after:inset-0 after:z-10 focus-visible:outline-none"
          >
            {title}
          </Link>
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
          {project.description?.[language]}
        </p>

        <StackBadges stack={project.stack} />

        <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-30 flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <FaGithub size={16} /> {dict.codeLabel}
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
              <FaLock size={10} /> {dict.privateProjectLabel}
            </span>
          )}

          <span className="flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
            {dict.detailsLabel}
            <FaExternalLinkAlt size={11} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const dict = t.projects;
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(
    () =>
      Object.fromEntries(
        FILTERS.map((f) => [f, f === "all" ? projectsData.length : projectsData.filter((p) => p.categories.includes(f)).length])
      ) as Record<Filter, number>,
    []
  );

  const matches = (p: ProjectData) => filter === "all" || p.categories.includes(filter);
  const featured = projectsData.find((p) => p.featured && matches(p));
  const others = projectsData.filter((p) => !p.featured && matches(p));

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-28 px-4 sm:px-6 md:px-12 bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 min-h-screen transition-colors duration-300"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-90">
        <Image src="/971.webp" alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50/80 to-slate-50 dark:from-[#0F172A] dark:via-[#0F172A]/80 dark:to-[#0F172A]" />
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <Reveal blur className="text-center mb-10">
          <span className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2 block">
            {dict.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {dict.titleMain}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
              {dict.titleHighlight}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </Reveal>

        {/* Filtres */}
        <Reveal delay={0.1} className="flex justify-center mb-12">
          <div
            role="tablist"
            aria-label={dict.filterLabel}
            className="inline-flex flex-wrap justify-center gap-1 p-1.5 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-lg"
          >
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f)}
                  data-umami-event="project-filter"
                  data-umami-event-filter={f}
                  className={`relative px-4 sm:px-5 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    active ? "text-slate-950" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="project-filter-pill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md shadow-cyan-500/30"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">
                    {dict.filters[f]}
                    <span className={`ml-1.5 text-xs ${active ? "text-slate-900/70" : "text-slate-400 dark:text-slate-500"}`}>
                      {counts[f]}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <AnimatePresence mode="popLayout">
          {featured && <FeaturedProject key={featured.slug} project={featured} />}
        </AnimatePresence>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {others.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {!featured && others.length === 0 && (
          <p className="text-center text-slate-500 dark:text-slate-400 py-12">{dict.empty}</p>
        )}
      </div>
    </section>
  );
}
