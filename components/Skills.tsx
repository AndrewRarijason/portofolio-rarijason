"use client";

import Image from "next/image";
import { FaWordpress } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Points de chaque sous-division (en pourcentage de la hauteur)
  const points = [0, 0.4, 0.75, 1];

  useEffect(() => {
    function handleScroll() {
      if (!iconsRef.current || !progressBarRef.current) return;
      const barRect = progressBarRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calcul du centre de la fenêtre
      const centerY = windowHeight / 2;
      const barTop = barRect.top;
      const barHeight = barRect.height;

      // Si la barre est complètement hors écran
      if (barTop > windowHeight) {
        setProgress(0);
        return;
      }
      if (barTop + barHeight < 0) {
        setProgress(1);
        return;
      }

      // Calcul de la progression par rapport au centre de l'écran
      let prog = (centerY - barTop) / barHeight;
      prog = Math.max(0, Math.min(1, prog));
      setProgress(prog);
    }
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Pour placer la barre à la même hauteur que la div des icônes
  useEffect(() => {
    if (!iconsRef.current || !progressBarRef.current) return;
    const offsetTop = iconsRef.current.offsetTop;
    const iconsHeight = iconsRef.current.offsetHeight;
    progressBarRef.current.style.top = `${offsetTop}px`;
    progressBarRef.current.style.height = `${iconsHeight}px`;
  }, []);

  return (
    <section
      id="skills"
      className="pt-26 px-6 bg-[#394054] pb-20 text-white relative"
      ref={sectionRef}
    >
      <div className="text-center mb-12 pb-8">
        <h2>
          <span className="border-4 text-[24px] px-14 py-4 font-bold mb-4">
            SKILLS
          </span>
        </h2>
      </div>

      {/* Barre de progression absolute à gauche, alignée avec la div des icônes (cachée sur très petits écrans) */}
      <div
        ref={progressBarRef}
        className="hidden sm:flex absolute left-8 md:left-16 lg:left-22 flex-col items-center z-20"
        style={{ minWidth: 32, width: 32, top: 0, height: 0 }}
      >
        {/* Barre de fond */}
        <div
          className="w-2 bg-white/20 rounded-full absolute left-1/2 -translate-x-1/2"
          style={{ height: "100%" }}
        />
        {/* Barre de progression */}
        <div
          className="w-2 bg-[#5DA5B3] rounded-full absolute left-1/2 -translate-x-1/2 top-0 transition-all duration-300"
          style={{
            height: `${progress * 100}%`,
            maxHeight: "100%",
          }}
        />
        {/* Points */}
        {points.map((p, i) => (
          <span
            key={i}
            className="absolute left-1/2 -translate-x-1/2 rounded-full transition-all duration-300"
            style={{
              top: `calc(${p * 100}% - 8px)`,
              width: "16px",
              height: "16px",
              background: progress >= p ? "#5DA5B3" : "#fff",
              boxShadow: progress >= p ? "0 0 0 4px #5DA5B388" : "none",
              zIndex: 10,
              border: "none",
            }}
          />
        ))}
      </div>

      {/* Div principale des icônes */}
      <div
        className="flex flex-col gap-16 md:gap-20 w-full sm:w-[80%] lg:w-[60%] mx-auto"
        ref={iconsRef}
      >
        {/* Using now */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-6 text-xl sm:text-xl">Using now</h3>

          {/* --- VERSION MOBILE (<= md) : grid 4 colonnes, 4 icônes max par ligne --- */}
          <ul className="grid grid-cols-4 gap-y-6 gap-x-10 md:hidden">
            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                alt="HTML5"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[14px] text-center mt-2">HTML5</span>
            </li>
            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                alt="CSS3"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[14px] text-center mt-2">CSS3</span>
            </li>
            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[14px] text-center mt-2">JavaScript</span>
            </li>
            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                alt="React"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[14px] text-center mt-2">React</span>
            </li>

            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                alt="Next.js"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[14px] text-center mt-2">Next.js</span>
            </li>
            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
                alt="Angular"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[14px] text-center mt-2">Angular</span>
            </li>
            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[14px] text-center mt-2">TypeScript</span>
            </li>
            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                alt="Java"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[14px] text-center mt-2">Java</span>
            </li>

            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
                alt="Spring"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[14px] text-center mt-2">Spring</span>
            </li>
            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg"
                alt="Oracle"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[14px] text-center mt-2">Oracle</span>
            </li>
            <li className="flex flex-col items-center">
              <GrMysql className="text-[32px] mt-2 mt:pt-0" />
              <span className="block text-[14px] text-center mt-2">MySQL</span>
            </li>
            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                alt="PostgreSQL"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[14px] text-center mt-2">PostgreSQL</span>
            </li>
          </ul>

          {/* --- VERSION DESKTOP (md+) : ton layout actuel, inchangé --- */}
          <div className="hidden md:flex md:flex-col">
            {/* Ligne 1 */}
            <ul className="flex flex-wrap justify-center sm:justify-between gap-y-6 gap-x-4 sm:gap-x-10 sm:gap-y-8">
              <li className="flex flex-col items-center w-1/5 sm:w-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  alt="HTML5"
                  width={60}
                  height={60}
                  className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
                />
                <span className="block text-[14px] sm:text-xs text-center mt-2">
                  HTML5
                </span>
              </li>
              <li className="flex flex-col items-center w-1/5 sm:w-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  alt="CSS3"
                  width={60}
                  height={60}
                  className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
                />
                <span className="block text-[14px] sm:text-xs text-center mt-2">
                  CSS3
                </span>
              </li>
              <li className="flex flex-col items-center w-1/5 sm:w-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  width={60}
                  height={60}
                  className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
                />
                <span className="block text-[14px] sm:text-xs text-center mt-2">
                  JavaScript
                </span>
              </li>
              <li className="flex flex-col items-center w-1/5 sm:w-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt="React"
                  width={60}
                  height={60}
                  className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
                />
                <span className="block text-[14px] sm:text-xs text-center mt-2">
                  React
                </span>
              </li>
              <li className="flex flex-col items-center w-1/5 sm:w-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                  width={60}
                  height={60}
                  className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
                />
                <span className="block text-[14px] sm:text-xs text-center mt-2">
                  Next.js
                </span>
              </li>
              <li className="flex flex-col items-center w-1/5 sm:w-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
                  alt="Angular"
                  width={60}
                  height={60}
                  className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
                />
                <span className="block text-[14px] sm:text-xs text-center mt-2">
                  Angular
                </span>
              </li>
            </ul>

            {/* Ligne 2 */}
            <ul className="flex flex-wrap justify-center sm:justify-between gap-y-6 gap-x-4 sm:gap-x-10 sm:gap-y-8 mt-10 sm:mt-12">
              <li className="flex flex-col items-center w-1/5 sm:w-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  width={60}
                  height={60}
                  className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
                />
                <span className="block text-[14px] sm:text-xs text-center mt-2">
                  TypeScript
                </span>
              </li>
              <li className="flex flex-col items-center w-1/5 sm:w-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                  alt="Java"
                  width={60}
                  height={60}
                  className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
                />
                <span className="block text-[14px] sm:text-xs text-center mt-2">
                  Java
                </span>
              </li>
              <li className="flex flex-col items-center w-1/5 sm:w-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
                  alt="Spring"
                  width={60}
                  height={60}
                  className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
                />
                <span className="block text-[14px] sm:text-xs text-center mt-2">
                  Spring
                </span>
              </li>
              <li className="flex flex-col items-center w-1/5 sm:w-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg"
                  alt="Oracle"
                  width={60}
                  height={60}
                  className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
                />
                <span className="block text-[14px] sm:text-xs text-center mt-2">
                  Oracle
                </span>
              </li>
              <li className="flex flex-col items-center w-1/5 sm:w-auto">
                <GrMysql className="text-[32px] sm:text-[60px]" />
                <span className="block text-[14px] sm:text-xs text-center mt-2">
                  MySQL
                </span>
              </li>
              <li className="flex flex-col items-center w-1/5 sm:w-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                  alt="PostgreSQL"
                  width={60}
                  height={60}
                  className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
                />
                <span className="block text-[14px] sm:text-xs text-center mt-2">
                  PostgreSQL
                </span>
              </li>
            </ul>
          </div>
        </div>


        {/* Others */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-6 text-xl sm:text-xl">Others</h3>

          {/* MOBILE (<= md) : grid 4 colonnes, 5e icône sur 2e ligne à gauche */}
          <ul className="grid grid-cols-4 gap-y-6 gap-x-10 md:hidden">
            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[12px] text-center mt-2">
                GitHub
              </span>
            </li>
            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
                alt="Docker"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[12px] text-center mt-2">
                Docker
              </span>
            </li>
            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg"
                alt="AdobeXD"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[12px] text-center mt-2">
                Adobe XD
              </span>
            </li>
            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                alt="Figma"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[12px] text-center mt-2">
                Figma
              </span>
            </li>
            <li className="flex flex-col items-center">
              <FaWordpress className="text-[32px]" />
              <span className="block text-[12px] text-center mt-2">
                WordPress
              </span>
            </li>
          </ul>

          {/* DESKTOP (md+) : layout actuel conservé */}
          <ul className="hidden md:flex flex-wrap justify-center sm:justify-between gap-y-6 gap-x-4 sm:gap-x-10 sm:gap-y-8">
            <li className="flex flex-col items-center w-1/5 sm:w-auto">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub"
                width={60}
                height={60}
                className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
              />
              <span className="block text-[14px] sm:text-xs text-center mt-2">
                GitHub
              </span>
            </li>
            <li className="flex flex-col items-center w-1/5 sm:w-auto">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
                alt="Docker"
                width={60}
                height={60}
                className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
              />
              <span className="block text-[14px] sm:text-xs text-center mt-2">
                Docker
              </span>
            </li>
            <li className="flex flex-col items-center w-1/5 sm:w-auto">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg"
                alt="AdobeXD"
                width={60}
                height={60}
                className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
              />
              <span className="block text-[14px] sm:text-xs text-center mt-2">
                Adobe XD
              </span>
            </li>
            <li className="flex flex-col items-center w-1/5 sm:w-auto">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                alt="Figma"
                width={60}
                height={60}
                className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
              />
              <span className="block text-[14px] sm:text-xs text-center mt-2">
                Figma
              </span>
            </li>
            <li className="flex flex-col items-center w-1/5 sm:w-auto">
              <FaWordpress className="text-[32px] sm:text-[60px]" />
              <span className="block text-[14px] sm:text-xs text-center mt-2">
                WordPress
              </span>
            </li>
          </ul>
        </div>


        {/* Learning */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-6 text-xl sm:text-xl">Learning</h3>

          {/* MOBILE (<= md) : grid 4 colonnes, 5e icône sur 2e ligne à gauche */}
          <ul className="grid grid-cols-4 gap-y-6 gap-x-10 md:hidden">
            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                alt="PHP"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[12px] text-center mt-2">
                PHP
              </span>
            </li>
            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                alt="Python"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[12px] text-center mt-2">
                Python
              </span>
            </li>
            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[12px] text-center mt-2">
                Node.js
              </span>
            </li>
            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                alt="Laravel"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[12px] text-center mt-2">
                Laravel
              </span>
            </li>
            <li className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                alt="C#"
                width={60}
                height={60}
                className="w-10 h-10"
              />
              <span className="block text-[12px] text-center mt-2">
                C#
              </span>
            </li>
          </ul>

          {/* DESKTOP (md+) : layout actuel conservé */}
          <ul className="hidden md:flex flex-wrap justify-center sm:justify-between gap-y-6 gap-x-4 sm:gap-x-10 sm:gap-y-8">
            <li className="flex flex-col items-center w-1/5 sm:w-auto">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                alt="PHP"
                width={60}
                height={60}
                className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
              />
              <span className="block text-[14px] sm:text-xs text-center mt-2">
                PHP
              </span>
            </li>
            <li className="flex flex-col items-center w-1/5 sm:w-auto">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                alt="Python"
                width={60}
                height={60}
                className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
              />
              <span className="block text-[14px] sm:text-xs text-center mt-2">
                Python
              </span>
            </li>
            <li className="flex flex-col items-center w-1/5 sm:w-auto">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                width={60}
                height={60}
                className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
              />
              <span className="block text-[14px] sm:text-xs text-center mt-2">
                Node.js
              </span>
            </li>
            <li className="flex flex-col items-center w-1/5 sm:w-auto">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                alt="Laravel"
                width={60}
                height={60}
                className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
              />
              <span className="block text-[14px] sm:text-xs text-center mt-2">
                Laravel
              </span>
            </li>
            <li className="flex flex-col items-center w-1/5 sm:w-auto">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                alt="C#"
                width={60}
                height={60}
                className="w-10 h-10 sm:w-[60px] sm:h-[60px]"
              />
              <span className="block text-[14px] sm:text-xs text-center mt-2">
                C#
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}