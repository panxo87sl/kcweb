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
          content="Servicio de kinesiología en Antofagasta: rehabilitación musculoesquelética, kinesiología neurológica, respiratoria, fortalecimiento terapéutico y recuperación funcional en KINECLIN."
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
              En KINECLIN entendemos la kinesiología como un proceso de recuperación integral,
              orientado a mejorar la movilidad, disminuir el dolor, fortalecer el cuerpo y
              recuperar la funcionalidad en la vida diaria. Nuestro equipo trabaja desde una
              mirada personalizada, combinando evaluación clínica, ejercicio terapéutico,
              técnicas específicas y educación al paciente para acompañar cada etapa de la
              rehabilitación con seguridad, cercanía y criterio profesional.
            </p>
          </div>
        </section>

        <section className="kineSection kineSection--soft">
          <div className="kineSection__inner">
            <InfoDecoBlock
              title="Rehabilitación musculoesquelética y traumatológica"
              image="/kinesiologia/kineTraumatologia.jpg"
              imageAlt="Rehabilitación musculoesquelética y traumatológica"
              reverse={false}
              showDeco={true}
              colorProfile="Centro"
              text="Abordamos lesiones musculares, articulares y tendinosas, dolor de columna, recuperación post esguince, post fractura, post cirugía y alteraciones del movimiento. El objetivo es recuperar movilidad, fuerza, estabilidad y control motor, permitiendo que cada paciente vuelva progresivamente a sus actividades con mayor seguridad."
            />

            <InfoDecoBlock
              title="Kinesiología neurológica y funcional"
              image="/kinesiologia/kineNeurologia.jpg"
              imageAlt="Kinesiología neurológica y funcional"
              reverse={true}
              showDeco={true}
              colorProfile="Centro"
              text="Acompañamos procesos de rehabilitación neurológica orientados a mejorar equilibrio, marcha, coordinación, fuerza, independencia funcional y seguridad en las actividades cotidianas. Esta área es especialmente relevante en personas con secuelas neurológicas, adultos mayores o pacientes que requieren recuperar confianza en el movimiento."
            />

            <InfoDecoBlock
              title="Kinesioterapia respiratoria"
              image="/kinesiologia/kineRespiratoria.jpg"
              imageAlt="Kinesioterapia respiratoria"
              reverse={false}
              showDeco={true}
              colorProfile="Centro"
              text="Realizamos atención kinésica respiratoria para niños, adultos y adultos mayores, enfocada en mejorar la ventilación, favorecer la higiene bronquial, optimizar la mecánica respiratoria y acompañar cuadros respiratorios que requieren apoyo profesional. Cada intervención se adapta a la edad, condición clínica y necesidad del paciente."
            />

            <InfoDecoBlock
              title="Fortalecimiento y gimnasio terapéutico"
              image="/kinesiologia/kineEntrenamiento.jpg"
              imageAlt="Fortalecimiento y gimnasio terapéutico"
              reverse={true}
              showDeco={true}
              colorProfile="Centro"
              text="Contamos con un espacio de gimnasio terapéutico para complementar la rehabilitación mediante ejercicio progresivo, fortalecimiento, control motor, entrenamiento funcional y retorno seguro a la actividad física. Este trabajo permite mejorar la capacidad física, prevenir recaídas y consolidar los avances logrados durante el tratamiento."
            />
          </div>
        </section>

        <KineTeamShowcase
          members={[
            {
              image: "/kinesiologia/equipo/kineDiego.png",
              name: "Diego Zúñiga",
              specialtyLine1: "Musculoesquelético",
              specialtyLine2: "Osteopatía · Respiratorio",
              colorProfile: "Centro",
              decoCorner: "topRight",
              wsp: true,
              wspLink: "https://wa.me/56950833838",
              agenda: true,
              agendaLink: "#",
              more: true,
              moreLink: "/osteopatia",
            },
            {
              image: "/kinesiologia/equipo/kineCarolina.png",
              name: "Carolina Llave",
              specialtyLine1: "Dermato funcional",
              specialtyLine2: "Estética corporal",
              colorProfile: "Estetica",
              decoCorner: "bottomLeft",
              wsp: true,
              wspLink: "https://wa.me/56950833838",
              agenda: true,
              agendaLink: "#",
              more: true,
              moreLink: "/kcestetica",
            },
            {
              image: "/kinesiologia/equipo/kineCatalina.png",
              name: "Catalina",
              specialtyLine1: "Musculoesquelético",
              specialtyLine2: "Respiratorio",
              colorProfile: "Centro",
              decoCorner: "bottomRight",
              wsp: true,
              wspLink: "https://wa.me/56950833838",
              agenda: true,
              agendaLink: "#",
            },
            {
              image: "/kinesiologia/equipo/kineNicole.png",
              name: "Nicole Silva",
              specialtyLine1: "Neurorehabilitación",
              specialtyLine2: "Respiratorio",
              colorProfile: "Centro",
              decoCorner: "topLeft",
              wsp: true,
              wspLink: "https://wa.me/56950833838",
              agenda: true,
              agendaLink: "#",
            },
            {
              image: "/kinesiologia/equipo/kineJaviera.png",
              name: "Javiera",
              specialtyLine1: "Neuro · Trauma",
              specialtyLine2: "Respiratorio",
              colorProfile: "Centro",
              decoCorner: "none",
              wsp: true,
              wspLink: "https://wa.me/56950833838",
              agenda: true,
              agendaLink: "#",
            },
            {
              image: "/kinesiologia/equipo/kineAlejandra.png",
              name: "Alejandra",
              specialtyLine1: "Domiciliaria",
              specialtyLine2: "Neuro · Musculoesquelética",
              colorProfile: "centro",
              decoCorner: "topLeft",
              wsp: true,
              wspLink: "https://wa.me/56950833838",
              agenda: false,
            },
          ]}
        />

        <section className="kineSection">
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
                <h3 className="kineRelatedCard__title">Kinesiología Dermato Funcional</h3>
                <p className="kineRelatedCard__text">
                  Área especializada en tratamientos corporales, recuperación de tejidos y
                  procedimientos estéticos realizados desde una mirada kinésica profesional.
                </p>

                <div className="kineRelatedCard__button">
                  <ActionButton label="Ver servicio" href="/#" variant="estetica" />
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
                    wspmsg="Hola, quisiera consultar por atención kinésica domiciliaria."
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="kineSection kineSection--soft">
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
