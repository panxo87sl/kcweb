import "./Hero.css";
import ActionButton from "../ActionButton/ActionButton";

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
          Acompañamos tu salud, combinando atención clínica, bienestar y prevención.{" "}
        </p>
        <div className="hero__cont_cta">
          <ActionButton
            title={"Kineclin Centro de Salud"}
            label={"AGENDA AHORA"}
            href={"https://www.kineclin.cl/agenda"}
            variant="centro"
            size="hero"
          />
          <ActionButton
            title={"Kineclin Clínica Estética"}
            label={"AGENDA AHORA"}
            href={
              "https://99cc847c17b2db7b36831a8547ec3db203e2aff1.agenda.softwaremedilink.com/agendas/agendaExpress/1"
            }
            variant="estetica"
            size="hero"
          />
          <ActionButton
            title={"KCPLUS Suplementos Premium"}
            label={"TIENDA"}
            href={"https://https://kcplus.cl/"}
            variant="kcplus"
            size="hero"
          />
        </div>

        <button
          type="button"
          className="hero__down"
          onClick={handleScrollDown}
          aria-label="Bajar a la siguiente sección"
        >
          {/* chevron down */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
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
