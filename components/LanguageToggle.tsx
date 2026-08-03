"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "fr" : "en")}
      className="px-2.5 py-1 text-xs font-bold rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-200"
      aria-label="Toggle language"
    >
      {language === "en" ? "FR" : "EN"}
    </button>
  );
}