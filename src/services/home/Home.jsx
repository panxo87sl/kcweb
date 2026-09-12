import { Helmet } from "react-helmet-async";
import Hero from "./components/Hero/Hero";
import HeroCarousel from "./components/HeroCarrusel/HeroCarrusel.";
import AboutSection from "./components/About/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>KINECLIN | Centro de Salud Integral en Antofagasta</title>
        <meta
          name="description"
          content="Centro de salud en Antofagasta: kinesiología, psicología, fonoaudiología, terapia ocupacional, nutrición, enfermería, osteopatía y más. Atención a domicilio."
        />
        <link rel="canonical" href="https://www.kineclin.cl/" />
      </Helmet>

      <Hero />
      <HeroCarousel autoPlay={true} intervalMs={6500} />
      <AboutSection />
      <ServicesSection />
    </>
  );
}
