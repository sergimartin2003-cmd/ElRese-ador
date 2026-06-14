/**
 * Integración por ENLACES DE AFILIADO con el portal internacional (TEKCE).
 *
 * Modelo elegido: el catálogo completo (miles de unidades, actualizado a diario)
 * vive en el portal del partner. Desde la web de la marca enviamos tráfico con
 * tu código de afiliado para generar comisiones por referido (programa MyTEKCE).
 * Así ofreces "todo el catálogo" sin alojar miles de fichas ni hacer scraping.
 *
 * ⚠️ IMPORTANTE — antes de publicar, ajusta estos valores con los de tu panel
 * MyTEKCE (cada afiliado recibe un enlace único):
 *   - `code`      → tu código de afiliado.
 *   - `catalogUrl`→ la URL del buscador/catálogo a la que enviar por defecto.
 *   - `param`     → el nombre EXACTO del parámetro de afiliado en la URL.
 *
 * Si tu enlace de MyTEKCE ya viene "montado" (con el código incrustado en la
 * ruta y no como query param), pega esa URL completa en `catalogUrl` y en el
 * campo `tekceUrl` de cada propiedad; `buildAffiliateUrl` la respetará.
 */
export const affiliateConfig = {
  /** Tu código de afiliado de MyTEKCE. */
  code: "ESPINOSA",
  /** URL del catálogo/buscador del portal al que enviar por defecto. */
  catalogUrl: "https://tekce.com",
  /** Nombre del parámetro de afiliado en la URL (confírmalo en MyTEKCE). */
  param: "ref",
} as const;

/**
 * Construye un enlace de afiliado añadiendo tu código como query param.
 * @param target URL absoluta de una ficha concreta del portal; si se omite
 *               (o no es válida) se usa el catálogo general.
 */
export function buildAffiliateUrl(target?: string): string {
  const fallback = affiliateConfig.catalogUrl;
  let url: URL;
  try {
    url = new URL(target && target.trim() ? target : fallback);
  } catch {
    url = new URL(fallback);
  }
  url.searchParams.set(affiliateConfig.param, affiliateConfig.code);
  return url.toString();
}
