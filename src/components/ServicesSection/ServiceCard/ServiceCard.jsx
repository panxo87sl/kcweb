import "./ServiceCard.css";

export default function ServiceCard({ title, description, iconSrc = "/icons/service.svg" }) {
  return (
    <article className="serviceCard">
      <header className="serviceCard__header">
        <span className="serviceCard__iconWrap" aria-hidden="true">
          <img className="serviceCard__icon" src={iconSrc} alt="" />
        </span>

        <h3 className="serviceCard__title">{title}</h3>
      </header>

      <p className="serviceCard__desc">{description}</p>
    </article>
  );
}
