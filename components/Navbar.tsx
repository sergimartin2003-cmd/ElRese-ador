"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import { navLinks, siteConfig } from "@/lib/site";

/**
 * Navbar fija con efecto "blur" al hacer scroll.
 * En la home se muestra transparente sobre el hero y se vuelve sólida
 * al desplazarse; en el resto de páginas es siempre sólida.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const transparentOnTop = pathname === "/";
  const solid = scrolled || !transparentOnTop || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil al navegar a otra ruta.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-navy-900/5 bg-cream/85 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-px flex h-20 items-center justify-between">
        <Logo variant={solid ? "dark" : "light"} />

        {/* Navegación (desktop) */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold-600 ${
                  solid ? "text-navy-700" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Acciones (desktop) */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={siteConfig.contact.phoneHref}
            className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold-600 ${
              solid ? "text-navy-700" : "text-white/90"
            }`}
          >
            <Phone className="h-4 w-4 text-gold-500" />
            {siteConfig.contact.phone}
          </a>
          <Link href="/contacto" className="btn btn-gold">
            Contactar
          </Link>
        </div>

        {/* Botón menú (móvil) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className={`lg:hidden ${solid ? "text-navy-900" : "text-white"}`}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {/* Menú desplegable (móvil) */}
      {open && (
        <div className="border-t border-navy-900/5 bg-cream lg:hidden">
          <ul className="container-px flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-navy-800 transition-colors hover:bg-ivory"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link href="/contacto" className="btn btn-gold w-full">
                Contactar asesor
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
