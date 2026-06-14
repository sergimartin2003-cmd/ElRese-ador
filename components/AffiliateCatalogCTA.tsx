import { Globe2, ArrowUpRight } from "lucide-react";
import { buildAffiliateUrl } from "@/lib/affiliate";

/**
 * Bloque CTA hacia el catálogo internacional completo (enlace de afiliado).
 * Mantiene la marca Espinosa Luxury y envía el tráfico al portal con el
 * código de afiliado. Reutilizable: colócalo en cualquier página.
 */
export default function AffiliateCatalogCTA() {
  return (
    <section className="bg-ivory pb-20">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-12 sm:px-12 sm:py-14">
          {/* Acento decorativo */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-500/10 blur-2xl" />
          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-gold-300">
                <Globe2 className="h-4 w-4" /> Catálogo internacional
              </span>
              <h2 className="mt-5 font-display text-3xl font-semibold text-white sm:text-4xl">
                ¿No encuentras lo que buscas?
              </h2>
              <p className="mt-3 text-navy-100/80">
                Accede a nuestro catálogo internacional completo: miles de
                propiedades verificadas en España, Dubái, Turquía y Chipre
                Norte. Si ves algo que te encaje, te lo gestionamos
                personalmente.
              </p>
            </div>
            <a
              href={buildAffiliateUrl()}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="btn btn-gold shrink-0 text-base"
            >
              Ver catálogo completo <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
