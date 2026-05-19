import "./KineTeamShowcase.css";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L4 20.4l1.3-4a8.4 8.4 0 1 1 15.2-4.6Zm-8.4-6.5a6.5 6.5 0 0 0-5.5 9.9l.2.4-.7 2.1 2.2-.7.4.2a6.5 6.5 0 1 0 3.4-12Zm3.8 9.4c-.2.6-1.2 1.1-1.7 1.2-.5.1-1.1.1-1.8-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.7-4.4-3.9-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.2c.2-.2.5-.3.8-.3h.6c.2 0 .4 0 .6.5.2.5.7 1.7.8 1.8.1.2.1.3 0 .5-.1.2-.2.3-.3.5l-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.1 1.4 1.8 1 .9 1.8 1.2 2.1 1.3.3.2.5.1.6-.1.2-.2.7-.8.8-1 .2-.3.4-.2.6-.1.2.1 1.5.7 1.7.8.2.1.4.2.5.3 0 .1 0 .7-.2 1.3Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1.2A2.8 2.8 0 0 1 22 6.8v11.4a2.8 2.8 0 0 1-2.8 2.8H4.8A2.8 2.8 0 0 1 2 18.2V6.8A2.8 2.8 0 0 1 4.8 4H6V3a1 1 0 0 1 1-1Zm13 8H4v8.2c0 .4.4.8.8.8h14.4c.4 0 .8-.4.8-.8V10ZM4.8 6a.8.8 0 0 0-.8.8V8h16V6.8a.8.8 0 0 0-.8-.8H18v1a1 1 0 1 1-2 0V6H8v1a1 1 0 1 1-2 0V6H4.8Zm2.7 6h2v2h-2v-2Zm3.5 0h2v2h-2v-2Zm3.5 0h2v2h-2v-2Zm-7 3.5h2v2h-2v-2Zm3.5 0h2v2h-2v-2Z" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V7.4l-7.3 7.3a1 1 0 0 1-1.4-1.4L16.6 6H14a1 1 0 0 1-1-1ZM5.8 6A1.8 1.8 0 0 0 4 7.8v10.4A1.8 1.8 0 0 0 5.8 20h10.4a1.8 1.8 0 0 0 1.8-1.8V14a1 1 0 1 1 2 0v4.2a3.8 3.8 0 0 1-3.8 3.8H5.8A3.8 3.8 0 0 1 2 18.2V7.8A3.8 3.8 0 0 1 5.8 4H10a1 1 0 1 1 0 2H5.8Z" />
    </svg>
  );
}

function StarDeco() {
  return (
    <span className="kineTeamShowcase__star" aria-hidden="true">
      ✦
    </span>
  );
}

function KineTeamMemberCard({ member }) {
  const {
    image,
    name,
    specialtyLine1,
    specialtyLine2,
    colorProfile = "Centro",
    decoCorner = "none", // none | topLeft | topRight | bottomLeft | bottomRight
    wsp = false,
    wspLink = "#",
    agenda = false,
    agendaLink = "#",
    more = false,
    moreLink = "#",
  } = member;

  return (
    <article
      className={`kineTeamShowcase__card kineTeamShowcase__card--${colorProfile} kineTeamShowcase__card--deco-${decoCorner}`}
    >
      {decoCorner !== "none" && <StarDeco />}

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
                href={wspLink}
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
                title="Ver más"
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

export default function KineTeamShowcase({ title = "Conoce a nuestro equipo", members = [] }) {
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
            <KineTeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
