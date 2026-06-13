import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Maximize, MapPin } from "lucide-react";
import type { Property } from "@/data/properties";
import {
  formatPrice,
  formatArea,
  operationLabels,
  propertyTypeLabels,
} from "@/lib/format";

/**
 * Tarjeta de propiedad reutilizable (home y listado).
 * Muestra imagen principal, precio, ubicación e iconos de habitaciones,
 * baños y metros cuadrados, además del CTA "Ver detalles".
 */
export default function PropertyCard({ property }: { property: Property }) {
  const {
    id,
    title,
    price,
    location,
    bedrooms,
    bathrooms,
    area,
    images,
    operation,
    type,
  } = property;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <Link
        href={`/propiedades/${id}`}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <Image
          src={images[0]}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Etiquetas (operación y tipo) */}
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-navy-900/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {operationLabels[operation]}
          </span>
          <span className="rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-900">
            {propertyTypeLabels[type]}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-display text-2xl font-semibold text-navy-900">
          {formatPrice(price)}
          {operation === "alquiler" && (
            <span className="text-sm font-normal text-navy-500"> /mes</span>
          )}
        </p>
        <h3 className="mt-2 line-clamp-1 text-lg font-semibold text-navy-800">
          {title}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-navy-500">
          <MapPin className="h-4 w-4 shrink-0 text-gold-600" />
          {location}
        </p>

        {/* Iconos de características */}
        <div className="mt-5 flex items-center gap-5 border-t border-navy-900/5 pt-4 text-sm text-navy-600">
          <span className="flex items-center gap-1.5" title="Habitaciones">
            <BedDouble className="h-4 w-4 text-navy-400" /> {bedrooms}
          </span>
          <span className="flex items-center gap-1.5" title="Baños">
            <Bath className="h-4 w-4 text-navy-400" /> {bathrooms}
          </span>
          <span className="flex items-center gap-1.5" title="Superficie">
            <Maximize className="h-4 w-4 text-navy-400" /> {formatArea(area)}
          </span>
        </div>

        <Link
          href={`/propiedades/${id}`}
          className="btn btn-outline mt-6 w-full"
        >
          Ver detalles
        </Link>
      </div>
    </article>
  );
}
