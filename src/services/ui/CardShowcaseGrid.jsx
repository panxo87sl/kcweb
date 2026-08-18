import "./CardShowcaseGrid.css";

export default function CardShowcaseGrid({
  sectionID,
  title,
  lead,
  cards = [],
  background = "white", // white | soft
  colorProfile = "Centro", // Centro | Estetica | KCPLUS
}) {
  return (
    <section
      id={sectionID || undefined}
      className={`cardShowcaseGrid cardShowcaseGrid--${background} cardShowcaseGrid--${colorProfile}`}
    >
      <div className="cardShowcaseGrid__inner">
        {title && <h2 className="cardShowcaseGrid__title">{title}</h2>}
        {lead && <p className="cardShowcaseGrid__lead">{lead}</p>}

        <div className="cardShowcaseGrid__grid">
          {cards.map((card, cardIndex) => (
            <article className="cardShowcaseGrid__card" key={card.title || cardIndex}>
              {card.image && (
                <div className="cardShowcaseGrid__media">
                  <img src={card.image} alt={card.imageAlt || card.title} />
                </div>
              )}

              <div className="cardShowcaseGrid__body">
                {card.title && <h3 className="cardShowcaseGrid__cardTitle">{card.title}</h3>}
                {card.text && <p className="cardShowcaseGrid__cardText">{card.text}</p>}

                {card.list && card.list.length > 0 && (
                  <ul className="cardShowcaseGrid__cardList">
                    {card.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
