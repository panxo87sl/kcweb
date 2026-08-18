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
          content="Centro de salud integral en Antofagasta: kinesiología, osteopatía, enfermería, psicología y nutrición. Atención clínica, bienestar y agenda online en KINECLIN."
        />
      </Helmet>

      <Hero />
      <HeroCarousel autoPlay={true} intervalMs={6500} />
      <AboutSection />
      <ServicesSection />
    </>
  );
}
