import "./KinePage.css";
import { Helmet } from "react-helmet-async";
import ActionButton from "../../components/common/ActionButton/ActionButton";
import InfoDecoBlock from "../ui/InfoDecoBlock";
import KineTeamShowcase from "../ui/KineTeamShowcase";

export default function KinePage() {
  return (
    <>
      <Helmet>
        <title>Kinesiología en Antofagasta | KINECLIN Centro de Salud</title>
        <meta
          name="description"
          content="Servicio de kinesiología en Antofagasta: rehabilitación musculoesquelética, neurológica, respiratoria y geriátrica, más fortalecimiento terapéutico en KINECLIN."
        />
      </Helmet>

      <main className="kinePage">
        <header className="kineHero">
          <div className="kineHero__inner">
            <h1 className="kineHero__title">KINESIOLOGÍA</h1>
            <p className="kineHero__lead">
              Rehabilitación, movimiento terapéutico y acompañamiento profesional para
              recuperar función, aliviar dolor y avanzar con mayor seguridad.
            </p>
          </div>
        </header>

        <section className="kineSection">
          <div className="kineSection__inner kineSection__inner--center">
            <h2 className="kineSection__title">Nuestro enfoque</h2>

            <p className="kineText">
              En KINECLIN entendemos la kinesiología como un proceso de{" "}
              <strong>recuperación integral</strong>, orientado a mejorar la{" "}
              <strong>movilidad</strong>, disminuir el <strong>dolor</strong>, fortalecer el
              cuerpo y recuperar la <strong>funcionalidad en la vida diaria</strong>. Nuestro
              equipo trabaja desde una <strong>mirada personalizada</strong>, combinando{" "}
              <strong>evaluación clínica</strong>, <strong>ejercicio terapéutico</strong>,
              técnicas específicas y educación al paciente para acompañar cada etapa de la
              rehabilitación con <strong>seguridad, cercanía y criterio profesional</strong>.
            </p>
          </div>
        </section>

        <section className="kineSection kineSection--soft">
          <h2 className="kineSection__title">Servicios Kinesiológicos</h2>
          <div className="kineSection__inner">
            <InfoDecoBlock
              sectionID="traumatologia"
              title="Rehabilitación musculoesquelética y traumatológica"
              image="/kinesiologia/kineTraumatologia.jpg"
              imageAlt="Rehabilitación musculoesquelética y traumatológica"
              reverse={false}
              showDeco={true}
              colorProfile="Centro"
              text="Abordamos lesiones musculares, articulares y tendinosas, dolor de columna, recuperación post esguince, post fractura, post cirugía y alteraciones del movimiento. El objetivo es recuperar movilidad, fuerza, estabilidad y control motor, permitiendo que cada paciente vuelva progresivamente a sus actividades con mayor seguridad."
            />

            <InfoDecoBlock
              sectionID="neurologia"
              title="Kinesiología neurológica y funcional"
              image="/kinesiologia/kineNeurologia.jpg"
              imageAlt="Kinesiología neurológica y funcional"
              reverse={true}
              showDeco={true}
              colorProfile="Centro"
              text="Acompañamos procesos de rehabilitación neurológica orientados a mejorar equilibrio, marcha, coordinación, fuerza, independencia funcional y seguridad en las actividades cotidianas. Esta área es especialmente relevante en personas con secuelas neurológicas, adultos mayores o pacientes que requieren recuperar confianza en el movimiento."
            />

            <InfoDecoBlock
              sectionID="respiratoria"
              title="Kinesioterapia respiratoria"
              image="/kinesiologia/kineRespiratoria.jpg"
              imageAlt="Kinesioterapia respiratoria"
              reverse={false}
              showDeco={true}
              colorProfile="Centro"
              text="Realizamos atención kinésica respiratoria para niños, adultos y adultos mayores, enfocada en mejorar la ventilación, favorecer la higiene bronquial, optimizar la mecánica respiratoria y acompañar cuadros respiratorios que requieren apoyo profesional. Cada intervención se adapta a la edad, condición clínica y necesidad del paciente."
            />

            <InfoDecoBlock
              sectionID="fisioterapia"
              title="Fortalecimiento y gimnasio terapéutico"
              image="/kinesiologia/kineEntrenamiento.jpg"
              imageAlt="Fortalecimiento y gimnasio terapéutico"
              reverse={true}
              showDeco={true}
              colorProfile="Centro"
              text="Contamos con un espacio de gimnasio terapéutico para complementar la rehabilitación mediante ejercicio progresivo, fortalecimiento, control motor, entrenamiento funcional y retorno seguro a la actividad física. Este trabajo permite mejorar la capacidad física, prevenir recaídas y consolidar los avances logrados durante el tratamiento."
            />
            <InfoDecoBlock
              sectionID="geriatria"
              title="Kinesiología geriátrica"
              image="/kinesiologia/kineGeriatria.jpg"
              imageAlt="Kinesiología geriátrica"
              reverse={false}
              showDeco={true}
              colorProfile="Centro"
              text="Acompañamos a personas mayores en procesos orientados a mantener o recuperar movilidad, fuerza, equilibrio, seguridad en la marcha e independencia funcional. Esta área busca prevenir caídas, favorecer la autonomía y apoyar la calidad de vida mediante ejercicio terapéutico, educación y un abordaje adaptado a las necesidades de cada paciente."
            />
          </div>
        </section>

        <KineTeamShowcase
          title="Conoce a nuestro equipo"
          showDecoStars={false}
          showPhotoBorder={true}
          members={[
            {
              image: "/kinesiologia/equipo/kineDiego.jpg",
              name: "Diego Zúñiga",
              specialtyLine1: "Musculoesquelético",
              specialtyLine2: "Osteopatía · Respiratorio",
              colorProfile: "Centro",
              decoCorner: "topRight",
              wsp: true,
              wspLink: "https://wa.me/56950833838",
              wspMsg: "Hola! me gustaría agendar una cita para kinesiología con Diego Zúñiga",
              agenda: true,
              agendaLink:
                "https://99cc847c17b2db7b36831a8547ec3db203e2aff1.agenda.softwaremedilink.com/agenda/profesional?modalidad=1&id_profesional=1",
              more: true,
              moreTitle: "Ver sobre Servicio de Osteopatía",
              moreLink: "/osteopatia",
            },
            {
              image: "/kinesiologia/equipo/kineCarolina.jpg",
              name: "Carolina Llave",
              specialtyLine1: "Dermato funcional",
              specialtyLine2: "Estética corporal",
              colorProfile: "Estetica",
              decoCorner: "topRight",
              wsp: true,
              wspLink: "https://wa.me/56950833838",
              wspMsg:
                "Hola! me gustaría agendar una cita para una evaluación estética con Carolina Llave",
              agenda: true,
              agendaLink:
                "https://99cc847c17b2db7b36831a8547ec3db203e2aff1.agenda.softwaremedilink.com/agenda/profesional?modalidad=1&id_profesional=7",
              more: true,
              moreTitle: "Conoce Kineclin Clinica Estética",
              moreLink: "https://www.instagram.com/kineclin_estetica/",
            },
            {
              image: "/kinesiologia/equipo/kineFernanda.jpg",
              name: "Fernanda Piñones",
              specialtyLine1: "Dermato funcional",
              specialtyLine2: "Estética corporal",
              colorProfile: "Estetica",
              decoCorner: "topRight",
              wsp: true,
              wspLink: "https://wa.me/56950833838",
              wspMsg:
                "Hola! me gustaría agendar una cita para una evaluación estética con Fernanda Piñones",
              agenda: true,
              agendaLink:
                "https://99cc847c17b2db7b36831a8547ec3db203e2aff1.agenda.softwaremedilink.com/agenda/profesional?modalidad=1&id_profesional=24",
              more: true,
              moreTitle: "Conoce Kineclin Clinica Estética",
              moreLink: "https://www.instagram.com/kineclin_estetica/",
            },
            {
              image: "/kinesiologia/equipo/kineCatalina.jpg",
              name: "Catalina Reyes",
              specialtyLine1: "Musculoesquelético",
              specialtyLine2: "Respiratorio",
              colorProfile: "Centro",
              decoCorner: "topRight",
              wsp: true,
              wspLink: "https://wa.me/56950833838",
              wspMsg:
                "Hola! me gustaría agendar una cita para kinesiología con Catalina Reyes",
              agenda: true,
              agendaLink:
                "https://99cc847c17b2db7b36831a8547ec3db203e2aff1.agenda.softwaremedilink.com/agenda/profesional?modalidad=1&id_profesional=30",
              more: true,
              moreTitle: "Conoce Gimnasio Médico",
              moreLink: "/gimnasio",
            },
            // {
            //   image: "/kinesiologia/equipo/kineNicole.jpg",
            //   name: "Nicole Silva",
            //   specialtyLine1: "Neurorehabilitación",
            //   specialtyLine2: "Respiratorio",
            //   colorProfile: "Centro",
            //   decoCorner: "topRight",
            //   wsp: true,
            //   wspLink: "https://wa.me/56950833838",
            //   wspMsg: "Hola! me gustaría agendar una cita para kinesiología con Nicole Silva",
            //   agenda: true,
            //   agendaLink:
            //     "https://99cc847c17b2db7b36831a8547ec3db203e2aff1.agenda.softwaremedilink.com/agenda/profesional?modalidad=1&id_profesional=29",
            // },
            {
              image: "/kinesiologia/equipo/kineJaviera.jpg",
              name: "Javiera Vega",
              specialtyLine1: "Musculoesquelético",
              specialtyLine2: "Neurorehabilitación",
              colorProfile: "Centro",
              decoCorner: "topRight",
              wsp: true,
              wspLink: "https://wa.me/56950833838",
              wspMsg: "Hola! me gustaría agendar una cita para kinesiología con Javiera Vega",
              agenda: true,
              agendaLink:
                "https://99cc847c17b2db7b36831a8547ec3db203e2aff1.agenda.softwaremedilink.com/agenda/profesional?modalidad=1&id_profesional=37",
              more: true,
              moreTitle: "Conoce Gimnasio Médico",
              moreLink: "/gimnasio",
            },
            {
              image: "/kinesiologia/equipo/kineAlejandra.jpg",
              name: "Alejandra Piñones",
              specialtyLine1: "Domiciliaria",
              specialtyLine2: "Neuro · Musculoesquelético",
              colorProfile: "Centro",
              decoCorner: "topRight",
              wsp: true,
              wspLink: "https://wa.me/56950833838",
              wspMsg:
                "Hola! me gustaría consultar por el servivicio de cuidado domiciliario de Alejandra Piñones",
              agenda: false,
            },
          ]}
        />

        <section className="kineSection kineSection--soft">
          <div className="kineSection__inner">
            <h2 className="kineSection__title">Servicios especializados relacionados</h2>

            <p className="kineText kineText--lead">
              Además de la atención kinésica general, en KINECLIN contamos con áreas
              especializadas que complementan la rehabilitación y permiten abordar necesidades
              más específicas dentro del cuidado físico, funcional y terapéutico.
            </p>

            <div className="kineRelatedGrid">
              <article className="kineRelatedCard">
                <h3 className="kineRelatedCard__title">Osteopatía y Quiropraxia</h3>
                <p className="kineRelatedCard__text">
                  Terapia manual avanzada orientada al manejo del dolor, movilidad, postura y
                  disfunciones musculoesqueléticas, desarrollada en profundidad dentro del
                  servicio de Osteopatía.
                </p>

                <div className="kineRelatedCard__button">
                  <ActionButton label="Ver servicio" href="/osteopatia" variant="centro" />
                </div>
              </article>
              <article className="kineRelatedCard">
                <h3 className="kineRelatedCard__title">Gimnasio Médico</h3>
                <p className="kineRelatedCard__text">
                  Entrenamiento terapéutico y fortalecimiento funcional guiado por
                  profesionales, ideal para complementar procesos de rehabilitación, mejorar la
                  condición física y recuperar confianza en el movimiento.
                </p>
                <div className="kineRelatedCard__button">
                  <ActionButton label="Ver servicio" href="/gimnasio" variant="centro" />
                </div>
              </article>

              <article className="kineRelatedCard">
                <h3 className="kineRelatedCard__title">Kinesiología Dermato Funcional</h3>
                <p className="kineRelatedCard__text">
                  Área especializada en tratamientos corporales, recuperación de tejidos y
                  procedimientos estéticos realizados desde una mirada kinésica profesional.
                </p>

                <div className="kineRelatedCard__button">
                  <ActionButton
                    label="Ver servicio"
                    href="https://www.instagram.com/kineclin_estetica/"
                    variant="estetica"
                  />
                </div>
              </article>

              <article className="kineRelatedCard">
                <h3 className="kineRelatedCard__title">Atención Kinésica Domiciliaria</h3>
                <p className="kineRelatedCard__text">
                  Rehabilitación y acompañamiento funcional para pacientes que requieren
                  atención en casa, especialmente en procesos de recuperación, dependencia,
                  movilidad reducida o cuidado domiciliario.
                </p>

                <div className="kineRelatedCard__button">
                  <ActionButton
                    label="Consultar"
                    href="https://wa.me/56950833838"
                    variant="whatsapp"
                    wspmsg="Hola! Quisiera consultar por atención kinésica domiciliaria."
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="kineSection">
          <div className="kineSection__inner kineSection__inner--center">
            <p className="kineClosingText">
              En KINECLIN buscamos que cada proceso de rehabilitación sea claro, seguro y
              personalizado, acompañando a cada paciente para recuperar movimiento, confianza y
              autonomía en su vida diaria.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
