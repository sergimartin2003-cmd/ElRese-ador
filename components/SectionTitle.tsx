import type { ReactNode } from "react";
import FadeIn from "./FadeIn";

/**
 * Encabezado de sección reutilizable: "eyebrow" (texto pequeño dorado),
 * título en serif y subtítulo opcional. Animado con FadeIn.
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  const alignment =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";

  return (
    <FadeIn className={`flex max-w-2xl flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold-600">
          <span className="h-px w-6 bg-gold-500" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-semibold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-navy-100/80" : "text-navy-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
