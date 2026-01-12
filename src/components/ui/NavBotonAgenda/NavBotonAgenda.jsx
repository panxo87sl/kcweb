import "./NavBotonAgenda.css";

export default function NavBotonAgenda({
  titulo,
  labelBoton,
  href,
  variante = "centro",
  icon,
}) {
  return (
    <div className={`navBotonAgenda navBotonAgenda--${variante}`}>
      <span className="navBotonAgenda__titulo">{titulo}</span>

      <a className="navBotonAgenda__btn" href={href} target="_blank" rel="noreferrer">
        {labelBoton}
        <span className="navBotonAgenda__icon">{icon}</span>
      </a>
    </div>
  );
}
