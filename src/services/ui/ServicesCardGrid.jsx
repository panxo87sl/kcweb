import "./ServicesCardGrid.css";

export default function ServicesCardGrid({
  title = "Servicios disponibles",
  lead,
  services = [],
  colorProfile = "Centro",
}) {
  return (
    <section className={`servicesCardGrid servicesCardGrid--${colorProfile}`}>
      <div className="servicesCardGrid__inner">
        <h2 className="servicesCardGrid__title">{title}</h2>

        {lead && <p className="servicesCardGrid__lead">{lead}</p>}

        <div className="servicesCardGrid__grid">
          {services.map((service) => (
            <article className="servicesCardGrid__card" key={service.title}>
              <h3 className="servicesCardGrid__cardTitle">{service.title}</h3>
              <p className="servicesCardGrid__cardText">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
