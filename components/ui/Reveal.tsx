"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  blur?: boolean;
};

// Fait apparaître son contenu (fondu + léger glissement) quand il entre dans l'écran
export default function Reveal({ delay = 0, y = 24, blur = false, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, ...(blur && { filter: "blur(6px)" }) }}
      // filter: none en fin d'animation, sinon le backdrop-blur des enfants ne fonctionne plus
      whileInView={{ opacity: 1, y: 0, ...(blur && { filter: "blur(0px)", transitionEnd: { filter: "none" } }) }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
