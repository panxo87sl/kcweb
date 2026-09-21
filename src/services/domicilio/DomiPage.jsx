import "./DomiPage.css";
import { Helmet } from "react-helmet-async";
import ActionButton from "../../components/common/ActionButton/ActionButton";
import InfoDecoBlock from "../ui/InfoDecoBlock";
import ServiceDropdown from "../ui/ServiceDropdown";
import SingleSimpleShowcase from "../ui/SingleSimpleShowcase";

function DomiSectionHeading({ title }) {
  return (
    <div className="domiServiceHeading">
      <span className="domiServiceHeading__line" />
      <h2 className="domiServiceHeading__title">{title}</h2>
      <span className="domiServiceHeading__line" />
    </div>
  );
}

function DomiServiceActions({ serviceHref, serviceLabel, wspMsg }) {
  return (
    <div className="domiServiceActions">
      {serviceHref && serviceLabel && (
        <ActionButton label={serviceLabel} href={serviceHref} variant="centro" />
      )}

      <ActionButton
        label="Consultar por WhatsApp"
        href="https://wa.me/56950833838"
        variant="whatsapp"
        wspmsg={wspMsg}
      />
    </div>
  );
}

function DomiMiniCards({ title = "Necesidades frecuentes", items = [] }) {
  return (
    <div className="domiMiniCards">
      <h3 className="domiMiniCards__title">{title}</h3>

      <div className="domiMiniCards__grid">
        {items.map((item) => (
          <span className="domiMiniCards__item" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function DomiServiceBlock({
  id,
  title,
  background = "white",
  professional,
  blocks,
  audience,
  miniCards,
  serviceHref,
  serviceLabel,
  wspMsg,
}) {
  const sectionClassName =
    background === "soft" ? "domiSection domiSection--soft" : "domiSection";

  return (
    <section id={id} className={sectionClassName}>
      <DomiSectionHeading title={title} />

      <div className="domiSection__inner">
        <SingleSimpleShowcase {...professional} />

        <div className="domiInfoBlocks">
          {blocks.map((block, index) => (
            <InfoDecoBlock
              key={block.title}
              title={block.title}
              image={block.image}
              imageAlt={block.imageAlt}
              reverse={index % 2 !== 0}
              showDeco={true}
              colorProfile="Centro"
              text={block.text}
            />
          ))}
        </div>

        <ServiceDropdown
          title="¿Para quién está dirigido?"
          colorProfile="Centro"
          items={audience.map((item) => ({
            name: item,
          }))}
        />

        <DomiMiniCards items={miniCards} />

        <DomiServiceActions
          serviceHref={serviceHref}
          serviceLabel={serviceLabel}
          wspMsg={wspMsg}
        />
      </div>
    </section>
  );
}

const domicilioServices = [
  {
    id: "enfermeria",
    title: "Enfermería a domicilio",
    background: "white",
    professional: {
      image: "/enfermeria/enfStephie.jpg",
      name: "Stephanie Grace Mandiola",
      role: "Enfermera",
    },
    blocks: [
      {
        title: "Procedimientos y cuidados clínicos en el hogar",
        image: "/domiciliario/enfermeria-cuidados.jpg",
        imageAlt: "Enfermería a domicilio",
        text: "La enfermería a domicilio permite realizar procedimientos y cuidados clínicos en casa, evitando traslados innecesarios y entregando apoyo profesional al usuario y su familia. Puede incluir curaciones, inyectables, manejo de dispositivos, educación en cuidados, observación de signos de alerta y acompañamiento en procesos de recuperación.",
      },
      {
        title: "Continuidad de cuidados y orientación familiar",
        image: "/domiciliario/enfermeria-orientacion.jpg",
        imageAlt: "Usuario recibiendo enfermería domiciliaria",
        text: "La atención domiciliaria facilita el seguimiento de indicaciones, la educación al usuario y su familia, y la observación de cambios relevantes durante el proceso de recuperación. El objetivo es entregar cuidados seguros, ordenados y adaptados a las necesidades reales del domicilio.",
      },
    ],
    audience: [
      "Usuarios que requieren curaciones, inyectables o procedimientos de enfermería.",
      "Personas con heridas, ostomías, dispositivos clínicos o cuidados específicos.",
      "Usuarios en recuperación posterior a hospitalizaciones, cirugías o tratamientos.",
      "Familias que necesitan orientación profesional para cuidados seguros en casa.",
      "Personas para quienes el traslado al centro de salud resulta complejo o poco conveniente.",
    ],
    miniCards: [
      "Curaciones",
      "Inyectables",
      "Ostomías",
      "Heridas",
      "Post hospitalización",
      "Dispositivos clínicos",
      "Educación familiar",
      "Adulto mayor",
    ],
    serviceHref: "/enfermeria",
    serviceLabel: "Ver más sobre Enfermería",
    wspMsg: "Hola, quisiera consultar por atención de enfermería a domicilio.",
  },
  {
    id: "terapia-ocupacional",
    title: "Terapia Ocupacional a domicilio",
    background: "soft",
    professional: {
      image: "/terapiaocupacional/teoBenjamin.jpg",
      name: "Benjamin Rodriguez",
      role: "Terapeuta Ocupacional",
    },
    blocks: [
      {
        title: "Autonomía e independencia en el entorno real",
        image: "/domiciliario/todomi-evaluacion.jpg",
        imageAlt: "Terapia ocupacional a domicilio",
        text: "La terapia ocupacional a domicilio permite evaluar e intervenir en el mismo lugar donde el usuario realiza sus actividades diarias. Esto facilita observar rutinas, barreras del entorno, necesidades de apoyo, ayudas técnicas y actividades significativas, favoreciendo un proceso centrado en la autonomía, la independencia y la participación cotidiana.",
      },
      {
        title: "Adaptación del hogar y actividades de la vida diaria",
        image: "/domiciliario/todomi-adaptacion.jpg",
        imageAlt: "Usuario en terapia ocupacional domiciliaria",
        text: "El trabajo puede incluir entrenamiento funcional, adaptación de actividades, orientación familiar, organización de rutinas, prevención de riesgos y recomendaciones sobre ayudas técnicas. La intervención busca que el usuario pueda desenvolverse con mayor seguridad y con el menor apoyo posible dentro de su hogar y comunidad.",
      },
    ],
    audience: [
      "Adultos y personas mayores que necesitan recuperar o mantener funcionalidad.",
      "Usuarios con secuelas neurológicas, deterioro cognitivo o dependencia parcial.",
      "Personas con dificultades para realizar actividades de la vida diaria.",
      "Usuarios que requieren adaptación del hogar, ayudas técnicas u orientación familiar.",
      "Personas con riesgo de caídas o necesidad de reorganizar rutinas cotidianas.",
    ],
    miniCards: [
      "ACV",
      "Parkinson",
      "Deterioro cognitivo",
      "Dependencia funcional",
      "Ayudas técnicas",
      "Adaptación del hogar",
      "Prevención de caídas",
      "Adulto mayor",
    ],
    serviceHref: "/terapia-ocupacional",
    serviceLabel: "Ver Terapia Ocupacional",
    wspMsg: "Hola, quisiera consultar por atención de terapia ocupacional a domicilio.",
  },
  {
    id: "fonoaudiologia",
    title: "Fonoaudiología a domicilio",
    background: "white",
    professional: {
      image: "/fonoaudiologia/fonoCatalina.jpg",
      name: "Catalina Quiroz",
      role: "Fonoaudióloga",
    },
    blocks: [
      {
        title: "Comunicación y deglución en casa",
        image: "/domiciliario/fonodomi-deglucion.jpg",
        imageAlt: "Fonoaudiología a domicilio",
        text: "La fonoaudiología a domicilio permite evaluar e intervenir dificultades de comunicación, habla, lenguaje, voz, deglución y motricidad orofacial en el hogar. Este formato facilita acompañar al usuario en un espacio familiar, incorporando orientaciones prácticas para la familia o cuidador.",
      },
      {
        title: "Orientación para la rutina diaria",
        image: "/domiciliario/fonodomi-orientacion.jpg",
        imageAlt: "Usuario recibiendo fonoaudiología domiciliaria",
        text: "La atención en domicilio permite observar necesidades reales de comunicación y alimentación dentro de la rutina del usuario. Desde ahí se entregan estrategias, ejercicios e indicaciones para favorecer una comunicación más funcional y una alimentación más segura cuando existen dificultades de deglución.",
      },
    ],
    audience: [
      "Usuarios con dificultades para hablar, comunicarse o organizar el lenguaje.",
      "Personas con alteraciones de voz, habla, motricidad orofacial o deglución.",
      "Usuarios con disfagia o dificultades para tragar alimentos, líquidos o saliva.",
      "Personas con secuelas neurológicas, Parkinson, ACV u otras condiciones asociadas.",
      "Familias o cuidadores que requieren orientación para comunicación y alimentación segura.",
    ],
    miniCards: [
      "Disfagia",
      "ACV",
      "Parkinson",
      "Alteraciones del habla",
      "Trastornos de voz",
      "Motricidad orofacial",
      "Comunicación funcional",
      "Adulto mayor",
    ],
    serviceHref: "/fonoaudiologia",
    serviceLabel: "Ver Fonoaudiología",
    wspMsg:
      "Hola, quisiera consultar por atención de fonoaudiología a domicilio con Catalina.",
  },
  {
    id: "cuidados-domiciliarios",
    title: "Cuidados domiciliarios",
    background: "soft",
    professional: {
      image: "/enfermeria/enfStephie.jpg",
      name: "Stephanie Grace Mandiola",
      role: "Enfermera",
    },
    blocks: [
      {
        title: "Cuidadoras a domicilio",
        image: "/domiciliario/cuidadoras.jpg",
        imageAlt: "Cuidadoras a domicilio",
        text: "El servicio de cuidadoras a domicilio está orientado a usuarios que necesitan acompañamiento, supervisión y apoyo en sus actividades cotidianas. Puede incluir asistencia en rutinas básicas, higiene, alimentación, movilización, compañía, prevención de riesgos y apoyo general a la familia, siempre de acuerdo con las necesidades del usuario.",
      },
      {
        title: "TENS a domicilio",
        image: "/domiciliario/tens.jpg",
        imageAlt: "TENS a domicilio",
        text: "El servicio de TENS a domicilio permite contar con apoyo técnico en cuidados de salud dentro del hogar. Está pensado para usuarios que requieren asistencia más específica, seguimiento de indicaciones, apoyo en cuidados básicos, observación de signos de alerta y acompañamiento en procesos de recuperación o dependencia.",
      },
    ],
    audience: [
      "Usuarios que necesitan acompañamiento, supervisión o apoyo en actividades diarias.",
      "Personas mayores, usuarios con dependencia o movilidad reducida.",
      "Familias que requieren apoyo para higiene, alimentación, movilización o compañía.",
      "Usuarios que necesitan apoyo técnico de TENS en cuidados básicos o seguimiento.",
      "Personas en recuperación, dependencia parcial o necesidad de cuidados continuos.",
    ],
    miniCards: [
      "Cuidadoras",
      "TENS",
      "Acompañamiento",
      "Higiene",
      "Alimentación",
      "Movilización",
      "Supervisión",
      "Apoyo familiar",
    ],
    serviceHref: "",
    serviceLabel: "",
    wspMsg:
      "Hola, quisiera consultar por el servicio de cuidados domiciliarios, cuidadoras o TENS.",
  },
];

export default function DomiPage() {
  return (
    <>
      <Helmet>
        <title>Atención Domiciliaria Integral en Antofagasta | KINECLIN</title>
        <meta
          name="description"
          content="Atención domiciliaria integral en Antofagasta: enfermería, terapia ocupacional, fonoaudiología, TENS y cuidadoras a domicilio."
        />
        <link rel="canonical" href="https://www.kineclin.cl/atencion-domiciliaria" />
      </Helmet>

      <main className="domiPage">
        <header className="domiHero">
          <div className="domiHero__inner">
            <h1 className="domiHero__title">ATENCIÓN DOMICILIARIA INTEGRAL</h1>
            <p className="domiHero__lead">
              Servicios profesionales, cuidados y apoyo clínico directamente en el hogar para
              usuarios que requieren atención personalizada, rehabilitación o acompañamiento en
              su vida diaria.
            </p>
          </div>
        </header>

        <section className="domiSection">
          <div className="domiSection__inner domiSection__inner--center">
            <h2 className="domiSection__title">Nuestro enfoque</h2>

            <p className="domiText">
              En KINECLIN entendemos la atención domiciliaria integral como una forma de
              acercar los servicios de salud al hogar, especialmente cuando el usuario presenta
              dificultad para trasladarse, movilidad reducida, dependencia, recuperación post
              hospitalización, secuelas funcionales o simplemente requiere una atención más
              cómoda y personalizada en su propio entorno.
            </p>

            <p className="domiText">
              Nuestro objetivo es entregar una atención segura, humana y coordinada,
              considerando las necesidades del usuario, su familia, su cuidador y las
              condiciones reales del domicilio. Desde esta mirada, el hogar se transforma en un
              espacio terapéutico donde es posible evaluar, intervenir, educar y acompañar de
              manera más cercana cada proceso de salud, rehabilitación o cuidado.
            </p>

            <div className="domiMainAction">
              <ActionButton
                label="Ver Kinesiología domiciliaria"
                href="/kinesiologia-domiciliaria"
                variant="centro"
              />
            </div>
          </div>
        </section>

        <section className="domiSection domiSection--soft">
          <div className="domiSection__inner">
            <h2 className="domiSection__title">¿Cómo funciona la atención domiciliaria?</h2>

            <div className="domiProcessGrid">
              <article className="domiProcessCard">
                <h3>Evaluación de necesidades</h3>
                <p>
                  Se revisa el motivo de consulta, condición actual, nivel de funcionalidad,
                  entorno familiar y requerimientos del usuario en su domicilio.
                </p>
              </article>

              <article className="domiProcessCard">
                <h3>Plan de atención</h3>
                <p>
                  Se define el tipo de servicio más adecuado, la frecuencia sugerida, los
                  objetivos de trabajo y las indicaciones para la familia o cuidador.
                </p>
              </article>

              <article className="domiProcessCard">
                <h3>Intervención en el hogar</h3>
                <p>
                  El profesional, TENS o cuidadora realiza la atención en casa, adaptando el
                  proceso a las condiciones reales del espacio y a la rutina diaria del
                  usuario.
                </p>
              </article>
            </div>
          </div>
        </section>

        {domicilioServices.map((service) => (
          <DomiServiceBlock key={service.id} {...service} />
        ))}

        <section className="domiSection">
          <div className="domiSection__inner domiSection__inner--center">
            <p className="domiClosingText">
              En KINECLIN buscamos que cada atención domiciliaria sea cercana, segura y
              personalizada, acompañando al usuario y su familia con servicios profesionales,
              cuidados y soluciones adaptadas a sus necesidades reales dentro del hogar.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
