import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";
import PropertyCard from "@/components/PropertyCard";
import { getFeaturedProperties } from "@/data/properties";

/** Grid de propiedades destacadas en la home. */
export default function FeaturedProperties() {
  const properties = getFeaturedProperties();

  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle
            align="left"
            eyebrow="Selección destacada"
            title="Propiedades que enamoran"
            subtitle="Una muestra de nuestra cartera más exclusiva. Cada inmueble, una oportunidad única."
          />
          <FadeIn>
            <Link
              href="/propiedades"
              className="btn btn-outline whitespace-nowrap"
            >
              Ver todas <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((p, i) => (
            <FadeIn key={p.id} delay={(i % 4) * 0.1} className="h-full">
              <PropertyCard property={p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
