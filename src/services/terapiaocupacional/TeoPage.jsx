import "./TeoPage.css";
import { Helmet } from "react-helmet-async";
import InfoDecoBlock from "../ui/InfoDecoBlock";
import SingleProfessionalShowcase from "../ui/SingleProfessionalShowcase";

export default function TeoPage() {
  return (
    <>
      <Helmet>
        <title>Terapia Ocupacional en Antofagasta | KINECLIN Centro de Salud</title>
        <meta
          name="description"
          content="Servicio de terapia ocupacional en Antofagasta: rehabilitación neurológica, autonomía funcional, adulto mayor, adaptación del entorno, ayudas técnicas y terapia ocupacional infantil en KINECLIN."
        />
      </Helmet>

      <main className="teoPage">
        <header className="teoHero">
          <div className="teoHero__inner">
            <h1 className="teoHero__title">TERAPIA OCUPACIONAL</h1>
            <p className="teoHero__lead">
              Evaluación, rehabilitación y acompañamiento para favorecer la autonomía,
              funcionalidad y participación en la vida diaria.
            </p>
          </div>
        </header>

        <section className="teoSection">
          <div className="teoSection__inner teoSection__inner--center">
            <h2 className="teoSection__title">Nuestro enfoque</h2>

            <p className="teoText">
              En KINECLIN entendemos la terapia ocupacional como un proceso orientado a mejorar
              la autonomía, la funcionalidad y la participación de cada persona en sus
              actividades cotidianas. Nuestro servicio acompaña principalmente a adultos y
              personas mayores que requieren rehabilitación, apoyo funcional o adaptación de
              sus rutinas debido a condiciones neurológicas, accidentes, patologías crónicas,
              cambios asociados al envejecimiento o pérdida de independencia.
            </p>

            <p className="teoText">
              A través de una evaluación personalizada, se identifican las habilidades,
              dificultades, intereses y necesidades de cada paciente, considerando su entorno,
              sus rutinas y sus objetivos. Desde ahí se construye un plan de intervención
              enfocado en recuperar capacidades, compensar dificultades y promover una vida
              diaria más segura, activa y significativa.
            </p>
          </div>
        </section>

        <section className="teoSection teoSection--soft">
          <h2 className="teoSection__title">Áreas de intervención</h2>

          <div className="teoSection__inner">
            <div id="teo-evaluacion">
              <InfoDecoBlock
                sectionID="evaluacion"
                title="Evaluación de terapia ocupacional"
                image="/terapiaocupacional/evaluacion.jpg"
                imageAlt="Evaluación de terapia ocupacional"
                reverse={false}
                showDeco={true}
                colorProfile="Centro"
                text="La evaluación de terapia ocupacional permite conocer el nivel de autonomía, funcionalidad, habilidades motoras, cognitivas, sensoriales y sociales del paciente. En esta etapa se revisan antecedentes de salud, rutinas, actividades de la vida diaria, entorno familiar y objetivos personales, con el fin de definir un plan de intervención adecuado a sus necesidades."
              />
            </div>

            <div id="teo-rehabilitacion-neurologica">
              <InfoDecoBlock
                sectionID="rehabilitacion-neurologica"
                title="Rehabilitación neurológica y funcional"
                image="/terapiaocupacional/rehabilitacion-neurologica.jpg"
                imageAlt="Rehabilitación neurológica y funcional"
                reverse={true}
                showDeco={true}
                colorProfile="Centro"
                text="Acompañamos procesos de rehabilitación en personas que presentan secuelas neurológicas o pérdida de funcionalidad producto de condiciones como accidente cerebrovascular, Parkinson, deterioro neuromotor u otras patologías que afectan el desempeño diario. El trabajo se orienta a recuperar habilidades, favorecer la independencia y adaptar las actividades según las capacidades actuales del paciente."
              />
            </div>

            <div id="teo-vida-diaria">
              <InfoDecoBlock
                sectionID="vida-diaria"
                title="Actividades de la vida diaria"
                image="/terapiaocupacional/vida-diaria.jpg"
                imageAlt="Actividades de la vida diaria"
                reverse={false}
                showDeco={true}
                colorProfile="Centro"
                text="Las actividades de la vida diaria incluyen acciones esenciales como vestirse, alimentarse, asearse, desplazarse, organizar rutinas, preparar tareas simples y participar en el hogar o la comunidad. Desde la terapia ocupacional se trabajan estrategias para mejorar la autonomía, facilitar el desempeño cotidiano y entregar herramientas prácticas al paciente y su familia."
              />
            </div>

            <div id="teo-adulto-mayor">
              <InfoDecoBlock
                sectionID="adulto-mayor"
                title="Adultos y personas mayores"
                image="/terapiaocupacional/adulto-mayor.jpg"
                imageAlt="Terapia ocupacional en adulto mayor"
                reverse={true}
                showDeco={true}
                colorProfile="Centro"
                text="En personas mayores, la terapia ocupacional busca mantener o recuperar funcionalidad, prevenir dependencia, estimular habilidades cognitivas y motoras, mejorar la seguridad en las rutinas y favorecer la participación en actividades significativas. El objetivo es promover una vida diaria más activa, segura y adaptada a cada etapa del envejecimiento."
              />
            </div>

            <div id="teo-ayudas-tecnicas">
              <InfoDecoBlock
                sectionID="ayudas-tecnicas"
                title="Adaptación del entorno y ayudas técnicas"
                image="/terapiaocupacional/ayudas-tecnicas.jpg"
                imageAlt="Adaptación del entorno y ayudas técnicas"
                reverse={false}
                showDeco={true}
                colorProfile="Centro"
                text="Evaluamos las necesidades del paciente en su entorno cotidiano para entregar recomendaciones que favorezcan la seguridad, independencia y prevención de riesgos. Esto puede incluir orientación sobre ayudas técnicas, organización del hogar, adaptación de rutinas, prevención de caídas y estrategias para facilitar la participación en actividades diarias."
              />
            </div>

            <div id="teo-infantil">
              <InfoDecoBlock
                sectionID="infantil"
                title="Terapia ocupacional infantil"
                image="/terapiaocupacional/infantil.jpg"
                imageAlt="Terapia ocupacional infantil"
                reverse={true}
                showDeco={true}
                colorProfile="Centro"
                text="Si bien nuestro servicio se enfoca principalmente en adultos y personas mayores, también contamos con atención infantil orientada al desarrollo de habilidades motoras, autonomía, juego, participación escolar, regulación y rutinas diarias. Cada intervención se adapta a la etapa de desarrollo, necesidades del niño y contexto familiar."
              />
            </div>
          </div>
        </section>

        <section className="teoSection">
          <SingleProfessionalShowcase
            image="/terapiaocupacional/teoBenjamin.jpg"
            name="Benjamin Rodriguez"
            role="Terapeuta Ocupacional"
            description={
              <>
                Terapeuta ocupacional orientado a la rehabilitación funcional de adultos y
                personas mayores, con enfoque en autonomía, actividades de la vida diaria,
                rehabilitación neurológica, acompañamiento familiar y adaptación de rutinas. Su
                trabajo busca apoyar a personas que necesitan recuperar o fortalecer su
                independencia después de accidentes, enfermedades neurológicas, patologías
                crónicas o cambios asociados al envejecimiento, promoviendo una participación
                más segura, activa y significativa en la vida cotidiana.
              </>
            }
            wsp={true}
            wspLink="https://wa.me/56950833838"
            wspMsg="Hola, quisiera consultar por atención de terapia ocupacional."
            agenda={false}
            background="white"
          />
        </section>

        <section className="teoSection teoSection--soft">
          <div className="teoSection__inner teoSection__inner--center">
            <p className="teoClosingText">
              En KINECLIN buscamos que cada proceso de terapia ocupacional sea cercano, claro y
              personalizado, acompañando a cada paciente para recuperar autonomía, fortalecer
              su funcionalidad y participar con mayor seguridad en las actividades que dan
              sentido a su vida diaria.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
