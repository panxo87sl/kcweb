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
          Acompañamos tu salud de forma integral, combinando atención clínica, bienestar y
          prevención.{" "}
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
            width="54"
            height="54"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
            viewBox="0 0 24 24"
          >
            <path fill="none" stroke="none" d="M0 0h24v24H0z" />
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
