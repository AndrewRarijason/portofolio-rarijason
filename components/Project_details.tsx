"use client";

import { MdFullscreen } from "react-icons/md";
import Image from "next/image";
import { FaGithub, FaTimes } from "react-icons/fa";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

interface ProjectDetailProps {
  title: string;
  description_gm: string;
  stack?: string;
  imagebg?: { src: string; alt: string };
  images: { src: string; alt: string; caption?: string; explanation?: string }[];
  github?: string;
  backUrl?: string;
}

export default function ProjectDetails({
  title,
  description_gm,
  stack,
  images,
  github,
  backUrl = "/#projects",
}: ProjectDetailProps) {
  const [zoomedImg, setZoomedImg] = useState<null | { src: string; alt: string }>(null);

  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 md:px-12 text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-[#0F172A] min-h-screen transition-colors duration-300">
      {/* Background Glowing Effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Bouton Retour Glassmorphic */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          href={backUrl}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-300 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 shadow-xl transition-all duration-300 group"
        >
          <IoIosArrowBack className="transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>

      {/* Lightbox / Modal Zoom */}
      {zoomedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 dark:bg-slate-950/90 backdrop-blur-md p-4 animate-fadeIn"
          onClick={() => setZoomedImg(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-slate-300 hover:text-white text-2xl transition-colors"
              onClick={() => setZoomedImg(null)}
              aria-label="Fermer"
            >
              <FaTimes />
            </button>
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 dark:border-slate-800 shadow-2xl">
              <Image
                src={zoomedImg.src}
                alt={zoomedImg.alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain bg-slate-900"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Conteneur principal */}
      <div className="relative z-10 max-w-5xl mx-auto mt-12 bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800/80 rounded-3xl p-6 sm:p-12 shadow-2xl">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white text-center tracking-tight mb-8">
          {title}
        </h1>

        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed text-justify mb-8">
          <p>{description_gm}</p>
        </div>

        {/* Tag Stack Technique */}
        {stack && (
          <div className="flex flex-wrap items-center gap-2 mb-12 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
            <span className="text-xs uppercase font-bold tracking-wider text-cyan-600 dark:text-cyan-400 mr-2">Stack :</span>
            {stack.replace("Stack:", "").split(",").map((tech, i) => (
              <span key={i} className="px-3 py-1 rounded-md text-xs font-medium bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                {tech.trim()}
              </span>
            ))}
          </div>
        )}

        {/* Grille de captures d'écran & explications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {images.slice(0, 8).map((img, idx) => (
            <div 
              key={idx} 
              className="flex flex-col bg-slate-50 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden group hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm"
            >
              <div
                className="relative h-60 w-full overflow-hidden cursor-zoom-in bg-slate-200 dark:bg-slate-950"
                onClick={() => setZoomedImg({ src: img.src, alt: img.alt })}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors shadow">
                  <MdFullscreen size={20} />
                </span>
              </div>
              
              <div className="p-5 flex flex-col justify-between flex-grow">
                {img.caption && (
                  <h4 className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-1">{img.caption}</h4>
                )}
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">{img.explanation}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton GitHub principal */}
        {github && (
          <div className="mt-14 flex justify-center">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white dark:text-slate-950 font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaGithub size={20} /> View on GitHub
            </a>
          </div>
        )}
      </div>
    </section>
  );
}