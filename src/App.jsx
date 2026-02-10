import Navbar from "./components/Navbar/Navbar";
import HeroCarousel from "./components/ui/HeroCarrusel/HeroCarrusel.";
import Hero from "./components/ui/Hero/hero";
import AboutSection from "./components/About/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="home-next">
        <HeroCarousel autoPlay={true} intervalMs={6500} />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <Footer />
    </>
  );
}
