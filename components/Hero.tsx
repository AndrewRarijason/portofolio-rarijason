"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiArrowDownDoubleFill } from "react-icons/ri";

export default function Hero() {
  // Animation states
  const [showHello, setShowHello] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const [showFooter, setShowFooter] = useState(false); // Un seul état pour h3 + bouton

  useEffect(() => {
    setTimeout(() => setShowHello(true), 1); // 1) Hello
    setTimeout(() => setShowName(true), 150); // 2) Name
    setTimeout(() => setShowBottom(true), 400); // 3) Subtitle + icons
    setTimeout(() => setShowFooter(true), 600); // 4) h3 + bouton
  }, []);

  return (
    <>
      <section className="flex flex-col min-h-screen" id="home">
        <div className="flex flex-col lg:flex-row flex-1">
          {/* Colonne gauche : fond gris */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center px-6 sm:px-10 lg:px-14 mt-10">
            <div className="pt-10 lg:pt-0 flex flex-col items-start">
              {/* 1) Hello, I am */}
              <h1
                className={`font-semibold text-left text-gray-800 transition-all duration-700
                  text-[18px] sm:text-[26px] md:text-[28px] lg:text-[28px]
                  ${showHello ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
              >
                Hello, I am <br />
                {/* 2) Name */}
                <span
                  className={`block font-extrabold transition-all duration-700
                    text-[32px] sm:text-[34px] md:text-[38px] lg:text-[40px]
                    ${showName ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                >
                  Aiky Andrew RARIJASON
                </span>
              </h1>
              {/* 3) Subtitle */}
              <i
                className={`mt-2 text-gray-800 transition-all duration-700
                  text-sm sm:text-base
                  ${showBottom ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                Full stack developer
              </i>
              {/* Icons */}
              <div
                className={`mt-6 sm:mt-10 z-10 flex flex-row gap-4 sm:gap-6 transition-all duration-700
                  justify-center lg:justify-start
                  ${showBottom ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <a
                  href="https://github.com/AndrewRarijason"
                  className="p-3 bg-[#394054] rounded-full hover:bg-[#B0C0D4] transition-all duration-300 hover:scale-110"
                >
                  <FaGithub className="text-xl sm:text-2xl text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/andrew-rarijason"
                  className="p-3 bg-[#394054] rounded-full hover:bg-[#B0C0D4] transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedinIn className="text-xl sm:text-2xl text-white" />
                </a>
                <a
                  href="mailto:rarijasonaiky@gmail.com"
                  className="p-3 bg-[#394054] rounded-full hover:bg-[#B0C0D4] transition-all duration-300 hover:scale-110"
                >
                  <IoIosMail className="text-xl sm:text-2xl text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Colonne droite */}
          <div
            className={`
              w-full lg:w-[40%] flex flex-col items-center justify-center relative bg-[#394054]
              pt-16 lg:pt-24 pb-10 overflow-hidden mt-8 lg:mt-0
              px-6 sm:px-10 lg:px-14
              lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)]
            `}
          >
            <Image
              src="/andrew.png"
              alt="Andrew"
              width={300}
              height={300}
              className="rounded-full border-4 border-white/30 shadow-2xl object-cover
                w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px]"
            />
            <div
              className="absolute top-8 sm:top-10 right-6 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 bg-white/20 rounded-full blur-sm animate-orbit1"
              style={{ animationDuration: "8s" }}
            ></div>
            <div
              className="absolute top-52 sm:top-60 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-white/10 rounded-full blur-sm animate-orbit2"
              style={{ animationDuration: "10s" }}
            ></div>
            <div
              className="absolute top-24 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-white/15 rounded-full blur-sm animate-orbit3"
              style={{ animationDuration: "12s" }}
            ></div>
          </div>
        </div>

        <footer className="w-full bg-[#394054] text-white">
          <div className="h-full py-8 sm:py-10 flex flex-col lg:flex-row gap-8 lg:gap-0">
            <div className="w-full lg:w-[60%] px-6 sm:px-10 lg:px-14 lg:pr-8">
              <p
                className={`text-justify leading-7 transition-all duration-700
                  text-sm sm:text-base lg:text-[16px]
                  ${showFooter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                I am Andrew, a developer who believes that well-designed technology drives meaningful progress.
                Each project is an opportunity to innovate by creating lasting bridges between needs and
                solutions.
                <br />
                My approach focuses on understanding the &quot;why&quot; before the &quot;how&quot;, collaborating
                with business teams, and always prioritizing the final user experience.
              </p>
            </div>
            <div className="w-full lg:w-[40%] flex flex-col items-center justify-center px-6 sm:px-10 lg:px-14">
              <a
                href="#about"
                className={`transition text-[14px] sm:text-[16px] px-2 transition-all duration-700
                  ${showFooter ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              >
                <button className="border-2 px-4 py-3 sm:py-4 transition-transform duration-200 hover:scale-105 cursor-pointer w-full sm:w-auto">
                  Know more about me
                </button>
              </a>
              <RiArrowDownDoubleFill className="text-2xl sm:text-3xl animate-bounce-custom mt-3" />
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}