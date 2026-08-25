import "./DomiPage.css";
import { Helmet } from "react-helmet-async";
import ActionButton from "../../components/common/ActionButton/ActionButton";
import InfoDecoBlock from "../ui/InfoDecoBlock";
import CardShowcaseGrid from "../ui/CardShowcaseGrid";

export default function DomiPage() {
  return (
    <>
      <Helmet>
        <title>Cuidados Domiciliarios en Antofagasta | KINECLIN Centro de Salud</title>
        <meta
          name="description"
          content="Cuidados domiciliarios en Antofagasta: cuidadoras, TENS, enfermería, kinesiología y terapia ocupacional a domicilio, además de arriendo de equipos clínicos."
        />
      </Helmet>

      <main className="domiPage">
        <header className="domiHero">
          <div className="domiHero__inner">
            <h1 className="domiHero__title">CUIDADOS DOMICILIARIOS</h1>
            <p className="domiHero__lead">
              Atención, acompañamiento y apoyo profesional en el hogar para personas que
              requieren cuidados, rehabilitación o asistencia en su vida diaria.
            </p>
          </div>
        </header>

        <section className="domiSection">
          <div className="domiSection__inner domiSection__inner--center">
            <h2 className="domiSection__title">Nuestro enfoque</h2>

            <p className="domiText">
              En KINECLIN entendemos el cuidado domiciliario como un apoyo cercano, humano y
              organizado para personas que requieren acompañamiento en casa, ya sea por edad,
              dependencia, recuperación, enfermedad, movilidad reducida o necesidad de apoyo en
              sus rutinas diarias. Nuestro objetivo es entregar una atención segura y
              personalizada, considerando las necesidades del usuario, su familia y su entorno.
            </p>

            <p className="domiText">
              Contamos con servicios de cuidadoras, TENS y profesionales de salud a domicilio,
              además de apoyo en rehabilitación y arriendo de equipos clínicos. Cada servicio
              se orienta a favorecer el bienestar, la continuidad de los cuidados y una mejor
              calidad de vida dentro del hogar.
            </p>
          </div>
        </section>

        <section className="domiSection domiSection--soft">
          <h2 className="domiSection__title">Servicios principales</h2>

          <div className="domiSection__inner">
            <InfoDecoBlock
              sectionID="cuidadoras"
              title="Cuidadoras a domicilio"
              image="/domiciliario/cuidadoras.jpg"
              imageAlt="Cuidadoras a domicilio"
              reverse={false}
              showDeco={true}
              colorProfile="Centro"
              text="El servicio de cuidadoras a domicilio está orientado a personas que necesitan acompañamiento, supervisión y apoyo en sus actividades cotidianas. Puede incluir asistencia en rutinas básicas, higiene, alimentación, movilización, compañía, prevención de riesgos y apoyo general a la familia, siempre de acuerdo con las necesidades del usuario."
            />

            <InfoDecoBlock
              sectionID="tens"
              title="TENS a domicilio"
              image="/domiciliario/tens.jpg"
              imageAlt="TENS a domicilio"
              reverse={true}
              showDeco={true}
              colorProfile="Centro"
              text="El servicio de TENS a domicilio permite contar con apoyo técnico en cuidados de salud dentro del hogar. Está pensado para usuarios que requieren asistencia más específica, seguimiento de indicaciones, apoyo en cuidados básicos, observación de signos de alerta y acompañamiento en procesos de recuperación o dependencia, entregando mayor tranquilidad a la familia."
            />
          </div>
        </section>

        <CardShowcaseGrid
          title="Equipos clínicos disponibles"
          background="white"
          cards={[
            {
              image: "/domiciliario/aspirador-secreciones.jpg",
              imageAlt: "Aspirador de secreciones",
              title: "Aspirador de secreciones",
              text: "Equipo de apoyo para usuarios que requieren manejo de secreciones en el hogar. Permite retirar secreciones de manera más segura cuando existe indicación y orientación profesional, especialmente en personas con dificultad para eliminarlas por sí mismas. Disponible para arriendo diario o mensual, sujeto a disponibilidad.",
            },
            {
              image: "/domiciliario/nebulizador.jpg",
              imageAlt: "Nebulizador",
              title: "Nebulizador",
              text: "Equipo utilizado para administrar medicamentos inhalados en forma de nebulización, cuando ha sido indicado por un profesional de salud. Puede apoyar tratamientos respiratorios domiciliarios y facilitar el cuidado en casa. Disponible para arriendo diario o mensual, sujeto a disponibilidad.",
            },
            {
              image: "/domiciliario/concentrador-oxigeno.jpg",
              imageAlt: "Concentrador de oxígeno",
              title: "Concentrador de oxígeno",
              text: "Equipo de uso domiciliario que entrega oxígeno suplementario a través de cánula nasal o mascarilla, según indicación médica. Es una alternativa práctica para usuarios que requieren apoyo respiratorio en casa. Disponible para arriendo diario o mensual, sujeto a disponibilidad.",
            },
            {
              image: "/domiciliario/cuffometro.jpg",
              imageAlt: "Cuffómetro para traqueostomía",
              title: "Cuffómetro para traqueostomía",
              text: "Instrumento utilizado para medir y controlar la presión del cuff en cánulas de traqueostomía, tubos endotraqueales u otros dispositivos similares. Su uso ayuda a mantener un manejo más seguro de la vía aérea por personal capacitado. Disponible para arriendo diario o mensual, sujeto a disponibilidad.",
            },
          ]}
        />

        <section className="domiSection domiSection--soft">
          <div className="domiSection__inner">
            <h2 className="domiSection__title">Servicios especializados a domicilio</h2>

            <p className="domiText domiText--lead">
              Además de cuidadoras y TENS, contamos con profesionales que pueden apoyar
              procesos de salud, rehabilitación y funcionalidad directamente en el hogar,
              especialmente cuando el usuario requiere atención personalizada sin trasladarse
              al centro.
            </p>

            <div className="domiRelatedGrid">
              <article className="domiRelatedCard">
                <h3 className="domiRelatedCard__title">Enfermería a domicilio</h3>
                <p className="domiRelatedCard__text">
                  Atención profesional para procedimientos y cuidados de enfermería en casa,
                  orientada a usuarios que requieren apoyo clínico, curaciones, inyectables,
                  manejo de dispositivos o seguimiento de cuidados específicos.
                </p>

                <div className="domiRelatedCard__button">
                  <ActionButton label="Ver servicio" href="/enfermeria" variant="centro" />
                </div>
              </article>

              <article className="domiRelatedCard">
                <h3 className="domiRelatedCard__title">Kinesiología a domicilio</h3>
                <p className="domiRelatedCard__text">
                  Rehabilitación y acompañamiento funcional en el hogar para personas con
                  movilidad reducida, dolor, secuelas neurológicas, recuperación post lesión,
                  pérdida de fuerza o necesidad de mejorar equilibrio y seguridad.
                </p>

                <div className="domiRelatedCard__button">
                  <ActionButton label="Ver servicio" href="/kinesiologia" variant="centro" />
                </div>
              </article>

              <article className="domiRelatedCard">
                <h3 className="domiRelatedCard__title">Terapia Ocupacional a domicilio</h3>
                <p className="domiRelatedCard__text">
                  Apoyo para mejorar autonomía, independencia y participación en la vida
                  diaria, considerando rutinas, entorno, ayudas técnicas, actividades
                  significativas y necesidades del usuario dentro de su hogar y comunidad.
                </p>

                <div className="domiRelatedCard__button">
                  <ActionButton
                    label="Ver servicio"
                    href="/terapia-ocupacional"
                    variant="centro"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="domiSection">
          <div className="domiSection__inner domiSection__inner--center">
            <p className="domiClosingText">
              En KINECLIN buscamos que cada cuidado domiciliario sea cercano, seguro y
              personalizado, acompañando al usuario y su familia con soluciones adaptadas a sus
              necesidades reales dentro del hogar.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
