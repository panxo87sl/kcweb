import "./ServicesSection.css";
import ServiceCard from "./ServiceCard/ServiceCard";
import {
  DomiciliosIcon,
  EnfermeriaIcon,
  EsteticaIcon,
  FonoaudiologiaIcon,
  GimnasioIcon,
  KinesiologiaIcon,
  MasoterapiaIcon,
  NutricionIcon,
  OsteopatiaIcon,
  PilatesIcon,
  PsicologiaIcon,
  PsiconeuroIcon,
  TerapiaOcupacionalIcon,
} from "./ServiceIcons";

export default function ServicesSection() {
  const services = [
    {
      published: true,
      title: "Osteópata / Quiropraxia",
      to: "/osteopatia",
      description:
        "Tratamientos especializados para aliviar dolores musculares y articulares, mejorando la movilidad y postura.",
      icon: <OsteopatiaIcon />,
    },
    {
      published: true,
      title: "Kinesiología",
      to: "/kinesiologia",
      description:
        "Evaluación y tratamiento kinesiológico para la recuperación funcional y mejora de la movilidad.",
      icon: <KinesiologiaIcon />,
    },
    {
      published: true,
      title: "Nutricionista",
      to: "/nutricion",
      description:
        "Planes alimenticios personalizados para mejorar tu salud, control de peso y condiciones específicas.",
      icon: <NutricionIcon />,
    },
    {
      visible: true,
      published: true,
      title: "Gimnasio Médico",
      to: "/gimnasio",
      description:
        "Ejercicio terapéutico supervisado, enfocado en rehabilitación física y bienestar corporal.",
      icon: <GimnasioIcon />,
    },
    {
      visible: true,
      published: true,
      title: "Fonoaudiología",
      to: "/fonoaudiologia",
      description:
        "Evaluación y acompañamiento en lenguaje, habla, audición, deglución y motricidad orofacial, favoreciendo una comunicación y alimentación más segura.",
      icon: <FonoaudiologiaIcon />,
    },
    {
      visible: true,
      published: true,
      title: "Terapia Ocupacional",
      to: "/terapia-ocupacional",
      description:
        "Atención orientada a recuperar la autonomía, funcionalidad y participación en actividades de la vida diaria.",
      icon: <TerapiaOcupacionalIcon />,
    },
    {
      visible: true,
      published: true,
      title: "Psicología",
      to: "/psicologia",
      description:
        "Atención psicológica profesional para salud mental, manejo del estrés y bienestar emocional.",
      icon: <PsicologiaIcon />,
    },
    {
      visible: true,
      published: true,
      title: "Enfermería",
      to: "/enfermeria",
      description:
        "Cuidados de enfermería especializados, procedimientos médicos y seguimiento de tratamientos.",
      icon: <EnfermeriaIcon />,
    },
    {
      visible: false,
      published: false,
      to: "/masoterapia",
      title: "Masoterapia",
      description:
        "Terapia manual enfocada en aliviar tensiones musculares, mejorar la circulación y favorecer la recuperación física y el bienestar general.",
      icon: <MasoterapiaIcon />,
    },
    {
      visible: false,
      published: false,
      to: "/pilates",
      title: "Clases de Pilates",
      description:
        "Entrenamiento guiado orientado a fortalecer la musculatura profunda, mejorar la postura y aumentar la flexibilidad de forma segura y progresiva.",
      icon: <PilatesIcon />,
    },
    {
      visible: false,
      published: false,
      to: "/estetica",
      title: "Clínica Estética",
      description:
        "Tratamientos estéticos médicos profesionales para potenciar tu bienestar y confianza.",
      icon: <EsteticaIcon />,
    },
    {
      visible: false,
      published: false,
      title: "Psiconeuroinmunología Clínica",
      description:
        "Abordaje integral que conecta sistema nervioso, inmunológico y endocrino para mejorar la salud desde una mirada funcional y personalizada.",
      icon: <PsiconeuroIcon />,
    },
  ];

  const homeCareServices = [
    {
      published: true,
      title: "Kinesiología",
      to: "/kinesiologia-domiciliaria",
      description:
        "Rehabilitación, movilidad, fuerza, equilibrio y apoyo respiratorio en el hogar para adultos, personas mayores y niños según evaluación.",
      icon: <KinesiologiaIcon />,
    },
    {
      published: true,
      title: "Enfermería",
      to: "/atencion-domiciliaria#enfermeria",
      description:
        "Procedimientos y cuidados clínicos en casa, como curaciones, inyectables, manejo de dispositivos, educación familiar y seguimiento de indicaciones.",
      icon: <EnfermeriaIcon />,
    },
    {
      published: true,
      title: "Terapia Ocupacional",
      to: "/atencion-domiciliaria#terapia-ocupacional",
      description:
        "Apoyo para favorecer autonomía, independencia, actividades de la vida diaria, adaptación del hogar, ayudas técnicas y participación cotidiana.",
      icon: <TerapiaOcupacionalIcon />,
    },
    {
      published: true,
      title: "Fonoaudiología",
      to: "/atencion-domiciliaria#fonoaudiologia",
      description:
        "Evaluación e intervención en comunicación, habla, lenguaje, voz, deglución y motricidad orofacial directamente en el hogar.",
      icon: <FonoaudiologiaIcon />,
    },
    {
      published: true,
      title: "Cuidados domiciliarios",
      to: "/atencion-domiciliaria#cuidados-domiciliarios",
      description:
        "Servicio de cuidadoras y TENS para acompañamiento, asistencia diaria, supervisión, apoyo en rutinas y cuidados en casa.",
      icon: <DomiciliosIcon />,
    },
  ];

  return (
    <>
      <section id="services" className="servicesSection">
        <div className="servicesSection__inner">
          <header className="servicesSection__header">
            <h2 className="servicesSection__title">Nuestros Servicios</h2>
            <p className="servicesSection__subtitle">
              Ofrecemos una amplia gama de servicios médicos y de bienestar para cuidar de tu
              salud.
            </p>
          </header>

          <div className="servicesGrid">
            {services
              .filter((service) => service.visible !== false)
              .map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  to={service.to}
                  published={service.published}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
          </div>
        </div>
      </section>

      <section
        id="atencion-domiciliaria-home"
        className="servicesSection servicesSection--homeCare"
      >
        <div className="servicesSection__inner">
          <header className="servicesSection__header">
            <span className="servicesSection__eyebrow">Servicios en domicilio</span>
            <h2 className="servicesSection__title">Atención domiciliaria integral</h2>
            <p className="servicesSection__subtitle">
              Acercamos nuestros servicios de salud al hogar para usuarios que requieren
              rehabilitación, procedimientos clínicos, apoyo terapéutico o cuidados
              personalizados en su vida diaria.
            </p>
          </header>

          <div className="servicesGrid servicesGrid--homeCare">
            {homeCareServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                to={service.to}
                published={service.published}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
