import "./EsteticaPage.css";
import ActionButton from "../../components/common/ActionButton/ActionButton";

export default function EsteticaPage() {
  return (
    <main className="esteticaPage">
      <header className="esteticaHero">
        <div className="esteticaHero__inner">
          <h1 className="esteticaHero__title">CLÍNICA ESTÉTICA</h1>
        </div>
      </header>

      {/* Sección especialista */}
      <section className="esteticaSection">
        <div className="esteticaSection__inner">
          <h2 className="esteticaTitle">Nuestra Especialista</h2>

          <div className="esteticaSpecialistBlock">
            <div className="esteticaSpecialistBlock__photo">
              <img
                className="esteticaSpecialistBlock__img"
                src="/estetica/carolinallave.jpg"
                alt="KLGa. Carolina Llave"
              />
            </div>

            <div className="esteticaSpecialistBlock__content">
              <h3 className="esteticaSpecialistBlock__name">KLGa. CAROLINA LLAVE</h3>

              <ul className="esteticaSpecialistBlock__list">
                <li>
                  <strong>Kinesióloga</strong>, formación clínica y estética.
                </li>
                <li>
                  <strong>Especialista</strong> en tratamientos faciales y corporales.
                </li>
                <li>
                  <strong>Experiencia</strong> en protocolos de bienestar y cuidado integral.
                </li>
                <li>
                  <strong>Atención personalizada</strong> orientada a objetivos estéticos
                  reales.
                </li>
              </ul>

              <div className="esteticaSpecialistBlock__agenda">
                <ActionButton
                  label={"Reservar evaluación"}
                  href={"https://ff.healthatom.io/FcAeFZ"}
                  variant="estetica"
                  size="nav"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección tratamientos */}
      <section className="esteticaSection">
        <div className="esteticaSection__inner">
          <h2 className="esteticaTitle">Tratamientos que se realizan</h2>

          <div className="esteticaGrid">
            {Array.from({ length: 6 }).map((_, idx) => {
              const n = String(idx + 1).padStart(2, "0");
              return (
                <article className="esteticaCard" key={n}>
                  <div className="esteticaCard__media">
                    <img
                      className="esteticaImg"
                      src={`/estetica/foto${n}.jpg`}
                      alt={`Tratamiento ${n}`}
                    />
                  </div>

                  <div className="esteticaCard__body">
                    <h3 className="esteticaCard__title">{`TRATAMIENTO ${n}`}</h3>
                    <p className="esteticaText">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
