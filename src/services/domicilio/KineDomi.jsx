import "./KineDomi.css";
import { Helmet } from "react-helmet-async";
import ActionButton from "../../components/common/ActionButton/ActionButton";
import InfoDecoBlock from "../ui/InfoDecoBlock";
import TopicChipGrid from "../ui/TopicChipGrid";

export default function KineDomi() {
  return (
    <>
      <Helmet>
        <title>Kinesiología Domiciliaria en Antofagasta | KINECLIN</title>
        <meta
          name="description"
          content="Kinesiología domiciliaria en Antofagasta para adultos, personas mayores y niños: rehabilitación funcional, respiratoria, neurológica, post cirugía, movilidad, fuerza y equilibrio."
        />
        <link rel="canonical" href="https://www.kineclin.cl/kinesiologia-domiciliaria" />
      </Helmet>

      <main className="kineDomiPage">
        <header className="kineDomiHero">
          <div className="kineDomiHero__inner">
            <span className="kineDomiHero__eyebrow">Atención en domicilio</span>

            <h1 className="kineDomiHero__title">Kinesiología domiciliaria</h1>

            <p className="kineDomiHero__lead">
              Evaluación, rehabilitación y ejercicio terapéutico en el hogar para usuarios que
              requieren recuperar movilidad, fuerza, equilibrio, capacidad respiratoria,
              funcionalidad y seguridad en su vida diaria.
            </p>

            <div className="kineDomiHero__actions">
              <ActionButton
                label="Más servicios a domicilio"
                href="/atencion-domiciliaria"
                variant="centro"
                size="hero"
              />
              <ActionButton
                label="Consultar por WhatsApp"
                href="https://wa.me/56950833838"
                variant="whatsapp"
                size="hero"
                wspmsg="Hola, quisiera consultar por atención de kinesiología domiciliaria."
              />
            </div>
          </div>
        </header>

        <section className="kineDomiSection">
          <div className="kineDomiSection__inner kineDomiSection__inner--center">
            <h2 className="kineDomiSection__title">Nuestro enfoque</h2>

            <p className="kineDomiText">
              En KINECLIN entendemos la kinesiología domiciliaria como una alternativa segura,
              cercana y personalizada para usuarios que no pueden trasladarse al centro de
              salud o que necesitan realizar su rehabilitación dentro de su propio entorno. El
              domicilio permite observar directamente las condiciones reales donde la persona
              se desplaza, descansa, realiza sus rutinas y enfrenta sus principales
              dificultades funcionales.
            </p>

            <p className="kineDomiText">
              El tratamiento se adapta a la condición clínica, objetivos personales, espacio
              disponible, nivel de apoyo familiar y necesidades de cada usuario. Desde esta
              mirada, buscamos favorecer la movilidad, prevenir complicaciones, recuperar
              funcionalidad y entregar herramientas concretas para desenvolverse con mayor
              seguridad en la vida diaria.
            </p>
          </div>
        </section>

        <section className="kineDomiSection kineDomiSection--soft">
          <h2 className="kineDomiSection__title">Áreas de atención</h2>

          <div className="kineDomiSection__inner">
            <InfoDecoBlock
              title="Evaluación kinésica en el hogar"
              image="/domiciliario/kinesiologia-domicilio.jpg"
              imageAlt="Evaluación de kinesiología domiciliaria"
              reverse={false}
              showDeco={true}
              colorProfile="Centro"
              text="La evaluación kinésica domiciliaria permite conocer la condición física, funcional y respiratoria del usuario dentro de su propio entorno. Se revisa movilidad, fuerza, equilibrio, marcha, dolor, antecedentes clínicos, capacidad respiratoria, riesgos del hogar y objetivos de rehabilitación para orientar un plan de tratamiento personalizado."
            />

            <InfoDecoBlock
              title="Rehabilitación funcional y movilidad"
              image="/domiciliario/kinesiologia-movilidad.jpg"
              imageAlt="Rehabilitación funcional a domicilio"
              reverse={true}
              showDeco={true}
              colorProfile="Centro"
              text="El trabajo kinésico puede incluir ejercicios terapéuticos, entrenamiento de marcha, movilidad en cama, transferencias, equilibrio, fortalecimiento muscular, control del dolor y reeducación del movimiento. La intervención busca mejorar el desempeño del usuario en actividades reales de su vida diaria."
            />

            <InfoDecoBlock
              title="Kinesiología respiratoria domiciliaria"
              image="/domiciliario/kinesiologia-respiratoria.jpg"
              imageAlt="Kinesiología respiratoria domiciliaria"
              reverse={false}
              showDeco={true}
              colorProfile="Centro"
              text="La kinesiología respiratoria domiciliaria apoya a usuarios con dificultad para movilizar secreciones, cuadros respiratorios, disminución de capacidad ventilatoria o necesidad de educación respiratoria en casa. Puede realizarse en adultos, personas mayores y niños, siempre según evaluación profesional, indicación clínica y necesidades de cada caso."
            />

            <InfoDecoBlock
              title="Adulto mayor y prevención de caídas"
              image="/domiciliario/kinesiologia-adulto-mayor.jpg"
              imageAlt="Kinesiología domiciliaria en adulto mayor"
              reverse={true}
              showDeco={true}
              colorProfile="Centro"
              text="En adultos y personas mayores, la kinesiología domiciliaria puede ayudar a mantener o recuperar movilidad, prevenir desacondicionamiento, fortalecer musculatura, mejorar equilibrio y reducir el riesgo de caídas. También permite orientar a la familia o cuidador sobre ejercicios, cuidados y medidas de seguridad en el hogar."
            />

            <InfoDecoBlock
              title="Rehabilitación neurológica y post cirugía"
              image="/domiciliario/kinesiologia-neurologica.jpg"
              imageAlt="Rehabilitación neurológica domiciliaria"
              reverse={false}
              showDeco={true}
              colorProfile="Centro"
              text="La atención domiciliaria puede acompañar procesos de recuperación posterior a cirugías, hospitalizaciones, lesiones o secuelas neurológicas como ACV, Parkinson u otras condiciones que afectan la movilidad y funcionalidad. El plan se adapta progresivamente según la evolución, tolerancia y objetivos del usuario."
            />
          </div>
        </section>

        <TopicChipGrid
          title="Motivos frecuentes de atención"
          lead="La kinesiología domiciliaria puede ser indicada en distintas situaciones donde el usuario requiere rehabilitación, apoyo funcional o manejo respiratorio en casa."
          items={[
            "Movilidad reducida",
            "Dolor musculoesquelético",
            "Post cirugía",
            "ACV",
            "Parkinson",
            "Adulto mayor",
            "Riesgo de caídas",
            "Debilidad muscular",
            "Rehabilitación respiratoria",
            "Cuadros respiratorios en niños",
            "Alteración de la marcha",
            "Recuperación post hospitalización",
          ]}
          background="white"
          colorProfile="Centro"
        />

        <section className="kineDomiSection kineDomiSection--soft">
          <div className="kineDomiSection__inner">
            <h2 className="kineDomiSection__title">¿Cómo se realiza la atención?</h2>

            <div className="kineDomiProcessGrid">
              <article className="kineDomiProcessCard">
                <h3>1. Consulta inicial</h3>
                <p>
                  Se revisa el motivo de atención, condición actual, domicilio, disponibilidad
                  y necesidades principales del usuario o su familia.
                </p>
              </article>

              <article className="kineDomiProcessCard">
                <h3>2. Evaluación</h3>
                <p>
                  El kinesiólogo evalúa movilidad, fuerza, equilibrio, marcha, dolor, condición
                  respiratoria, funcionalidad, riesgos y objetivos terapéuticos.
                </p>
              </article>

              <article className="kineDomiProcessCard">
                <h3>3. Plan de tratamiento</h3>
                <p>
                  Se define un plan de intervención personalizado, con ejercicios, técnicas,
                  indicaciones y frecuencia sugerida según la evolución del usuario.
                </p>
              </article>
            </div>

            <div className="kineDomiSection__actions">
              <ActionButton
                label="Consultar disponibilidad"
                href="https://wa.me/56950833838"
                variant="whatsapp"
                wspmsg="Hola, quisiera consultar disponibilidad para kinesiología domiciliaria."
              />
            </div>
          </div>
        </section>

        <section className="kineDomiSection">
          <div className="kineDomiSection__inner kineDomiSection__inner--center">
            <p className="kineDomiClosingText">
              En KINECLIN buscamos que cada proceso de kinesiología domiciliaria sea seguro,
              claro y personalizado, acompañando al usuario y su familia en la recuperación de
              movilidad, funcionalidad, capacidad respiratoria y confianza dentro del hogar.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
