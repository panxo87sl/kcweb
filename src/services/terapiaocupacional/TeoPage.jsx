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
          content="Terapia ocupacional en Antofagasta para adultos y personas mayores: rehabilitación neurológica, cognitiva y funcional, autonomía, independencia, ayudas técnicas y participación comunitaria."
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

        <SingleProfessionalShowcase
          image="/terapiaocupacional/teoBenjamin.jpg"
          name="Benjamin Rodriguez"
          role="Terapeuta Ocupacional"
          description={
            <>
              Terapeuta ocupacional orientado a la rehabilitación funcional de adultos y
              personas mayores, con enfoque en autonomía, independencia, rehabilitación
              neurológica, rehabilitación cognitiva, actividades de la vida diaria,
              acompañamiento familiar y participación comunitaria. Su trabajo se centra en las
              ocupaciones significativas de cada usuario, considerando sus intereses,
              necesidades, rutinas y entorno, para favorecer una vida diaria más segura, activa
              y con mayor sentido.
            </>
          }
          wsp={true}
          wspLink="https://wa.me/56950833838"
          wspMsg="Hola, quisiera consultar por atención de terapia ocupacional con Benjamín."
          agenda={true}
          agendaLink="https://99cc847c17b2db7b36831a8547ec3db203e2aff1.agenda.softwaremedilink.com/agenda/profesional?modalidad=1&id_profesional=38"
          background="white"
        />

        <section className="teoSection teoSection--soft">
          <div className="teoSection__inner teoSection__inner--center">
            <h2 className="teoSection__title">Nuestro enfoque</h2>

            <p className="teoText">
              En KINECLIN entendemos la terapia ocupacional como un proceso centrado en la
              ocupación, es decir, en las actividades que cada usuario necesita, quiere o
              valora realizar en su vida diaria. Nuestro enfoque considera sus intereses,
              rutinas, roles, entorno y necesidades reales, acompañando principalmente a
              adultos y personas mayores que requieren rehabilitación funcional, neurológica,
              cognitiva o apoyo para desenvolverse con mayor seguridad en su día a día.
            </p>

            <p className="teoText">
              Trabajamos diferenciando dos conceptos fundamentales: la autonomía, entendida
              como la capacidad de decidir, elegir y dirigir la propia vida; y la
              independencia, relacionada con la posibilidad de realizar o gestionar actividades
              significativas con el menor apoyo posible, incorporando adaptaciones o ayudas
              técnicas cuando sean necesarias para favorecer el desempeño . Desde esta mirada,
              el objetivo no es solo recuperar funciones, sino favorecer que cada usuario pueda
              participar de forma más activa, segura y significativa en su hogar, comunidad y
              actividades cotidianas.
            </p>
          </div>
        </section>

        <section className="teoSection">
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
                text="La evaluación de terapia ocupacional permite conocer cómo el usuario se desenvuelve en sus actividades cotidianas, considerando sus habilidades motoras, cognitivas, sensoriales, emocionales y sociales. En esta etapa se revisan antecedentes de salud, rutinas, intereses, entorno y necesidades, para construir un plan de intervención centrado en sus ocupaciones significativas."
              />
            </div>

            <div id="teo-rehabilitacion-neurologica">
              <InfoDecoBlock
                sectionID="rehabilitacion-neurologica"
                title="Rehabilitación neurológica, cognitiva y funcional"
                image="/terapiaocupacional/rehabilitacion-neurologica.jpg"
                imageAlt="Rehabilitación neurológica, cognitiva y funcional"
                reverse={true}
                showDeco={true}
                colorProfile="Centro"
                text="Acompañamos procesos de rehabilitación en usuarios con secuelas neurológicas o pérdida de funcionalidad asociada a condiciones como accidente cerebrovascular, Parkinson, deterioro neuromotor u otras patologías que afectan el desempeño diario. El trabajo puede incluir rehabilitación cognitiva, abordando funciones como atención, memoria, planificación, organización y resolución de problemas aplicadas a actividades reales de la vida diaria."
              />
            </div>

            <div id="teo-autonomia-independencia">
              <InfoDecoBlock
                sectionID="autonomia-independencia"
                title="Autonomía, independencia y vida diaria"
                image="/terapiaocupacional/vida-diaria.jpg"
                imageAlt="Autonomía, independencia y actividades de la vida diaria"
                reverse={false}
                showDeco={true}
                colorProfile="Centro"
                text="Las actividades de la vida diaria incluyen acciones como vestirse, alimentarse, asearse, desplazarse, organizar rutinas, preparar tareas simples y participar en el hogar. Desde la terapia ocupacional se trabaja la autonomía para tomar decisiones sobre la propia vida y la independencia para ejecutar o gestionar estas actividades con estrategias, adaptaciones o apoyos cuando sea necesario."
              />
            </div>

            <div id="teo-adulto-mayor">
              <InfoDecoBlock
                sectionID="adulto-mayor"
                title="Adultos y personas mayores"
                image="/terapiaocupacional/adulto-mayor.jpg"
                imageAlt="Terapia ocupacional en adultos y personas mayores"
                reverse={true}
                showDeco={true}
                colorProfile="Centro"
                text="En adultos y personas mayores, la terapia ocupacional busca mantener o recuperar funcionalidad, prevenir dependencia, estimular habilidades cognitivas y motoras, mejorar la seguridad en las rutinas y favorecer la participación en actividades significativas. Cada intervención se adapta a la historia, intereses, capacidades y contexto de vida del usuario."
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
                text="Evaluamos las necesidades del usuario en su entorno cotidiano para entregar recomendaciones que favorezcan seguridad, accesibilidad, independencia y prevención de riesgos. Esto puede incluir orientación sobre ayudas técnicas, organización del hogar, adaptación de rutinas, prevención de caídas y estrategias para facilitar el desempeño en actividades relevantes."
              />
            </div>

            <div id="teo-comunidad">
              <InfoDecoBlock
                sectionID="comunidad"
                title="Participación y manejo en la comunidad"
                image="/terapiaocupacional/comunidad.jpg"
                imageAlt="Participación y manejo en la comunidad"
                reverse={true}
                showDeco={true}
                colorProfile="Centro"
                text="La terapia ocupacional también acompaña el manejo en la comunidad, favoreciendo que el usuario pueda participar con mayor seguridad en actividades fuera del hogar. Esto puede incluir orientación para desplazamientos, uso de espacios comunitarios, organización de salidas, participación social, retorno progresivo a roles significativos y estrategias para desenvolverse mejor en su entorno."
              />
            </div>
          </div>
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
