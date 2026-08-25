import "./TripleProfessionalShowcase.css";
import ActionButton from "../../components/common/ActionButton/ActionButton";

export default function TripleProfessionalShowcase({
  title = "Conoce a nuestro equipo",
  professionals = [],
}) {
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
              <div className="tripleProfessionalShowcase__photo">
                <img src={professional.image} alt={professional.name} />
              </div>

              <div className="tripleProfessionalShowcase__text">
                <h3>{professional.name}</h3>
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
