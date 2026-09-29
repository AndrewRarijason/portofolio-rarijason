"use client";

import { motion, useScroll, useSpring } from "motion/react";

// Fine barre de progression de lecture en haut de la page
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
    />
  );
}
