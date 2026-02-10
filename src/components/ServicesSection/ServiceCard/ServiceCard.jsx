import "./ServiceCard.css";

export default function ServiceCard({ title, description, icon }) {
  return (
    <article className="serviceCard">
      <header className="serviceCard__header">
        <span className="serviceCard__iconWrap" aria-hidden="true" alt={title}>
          {icon}
        </span>

        <h3 className="serviceCard__title">{title}</h3>
      </header>

      <p className="serviceCard__desc">{description}</p>
    </article>
  );
}
