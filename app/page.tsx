import Hero from "@/components/home/Hero";
import Experience from "@/components/home/Experience";
import About from "@/components/home/About";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

/**
 * Página de inicio (Home).
 * Compone las secciones en el orden definido en la arquitectura:
 * Hero → Experiencia → Sobre Nosotros → Destacadas → Testimonios → CTA final.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <About />
      <FeaturedProperties />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
