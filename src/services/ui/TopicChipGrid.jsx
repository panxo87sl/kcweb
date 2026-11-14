import { Link } from "react-router-dom";
import "./TopicChipGrid.css";

// Normaliza un ítem: acepta un texto simple o un objeto { text, link }.
function getChipData(item) {
  if (typeof item === "string") {
    return { text: item, link: "" };
  }

  return { text: item.text, link: item.link };
}

export default function TopicChipGrid({
  sectionID,
  title,
  lead,
  titleAlign = "center", // center | left
  items = [], // texto simple o { text, link }. Con link (ej. "#id") el chip navega
  background = "white", // white | soft
  colorProfile = "Centro", // Centro | Estetica | KCPLUS
}) {
  return (
    <section
      id={sectionID || undefined}
      className={`topicChipGrid topicChipGrid--${background} topicChipGrid--${colorProfile}`}
    >
      <div className="topicChipGrid__inner">
        {title && (
          <h2 className={`topicChipGrid__title topicChipGrid__title--${titleAlign}`}>
            {title}
          </h2>
        )}
        {lead && <p className="topicChipGrid__lead">{lead}</p>}

        <div className="topicChipGrid__grid">
          {items.map((item, index) => {
            const chip = getChipData(item);

            if (chip.link) {
              return (
                <Link
                  className="topicChipGrid__chip topicChipGrid__chip--link"
                  to={chip.link}
                  key={index}
                >
                  {chip.text}
                </Link>
              );
            }

            return (
              <div className="topicChipGrid__chip" key={index}>
                {chip.text}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
