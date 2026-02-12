import "./ActionButton.css";

export default function ActionButton({
  title,
  label,
  href,
  variant = "centro", //centro, estetica, kcplus
  rightIcon,
  size = "nav", //nav, hero
  cname, //classname
}) {
  //Menejo momentaneo de errores en caso de ni venir los datos necesarios para el boton
  if (!label) {
    throw new Error("[ActionButton] Missing required prop: 'label'");
  }
  if (!href) {
    throw new Error("[ActionButton] Missing required prop: 'href'");
  }
  if (!variant) {
    throw new Error("[ActionButton] Missing required prop: 'variant: centro/estetica/kcplus'");
  }
  if (!size) {
    throw new Error("[ActionButton] Missing required prop: 'size'");
  }

  const wrapClass =
    `actionButton actionButton--${variant} actionButton--${size} ${cname}`.trim();

  return (
    <div className={wrapClass}>
      {title ? (
        <div className="actionButton__titleWrap">
          <span className="actionButton__title">{title}</span>
        </div>
      ) : null}

      <a className="actionButton__btn" href={href} target="_blank" rel="noreferrer">
        <span className="actionButton__label">{label}</span>

        {rightIcon ? <span className="actionButton__icon">{rightIcon}</span> : null}
      </a>
    </div>
  );
}
