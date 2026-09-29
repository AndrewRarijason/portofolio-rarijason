"use client";

import { MotionConfig } from "motion/react";

// Désactive les animations de déplacement si l'utilisateur a activé
// "Réduire les animations" dans son système (accessibilité).
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
