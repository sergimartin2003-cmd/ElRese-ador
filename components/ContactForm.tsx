"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site";

/**
 * Formulario de contacto reutilizable (página de contacto y detalle de propiedad).
 * Es funcional a nivel visual: al enviar muestra una confirmación
 * (no hay backend conectado; integra aquí tu servicio de email/CRM).
 */
export default function ContactForm({
  defaultMessage = "",
  title,
  subtitle,
}: {
  defaultMessage?: string;
  title?: string;
  subtitle?: string;
}) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-gold-200 bg-gold-50 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-gold-600" />
        <h3 className="mt-4 text-xl font-semibold text-navy-900">
          ¡Mensaje enviado!
        </h3>
        <p className="mt-2 text-sm text-navy-600">
          Gracias por contactar con {siteConfig.name}. Un asesor se pondrá en
          contacto contigo muy pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {title && (
        <h3 className="font-display text-xl font-semibold text-navy-900">
          {title}
        </h3>
      )}
      {subtitle && <p className="text-sm text-navy-600">{subtitle}</p>}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre" name="nombre" placeholder="Tu nombre" required />
        <Field
          label="Teléfono"
          name="telefono"
          type="tel"
          placeholder="+34 600 000 000"
        />
      </div>
      <Field
        label="Email"
        name="email"
        type="email"
        placeholder="tu@email.com"
        required
      />

      <div>
        <label
          htmlFor="mensaje"
          className="mb-1.5 block text-sm font-medium text-navy-700"
        >
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          defaultValue={defaultMessage}
          required
          className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-200"
        />
      </div>

      <label className="flex items-start gap-2 text-xs text-navy-500">
        <input type="checkbox" required className="mt-0.5 accent-gold-600" />
        Acepto la política de privacidad y el tratamiento de mis datos.
      </label>

      <button type="submit" className="btn btn-gold w-full">
        Enviar mensaje <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

/** Campo de texto del formulario. */
function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-navy-700"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-200"
      />
    </div>
  );
}
