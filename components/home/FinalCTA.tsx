import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { buildWhatsAppLink } from "@/lib/site";

/** Llamada a la acción final antes del footer. */
export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24">
      <Image
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/70" />

      <FadeIn className="container-px relative z-10 text-center">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-semibold leading-tight text-white text-balance sm:text-5xl">
          ¿Buscas algo especial?{" "}
          <span className="text-gold-400">Hablemos.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-navy-100/85">
          Cuéntanos qué necesitas y un asesor preparará para ti una selección a
          medida, sin compromiso.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contacto" className="btn btn-gold text-base">
            Solicitar asesoramiento <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light text-base"
          >
            <MessageCircle className="h-4 w-4" /> Escríbenos por WhatsApp
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
