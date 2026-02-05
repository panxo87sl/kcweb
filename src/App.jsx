import Navbar from "./components/Navbar/Navbar";
import HeroCarousel from "./components/ui/HeroCarrusel/HeroCarrusel.";
import Hero from "./components/ui/Hero/hero";
import AboutSection from "./components/About/AboutSection";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="home-next">
        <HeroCarousel autoPlay={true} intervalMs={6500} />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <main>
        <div className="contentWidth">
          <h2>Content</h2>
        </div>
      </main>{" "}
      <main>
        <div className="contentWidth">
          <h2>Content</h2>
        </div>
      </main>{" "}
      <main>
        <div className="contentWidth">
          <h2>Content</h2>
        </div>
      </main>{" "}
      <main>
        <div className="contentWidth">
          <h2>Content</h2>
        </div>
      </main>{" "}
      <main>
        <div className="contentWidth">
          <h2>Content</h2>
        </div>
      </main>{" "}
      <main>
        <div className="contentWidth">
          <h2>Content</h2>
        </div>
      </main>{" "}
      <main>
        <div className="contentWidth">
          <h2>Content</h2>
        </div>
      </main>{" "}
      <main>
        <div className="contentWidth">
          <h2>Content</h2>
        </div>
      </main>{" "}
      <main>
        <div className="contentWidth">
          <h2>Content</h2>
        </div>
      </main>{" "}
      <main>
        <div className="contentWidth">
          <h2>Content</h2>
        </div>
      </main>{" "}
      <main>
        <div className="contentWidth">
          <h2>Content</h2>
        </div>
      </main>{" "}
      <main>
        <div className="contentWidth">
          <h2>Content</h2>
        </div>
      </main>{" "}
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
