/**
 * Configuración central de la marca Espinosa Luxury.
 * Edita estos datos una sola vez y se reflejarán en toda la web
 * (navbar, footer, CTAs, botón de WhatsApp, metadatos...).
 */
export const siteConfig = {
  name: "Espinosa Luxury",
  shortName: "Espinosa",
  tagline: "Luxury Real Estate",
  description:
    "Agencia inmobiliaria de lujo. Selección exclusiva de villas, áticos y apartamentos premium con asesoramiento personalizado en las mejores zonas de España.",

  // ⚠️ Sustituye estos datos por los reales de tu agencia.
  contact: {
    phone: "+34 600 000 000",
    phoneHref: "tel:+34600000000",
    email: "info@espinosaluxury.com",
    address: "Paseo de la Castellana 1, 28046 Madrid",
    city: "Madrid",
    hours: "Lun – Vie: 9:00 – 20:00 · Sáb: 10:00 – 14:00",
    // WhatsApp en formato internacional, sin '+' ni espacios (lo requiere wa.me).
    whatsapp: "34600000000",
  },

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
  },

  // Aviso discreto de colaboración para el footer (sin mencionar al partner en el cuerpo).
  affiliateNotice:
    "Propiedades gestionadas en colaboración con nuestra red internacional de partners.",
} as const;

/** Enlaces de navegación principales (navbar y footer). */
export const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Propiedades", href: "/propiedades" },
  { label: "Sobre Nosotros", href: "/#sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const;

/** Construye un enlace de WhatsApp con un mensaje prerrellenado. */
export function buildWhatsAppLink(message?: string): string {
  const text =
    message ?? `Hola ${siteConfig.name}, me gustaría recibir más información.`;
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}
