import Navbar from "./components/Navbar/Navbar";
import HeroCarousel from "./components/ui/HeroCarrusel/HeroCarrusel.";
import Hero from "./components/ui/Hero/hero";

export default function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <div id="home-next" />
      <section>
        <HeroCarousel autoPlay={true} intervalMs={6500} />
      </section>

      <main>
        <div className="contentWidth">
          <h2>Content</h2>
        </div>
      </main>

      <footer>
        <div className="footerWidth">Footer</div>
      </footer>
    </>
  );
}
