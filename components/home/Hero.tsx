"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { EASE_LUXE } from "@/lib/motion";

// Animación escalonada de entrada para los elementos del hero.
const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_LUXE },
  },
};

/** Hero a pantalla completa con imagen de fondo, titular de marca y dos CTAs. */
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80"
        alt="Villa de lujo gestionada por Espinosa Luxury"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Capas de oscurecimiento para garantizar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/85 via-navy-900/55 to-navy-900/85" />

      {/* Contenido */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-px relative z-10 flex flex-col items-center text-center"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-gold-300 backdrop-blur"
        >
          Inmobiliaria de lujo
        </motion.span>

        <motion.h1
          variants={item}
          className="max-w-4xl font-display text-4xl font-semibold leading-[1.1] text-white text-balance sm:text-6xl lg:text-7xl"
        >
          Redefinimos tu concepto de hogar con{" "}
          <span className="text-gold-400">{siteConfig.name}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100/90"
        >
          Propiedades exclusivas, asesoramiento a medida y un trato cercano.
          Te acompañamos en cada paso hacia la casa que mereces.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link href="/propiedades" className="btn btn-gold text-base">
            Ver propiedades <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contacto" className="btn btn-outline-light text-base">
            <Phone className="h-4 w-4" /> Contactar asesor
          </Link>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-1.5 w-1.5 rounded-full bg-gold-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
