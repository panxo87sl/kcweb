import "./Hero.css";
import ActionButton from "../../../../components/common/ActionButton/ActionButton";

export default function Hero() {
  const handleScrollDown = () => {
    const target = document.getElementById("carrusel");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <h1 className="hero__title heroReveal heroReveal--1">
          Centro de Salud Integral en <br />
          Antofagasta
        </h1>

        <p className="hero__subtitle heroReveal heroReveal--2">
          Acompañamos tu salud, combinando atención clínica, bienestar y prevención.
        </p>
        <div className="hero__cont_cta heroReveal heroReveal--3">
          <ActionButton
            title={"Kineclin Centro de Salud"}
            label={"AGENDA AHORA"}
            href={
              "https://99cc847c17b2db7b36831a8547ec3db203e2aff1.agenda.softwaremedilink.com/agenda/profesional?modalidad=1"
            }
            variant="centro"
            size="hero"
          />
          <ActionButton
            title={"Kineclin Clínica Estética"}
            label={"AGENDA AHORA"}
            href={"https://www.instagram.com/kineclin_estetica/"}
            variant="estetica"
            size="hero"
          />
          <ActionButton
            title={"KCPLUS Suplementos Premium"}
            label={"TIENDA"}
            href={"https://www.kcplus.cl/"}
            variant="kcplus"
            size="hero"
          />
        </div>

        <button
          type="button"
          className="hero__down heroReveal heroReveal--4"
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
