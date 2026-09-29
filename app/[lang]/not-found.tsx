"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { language, t } = useLanguage();

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-100">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-center"
      >
        <p className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">404</p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{t.notFound.title}</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">{t.notFound.desc}</p>
        <Link
          href={`/${language}`}
          className="mt-8 inline-flex px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5 transition-transform"
        >
          {t.notFound.back}
        </Link>
      </motion.div>
    </main>
  );
}
