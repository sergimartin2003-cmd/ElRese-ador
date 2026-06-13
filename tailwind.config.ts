import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

/**
 * Sistema de diseño de Espinosa Luxury.
 * Paleta: fondos claros (crema / marfil) + Azul Marino (confianza) + Dorado / Champán (lujo).
 * Tipografía: Inter para el cuerpo y Playfair Display (serif con carácter) para los titulares.
 */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Azul marino profundo — transmite confianza y solidez.
        navy: {
          50: "#eef3f8",
          100: "#d4e0ed",
          200: "#a9c0db",
          300: "#7da0c8",
          400: "#5280b6",
          500: "#356397",
          600: "#284c75",
          700: "#1c3756",
          800: "#11233a",
          900: "#0a1729",
          DEFAULT: "#11233a",
        },
        // Dorado / champán — el acento de lujo.
        gold: {
          50: "#fbf6ec",
          100: "#f5e8cd",
          200: "#ead29c",
          300: "#dfba6b",
          400: "#d4a847",
          500: "#c5a253",
          600: "#a8853b",
          700: "#866831",
          800: "#5f4a26",
          900: "#3d2f19",
          DEFAULT: "#c5a253",
        },
        // Fondos cálidos y claros.
        cream: "#faf8f3",
        ivory: "#f3efe7",
      },
      fontFamily: {
        // Las variables CSS las define next/font en el layout (--font-inter / --font-playfair).
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-playfair)", ...defaultTheme.fontFamily.serif],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(17, 35, 58, 0.18)",
        card: "0 24px 55px -22px rgba(17, 35, 58, 0.30)",
      },
    },
  },
  plugins: [],
};
export default config;
