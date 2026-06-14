import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { siteConfig, buildWhatsAppLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con Espinosa Luxury. Teléfono, email, oficina y formulario para recibir asesoramiento personalizado.",
};

const infoItems = [
  {
    Icon: MapPin,
    label: "Oficina",
    value: siteConfig.contact.address,
  },
  {
    Icon: Phone,
    label: "Teléfono",
    value: siteConfig.contact.phone,
    href: siteConfig.contact.phoneHref,
  },
  {
    Icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    Icon: Clock,
    label: "Horario",
    value: siteConfig.contact.hours,
  },
];

/** Página de contacto: información de oficina + formulario + mapa. */
export default function ContactoPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.contact.address,
  )}&output=embed`;

  return (
    <>
      <PageHeader
        title="Hablemos"
        subtitle="Estamos a tu disposición para ayudarte a encontrar (o vender) tu propiedad. Cuéntanos qué necesitas y te asesoramos sin compromiso."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]}
      />

      <section className="bg-ivory py-16 sm:py-20">
        <div className="container-px grid gap-10 lg:grid-cols-2">
          {/* Información de contacto */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              Información de contacto
            </h2>
            <p className="mt-3 text-navy-600">
              Estaremos encantados de atenderte personalmente. Visítanos,
              llámanos o escríbenos: te responderemos lo antes posible.
            </p>

            <ul className="mt-8 space-y-5">
              {infoItems.map((it) => (
                <li key={it.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                    <it.Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">
                      {it.label}
                    </p>
                    {it.href ? (
                      <a
                        href={it.href}
                        className="text-navy-800 transition-colors hover:text-gold-600"
                      >
                        {it.value}
                      </a>
                    ) : (
                      <p className="text-navy-800">{it.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold mt-8"
            >
              <MessageCircle className="h-4 w-4" /> Escríbenos por WhatsApp
            </a>

            {/* Mapa (placeholder con la dirección de la oficina) */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-navy-900/5 shadow-soft">
              <iframe
                src={mapSrc}
                title={`Ubicación de ${siteConfig.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
            </div>
          </div>

          {/* Formulario */}
          <div className="rounded-2xl border border-navy-900/5 bg-white p-7 shadow-soft sm:p-9">
            <ContactForm
              title="Envíanos un mensaje"
              subtitle="Rellena el formulario y un asesor se pondrá en contacto contigo."
            />
          </div>
        </div>
      </section>
    </>
  );
}
