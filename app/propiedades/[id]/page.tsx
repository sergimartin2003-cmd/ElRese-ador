import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BedDouble,
  Bath,
  Maximize,
  LandPlot,
  Calendar,
  Zap,
  MapPin,
  Check,
  ArrowLeft,
  Phone,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import PropertyGallery from "@/components/propiedades/PropertyGallery";
import ContactForm from "@/components/ContactForm";
import { getPropertyById, properties } from "@/data/properties";
import {
  formatPrice,
  formatArea,
  operationLabels,
  propertyTypeLabels,
} from "@/lib/format";
import { siteConfig, buildWhatsAppLink } from "@/lib/site";

// Genera las rutas estáticas para cada propiedad en build.
export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const property = getPropertyById(params.id);
  if (!property) return { title: "Propiedad no encontrada" };
  return {
    title: property.title,
    description: property.shortDescription,
  };
}

/** Página de detalle de una propiedad. */
export default function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const property = getPropertyById(params.id);
  if (!property) notFound();

  const {
    title,
    type,
    operation,
    price,
    location,
    region,
    reference,
    bedrooms,
    bathrooms,
    area,
    plot,
    year,
    energyRating,
    description,
    features,
    images,
  } = property;

  // Especificaciones principales (con iconos).
  const specs = [
    { Icon: BedDouble, label: "Habitaciones", value: bedrooms },
    { Icon: Bath, label: "Baños", value: bathrooms },
    { Icon: Maximize, label: "Construidos", value: formatArea(area) },
    ...(plot ? [{ Icon: LandPlot, label: "Parcela", value: formatArea(plot) }] : []),
    ...(year ? [{ Icon: Calendar, label: "Año", value: year }] : []),
    ...(energyRating
      ? [{ Icon: Zap, label: "Energía", value: energyRating }]
      : []),
  ];

  const waMessage = `Hola ${siteConfig.name}, estoy interesado/a en la propiedad "${title}" (Ref. ${reference}). ¿Podríais darme más información?`;

  return (
    <>
      {/* Barra de migas de pan (deja espacio para la navbar fija) */}
      <div className="bg-navy-900 pb-6 pt-28 sm:pt-32">
        <nav
          aria-label="Migas de pan"
          className="container-px flex items-center gap-1.5 text-xs text-navy-200/70"
        >
          <Link href="/" className="hover:text-gold-400">
            Inicio
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/propiedades" className="hover:text-gold-400">
            Propiedades
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="line-clamp-1 text-navy-100">{title}</span>
        </nav>
      </div>

      <article className="bg-ivory pb-20">
        <div className="container-px pt-8">
          <PropertyGallery images={images} title={title} />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
            {/* Columna principal */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-navy-900 px-3 py-1 text-xs font-semibold text-white">
                  {operationLabels[operation]}
                </span>
                <span className="rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-900">
                  {propertyTypeLabels[type]}
                </span>
                <span className="text-xs text-navy-400">Ref. {reference}</span>
              </div>

              <h1 className="mt-4 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
                {title}
              </h1>
              <p className="mt-2 flex items-center gap-2 text-navy-500">
                <MapPin className="h-4 w-4 text-gold-600" />
                {location} · {region}
              </p>
              <p className="mt-4 font-display text-3xl font-semibold text-gold-700">
                {formatPrice(price)}
                {operation === "alquiler" && (
                  <span className="text-base font-normal text-navy-500">
                    {" "}
                    /mes
                  </span>
                )}
              </p>

              {/* Especificaciones */}
              <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-navy-900/5 bg-white p-6 sm:grid-cols-3">
                {specs.map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                      <s.Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-navy-500">{s.label}</p>
                      <p className="font-semibold text-navy-900">{s.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Descripción */}
              <div className="mt-10">
                <h2 className="font-display text-2xl font-semibold text-navy-900">
                  Descripción
                </h2>
                <p className="mt-4 leading-relaxed text-navy-600">
                  {description}
                </p>
              </div>

              {/* Características */}
              <div className="mt-10">
                <h2 className="font-display text-2xl font-semibold text-navy-900">
                  Características
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-navy-700"
                    >
                      <Check className="h-4 w-4 shrink-0 text-gold-600" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/propiedades" className="btn btn-outline mt-10">
                <ArrowLeft className="h-4 w-4" /> Volver al listado
              </Link>
            </div>

            {/* Sidebar de contacto */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-navy-900/5 bg-white p-6 shadow-soft">
                <h3 className="font-display text-xl font-semibold text-navy-900">
                  ¿Te interesa esta propiedad?
                </h3>
                <p className="mt-2 text-sm text-navy-600">
                  Contacta con tu asesor de {siteConfig.name} y resolveremos
                  todas tus dudas.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href={buildWhatsAppLink(waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold w-full"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="btn btn-outline w-full"
                  >
                    <Phone className="h-4 w-4" /> {siteConfig.contact.phone}
                  </a>
                </div>
                <div className="my-6 h-px bg-navy-900/5" />
                <ContactForm defaultMessage={waMessage} />
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
