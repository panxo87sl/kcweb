import Hero from "../components/Hero/Hero";
import HeroCarousel from "../components/HeroCarrusel/HeroCarrusel.";
import AboutSection from "../components/About/AboutSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroCarousel autoPlay={true} intervalMs={6500} />
      <AboutSection />
      <ServicesSection />
    </>
  );
}
