import "./DualProfessionalShowcase.css";
import ActionButton from "../../components/common/ActionButton/ActionButton";

// Arma los botones de agenda y WhatsApp de un profesional. Devuelve null si no tiene ninguno.
function getProfessionalButtons(professional) {
  const buttons = [];

  if (professional.agenda) {
    buttons.push(
      <div className="dualProfessionalShowcase__button" key="agenda">
        <ActionButton label="Agenda" href={professional.agendaLink} variant="centro" />
      </div>
    );
  }

  if (professional.wsp) {
    buttons.push(
      <div className="dualProfessionalShowcase__button" key="wsp">
        <ActionButton
          label="WhatsApp"
          href={professional.wspLink}
          variant="whatsapp"
          wspmsg={professional.wspMsg}
        />
      </div>
    );
  }

  if (buttons.length === 0) {
    return null;
  }

  return <div className="dualProfessionalShowcase__buttons">{buttons}</div>;
}

export default function DualProfessionalShowcase({
  title = "Conoce a nuestras profesionales",
  professionals = [],
  background = "white", // white | soft
}) {
  return (
    <section className={`dualProfessionalShowcase dualProfessionalShowcase--${background}`}>
      <div className="dualProfessionalShowcase__inner">
        <div className="dualProfessionalShowcase__heading">
          <span className="dualProfessionalShowcase__headingLine" />
          <h2 className="dualProfessionalShowcase__title">{title}</h2>
          <span className="dualProfessionalShowcase__headingLine" />
        </div>

        <div className="dualProfessionalShowcase__row">
          {professionals.map((professional, index) => {
            let profileClass = "dualProfessionalShowcase__profile";

            // El segundo profesional lleva la foto a la derecha en escritorio.
            if (index % 2 === 1) {
              profileClass = `${profileClass} dualProfessionalShowcase__profile--reverse`;
            }

            // La leyenda bajo el nombre (ej. "Atención desde los 18 años") solo se dibuja si viene en los datos.
            let badgeBlock = null;
            if (professional.badgeText) {
              badgeBlock = (
                <h4 className="dualProfessionalShowcase__badgeText">{professional.badgeText}</h4>
              );
            }

            return (
              <article className="dualProfessionalShowcase__card" key={professional.name}>
                <div className={profileClass}>
                  <div className="dualProfessionalShowcase__photo">
                    <img src={professional.image} alt={professional.name} />
                  </div>

                  <div className="dualProfessionalShowcase__text">
                    <h3>{professional.name}</h3>
                    {badgeBlock}
                    <p>{professional.text}</p>
                  </div>
                </div>

                {getProfessionalButtons(professional)}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
