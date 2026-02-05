"use client";

import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { projectsData } from "../data/projectsData";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(Array(projectsData.length).fill(false));
  const [imgY, setImgY] = useState(0);
  const [enableParallax, setEnableParallax] = useState(true);

  // Animation d’apparition des cartes (désactivée sur petits écrans)
  useEffect(() => {
    // sur écran <= sm : tout visible directement
    if (typeof window !== "undefined" && window.innerWidth <= 640) {
      setVisible(Array(projectsData.length).fill(true));
      return;
    }

    const timeouts: NodeJS.Timeout[] = [];
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setVisible(Array(projectsData.length).fill(false));
          timeouts.forEach(clearTimeout);
          return;
        }
        const viewportHeight = window.innerHeight;
        const sectionRect = entry.target.getBoundingClientRect();
        const fromTop = sectionRect.top;
        const fromBottom = viewportHeight - sectionRect.bottom;

        if (fromTop > fromBottom) {
          for (let i = 0; i < projectsData.length; i++) {
            timeouts.push(
              setTimeout(() => {
                setVisible((prev) => {
                  const arr = [...prev];
                  arr[i] = true;
                  return arr;
                });
              }, i * 130)
            );
          }
        } else {
          for (let i = projectsData.length - 1; i >= 0; i--) {
            timeouts.push(
              setTimeout(() => {
                setVisible((prev) => {
                  const arr = [...prev];
                  arr[i] = true;
                  return arr;
                });
              }, (projectsData.length - 1 - i) * 130)
            );
          }
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, []);

  // Activer / désactiver le parallax selon la taille d’écran
  useEffect(() => {
    const handleResize = () => {
      setEnableParallax(window.innerWidth > 640); // sm = 640px
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Parallax de l’image de fond (désactivé sur <= sm)
  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return;
      if (!enableParallax) {
        setImgY(0);
        return;
      }
      const rect = sectionRef.current.getBoundingClientRect();
      setImgY(-rect.top * 0.2);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableParallax]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden pt-24 pb-16 px-4 sm:px-6 md:px-10 text-gray-700 bg-[#394054]"
      ref={sectionRef}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/971.jpg"
          alt=""
          fill
          className="object-cover blur-sm opacity-40"
          style={{
            transform: `translateY(${enableParallax ? imgY : 0}px)`,
            transition: enableParallax ? "transform 0.1s linear" : "none",
          }}
          priority
        />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-10 sm:mb-12 pb-4 sm:pb-8">
          <h2>
            <span className="border-4 text-[22px] sm:text-[24px] px-10 sm:px-14 py-3 sm:py-4 font-bold mb-4 text-white inline-block">
              PROJECTS
            </span>
          </h2>
        </div>

        <div className="w-full sm:w-[85%] lg:w-[75%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-16 lg:gap-y-24 gap-x-6 md:gap-x-8 lg:gap-x-10">
            {projectsData.map((project, i) => (
              <div
                key={project.slug}
                className={`
                  bg-[#B0C0D4] rounded-xl shadow-lg flex flex-col overflow-hidden relative h-72 group
                  transition-all duration-200 hover:scale-105
                  ${visible[i] ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                `}
              >
                <Image
                  src={project.imagebg?.src || project.images[0].src}
                  alt={project.imagebg?.alt || project.images[0].alt}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:blur-[2px]"
                  width={350}
                  height={200}
                />
                <div
                  className={`absolute inset-0 ${
                    project.overlayOpacity || "bg-black/50"
                  }`}
                />
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none transition-all duration-300">
                  <h3
                    className="
                      text-[20px] sm:text-[22px] font-bold text-gray-100 text-center drop-shadow-lg px-4 pb-26 md:pb-0
                      transform translate-y-0 group-hover:-translate-y-16 transition-transform duration-300
                    "
                  >
                    {project.title}
                  </h3>
                </div>
                <div
                  className="
                    absolute left-0 right-0 bottom-0 px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6
                    flex flex-col items-center
                    opacity-100 translate-y-0
                    sm:opacity-0 sm:translate-y-6
                    sm:group-hover:opacity-100 sm:group-hover:translate-y-0
                    transition-all duration-300 z-30
                  "
                >
                  <div className="mb-12 px-2 md:px-0 sm:mb-8 text-gray-300 text-justify text-[14px] sm:text-[15px]">
                    <span className="font-normal">
                      {project.description}
                    </span>
                  </div>
                  <div className="flex items-center gap-10 sm:gap-20 w-full text-[16px] sm:text-[16px]">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex flex-row items-center gap-2 text-[#5DA5B3] hover:scale-105 hover:underline duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                        Code
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="ml-auto flex flex-row items-center gap-2 text-[#5DA5B3] hover:scale-105 hover:underline duration-200"
                    >
                      <FaLink />
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}