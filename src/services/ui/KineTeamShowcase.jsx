import "./KineTeamShowcase.css";

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
      viewBox="0 0 24 24"
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="m3 21 1.65-3.8a9 9 0 1 1 3.4 2.9z" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-event"
      viewBox="0 0 24 24"
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm12-4v4M8 3v4m-4 4h16" />
      <path d="M8 15h2v2H8z" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      class="icon icon-tabler icons-tabler-outline icon-tabler-plus"
      viewBox="0 0 24 24"
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M12 5v14m-7-7h14" />
    </svg>
  );
}

function buildWhatsAppLink(wspLink, wspMsg) {
  if (!wspMsg) return wspLink;

  const separator = wspLink.includes("?") ? "&" : "?";
  return `${wspLink}${separator}text=${encodeURIComponent(wspMsg)}`; //convierte el mensaje de wsp para no tener que poner el %20
}

function StarDeco() {
  return (
    <span className="kineTeamShowcase__star" aria-hidden="true">
      ✦
    </span>
  );
}

function KineTeamMemberCard({ member, showDecoStars, showPhotoBorder }) {
  const {
    image,
    name,
    specialtyLine1,
    specialtyLine2,
    colorProfile = "Centro",
    decoCorner = "none", // none | topLeft | topRight | bottomLeft | bottomRight
    wsp = false,
    wspLink = "#",
    wspMsg = "",
    agenda = false,
    agendaLink = "#",
    more = false,
    moreTitle = "Ver más",
    moreLink = "#",
  } = member;

  return (
    <article
      className={`kineTeamShowcase__card kineTeamShowcase__card--${colorProfile} kineTeamShowcase__card--deco-${decoCorner} ${
        showPhotoBorder ? "kineTeamShowcase__card--photoBorder" : ""
      }`}
    >
      {showDecoStars && decoCorner !== "none" && <StarDeco />}

      <div className="kineTeamShowcase__photoWrap">
        <img className="kineTeamShowcase__photo" src={image} alt={name} />
      </div>

      <div className="kineTeamShowcase__body">
        <h3 className="kineTeamShowcase__name">{name}</h3>

        <div className="kineTeamShowcase__specialties">
          <p>{specialtyLine1}</p>
          {specialtyLine2 && <p>{specialtyLine2}</p>}
        </div>

        {(wsp || agenda || more) && (
          <div className="kineTeamShowcase__buttons">
            {wsp && (
              <a
                className="kineTeamShowcase__iconButton kineTeamShowcase__iconButton--whatsapp"
                href={buildWhatsAppLink(wspLink, wspMsg)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Contactar a ${name} por WhatsApp`}
                title="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            )}

            {agenda && (
              <a
                className="kineTeamShowcase__iconButton kineTeamShowcase__iconButton--agenda"
                href={agendaLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Agendar con ${name}`}
                title="Agenda"
              >
                <CalendarIcon />
              </a>
            )}

            {more && (
              <a
                className="kineTeamShowcase__iconButton kineTeamShowcase__iconButton--more"
                href={moreLink}
                aria-label={`Ver más sobre ${name}`}
                title={moreTitle}
              >
                <MoreIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function KineTeamShowcase({
  title = "Conoce a nuestro equipo",
  members = [],
  showDecoStars = true,
  showPhotoBorder = false,
}) {
  return (
    <section className="kineTeamShowcase">
      <div className="kineTeamShowcase__inner">
        <div className="kineTeamShowcase__heading">
          <span className="kineTeamShowcase__headingLine" />
          <h2 className="kineTeamShowcase__title">{title}</h2>
          <span className="kineTeamShowcase__headingLine" />
        </div>

        <div className="kineTeamShowcase__grid">
          {members.map((member) => (
            <KineTeamMemberCard
              key={member.name}
              member={member}
              showDecoStars={showDecoStars}
              showPhotoBorder={showPhotoBorder}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
