import ActionButton from "../../../components/common/ActionButton/ActionButton";
import ContactAction from "./ContactAction";
import VcfButton from "./VcfButton";
import "./ContactCard.css";

export default function ContactCard({ contact, socials, services }) {
  return (
    <article className="contactCard">
      <header className="contactCard__header">
        <a href="/" aria-label="Kineclin Home">
          <img className="contactCard__logo" src="/home/kineclin-logo.png" alt="Kineclin" />
        </a>
        <ActionButton label="AGENDAR" href={contact.agendaUrl} variant="centro" size="nav" />
      </header>

      <img className="contactCard__photo" src={contact.photo} alt={contact.fullName} />

      <h1 className="contactCard__name">{contact.fullName}</h1>
      <p className="contactCard__role">{contact.role}</p>
      <p className="contactCard__lead">{contact.lead}</p>

      <div className="contactCard__socials">
        {socials.map((action) => (
          <ContactAction key={action.label} {...action} />
        ))}
      </div>

      <h2 className="contactCard__subtitle">Atención en Kineclin</h2>
      <div className="contactCard__services">
        {services.map((action) => (
          <ContactAction key={action.label} {...action} />
        ))}
      </div>

      <VcfButton contact={contact} />
    </article>
  );
}
