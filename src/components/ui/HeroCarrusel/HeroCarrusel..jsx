import { useState } from "react";
import "./HeroCarrusel.css";

export default function HeroCarousel() {
  const photos = [
    { url: "/fondo01.jpg" },
    { url: "/fondo02.jpg" },
    { url: "/fondo03.jpg" },
    { url: "/fondo04.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((i) => (i === photos.length - 1 ? 0 : i + 1));
  };

  const goToSlide = (i) => setCurrentIndex(i);

  return (
    <section className="heroCarousel">
      {/* este inner respeta el ancho centralizado de la seccion HERO */}
      <div className="heroCarousel__inner">
        <div
          className="heroCarousel__slide"
          style={{ backgroundImage: `url(${photos[currentIndex].url})` }}
          aria-label="Carrusel principal"
        >
          <div className="heroCarousel__nav">
            <button
              type="button"
              onClick={prevSlide}
              className="heroCarousel__arrow"
              aria-label="Anterior"
            >
              {/* left chevron */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
                viewBox="0 0 24 24"
              >
                <path fill="none" stroke="none" d="M0 0h24v24H0z" />
                <path d="m15 6-6 6 6 6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="heroCarousel__arrow"
              aria-label="Siguiente"
            >
              {/* right chevron */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
                viewBox="0 0 24 24"
              >
                <path fill="none" stroke="none" d="M0 0h24v24H0z" />
                <path d="m9 6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* dots abajo de la imagen */}
        <div className="heroCarousel__dots" aria-label="Indicadores">
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToSlide(i)}
              className={`heroCarousel__dot ${i === currentIndex ? "is-active" : ""}`}
              aria-label={`Ir al slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
