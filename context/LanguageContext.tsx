"use client";

import React, { createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import { Language, translations } from "@/dictionaries";
import { LOCALE_COOKIE, switchLocalePath } from "@/lib/i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// La langue vient de l'URL (/en, /fr) : le HTML est donc rendu côté serveur
// dans la bonne langue, ce qui permet à Google d'indexer les deux versions.
export function LanguageProvider({ language, children }: { language: Language; children: React.ReactNode }) {
  const pathname = usePathname();

  // Chargement complet plutôt que router.push : changer /fr <-> /en remonte tout le
  // layout racine, et React refuse alors d'exécuter le <script> anti-flash de next-themes
  // ("Encountered a script tag..."). Le HTML serveur garde aussi <html lang> cohérent.
  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    document.cookie = `${LOCALE_COOKIE}=${lang}; path=/; max-age=31536000; samesite=lax`;
    window.location.assign(switchLocalePath(pathname, lang) + window.location.hash);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
