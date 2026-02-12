import "./ServiceCard.css";
import { Link } from "react-router-dom";

export default function ServiceCard({ title, description, icon, to }) {
  const CardInner = (
    <>
      <header className="serviceCard__header">
        <span className="serviceCard__iconWrap" aria-hidden="true" alt={title}>
          {icon}
        </span>

        <h3 className="serviceCard__title">{title}</h3>
      </header>

      <p className="serviceCard__desc">{description}</p>
      {to && <div className="serviceCard__cta">Ver más →</div>}
    </>
  );
  // Si hay ruta -> Link (navegación interna)
  if (to) {
    return (
      <Link to={to} className="serviceCard serviceCard--link" aria-label={title}>
        {CardInner}
      </Link>
    );
  }

  // Si no hay ruta -> card normal
  return <article className="serviceCard">{CardInner}</article>;
}
