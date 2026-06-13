import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Instagram, Facebook, Linkedin } from "@/components/icons/SocialIcons";
import Logo from "./Logo";
import { navLinks, siteConfig } from "@/lib/site";

/** Footer completo: marca, navegación, contacto, horario y enlaces legales. */
export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { Icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
    { Icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
    { Icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="container-px grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Marca */}
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-200/80">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-navy-900"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="font-display text-lg text-white">Navegación</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-navy-200/80 transition-colors hover:text-gold-400"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-display text-lg text-white">Contacto</h4>
          <ul className="mt-5 space-y-3 text-sm text-navy-200/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold-500" />
              <a
                href={siteConfig.contact.phoneHref}
                className="transition-colors hover:text-gold-400"
              >
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold-500" />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="transition-colors hover:text-gold-400"
              >
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Horario + CTA */}
        <div>
          <h4 className="font-display text-lg text-white">Horario</h4>
          <p className="mt-5 text-sm leading-relaxed text-navy-200/80">
            {siteConfig.contact.hours}
          </p>
          <Link href="/contacto" className="btn btn-gold mt-6">
            Reserva una cita
          </Link>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-300/70 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <Link href="#" className="transition-colors hover:text-gold-400">
              Aviso legal
            </Link>
            <Link href="#" className="transition-colors hover:text-gold-400">
              Privacidad
            </Link>
            <Link href="#" className="transition-colors hover:text-gold-400">
              Cookies
            </Link>
          </div>
        </div>
        {/* Aviso discreto de colaboración (sin mencionar al partner en el cuerpo). */}
        <div className="container-px pb-6 text-center text-[0.7rem] text-navy-300/50">
          {siteConfig.affiliateNotice}
        </div>
      </div>
    </footer>
  );
}
