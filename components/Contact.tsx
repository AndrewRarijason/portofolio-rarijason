"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";
import { IoIosArrowDropup, IoIosMail } from "react-icons/io";
import { IoSendSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  const { t, language } = useLanguage();
  const [showArrow, setShowArrow] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<null | "ok" | "error">(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cvLanguage, setCvLanguage] = useState<"en" | "fr">(language);

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
      .sendForm("service_64209gq", "template_unjcm1o", formRef.current, "fZwRVO-t4y74AxE6l")
      .then(
        () => {
          setSending(false);
          setSent("ok");
          window.umami?.track("contact-sent");
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
    <section id="contact" className="relative overflow-hidden py-28 px-4 sm:px-6 md:px-12 bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Glow Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* --- VECTEUR CONTACT --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 dark:opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="contactGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          <path
            d="M -50 800 L 400 500 L 500 200 L 900 150 L 1400 400 L 1600 100"
            fill="none"
            stroke="url(#contactGrad)"
            strokeWidth="2.5"
            strokeDasharray="150 100"
            className="animate-vector-flow"
          />
          <path
            d="M 100 100 L 350 350 L 700 350 L 1200 650 L 1500 700"
            fill="none"
            stroke="url(#contactGrad)"
            strokeWidth="2"
            strokeDasharray="120 120"
            className="animate-vector-flow-reverse opacity-60"
          />

          <circle cx="400" cy="500" r="5" fill="#06b6d4" />
          <circle cx="700" cy="350" r="6" fill="#3b82f6" className="animate-ping origin-center text-cyan-400 opacity-75" />
          <circle cx="700" cy="350" r="4" fill="#06b6d4" />
          <circle cx="1200" cy="650" r="5" fill="#3b82f6" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <Reveal blur className="text-center mb-16">
          <span className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2 block">{t.contact.subtitle}</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.contact.titleContact}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">{t.contact.titleMe}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </Reveal>

        <p className="text-slate-600 dark:text-slate-400 text-center max-w-xl mx-auto mb-12 text-sm sm:text-base">
          {t.contact.desc}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Formulaire */}
          <form ref={formRef} onSubmit={handleSubmit} className="p-8 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="first_name"
                placeholder={t.contact.form.firstName}
                className="w-full bg-slate-100 dark:bg-slate-950/60 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder={t.contact.form.lastName}
                className="w-full bg-slate-100 dark:bg-slate-950/60 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <input type="hidden" name="name" value={`${firstName} ${lastName}`.trim()} />

            <input
              type="text"
              name="title"
              placeholder={t.contact.form.subject}
              className="w-full bg-slate-100 dark:bg-slate-950/60 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
              required
            />

            <input
              type="email"
              name="email"
              placeholder={t.contact.form.email}
              className="w-full bg-slate-100 dark:bg-slate-950/60 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
              required
            />

            <textarea
              name="message"
              placeholder={t.contact.form.message}
              className="w-full bg-slate-100 dark:bg-slate-950/60 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-3 h-32 resize-none text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
              required
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white dark:text-slate-950 font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50 cursor-pointer"
            >
              {sending ? t.contact.form.sending : t.contact.form.send} <IoSendSharp />
            </button>

            {sent === "ok" && <p className="text-cyan-600 dark:text-cyan-400 text-xs text-center mt-2">{t.contact.form.success}</p>}
            {sent === "error" && <p className="text-red-500 dark:text-red-400 text-xs text-center mt-2">{t.contact.form.error}</p>}
          </form>

          {/* Socials & Resume Download */}
          <div className="space-y-8 p-8 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-lg">
            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <a href="mailto:rarijasonaiky@gmail.com" className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all group">
                <IoIosMail className="text-2xl text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="break-all font-medium">rarijasonaiky@gmail.com</span>
              </a>

              <a href="https://github.com/AndrewRarijason" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all group">
                <FaGithub className="text-2xl text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="break-all font-medium">github.com/AndrewRarijason</span>
              </a>

              <a href="https://www.linkedin.com/in/andrew-rarijason" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all group">
                <FaLinkedinIn className="text-2xl text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="break-all font-medium">linkedin.com/in/andrew-rarijason</span>
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="flex gap-2 mb-4 bg-slate-100 dark:bg-slate-950/60 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
                <button onClick={() => setCvLanguage("en")} className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${cvLanguage === "en" ? "bg-cyan-500 text-white dark:text-slate-950" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`}>English</button>
                <button onClick={() => setCvLanguage("fr")} className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${cvLanguage === "fr" ? "bg-cyan-500 text-white dark:text-slate-950" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`}>Français</button>
              </div>

              <a
                href={cvLanguage === "en" ? "/cv/Resume_AndrewRarijason.pdf" : "/cv/CV_AndrewRarijason.pdf"}
                download={cvLanguage === "en" ? "Resume_AndrewRarijason.pdf" : "CV_AndrewRarijason.pdf"}
                data-umami-event="cv-download"
                data-umami-event-lang={cvLanguage}
                data-umami-event-location="contact"
                className="w-full flex items-center justify-center gap-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 transition-all duration-300 text-sm"
              >
                <FaDownload className="text-cyan-600 dark:text-cyan-400" /> {t.contact.downloadCv} {cvLanguage === "en" ? t.contact.englishCv : t.contact.frenchCv}
              </a>
            </div>
          </div>
        </div>
      </div>

      {showArrow && !isMenuOpen && (
        <a href="#home" className="fixed right-6 bottom-6 z-50 p-3 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-cyan-500/40 text-cyan-600 dark:text-cyan-400 hover:scale-110 shadow-xl shadow-cyan-500/10 transition-all" aria-label="Remonter">
          <IoIosArrowDropup size={28} />
        </a>
      )}
    </section>
  );
}