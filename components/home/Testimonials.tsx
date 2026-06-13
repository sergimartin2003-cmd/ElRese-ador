import { Quote, Star } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";

// Testimonios de ejemplo (placeholders).
const testimonials = [
  {
    name: "Carlota Méndez",
    role: "Compró una villa en la costa",
    initials: "CM",
    quote:
      "Desde el primer día sentí que estaba en buenas manos. Encontraron exactamente lo que buscaba y se ocuparon de absolutamente todo. Un trato impecable.",
  },
  {
    name: "Javier Soler",
    role: "Inversor inmobiliario",
    initials: "JS",
    quote:
      "Profesionalidad y honestidad. Me asesoraron con datos reales y nunca me presionaron. He cerrado ya tres operaciones con ellos y repetiré.",
  },
  {
    name: "Elena Ruiz",
    role: "Vendió su ático",
    initials: "ER",
    quote:
      "Vendieron mi propiedad por encima del precio que esperaba y en tiempo récord. Su red de contactos y su marketing marcan la diferencia.",
  },
];

/** Sección de testimonios de clientes. */
export default function Testimonials() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="container-px">
        <SectionTitle
          eyebrow="Testimonios"
          title="La confianza de quienes ya viven su sueño"
          subtitle="Nuestra mejor carta de presentación son las historias de las personas que han confiado en nosotros."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.12} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-soft ring-1 ring-navy-900/5">
                <Quote className="h-8 w-8 text-gold-400" />
                <div className="mt-3 flex gap-0.5 text-gold-500">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-900/5 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-gold-400">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-navy-900">
                      {t.name}
                    </span>
                    <span className="block text-xs text-navy-500">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
