"use client";

import Image from "next/image";
import { FaWordpress } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";
import { SiPrisma } from "react-icons/si";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "motion/react";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const points = [0, 0.45, 0.85];

  useEffect(() => {
    // La barre n'est affichée qu'à partir de lg : inutile de recalculer (et de re-rendre
    // les 27 cartes) à chaque défilement sur téléphone.
    const desktop = window.matchMedia("(min-width: 1024px)");
    let frame = 0;

    function update() {
      frame = 0;
      if (!desktop.matches || !iconsRef.current || !progressBarRef.current) return;
      const barRect = progressBarRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const centerY = windowHeight / 2;
      const barTop = barRect.top;
      const barHeight = barRect.height;

      if (barTop > windowHeight) {
        setProgress(0);
        return;
      }
      if (barTop + barHeight < 0) {
        setProgress(1);
        return;
      }

      let prog = (centerY - barTop) / barHeight;
      prog = Math.max(0, Math.min(1, prog));
      // Arrondi : évite un nouveau rendu pour des variations invisibles
      setProgress(Math.round(prog * 200) / 200);
    }

    // Un seul calcul par image affichée, même si le navigateur envoie plus d'événements
    function handleScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!iconsRef.current || !progressBarRef.current) return;
    const offsetTop = iconsRef.current.offsetTop;
    const iconsHeight = iconsRef.current.offsetHeight;
    progressBarRef.current.style.top = `${offsetTop}px`;
    progressBarRef.current.style.height = `${iconsHeight}px`;
  }, []);

  const usingNowTechs = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
    { name: "MySQL", customIcon: <GrMysql className="text-4xl sm:text-5xl text-blue-500 dark:text-blue-400" /> },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Prisma", customIcon: <SiPrisma className="text-4xl sm:text-5xl text-slate-800 dark:text-slate-100" /> },
  ];

  const otherTechs = [
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" },
    { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
    { name: "WordPress", customIcon: <FaWordpress className="text-4xl sm:text-5xl text-blue-500 dark:text-blue-400" /> },
  ];

  const learningTechs = [
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" },
  ];

  return (
    <section id="skills" className="relative overflow-hidden py-28 px-4 sm:px-6 bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 min-h-screen transition-colors duration-300" ref={sectionRef}>
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] pointer-events-none z-0 bg-[radial-gradient(closest-side,rgb(6_182_212/0.13),transparent)]" />

      {/* --- VECTEURS ET LIGNES ANIMÉS EN ARRIÈRE-PLAN --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 dark:opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="vectorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          <path
            d="M -100 150 L 300 150 L 500 450 L 200 800 L 900 800 L 1200 300 L 1600 600"
            fill="none"
            stroke="url(#vectorGrad)"
            strokeWidth="3"
            strokeDasharray="180 120"
            className="animate-vector-flow"
          />
          <path
            d="M 200 50 L 700 250 L 400 650 L 1100 950 L 1500 400"
            fill="none"
            stroke="url(#vectorGrad)"
            strokeWidth="2"
            strokeDasharray="100 200"
            className="animate-vector-flow-reverse opacity-60"
          />

          <circle cx="300" cy="150" r="5" fill="#06b6d4" className="animate-ping origin-center text-cyan-400 opacity-75" />
          <circle cx="300" cy="150" r="4" fill="#06b6d4" />

          <circle cx="500" cy="450" r="6" fill="#3b82f6" />

          <circle cx="900" cy="800" r="5" fill="#a855f7" className="animate-ping origin-center text-purple-500 opacity-75" />
          <circle cx="900" cy="800" r="4" fill="#a855f7" />

          <circle cx="1200" cy="300" r="6" fill="#06b6d4" />
        </svg>
      </div>

      <Reveal blur className="text-center mb-16 relative z-10">
        <span className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2 block">{t.skills.subtitle}</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {t.skills.titleSkills}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">{t.skills.titleTools}</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
      </Reveal>

      {/* Progress Bar interactive */}
      <div ref={progressBarRef} className="hidden lg:flex absolute left-12 flex-col items-center z-20" style={{ width: 16 }}>
        <div className="w-1 bg-slate-300 dark:bg-slate-800 rounded-full absolute left-1/2 -translate-x-1/2 h-full" />
        <div className="w-1 bg-gradient-to-b from-cyan-400 to-blue-500 shadow-[0_0_12px_#06b6d4] rounded-full absolute left-1/2 -translate-x-1/2 top-0 transition-all duration-300" style={{ height: `${progress * 100}%` }} />
        {points.map((p, i) => (
          <span key={i} className="absolute left-1/2 -translate-x-1/2 rounded-full transition-all duration-300" style={{ top: `calc(${p * 100}% - 6px)`, width: "12px", height: "12px", background: progress >= p ? "#06b6d4" : "#cbd5e1", boxShadow: progress >= p ? "0 0 10px #06b6d4" : "none" }} />
        ))}
      </div>

      <div className="max-w-5xl mx-auto space-y-16 relative z-10" ref={iconsRef}>
        {/* USING NOW */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-8 border-l-4 border-cyan-500 pl-3">{t.skills.usingNow}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 sm:gap-6">
            {usingNowTechs.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.035, ease: [0.22, 1, 0.36, 1] }}
                className="p-4 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl hover:border-cyan-500/40 hover:scale-105 transition-[border-color,scale] duration-300 flex flex-col items-center justify-center gap-3 group shadow-md dark:shadow-lg dark:shadow-black/20">
                {tech.icon ? (
                  <Image src={tech.icon} alt={tech.name} width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.4)] transition-all" />
                ) : (
                  tech.customIcon
                )}
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* OTHERS */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-8 border-l-4 border-blue-500 pl-3">{t.skills.toolsEnv}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
            {otherTechs.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.035, ease: [0.22, 1, 0.36, 1] }}
                className="p-4 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-500/40 hover:scale-105 transition-[border-color,scale] duration-300 flex flex-col items-center justify-center gap-3 group shadow-md dark:shadow-lg dark:shadow-black/20">
                {tech.icon ? (
                  <Image src={tech.icon} alt={tech.name} width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.4)] transition-all" />
                ) : (
                  tech.customIcon
                )}
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LEARNING */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-8 border-l-4 border-purple-500 pl-3">{t.skills.learning}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6">
            {learningTechs.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.035, ease: [0.22, 1, 0.36, 1] }}
                className="p-4 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl hover:border-purple-500/40 hover:scale-105 transition-[border-color,scale] duration-300 flex flex-col items-center justify-center gap-3 group shadow-md dark:shadow-lg dark:shadow-black/20">
                <Image src={tech.icon} alt={tech.name} width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] transition-all" />
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}