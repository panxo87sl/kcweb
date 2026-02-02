import "./Hero.css";

export default function Hero() {
  const handleScrollDown = () => {
    const target = document.getElementById("home-next");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero">
      <div className="hero__inner">
        <h1 className="hero__title">
          Centro de Salud Integral en <br />
          Antofagasta
        </h1>

        <p className="hero__subtitle">
          Comprehensive medical care with compassion and expertise
        </p>

        <a
          className="hero__cta"
          href="https://www.kineclin.cl/agenda"
          target="_blank"
          rel="noreferrer"
        >
          AGENDA AHORA
        </a>

        <button
          type="button"
          className="hero__down"
          onClick={handleScrollDown}
          aria-label="Bajar a la siguiente sección"
        >
          {/* chevron down */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="m6 9 6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
