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

## Estado

- [x] Configuración del proyecto, layout global y sistema de diseño
- [x] **Home** (Hero, Experiencia, Sobre Nosotros, Destacadas, Testimonios, CTA)
- [x] Listado de propiedades (`/propiedades`) con filtros
- [x] Detalle de propiedad (`/propiedades/[id]`)
- [x] Contacto (`/contacto`)
