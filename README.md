# Espinosa Luxury — Inmobiliaria de lujo

Web corporativa y de listado de propiedades para **Espinosa Luxury**, agencia
inmobiliaria de alto standing. Diseño premium centrado 100 % en la marca, con
una experiencia cuidada y totalmente responsive (mobile-first).

## Stack tecnológico

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (sistema de diseño en `tailwind.config.ts`)
- **Framer Motion** (animaciones sutiles al hacer scroll)
- **Lucide React** (iconografía)
- Imágenes placeholder servidas desde **Unsplash** vía `next/image`

## Puesta en marcha

```bash
npm install      # instalar dependencias
npm run dev      # entorno de desarrollo (http://localhost:3000)
npm run build    # build de producción
npm run start    # servir el build de producción
npm run lint     # linter
```

## Estructura del proyecto

```
app/                     # App Router
  layout.tsx             # Layout global: fuentes, Navbar, Footer, botón WhatsApp
  page.tsx               # Home
  globals.css            # Estilos base + clases de botones de marca
  propiedades/           # Listado (page.tsx) y detalle ([id]/page.tsx)
  contacto/              # Página de contacto
components/
  Navbar.tsx             # Navbar fija con blur al hacer scroll
  Footer.tsx             # Footer completo (contacto, redes, legal)
  PropertyCard.tsx       # Tarjeta de propiedad reutilizable
  SectionTitle.tsx       # Encabezado de sección reutilizable
  PageHeader.tsx         # Cabecera reutilizable de páginas internas
  ContactForm.tsx        # Formulario de contacto reutilizable
  AffiliateCatalogCTA.tsx # CTA al catálogo internacional (enlace de afiliado)
  Logo.tsx               # Logotipo de la marca
  FadeIn.tsx             # Wrapper de animación (fade + subida) con Framer Motion
  WhatsAppButton.tsx     # Botón flotante de WhatsApp (toda la web)
  icons/SocialIcons.tsx  # Iconos de marcas sociales (SVG en línea)
  home/                  # Secciones de la Home (Hero, Experience, About, ...)
  propiedades/           # FilterBar, PropertiesView y PropertyGallery
data/
  properties.ts          # Interfaz `Property` + catálogo de ejemplo (mock data)
lib/
  site.ts                # ⭐ Configuración central de marca y contacto
  affiliate.ts           # ⭐ Enlaces de afiliado a TEKCE (código + helper)
  format.ts              # Helpers de formato (precios, m², etiquetas)
  motion.ts              # Curva de easing compartida
```

## Personalización rápida

- **Marca y datos de contacto:** `lib/site.ts` (nombre, teléfono, email,
  dirección, redes sociales y **número de WhatsApp**).
- **Catálogo de propiedades:** `data/properties.ts`.
- **Colores y tipografía:** `tailwind.config.ts`.

> ⚠️ Los datos de contacto (teléfono, email, dirección y WhatsApp) son
> **placeholders**: sustitúyelos por los reales en `lib/site.ts`. Las imágenes
> son placeholders de Unsplash.

## Integración con TEKCE (afiliado)

El catálogo completo (miles de unidades) vive en el portal de TEKCE. Esta web
es 100 % de marca **Espinosa Luxury** y envía tráfico al portal mediante
**enlaces de afiliado** (programa MyTEKCE) para generar comisiones por referido:

- CTA "Ver catálogo completo" en `/propiedades` (`AffiliateCatalogCTA`).
- CTA de afiliado en cada ficha (`/propiedades/[id]`); si rellenas `tekceUrl`
  en la propiedad, enlaza a esa unidad concreta.

> ⚠️ Configura tu integración en `lib/affiliate.ts`: `code` (tu código de
> afiliado), `catalogUrl` (buscador del portal) y `param` (nombre exacto del
> parámetro). **Confirma el formato del enlace en tu panel MyTEKCE** — cada
> afiliado recibe un enlace único. No existe API/feed público de TEKCE: para
> alojar las fichas de forma nativa necesitarías un feed con credenciales de
> partner.

## Estado

- [x] Configuración del proyecto, layout global y sistema de diseño
- [x] **Home** (Hero, Experiencia, Sobre Nosotros, Destacadas, Testimonios, CTA)
- [x] Listado de propiedades (`/propiedades`) con filtros
- [x] Detalle de propiedad (`/propiedades/[id]`)
- [x] Contacto (`/contacto`)
- [x] Integración TEKCE por enlaces de afiliado
