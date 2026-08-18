import "./SingleProfessionalShowcase.css";
import ActionButton from "../../components/common/ActionButton/ActionButton";

export default function SingleProfessionalShowcase({
  image,
  name,
  role,
  description,
  wsp = false,
  wspLink = "#",
  wspMsg = "",
  wspGTag,
  agenda = false,
  agendaLink = "#",
  agendaGTag,
  background = "white", // white | soft
}) {
  return (
    <section className={`singleProfessional singleProfessional--${background}`}>
      <div className="singleProfessional__inner">
        <div className="singleProfessional__photo">
          <img src={image} alt={name} />
        </div>

        <div className="singleProfessional__content">
          <span className="singleProfessional__eyebrow">Profesional a cargo</span>
          <h2 className="singleProfessional__name">{name}</h2>
          <h3 className="singleProfessional__role">{role}</h3>
          <p className="singleProfessional__description">{description}</p>

          {(wsp || agenda) && (
            <div className="singleProfessional__buttons">
              {wsp && (
                <ActionButton
                  label="WhatsApp"
                  href={wspLink}
                  variant="whatsapp"
                  wspmsg={wspMsg}
                  glAdsConversionID={wspGTag}
                />
              )}

              {agenda && (
                <ActionButton
                  label="Agenda"
                  href={agendaLink}
                  variant="centro"
                  glAdsConversionID={agendaGTag}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
