"use client";

import { ChevronDown, RotateCcw } from "lucide-react";

/** Estado de los filtros del listado. */
export type Filters = {
  operation: "all" | "venta" | "alquiler";
  region: string; // "all" o el nombre de la región
  bedrooms: number; // 0 = cualquiera (si >0, mínimo de habitaciones)
  maxPrice: number; // 0 = sin límite
};

export const DEFAULT_FILTERS: Filters = {
  operation: "all",
  region: "all",
  bedrooms: 0,
  maxPrice: 0,
};

const PRICE_OPTIONS = [
  { value: "0", label: "Cualquier precio" },
  { value: "1000000", label: "Hasta 1.000.000 €" },
  { value: "2000000", label: "Hasta 2.000.000 €" },
  { value: "3000000", label: "Hasta 3.000.000 €" },
  { value: "5000000", label: "Hasta 5.000.000 €" },
];

const BEDROOM_OPTIONS = [
  { value: "0", label: "Cualquiera" },
  { value: "1", label: "1+" },
  { value: "2", label: "2+" },
  { value: "3", label: "3+" },
  { value: "4", label: "4+" },
  { value: "5", label: "5+" },
];

/** Barra de filtros del listado de propiedades. Componente controlado. */
export default function FilterBar({
  filters,
  onChange,
  regions,
  onReset,
  resultCount,
}: {
  filters: Filters;
  onChange: (next: Filters) => void;
  regions: string[];
  onReset: () => void;
  resultCount: number;
}) {
  return (
    <div className="rounded-2xl border border-navy-900/5 bg-white p-5 shadow-soft sm:p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SelectField
          label="Operación"
          value={filters.operation}
          onChange={(v) =>
            onChange({ ...filters, operation: v as Filters["operation"] })
          }
          options={[
            { value: "all", label: "Todas" },
            { value: "venta", label: "Comprar" },
            { value: "alquiler", label: "Alquilar" },
          ]}
        />
        <SelectField
          label="Ubicación"
          value={filters.region}
          onChange={(v) => onChange({ ...filters, region: v })}
          options={[
            { value: "all", label: "Todas las zonas" },
            ...regions.map((r) => ({ value: r, label: r })),
          ]}
        />
        <SelectField
          label="Habitaciones"
          value={String(filters.bedrooms)}
          onChange={(v) => onChange({ ...filters, bedrooms: Number(v) })}
          options={BEDROOM_OPTIONS}
        />
        <SelectField
          label="Precio máximo"
          value={String(filters.maxPrice)}
          onChange={(v) => onChange({ ...filters, maxPrice: Number(v) })}
          options={PRICE_OPTIONS}
        />
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-navy-900/5 pt-4">
        <p className="text-sm text-navy-500">
          <span className="font-semibold text-navy-900">{resultCount}</span>{" "}
          {resultCount === 1 ? "propiedad" : "propiedades"}
        </p>
        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-1.5 text-sm font-medium text-navy-600 transition-colors hover:text-gold-600"
        >
          <RotateCcw className="h-4 w-4" /> Limpiar filtros
        </button>
      </div>
    </div>
  );
}

/** Select estilizado con chevron. */
function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-500">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-navy-200 bg-white px-4 py-3 pr-10 text-sm font-medium text-navy-900 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-200"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
      </div>
    </div>
  );
}
