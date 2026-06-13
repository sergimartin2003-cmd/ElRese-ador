import Link from "next/link";
import { siteConfig } from "@/lib/site";

/**
 * Logotipo de la marca. La prop `variant` adapta el color al fondo:
 * - "dark"  → texto oscuro (sobre fondos claros)
 * - "light" → texto blanco (sobre el hero o el footer oscuro)
 */
export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const isLight = variant === "light";
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — Inicio`}
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      {/* Monograma */}
      <span className="flex h-10 w-10 items-center justify-center rounded-md border border-gold-500 bg-gold-500/10 font-display text-xl font-bold text-gold-500 transition-colors group-hover:bg-gold-500 group-hover:text-navy-900">
        E
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl font-semibold tracking-tight ${
            isLight ? "text-white" : "text-navy-900"
          }`}
        >
          {siteConfig.shortName}
        </span>
        <span className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-gold-500">
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  );
}
