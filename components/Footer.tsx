"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 bg-slate-100 dark:bg-[#0F172A] text-center text-xs text-slate-500 dark:text-slate-500 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <p>© {new Date().getFullYear()} {t.footer.rights}</p>
    </footer>
  );
}