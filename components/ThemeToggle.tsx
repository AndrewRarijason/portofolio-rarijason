"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";
  const tooltipText = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={tooltipText}
      className="p-2.5 rounded-xl bg-slate-800/20 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:scale-105 transition-all duration-300 cursor-pointer"
      aria-label="Toggle Theme"
    >
      {isDark ? <FiSun className="text-amber-400 text-xl" /> : <FiMoon className="text-slate-700 text-xl" />}
    </button>
  );
}