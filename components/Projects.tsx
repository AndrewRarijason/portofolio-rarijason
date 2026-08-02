"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { projectsData } from "../data/projectsData";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(Array(projectsData.length).fill(false));

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 640) {
      setVisible(Array(projectsData.length).fill(true));
      return;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projectsData.forEach((_, i) => {
            setTimeout(() => {
              setVisible((prev) => {
                const arr = [...prev];
                arr[i] = true;
                return arr;
              });
            }, i * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-28 px-4 sm:px-6 md:px-12 bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 min-h-screen transition-colors duration-300"
      ref={sectionRef}
    >
      {/* Image de fond principale "971.jpg" */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-90">
        <Image
          src="/971.jpg"
          alt="Background section projects"
          fill
          className="object-cover object-center"
          priority={false}
        />
        {/* Dégradés d'assombrissement/éclaircissement selon le mode */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50/80 to-slate-50 dark:from-[#0F172A] dark:via-[#0F172A]/80 dark:to-[#0F172A]" />
      </div>

      {/* Glow Orbs d'ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Titre avec Badge Gradient */}
        <div className="text-center mb-16">
          <span className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2 block">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">excerpt</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Grille de cartes Glassmorphic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, i) => (
            <div
              key={project.slug}
              className={`
                group relative bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 
                rounded-2xl overflow-hidden shadow-xl flex flex-col h-[340px]
                transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10
                ${visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              `}
            >
              {/* Image de fond de chaque projet */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.imagebg?.src || project.images[0].src}
                  alt={project.imagebg?.alt || project.images[0].alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 dark:from-slate-900 dark:via-slate-900/40 to-transparent" />
              </div>

              {/* Contenu de la carte */}
              <div className="p-6 flex flex-col flex-grow justify-between relative z-10 -mt-8">
                <div>
                  <h3
                    className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2 leading-snug"
                    title={project.title}
                  >
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Liens et Actions */}
                <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <FaGithub size={16} /> Code
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400 dark:text-slate-500">Private project</span>
                  )}

                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors group/link"
                  >
                    Details
                    <FaExternalLinkAlt size={12} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}