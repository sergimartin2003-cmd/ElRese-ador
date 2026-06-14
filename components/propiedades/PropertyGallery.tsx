import Image from "next/image";

/**
 * Galería de la página de detalle: una imagen grande a la izquierda
 * y dos imágenes pequeñas apiladas a la derecha.
 */
export default function PropertyGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [main, ...rest] = images;
  const thumbs = rest.slice(0, 2);

  return (
    <div className="grid gap-3 md:grid-cols-2">
      {/* Imagen principal */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:aspect-auto md:row-span-2">
        <Image
          src={main}
          alt={title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Imágenes secundarias */}
      {thumbs.map((src, i) => (
        <div
          key={i}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl"
        >
          <Image
            src={src}
            alt={`${title} — imagen ${i + 2}`}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
