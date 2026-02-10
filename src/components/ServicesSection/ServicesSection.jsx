import "./ServicesSection.css";
import ServiceCard from "./ServiceCard/ServiceCard";

export default function ServicesSection() {
  const services = [
    {
      title: "Osteópata / Quiropraxia",
      description:
        "Tratamientos especializados para aliviar dolores musculares y articulares, mejorando la movilidad y postura.",
    },
    {
      title: "Medicina Interna",
      description:
        "Diagnóstico y tratamiento integral de enfermedades en adultos con enfoque preventivo y curativo.",
    },
    {
      title: "Nutricionista",
      description:
        "Planes alimenticios personalizados para mejorar tu salud, control de peso y condiciones específicas.",
    },
    {
      title: "Bienestar Corporal",
      description:
        "Terapias y tratamientos para el equilibrio físico y mental, promoviendo salud integral y calidad de vida.",
    },
    {
      title: "Gimnasio Médico",
      description:
        "Ejercicio supervisado por profesionales de la salud, adaptado a condiciones médicas y objetivos personales.",
    },
    {
      title: "Psicología",
      description:
        "Atención psicológica profesional para salud mental, manejo del estrés y bienestar emocional.",
    },
    {
      title: "Enfermería",
      description:
        "Cuidados de enfermería especializados, procedimientos médicos y seguimiento de tratamientos.",
    },
    {
      title: "Clínica Estética",
      description:
        "Tratamientos estéticos médicos profesionales para potenciar tu bienestar y confianza.",
    },
  ];

  return (
    <section id="services" className="servicesSection">
      <div className="servicesSection__inner">
        <header className="servicesSection__header">
          <h2 className="servicesSection__title">Nuestros Servicios</h2>
          <p className="servicesSection__subtitle">
            Ofrecemos una amplia gama de servicios médicos y de bienestar para cuidar de tu
            salud integral
          </p>
        </header>

        <div className="servicesGrid">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              iconSrc={service.iconSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
