/**
 * Modelo de datos y catálogo de propiedades de ejemplo (mock data).
 * Sustituye el array `properties` por tu fuente real cuando integres el catálogo.
 */

export type OperationType = "venta" | "alquiler";
export type PropertyType = "villa" | "apartamento" | "atico" | "casa";

export interface Property {
  /** Identificador único usado en la URL /propiedades/[id]. */
  id: string;
  /** Referencia interna de la agencia. */
  reference: string;
  title: string;
  type: PropertyType;
  operation: OperationType;
  /** Precio en euros (mensual si la operación es alquiler). */
  price: number;
  /** Ubicación legible: "Marbella, Málaga". */
  location: string;
  /** Zona / región usada en los filtros. */
  region: string;
  bedrooms: number;
  bathrooms: number;
  /** Superficie construida en m². */
  area: number;
  /** Superficie de parcela en m² (opcional, villas / casas). */
  plot?: number;
  year?: number;
  energyRating?: "A" | "B" | "C" | "D" | "E" | "F" | "G";
  /** Resumen breve para tarjetas y metadatos. */
  shortDescription: string;
  /** Descripción larga para la página de detalle. */
  description: string;
  /** Características / comodidades destacadas. */
  features: string[];
  /** URLs de imágenes (la primera es la principal). */
  images: string[];
  /** Si aparece en la home como propiedad destacada. */
  featured: boolean;
  /**
   * URL de la ficha equivalente en el portal del partner (afiliado). Si la
   * rellenas, el CTA de afiliado de la ficha enlazará a esa unidad concreta
   * con tu código; si la dejas vacía, enlazará al catálogo general.
   */
  tekceUrl?: string;
}

