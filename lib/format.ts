import type { OperationType, PropertyType } from "@/data/properties";

/** Formatea un precio en euros sin decimales. Ej.: 1250000 → "1.250.000 €". */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

/** Formatea una superficie en m². Ej.: 620 → "620 m²". */
export function formatArea(value: number): string {
  return `${new Intl.NumberFormat("es-ES").format(value)} m²`;
}

/** Etiquetas legibles para el tipo de operación. */
export const operationLabels: Record<OperationType, string> = {
  venta: "En venta",
  alquiler: "En alquiler",
};

/** Etiquetas legibles para el tipo de propiedad. */
export const propertyTypeLabels: Record<PropertyType, string> = {
  villa: "Villa",
  apartamento: "Apartamento",
  atico: "Ático",
  casa: "Casa",
};
