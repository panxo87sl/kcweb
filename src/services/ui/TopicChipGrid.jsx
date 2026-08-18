import "./TopicChipGrid.css";

export default function TopicChipGrid({
  sectionID,
  title,
  lead,
  items = [],
  background = "white", // white | soft
  colorProfile = "Centro", // Centro | Estetica | KCPLUS
}) {
  return (
    <section
      id={sectionID || undefined}
      className={`topicChipGrid topicChipGrid--${background} topicChipGrid--${colorProfile}`}
    >
      <div className="topicChipGrid__inner">
        {title && <h2 className="topicChipGrid__title">{title}</h2>}
        {lead && <p className="topicChipGrid__lead">{lead}</p>}

        <div className="topicChipGrid__grid">
          {items.map((item, index) => (
            <div className="topicChipGrid__chip" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
