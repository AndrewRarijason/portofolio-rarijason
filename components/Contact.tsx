"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowDropup, IoIosMail } from "react-icons/io";
import { IoSendSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [showArrow, setShowArrow] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<null | "ok" | "error">(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (!homeSection) return;
      const rect = homeSection.getBoundingClientRect();
      setShowArrow(rect.top < -50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Écouter l'état du menu envoyé par Header
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<boolean>;
      setIsMenuOpen(!!customEvent.detail);
    };

    window.addEventListener("menu-toggled", handler as EventListener);
    return () => window.removeEventListener("menu-toggled", handler as EventListener);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setSent(null);

    emailjs
      .sendForm(
        "service_64209gq",
        "template_unjcm1o",
        formRef.current,
        "fZwRVO-t4y74AxE6l"
      )
      .then(
        () => {
          setSending(false);
          setSent("ok");
          formRef.current?.reset();
          setFirstName("");
          setLastName("");
        },
        () => {
          setSending(false);
          setSent("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-14 px-6 sm:px-10 lg:px-0 lg:mx-20"
    >
      <div className="text-center mb-8 pt-10 pb-0 lg:pb-4">
        <h2>
          <span className="border-4 text-[24px] px-14 py-4 font-bold text-gray-800 mb-4 inline-block">
            CONTACT
          </span>
        </h2>
      </div>

      {/* Paragraphe seul au-dessus de la rangée form + infos */}
      <p className="max-w-5xl mx-auto w-full text-gray-800 text-left pb-4 mb-4">
        You can reach me via this contact form or through my social media profiles.
      </p>

      {/* Rangée form + infos */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start md:justify-start mt-2 md:mt-4 gap-10">
        {/* Colonne gauche : formulaire uniquement */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <form
            ref={formRef}
            className="mb-8 space-y-4 w-full max-w-lg"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="First name"
                className="w-full sm:w-1/2 border border-gray-600 rounded px-3 py-2 text-gray-800 placeholder-gray-400"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last name"
                className="w-full sm:w-1/2 border border-gray-600 rounded px-3 py-2 text-gray-800 placeholder-gray-400"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <input
              type="hidden"
              name="name"
              value={`${firstName} ${lastName}`.trim()}
            />

            <input
              type="text"
              name="title"
              placeholder="Object"
              className="w-full border border-gray-600 rounded px-3 py-2 text-gray-800 placeholder-gray-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full border border-gray-600 rounded px-3 py-2 text-gray-800 placeholder-gray-400"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              className="w-full border border-gray-600 rounded px-3 py-2 h-32 resize-none text-gray-800 placeholder-gray-400"
              required
            />

            <button
              type="submit"
              disabled={sending}
              className="bg-[#5DA5B3] text-white px-6 py-2 rounded hover:bg-[#397a86] transition flex flex-row items-center gap-2 hover:scale-105 disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send"} <IoSendSharp />
            </button>

            {sent === "ok" && (
              <p className="text-green-600 text-sm mt-2">
                Message sent successfully.
              </p>
            )}
            {sent === "error" && (
              <p className="text-red-600 text-sm mt-2">
                An error occurred. Please try again.
              </p>
            )}
          </form>
        </div>

        {/* Colonne droite : infos, alignées avec le top du formulaire */}
        <div className="w-full md:w-1/2 md:pl-0 lg:pl-12 flex flex-col justify-start">
          <div className="space-y-4 max-w-xs md:max-w-sm text-sm text-gray-800 text-left mx-auto md:mx-0">
            <p className="flex items-center gap-2">
              <IoIosMail className="text-2xl text-[#397a86]" />
              <a
                href="mailto:rarijasonaiky@gmail.com"
                className="text-blue-400 hover:underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                rarijasonaiky@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaGithub className="text-2xl text-[#397a86]" />
              <a
                href="https://github.com/AndrewRarijason"
                className="text-blue-400 hover:underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/AndrewRarijason
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaLinkedinIn className="text-2xl text-[#397a86]" />
              <a
                href="https://www.linkedin.com/in/andrew-rarijason"
                className="text-blue-400 hover:underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/andrew-rarijason
              </a>
            </p>
          </div>
        </div>
      </div>

      {showArrow && !isMenuOpen && (
        <a
          href="#home"
          className="fixed right-4 sm:right-8 bottom-6 sm:bottom-8 z-50"
          aria-label="Remonter en haut"
        >
          <IoIosArrowDropup className="text-[42px] sm:text-[42px] hover:bg-[#394054] transition duration-300 cursor-pointer text-[#5DA5B3]" />
        </a>
      )}
    </section>
  );
}