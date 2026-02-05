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
    <section className="relative overflow-hidden pt-24 pb-20 px-6 text-gray-700 bg-[#394054] min-h-screen">
      {/* Bouton retour FIXE */}
      <div className="fixed top-10 left-10 z-50">
        <Link
          href={backUrl}
          className="relative overflow-hidden rounded-[40px] pl-3 pr-5 py-2 text-black flex items-center gap-2 bg-[#E0E2E8] transition group hover:scale-105 duration-200 shadow-lg"
        >
          <span
            className="absolute inset-0 left-0 w-0 group-hover:w-full bg-[#5DA5B3] transition-all duration-300 z-0 rounded-[40px] pointer-events-none"
            style={{ transitionProperty: "width" }}
          />
          <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
            <IoIosArrowBack />
            Back
          </span>
        </Link>
      </div>

      {/* Fond */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/971.jpg"
          alt=""
          fill
          className="object-cover blur-sm opacity-40"
          style={{
            objectFit: "cover",
          }}
          priority
        />
      </div>
      {/* Modal de zoom */}
      {zoomedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setZoomedImg(null)}
        >
          <div
            className="relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute -top-6 -right-6 text-white text-3xl bg-black/60 rounded-full p-2 hover:bg-black/90 transition cursor-pointer"
              onClick={() => setZoomedImg(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <Image
              src={zoomedImg.src}
              alt={zoomedImg.alt}
              width={900}
              height={700}
              className="rounded-lg shadow-2xl max-h-[80vh] max-w-[90vw] object-contain"
              priority
            />
          </div>
        </div>
      )}
      {/* Contenu principal */}
      <div className="relative z-10 max-w-4xl mx-auto bg-[#394054]/80 rounded-xl shadow-lg p-10">
        <h2 className="text-[24px] md:text-[36px] font-bold text-white mb-6 text-center drop-shadow-lg">{title}</h2>
        <p className="text-gray-200 text-base md:text-lg mb-12 text-justify">{description_gm}</p>
        {stack && (
          <p className="text-gray-300 text-base mb-4 text-left">
            <span className="font-bold">Stack : </span>
            {stack.replace("Stack:", "")}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-12 pt-16">
          {images.slice(0, 8).map((img, idx) => {
            // choix du cadrage personnalisé selon le projet + l’index
            let objectPositionStyle: React.CSSProperties | undefined;

            if (title === "Cryptocurrency Mobile Application") {
              if (idx === 0) {
                objectPositionStyle = { objectPosition: "center 75%" };
              } else if (idx === 1) {
                objectPositionStyle = { objectPosition: "center 30%" };
              } else if (idx === 3) {
                objectPositionStyle = { objectPosition: "center 24%" };
              }
            } else if (title === "Custom Relationship Management") {
              if (idx === 0) {
                objectPositionStyle = { objectPosition: "left center" };
              } else if (idx === 3) {
                objectPositionStyle = { objectPosition: "27% bottom" };
              }
            } else if (title === "Processing tool of a foreign currency account closing") {
              if (idx === 4) {
                objectPositionStyle = { objectPosition: "bottom" };
              } else if (idx === 5) {
                objectPositionStyle = { objectPosition: "60% center" };
              } else if (idx === 6) {
                objectPositionStyle = { objectPosition: "10% bottom" };
              }
            }

            return (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center">
                  <div
                    className="w-full max-w-xs rounded-lg overflow-hidden shadow-md mb-2 cursor-zoom-in relative"
                    onClick={() => setZoomedImg({ src: img.src, alt: img.alt })}
                    title="Click to zoom"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={350}
                      height={320}
                      className="object-cover w-full h-70 transition-transform duration-200 hover:scale-105"
                      style={objectPositionStyle}
                    />
                    <span className="absolute bottom-2 left-2 text-white bg-black/60 rounded-full p-1">
                      <MdFullscreen size={22} />
                    </span>
                  </div>
                  {img.caption && (
                    <div className="text-gray-200 text-sm text-center italic md:not-italic">
                      {img.caption}
                    </div>
                  )}
                </div>
                {/* marge sous l’explication uniquement sur mobile pour séparer les sections */}
                <div className="flex items-center mb-26 md:mb-0">
                  <span className="text-gray-200 text-base">
                    {img.explanation}
                  </span>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {github && (
          <div className="mt-10 flex justify-center">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#5DA5B3] hover:underline hover:scale-105 duration-200 text-lg"
            >
              <FaGithub />
              Code on GitHub
            </a>
          </div>
        )}
      </div>
    </section>
  );
}