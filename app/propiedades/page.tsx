import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PropertiesView from "@/components/propiedades/PropertiesView";
import { properties, getAllRegions } from "@/data/properties";

export const metadata: Metadata = {
  title: "Propiedades",
  description:
    "Explora nuestra cartera exclusiva de villas, áticos y apartamentos de lujo. Filtra por operación, zona, precio y habitaciones.",
};

/** Página de listado de propiedades con filtros. */
export default function PropiedadesPage() {
  return (
    <>
      <PageHeader
        title="Nuestras propiedades"
        subtitle="Explora nuestra cartera exclusiva. Filtra por operación, zona, precio y habitaciones para encontrar tu próximo hogar."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Propiedades" }]}
      />
      <section className="bg-ivory">
        <PropertiesView properties={properties} regions={getAllRegions()} />
      </section>
    </>
  );
}
