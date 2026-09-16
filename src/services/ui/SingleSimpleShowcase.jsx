import "./SingleSimpleShowcase.css";

function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function SingleSimpleShowcase({
  image,
  name,
  role,
  label = "Profesional a cargo",
  imageAlt,
}) {
  return (
    <article className="singleSimpleProfessional">
      <div className="singleSimpleProfessional__photo">
        {image ? <img src={image} alt={imageAlt || name} /> : <span>{getInitials(name)}</span>}
      </div>

      <div className="singleSimpleProfessional__content">
        <span className="singleSimpleProfessional__eyebrow">{label}</span>
        <h3 className="singleSimpleProfessional__name">{name}</h3>
        <p className="singleSimpleProfessional__role">{role}</p>
      </div>
    </article>
  );
}
