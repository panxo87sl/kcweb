import "./ServicesSection.css";
import ServiceCard from "./ServiceCard/ServiceCard";

export default function ServicesSection() {
  const res = 30;

  const services = [
    {
      published: true,
      title: "Osteópata / Quiropraxia",
      to: "/osteopatia",
      description:
        "Tratamientos especializados para aliviar dolores musculares y articulares, mejorando la movilidad y postura.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={res}
          height={res}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 3a3 3 0 0 1 3 3a3 3 0 1 1 -2.12 5.122l-4.758 4.758a3 3 0 1 1 -5.117 2.297l0 -.177l-.176 0a3 3 0 1 1 2.298 -5.115l4.758 -4.758a3 3 0 0 1 2.12 -5.122l-.005 -.005" />
        </svg>
      ),
    },
    {
      published: false,
      title: "Psiconeuroinmunología Clínica",
      description:
        "Abordaje integral que conecta sistema nervioso, inmunológico y endocrino para mejorar la salud desde una mirada funcional y personalizada.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={res}
          height={res}
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.6"
          viewBox="0 0 24 24"
        >
          <path fill="none" stroke="none" d="M0 0h24v24H0z" />
          <path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0m18 11-6-6" />
          <path d="m10.055 12.875 2.472-2.533a1.71 1.71 0 0 0 0-2.37 1.6 1.6 0 0 0-2.304 0l-.165.17-.164-.17a1.6 1.6 0 0 0-2.304 0 1.71 1.71 0 0 0 0 2.369l2.464 2.542z" />
        </svg>
      ),
    },
    {
      published: true,
      title: "Kinesiología",
      to: "/kinesiologia",
      description:
        "Evaluación y tratamiento kinesiológico para la recuperación funcional y mejora de la movilidad.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={res}
          height={res}
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          class="icon icon-tabler icons-tabler-outline icon-tabler-settings"
          viewBox="0 0 24 24"
        >
          <path fill="none" stroke="none" d="M0 0h24v24H0z" />
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065" />
          <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
        </svg>
      ),
    },
    {
      published: true,
      title: "Nutricionista",
      to: "/nutricion",
      description:
        "Planes alimenticios personalizados para mejorar tu salud, control de peso y condiciones específicas.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={res}
          height={res}
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          class="icon icon-tabler icons-tabler-outline icon-tabler-avocado"
          viewBox="0 0 24 24"
        >
          <path fill="none" stroke="none" d="M0 0h24v24H0z" />
          <path d="M17.8 14.04a3.9 3.9 0 0 1 1.337-2.075Q20.929 10.488 21 8.063q-.071-2.145-1.477-3.586Q18.083 3.07 15.938 3q-2.426.07-3.903 1.863-.843 1.02-2.074 1.336-1.406.281-2.672.88-1.266.597-2.144 1.44Q3 10.771 3 13.688q0 2.919 2.145 5.168Q7.395 21 10.313 21q2.917 0 5.167-2.145.844-.878 1.477-2.144.597-1.266.844-2.637v-.035z" />
          <path d="M10.87 10.036q-1.413.168-2.556 1.278-1.11 1.143-1.278 2.556-.202 1.38.74 2.354.975.942 2.354.74 1.413-.168 2.556-1.278 1.11-1.143 1.278-2.556.202-1.38-.74-2.354-.975-.942-2.354-.74" />
        </svg>
      ),
    },
    {
      published: true,
      title: "Gimnasio Médico",
      to: "/gimnasio",
      description:
        "Ejercicio terapéutico supervisado, enfocado en rehabilitación física y bienestar corporal.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={res}
          height={res}
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          class="icon icon-tabler icons-tabler-outline icon-tabler-barbell"
          viewBox="0 0 24 24"
        >
          <path fill="none" stroke="none" d="M0 0h24v24H0z" />
          <path d="M2 12h1m3-4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2m0-9v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1m3 5h6m0-5v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1m3 1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2m4-4h-1" />
        </svg>
      ),
    },
    {
      published: false,
      title: "Fonoaudiología y Terapia Ocupacional",
      description:
        "Atención orientada a la rehabilitación funcional, autonomía y calidad de vida, cobertura GES con indicación clínica",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={res}
          height={res}
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          class="icon icon-tabler icons-tabler-outline icon-tabler-brain"
          viewBox="0 0 24 24"
        >
          <path fill="none" stroke="none" d="M0 0h24v24H0z" />
          <path d="M15.5 13a3.5 3.5 0 0 0-3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-7 0v-1.8" />
          <path d="M17.5 16a3.5 3.5 0 0 0 0-7H17" />
          <path d="M19 9.3V6.5a3.5 3.5 0 0 0-7 0M6.5 16a3.5 3.5 0 0 1 0-7H7" />
          <path d="M5 9.3V6.5a3.5 3.5 0 0 1 7 0v10" />
        </svg>
      ),
    },
    {
      published: true,
      title: "Psicología",
      to: "/psicologia",
      description:
        "Atención psicológica profesional para salud mental, manejo del estrés y bienestar emocional.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={res}
          height={res}
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          class="icon icon-tabler icons-tabler-outline icon-tabler-messages"
          viewBox="0 0 24 24"
        >
          <path fill="none" stroke="none" d="M0 0h24v24H0z" />
          <path d="m21 14-3-3h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1zm-7 1v2a1 1 0 0 1-1 1H6l-3 3V11a1 1 0 0 1 1-1h2" />
        </svg>
      ),
    },
    {
      published: true,
      title: "Enfermería",
      to: "/enfermeria",
      description:
        "Cuidados de enfermería especializados, procedimientos médicos y seguimiento de tratamientos.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={res}
          height={res}
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          class="icon icon-tabler icons-tabler-outline icon-tabler-vaccine"
          viewBox="0 0 24 24"
        >
          <path fill="none" stroke="none" d="M0 0h24v24H0z" />
          <path d="m17 3 4 4m-2-2-4.5 4.5m-3-3 6 6m-1-1L10 18H6v-4l6.5-6.5m-5 5L9 14m1.5-4.5L12 11M3 21l3-3" />
        </svg>
      ),
    },
    {
      published: false,
      to: "/estetica",
      title: "Clínica Estética",
      description:
        "Tratamientos estéticos médicos profesionales para potenciar tu bienestar y confianza.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={res}
          height={res}
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          class="icon icon-tabler icons-tabler-outline icon-tabler-perfume"
          viewBox="0 0 24 24"
        >
          <path fill="none" stroke="none" d="M0 0h24v24H0z" />
          <path d="M10 6v3m4-3v3m-9 2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
          <path d="M10 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0M9 3h6v3H9z" />
        </svg>
      ),
    },
    {
      published: false,
      to: "/domicilios",
      title: "Cuidados Domiciliarios",
      description:
        "Atención integral en el hogar con profesionales de la salud, enfocada en acompañamiento clínico, rehabilitación y bienestar del paciente.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={res}
          height={res}
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.6"
          class="icon icon-tabler icons-tabler-outline icon-tabler-bed"
          viewBox="0 0 24 24"
        >
          <path fill="none" stroke="none" d="M0 0h24v24H0z" />
          <path d="M5 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m17 8v-3H2m0-6v9m10-3h10v-2a3 3 0 0 0-3-3h-7z" />
        </svg>
      ),
    },
    {
      published: false,
      to: "/masoterapia",
      title: "Masoterapia",
      description:
        "Terapia manual enfocada en aliviar tensiones musculares, mejorar la circulación y favorecer la recuperación física y el bienestar general.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={res}
          height={res}
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          class="icon icon-tabler icons-tabler-outline icon-tabler-massage"
          viewBox="0 0 24 24"
        >
          <path fill="none" stroke="none" d="M0 0h24v24H0z" />
          <path d="M3 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 22l4-2v-3h12m-9 3h9M8 14l3-2 1-4c3 1 3 4 3 6" />
        </svg>
      ),
    },
    {
      published: false,
      to: "/pilates",
      title: "Clases de Pilates",
      description:
        "Entrenamiento guiado orientado a fortalecer la musculatura profunda, mejorar la postura y aumentar la flexibilidad de forma segura y progresiva.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={res}
          height={res}
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          class="icon icon-tabler icons-tabler-outline icon-tabler-yoga"
          viewBox="0 0 24 24"
        >
          <path fill="none" stroke="none" d="M0 0h24v24H0z" />
          <path d="M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 20h4l1.5-3m7.5 3-1-5h-5l1-7" />
          <path d="m4 10 4-1 4-1 4 1.5 4 1.5" />
        </svg>
      ),
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
          {services.map((service) => (
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
