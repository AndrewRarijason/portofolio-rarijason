"use client";

import { useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

const TIME_ZONE = "Indian/Antananarivo";

function LocalTime() {
  const { language, t } = useLanguage();
  // Calculée uniquement côté client pour éviter un décalage d'hydratation
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      setTime(
        new Intl.DateTimeFormat(language === "fr" ? "fr-FR" : "en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: TIME_ZONE,
        }).format(new Date())
      );
    format();
    const id = setInterval(format, 15_000);
    return () => clearInterval(id);
  }, [language]);

  return (
    <p className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400" title={t.footer.localTime}>
      <FiClock className="text-cyan-500" aria-hidden />
      <span className="sr-only">{t.footer.localTime} :</span>
      <span>Antananarivo · GMT+3</span>
      <span className="text-slate-300 dark:text-slate-700" aria-hidden>
        ·
      </span>
      <time className="font-mono tabular-nums text-slate-800 dark:text-slate-200 min-w-[5ch]">{time ?? "--:--"}</time>
    </p>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-4 bg-slate-100 dark:bg-[#0F172A] text-xs text-slate-500 dark:text-slate-500 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} {t.footer.rights}
        </p>
        <LocalTime />
      </div>
    </footer>
  );
}
