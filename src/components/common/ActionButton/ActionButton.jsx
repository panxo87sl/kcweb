import "./ActionButton.css";

export default function ActionButton({
  title,
  label,
  href,
  variant = "centro", // centro, estetica, kcplus, whatsapp, instagram
  wspmsg,
  rightIcon,
  size = "nav", //nav, hero
  cname, //classname
  googleTAG = false,
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

  const finalHref =
    variant === "whatsapp" && wspmsg ? `${href}?text=${encodeURIComponent(wspmsg)}` : href;

  const wrapClass =
    `actionButton actionButton--${variant} actionButton--${size} ${cname || ""}`.trim();

  //Google TAG
  const handleClick = () => {
    if (googleTAG && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17683213103/hIexCNjQnJAcEK_WgfBB",
        value: 1.0,
        currency: "CLP",
      });
    }
  };

  return (
    <div className={wrapClass}>
      {title && (
        <div className="actionButton__titleWrap">
          <span className="actionButton__title">{title}</span>
        </div>
      )}

      <a
        className="actionButton__btn"
        href={finalHref}
        target="_blank"
        rel="noreferrer"
        onClick={handleClick}
      >
        <span className="actionButton__label">{label}</span>
        {rightIcon && <span className="actionButton__icon">{rightIcon}</span>}
      </a>
    </div>
  );
}
