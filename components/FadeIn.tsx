"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_LUXE } from "@/lib/motion";

/**
 * Envoltorio reutilizable que aplica una animación sutil de "fade + subida"
 * cuando el elemento entra en el viewport al hacer scroll.
 * Da la sensación premium pedida sin recargar la interfaz.
 */
type FadeInProps = {
  children: ReactNode;
  className?: string;
  /** Retardo en segundos (útil para escalonar elementos de un grid). */
  delay?: number;
  /** Desplazamiento vertical inicial en px. */
  y?: number;
};

const buildVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0 },
});

export default function FadeIn({
  children,
  className,
  delay = 0,
  y = 24,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: EASE_LUXE }}
      variants={buildVariants(y)}
    >
      {children}
    </motion.div>
  );
}
