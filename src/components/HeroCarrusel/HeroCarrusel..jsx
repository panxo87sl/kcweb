import { useEffect, useRef, useState } from "react";

import "./HeroCarrusel.css";

export default function HeroCarousel({ autoPlay = false, intervalMs = 5000 }) {
  const photos = [
    {
      url: "/fondo01.jpg",
      link: "https://www.kineclin.cl/agenda",
      title: "Centro de Salud Integral",
    },
    { url: "/fondo02.jpg" },
    { url: "/fondo03.jpg", link: "https://kcplus.cl" },
    { url: "/fondo04.jpg", title: "Tecnologia de Vanguardia" },
    {
      url: "/fondo05.jpg",
      link: "https://99cc847c17b2db7b36831a8547ec3db203e2aff1.agenda.softwaremedilink.com/agendas/agendaExpress/1",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const timerRef = useRef(null);
  const touchStartX = useRef(null);
  const SWIPE_THRESHOLD = 45;

  const prevSlide = () => {
    clearTimeout(timerRef.current);
    setCurrentIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  };

  const nextSlide = () => {
    clearTimeout(timerRef.current);
    setCurrentIndex((i) => (i === photos.length - 1 ? 0 : i + 1));
  };

  const goToSlide = (i) => setCurrentIndex(i);

  // useEffect(() => {
  //   if (!autoPlay) return;

  //   const id = setInterval(() => {
  //     setCurrentIndex((i) => (i === photos.length - 1 ? 0 : i + 1));
  //   }, intervalMs);

  //   return () => clearInterval(id);
  // }, [autoPlay, intervalMs, photos.length]);
  useEffect(() => {
    if (!autoPlay) return;

    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setCurrentIndex((i) => (i === photos.length - 1 ? 0 : i + 1));
    }, intervalMs);

    return () => clearTimeout(timerRef.current);
  }, [autoPlay, intervalMs, photos.length, currentIndex]);

  const active = photos[currentIndex];

  return (
    <section className="heroCarousel" id="home-next">
      {/* este inner respeta el ancho centralizado de la seccion HERO */}
      <div className="heroCarousel__inner">
        <div
          className="heroCarousel__slide"
          aria-label="Carrusel principal"
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const startX = touchStartX.current;
            if (startX == null) return;

            const endX = e.changedTouches[0].clientX;
            const dx = endX - startX;

            if (Math.abs(dx) < SWIPE_THRESHOLD) return;

            if (dx > 0) prevSlide();
            else nextSlide();

            touchStartX.current = null;
          }}
        >
          <div
            key={currentIndex}
            className="heroCarousel__image"
            style={{ backgroundImage: `url(${active.url})` }}
          />

          {active.link && (
            <a
              className="heroCarousel__overlayLink"
              href={active.link}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir enlace del carrusel"
            />
          )}
          {active.title && <div className="heroCarousel__caption">{active.title}</div>}

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
                width="26"
                height="26"
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
                width="26"
                height="26"
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
