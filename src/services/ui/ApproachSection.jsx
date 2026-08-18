import "./ApproachSection.css";

export default function ApproachSection({
  sectionID,
  title,
  paragraphs = [],
  image,
  imageAlt,
  imagePosition = "right", // left | right (ignorado si no hay imagen)
  background = "white", // white | soft
  colorProfile = "Centro", // Centro | Estetica | KCPLUS
}) {
  const hasImage = Boolean(image);

  return (
    <section
      id={sectionID || undefined}
      className={`approachSection approachSection--${background} approachSection--${colorProfile} ${
        hasImage ? "approachSection--withImage" : "approachSection--centered"
      } ${hasImage && imagePosition === "left" ? "approachSection--reverse" : ""}`}
    >
      <div className="approachSection__inner">
        {hasImage && (
          <div className="approachSection__media">
            <img src={image} alt={imageAlt || title} />
          </div>
        )}

        <div className="approachSection__content">
          {title && <h2 className="approachSection__title">{title}</h2>}
          {paragraphs.map((paragraph, index) => (
            <p className="approachSection__text" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
