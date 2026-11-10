import "./TripleProfessionalShowcase.css";
import ActionButton from "../../components/common/ActionButton/ActionButton";

export default function TripleProfessionalShowcase({
  title = "Conoce a nuestro equipo",
  professionals = [],
}) {
  const hasBadges = professionals.some((professional) => professional.badge);

  return (
    <section className="tripleProfessionalShowcase">
      <div className="tripleProfessionalShowcase__inner">
        <div className="tripleProfessionalShowcase__heading">
          <span className="tripleProfessionalShowcase__headingLine" />
          <h2 className="tripleProfessionalShowcase__title">{title}</h2>
          <span className="tripleProfessionalShowcase__headingLine" />
        </div>

        <div className="tripleProfessionalShowcase__grid">
          {professionals.map((professional) => (
            <article className="tripleProfessionalShowcase__card" key={professional.name}>
              {hasBadges && (
                <div
                  className={`tripleProfessionalShowcase__badgeSlot ${
                    professional.badge
                      ? ""
                      : "tripleProfessionalShowcase__badgeSlot--empty"
                  }`.trim()}
                >
                  {professional.badge && (
                    <span
                      className={`tripleProfessionalShowcase__badge tripleProfessionalShowcase__badge--${
                        professional.badge.color || "centro"
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="m12 2.5 2.94 5.96 6.56.95-4.75 4.63 1.12 6.53L12 17.49l-5.87 3.08 1.12-6.53L2.5 9.41l6.56-.95z" />
                      </svg>
                      {professional.badge.text}
                    </span>
                  )}
                </div>
              )}

              <div className="tripleProfessionalShowcase__photo">
                <img src={professional.image} alt={professional.name} />
              </div>

              <div className="tripleProfessionalShowcase__text">
                <h3>{professional.name}</h3>
                {professional.badgeText && <h1>{professional.badgeText}</h1>}
                <p>{professional.text}</p>
              </div>

              {(professional.agenda || professional.wsp) && (
                <div className="tripleProfessionalShowcase__buttons">
                  {professional.agenda && (
                    <div className="tripleProfessionalShowcase__button">
                      <ActionButton
                        label={professional.agendaLabel || "Agenda"}
                        href={professional.agendaLink}
                        variant="centro"
                        glAdsConversionID={professional.agendaGTag}
                      />
                    </div>
                  )}

                  {professional.wsp && (
                    <div className="tripleProfessionalShowcase__button">
                      <ActionButton
                        label={professional.wspLabel || "WhatsApp"}
                        href={professional.wspLink}
                        variant="whatsapp"
                        wspmsg={professional.wspMsg}
                        glAdsConversionID={professional.wspGTag}
                      />
                    </div>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
