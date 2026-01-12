import "./NavBotonAgenda.css";

export default function NavBotonAgenda({ titulo, labelBoton, href, variante = "centro" }) {
  return (
    <div className={`navBotonAgenda navBotonAgenda--${variante}`}>
      <span className="navBotonAgenda__titulo">{titulo}</span>

      <a className="navBotonAgenda__btn" href={href} target="_blank" rel="noreferrer">
        {labelBoton}
      </a>
    </div>
  );
}
