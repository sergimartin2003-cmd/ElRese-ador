"use client";

import { useMemo, useState } from "react";
import { Frown } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import FadeIn from "@/components/FadeIn";
import FilterBar, { type Filters, DEFAULT_FILTERS } from "./FilterBar";
import type { Property } from "@/data/properties";

/** Vista interactiva del listado: barra de filtros + grid de propiedades. */
export default function PropertiesView({
  properties,
  regions,
}: {
  properties: Property[];
  regions: string[];
}) {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (filters.operation !== "all" && p.operation !== filters.operation)
        return false;
      if (filters.region !== "all" && p.region !== filters.region) return false;
      if (filters.bedrooms > 0 && p.bedrooms < filters.bedrooms) return false;
      if (filters.maxPrice > 0 && p.price > filters.maxPrice) return false;
      return true;
    });
  }, [properties, filters]);

  return (
    <div className="container-px py-12 sm:py-16">
      <FilterBar
        filters={filters}
        onChange={setFilters}
        regions={regions}
        onReset={() => setFilters(DEFAULT_FILTERS)}
        resultCount={filtered.length}
      />

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <FadeIn key={p.id} delay={(i % 3) * 0.08} className="h-full">
              <PropertyCard property={p} />
            </FadeIn>
          ))}
        </div>
      ) : (
        <div className="mt-10 flex flex-col items-center rounded-2xl border border-dashed border-navy-200 bg-white py-20 text-center">
          <Frown className="h-12 w-12 text-navy-300" />
          <h3 className="mt-4 text-lg font-semibold text-navy-800">
            No encontramos propiedades
          </h3>
          <p className="mt-1 max-w-sm text-sm text-navy-500">
            Prueba a ajustar los filtros o cuéntanos qué buscas y te haremos una
            selección a medida.
          </p>
        </div>
      )}
    </div>
  );
}
