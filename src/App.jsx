import Navbar from "./components/Navbar/Navbar";
import HeroCarousel from "./components/ui/HeroCarrusel/HeroCarrusel.";

export default function App() {
  return (
    <>
      <Navbar />

      <section>
        <HeroCarousel />
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
