import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

/**
 * Cabecera de página reutilizable (banner oscuro con título y migas de pan).
 * El padding superior deja espacio para la navbar fija.
 */
export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative bg-navy-900 pb-14 pt-32 text-white sm:pb-16 sm:pt-36">
      {/* Línea de acento dorada inferior */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="container-px">
        {breadcrumbs && (
          <nav
            aria-label="Migas de pan"
            className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-navy-200/70"
          >
            {breadcrumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link
                    href={c.href}
                    className="transition-colors hover:text-gold-400"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-navy-100">{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <ChevronRight className="h-3.5 w-3.5" />
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-navy-100/80">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
