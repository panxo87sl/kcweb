import "./TeamSkewShowcase.css";

export default function TeamSkewShowcase({
  leftPhoto,
  leftName,
  leftText,
  rightPhoto,
  rightName,
  rightText,
  centerTitle = "Conoce a nuestro equipo",
}) {
  return (
    <section className="teamSkew">
      <div className="teamSkew__row">
        <div className="skewItem photo">
          <img src={leftPhoto} alt={leftName} />
        </div>

        <div className="skewItem text">
          <div className="skewContent">
            <h3>{leftName}</h3>
            <p>{leftText}</p>
          </div>
        </div>

        <div className="skewItem center">
          <div className="skewContent">
            <h2>{centerTitle}</h2>
            <div className="diamonds">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        <div className="skewItem text">
          <div className="skewContent">
            <h3>{rightName}</h3>
            <p>{rightText}</p>
          </div>
        </div>

        <div className="skewItem photo">
          <img src={rightPhoto} alt={rightName} />
        </div>
      </div>
    </section>
  );
}
