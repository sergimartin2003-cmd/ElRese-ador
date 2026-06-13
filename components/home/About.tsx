import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { siteConfig } from "@/lib/site";

// Cifras destacadas (placeholders editables).
const stats = [
  { value: "15+", label: "Años de experiencia" },
  { value: "500+", label: "Operaciones cerradas" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "30+", label: "Zonas premium" },
];

// Motivos para elegir la agencia.
const reasons = [
  "Conocimiento profundo del mercado local en cada zona",
  "Selección rigurosa de propiedades de alto standing",
  "Acompañamiento integral: legal, fiscal y financiero",
  "Red internacional de compradores e inversores",
];

/** Sección "Sobre Nosotros": quiénes somos, misión y por qué elegirnos. */
export default function About() {
  return (
    <section id="sobre-nosotros" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="container-px grid items-center gap-16 lg:grid-cols-2">
        {/* Collage de imágenes */}
        <FadeIn className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
                alt="Salón de una propiedad de lujo de Espinosa Luxury"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80"
                alt="Villa exclusiva seleccionada por Espinosa Luxury"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
          {/* Tarjeta flotante con dato destacado */}
          <div className="absolute -bottom-6 left-1/2 w-[78%] -translate-x-1/2 rounded-2xl bg-navy-900 p-6 text-center text-white shadow-card">
            <p className="font-display text-3xl font-semibold text-gold-400">
              +1.200
            </p>
            <p className="text-sm text-navy-100/80">
              familias que ya viven en su hogar ideal
            </p>
          </div>
        </FadeIn>

        {/* Texto */}
        <FadeIn delay={0.15} y={32}>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold-600">
            <span className="h-px w-6 bg-gold-500" /> Sobre nosotros
          </span>
          <h2 className="font-display text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">
            Una agencia hecha de personas, para personas
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-600">
            En {siteConfig.name} llevamos más de una década ayudando a familias e
            inversores a encontrar propiedades excepcionales. Nuestra misión es
            sencilla: convertir una de las decisiones más importantes de tu vida
            en una experiencia transparente, cómoda y memorable.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy-600">
            No vendemos casas, creamos relaciones de confianza que perduran. Por
            eso, la mayoría de nuestros clientes llegan recomendados por quienes
            ya confiaron en nosotros.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {reasons.map((r) => (
              <li
                key={r}
                className="flex items-start gap-2.5 text-sm text-navy-700"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                {r}
              </li>
            ))}
          </ul>

          <Link href="/contacto" className="btn btn-navy mt-8">
            Conoce al equipo <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>

      {/* Estadísticas */}
      <div className="container-px mt-24">
        <div className="grid grid-cols-2 gap-6 rounded-2xl border border-navy-900/5 bg-cream p-8 sm:p-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1} className="text-center">
              <p className="font-display text-4xl font-semibold text-navy-900">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-navy-500">{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
