import "./InfoDecoBlock.css";

export default function InfoDecoBlock({
  sectionID,
  title,
  text,
  image,
  imageAlt,
  reverse = false,
  showDeco = true,
  colorProfile = "Centro", // Centro | Estetica | KCPLUS
}) {
  return (
    <article
      id={sectionID || undefined}
      className={`infoDecoBlock ${reverse ? "infoDecoBlock--reverse" : ""} ${
        showDeco ? "infoDecoBlock--withDeco" : ""
      } infoDecoBlock--${colorProfile}`}
    >
      <div className="infoDecoBlock__mediaWrap">
        {showDeco && <div className="infoDecoBlock__deco" aria-hidden="true" />}

        <div className="infoDecoBlock__media">
          <img src={image} alt={imageAlt || title} />
        </div>
      </div>

      <div className="infoDecoBlock__content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
