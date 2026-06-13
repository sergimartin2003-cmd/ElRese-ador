import { HeartHandshake, KeyRound, Scale } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";
import { siteConfig } from "@/lib/site";

// Valores diferenciales de la agencia.
const values = [
  {
    Icon: HeartHandshake,
    title: "Atención personalizada",
    description:
      "Un asesor dedicado que entiende tus necesidades y te acompaña de principio a fin, con la discreción y el cuidado que mereces.",
  },
  {
    Icon: KeyRound,
    title: "Cartera exclusiva",
    description:
      "Acceso a propiedades únicas —muchas fuera de mercado— seleccionadas una a una por su calidad, ubicación y potencial.",
  },
  {
    Icon: Scale,
    title: "Asesoría legal y fiscal",
    description:
      "Gestionamos cada detalle jurídico y fiscal de tu operación para que compres o vendas con total tranquilidad.",
  },
];

/** Sección "La Experiencia Espinosa Luxury": 3 tarjetas de valores. */
export default function Experience() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="container-px">
        <SectionTitle
          eyebrow={`La experiencia ${siteConfig.name}`}
          title="Mucho más que una inmobiliaria"
          subtitle="Combinamos conocimiento local, una cartera selecta y un trato humano para ofrecerte una experiencia inmobiliaria a la altura de tus expectativas."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.12} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-navy-900/5 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-900">
                  <v.Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-navy-900">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">
                  {v.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
