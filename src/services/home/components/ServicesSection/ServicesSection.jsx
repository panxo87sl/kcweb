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
  const res = 30;

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
      published: false,
      title: "Psiconeuroinmunología Clínica",
      description:
        "Abordaje integral que conecta sistema nervioso, inmunológico y endocrino para mejorar la salud desde una mirada funcional y personalizada.",
      icon: <PsiconeuroIcon />,
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
      published: false,
      title: "Terapia Ocupacional",
      to: "/teocupacional",
      description:
        "Atención orientada a recuperar la autonomía, funcionalidad y participación en actividades de la vida diaria, con cobertura GES según indicación clínica.",
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
      visible: true,
      published: false,
      to: "/estetica",
      title: "Clínica Estética",
      description:
        "Tratamientos estéticos médicos profesionales para potenciar tu bienestar y confianza.",
      icon: <EsteticaIcon />,
    },
    {
      visible: true,
      published: false,
      to: "/domicilios",
      title: "Cuidados Domiciliarios",
      description:
        "Atención integral en el hogar con profesionales de la salud, enfocada en acompañamiento clínico, rehabilitación y bienestar del paciente.",
      icon: <DomiciliosIcon />,
    },
    {
      visible: true,
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
  ];

  return (
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
  );
}