// Helper para construir URLs de Unsplash optimizadas (placeholders).
const u = (id: string, w = 1600): string =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const properties: Property[] = [
  {
    id: "villa-vista-mar-marbella",
    reference: "ESP-1042",
    title: "Villa contemporánea con vistas al mar",
    type: "villa",
    operation: "venta",
    price: 4950000,
    location: "Marbella, Málaga",
    region: "Costa del Sol",
    bedrooms: 5,
    bathrooms: 6,
    area: 620,
    plot: 1500,
    year: 2022,
    energyRating: "A",
    shortDescription:
      "Obra maestra de arquitectura contemporánea en la Milla de Oro, con piscina infinita y vistas abiertas al Mediterráneo.",
    description:
      "Enclavada en la prestigiosa Milla de Oro de Marbella, esta villa de nueva construcción redefine el lujo contemporáneo. Sus 620 m² se distribuyen en tres plantas conectadas por un ascensor panorámico y bañadas de luz natural gracias a sus ventanales de suelo a techo. El salón principal se abre por completo a una terraza con piscina infinita que parece fundirse con el mar. La cocina, equipada con electrodomésticos de gama alta, da paso a un comedor exterior ideal para las noches de verano. La planta superior alberga una suite principal con vestidor, baño de mármol y terraza privada. En el nivel inferior encontrará un spa con sauna, gimnasio, bodega climatizada y cine en casa. Domótica integral, seguridad 24h y garaje para cuatro vehículos completan esta propiedad excepcional.",
    features: [
      "Piscina infinita climatizada",
      "Vistas panorámicas al mar",
      "Domótica integral",
      "Spa con sauna y gimnasio",
      "Cine en casa",
      "Bodega climatizada",
      "Ascensor panorámico",
      "Garaje para 4 vehículos",
    ],
    images: [
      u("1613490493576-7fde63acd811"),
      u("1600585154340-be6161a56a0c"),
      u("1600566753086-00f18fb6b3ea"),
    ],
    featured: true,
  },
  {
    id: "atico-barrio-salamanca-madrid",
    reference: "ESP-2087",
    title: "Ático de diseño en el Barrio de Salamanca",
    type: "atico",
    operation: "venta",
    price: 2300000,
    location: "Madrid, Barrio de Salamanca",
    region: "Madrid",
    bedrooms: 3,
    bathrooms: 3,
    area: 210,
    year: 2019,
    energyRating: "B",
    shortDescription:
      "Elegante ático reformado con amplia terraza y vistas a la ciudad, en la zona más exclusiva de Madrid.",
    description:
      "En pleno corazón del Barrio de Salamanca, este ático combina la elegancia clásica del edificio con un interiorismo contemporáneo firmado por un estudio de prestigio. La vivienda de 210 m² se completa con una terraza de 60 m² orientada al sur, perfecta para disfrutar del cielo de Madrid. El salón, presidido por una chimenea de mármol, conecta con una cocina office totalmente equipada. Dispone de tres dormitorios en suite, todos exteriores, siendo el principal un auténtico remanso de paz con vestidor y baño con bañera exenta. Suelos de roble natural, climatización por conductos, portero físico y plaza de garaje. Una oportunidad única en una de las direcciones más codiciadas de la capital.",
    features: [
      "Terraza de 60 m²",
      "Reforma de alto standing",
      "Chimenea de mármol",
      "Cocina office equipada",
      "Suelos de roble natural",
      "Portero físico",
      "Plaza de garaje",
      "Trastero",
    ],
    images: [
      u("1605276374104-dee2a0ed3cd6"),
      u("1502672260266-1c1ef2d93688"),
      u("1600121848594-d8644e57abab"),
    ],
    featured: true,
  },
  {
    id: "apartamento-frente-mar-ibiza",
    reference: "ESP-3120",
    title: "Apartamento de lujo frente al mar",
    type: "apartamento",
    operation: "venta",
    price: 1850000,
    location: "Ibiza, Islas Baleares",
    region: "Islas Baleares",
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    year: 2021,
    energyRating: "A",
    shortDescription:
      "Primera línea de mar en una urbanización exclusiva con acceso directo a la playa y servicios de cinco estrellas.",
    description:
      "Despierte cada mañana con el sonido del mar en este espectacular apartamento situado en primera línea de playa en Ibiza. Sus 180 m² se han concebido para difuminar la frontera entre interior y exterior: el salón se abre a una amplia terraza con vistas infinitas al Mediterráneo y a la isla de Es Vedrà. La urbanización, de acceso restringido, ofrece piscinas de agua salada, jardines mediterráneos, spa, gimnasio y servicio de conserjería 24 horas. El apartamento incluye tres dormitorios en suite, cocina abierta de líneas puras y materiales nobles en todos sus acabados. Ideal como residencia o como inversión de alto rendimiento en una de las islas más demandadas del mundo.",
    features: [
      "Primera línea de mar",
      "Acceso directo a la playa",
      "Piscinas de agua salada",
      "Spa y gimnasio",
      "Conserjería 24h",
      "Terraza con vistas a Es Vedrà",
      "Urbanización privada",
      "Plaza de garaje y trastero",
    ],
    images: [
      u("1502672260266-1c1ef2d93688"),
      u("1600607687939-ce8a6c25118c"),
      u("1600566753086-00f18fb6b3ea"),
    ],
    featured: true,
  },
  {
    id: "villa-mediterranea-javea",
    reference: "ESP-4056",
    title: "Villa mediterránea con jardín y piscina",
    type: "villa",
    operation: "venta",
    price: 1450000,
    location: "Jávea, Alicante",
    region: "Costa Blanca",
    bedrooms: 4,
    bathrooms: 4,
    area: 380,
    plot: 900,
    year: 2018,
    energyRating: "B",
    shortDescription:
      "Villa luminosa de estilo mediterráneo en una parcela ajardinada, a pocos minutos de las mejores calas de Jávea.",
    description:
      "Esta villa de estilo mediterráneo se asienta sobre una parcela de 900 m² rodeada de un jardín de bajo mantenimiento con especies autóctonas y una piscina privada. La planta principal, diáfana, integra salón, comedor y cocina en un único espacio que se vuelca al porche cubierto y la zona de barbacoa. Cuenta con cuatro dormitorios, dos de ellos en suite, y un estudio que puede destinarse a despacho o gimnasio. Sus grandes ventanales garantizan luz natural durante todo el día y las orientaciones aprovechan la brisa marina. A solo cinco minutos en coche del puerto y de las calas más bellas de la Costa Blanca, es la residencia perfecta para disfrutar del clima mediterráneo todo el año.",
    features: [
      "Piscina privada",
      "Parcela de 900 m²",
      "Porche cubierto y barbacoa",
      "Estudio adicional",
      "Jardín de bajo mantenimiento",
      "Aire acondicionado frío / calor",
      "Cerca de calas y puerto",
      "Garaje cerrado",
    ],
    images: [
      u("1564013799919-ab600027ffc6"),
      u("1568605114967-8130f3a36994"),
      u("1600585154340-be6161a56a0c"),
    ],
    featured: true,
  },
  {
    id: "apartamento-eixample-barcelona",
    reference: "ESP-5074",
    title: "Apartamento modernista en el Eixample",
    type: "apartamento",
    operation: "alquiler",
    price: 6500,
    location: "Barcelona, Eixample",
    region: "Barcelona",
    bedrooms: 3,
    bathrooms: 2,
    area: 165,
    year: 1910,
    energyRating: "C",
    shortDescription:
      "Vivienda señorial en finca regia modernista, con techos altos, suelos de mosaico hidráulico y mucha luz.",
    description:
      "En una finca regia del característico ensanche barcelonés, este apartamento de 165 m² conserva todo el encanto del modernismo —techos altos con molduras, galerías acristaladas y suelos de mosaico hidráulico original— combinado con una actualización integral de instalaciones. Dispone de tres dormitorios, dos baños completos, un amplio salón con balcones a la calle y una cocina contemporánea integrada. La finca cuenta con ascensor y portería. Su ubicación, a pocos pasos de Passeig de Gràcia, ofrece acceso inmejorable a comercio de lujo, restaurantes y transporte. Disponible en régimen de alquiler de larga duración, ideal para quienes buscan calidad de vida en el centro de Barcelona.",
    features: [
      "Finca modernista",
      "Techos altos con molduras",
      "Mosaico hidráulico original",
      "Galería acristalada",
      "Ascensor y portería",
      "Junto a Passeig de Gràcia",
      "Cocina contemporánea",
      "Alquiler de larga duración",
    ],
    images: [
      u("1493809842364-78817add7ffb"),
      u("1600585154340-be6161a56a0c"),
      u("1600121848594-d8644e57abab"),
    ],
    featured: false,
  },
  {
    id: "atico-duplex-valencia",
    reference: "ESP-6033",
    title: "Ático dúplex con solárium en Valencia",
    type: "atico",
    operation: "venta",
    price: 980000,
    location: "Valencia, Ciutat Vella",
    region: "Valencia",
    bedrooms: 3,
    bathrooms: 3,
    area: 195,
    year: 2020,
    energyRating: "A",
    shortDescription:
      "Espectacular dúplex con solárium privado y jacuzzi, en pleno casco histórico de Valencia.",
    description:
      "Este ático dúplex de 195 m² corona un edificio rehabilitado en el casco histórico de Valencia, combinando la esencia del centro con un diseño actual. La planta principal acoge un luminoso salón-comedor con cocina abierta y dos dormitorios. La escalera de diseño conduce a la planta superior, donde se encuentra la suite principal y, sobre todo, un solárium privado de 70 m² con jacuzzi y vistas a las torres y campanarios de la ciudad. Acabados de primera calidad, aerotermia y carpintería de altas prestaciones garantizan el máximo confort y eficiencia energética. Una propiedad singular para quienes desean vivir la ciudad desde las alturas.",
    features: [
      "Solárium privado de 70 m²",
      "Jacuzzi exterior",
      "Vistas al casco histórico",
      "Aerotermia",
      "Cocina abierta de diseño",
      "Edificio rehabilitado",
      "Alta eficiencia energética",
      "Suite con vestidor",
    ],
    images: [
      u("1600210492486-724fe5c67fb0"),
      u("1600566753086-00f18fb6b3ea"),
      u("1600607687939-ce8a6c25118c"),
    ],
    featured: false,
  },
];

// --- Selectores / helpers ---

/** Devuelve las propiedades marcadas como destacadas (para la home). */
export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured);
}

/** Busca una propiedad por su id (para /propiedades/[id]). */
export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

/** Lista única y ordenada de regiones (para los filtros del listado). */
export function getAllRegions(): string[] {
  return Array.from(new Set(properties.map((p) => p.region))).sort();
}
