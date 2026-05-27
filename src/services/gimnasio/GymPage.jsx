import "./GymPage.css";
import ServicesCardGrid from "../ui/ServicesCardGrid";
import { Helmet } from "react-helmet-async";
import ActionButton from "../../components/common/ActionButton/ActionButton";
import InfoDecoBlock from "../ui/InfoDecoBlock";
import PsicoTeamShowcase from "../ui/PsicoTeamShowcase";

export default function GymPage() {
  return (
    <>
      <Helmet>
        <title>Gimnasio Médico en Antofagasta | KINECLIN Centro de Salud</title>
        <meta
          name="description"
          content="Gimnasio médico y terapéutico en Antofagasta: rehabilitación, entrenamiento personalizado, fortalecimiento, Pilates funcional, hipopresivos y movimiento integral en KINECLIN."
        />
      </Helmet>

      <main className="gimnasioPage">
        <header className="gimnasioHero">
          <div className="gimnasioHero__inner">
            <h1 className="gimnasioHero__title">GIMNASIO MÉDICO</h1>
            <p className="gimnasioHero__lead">
              Entrenamiento, movimiento integral y ejercicio terapéutico guiado por
              profesionales de la salud.
            </p>
          </div>
        </header>

        <section className="gimnasioSection">
          <div className="gimnasioSection__inner gimnasioSection__inner--center">
            <h2 className="gimnasioSection__title">Nuestro enfoque</h2>

            <p className="gimnasioText">
              En KINECLIN entendemos el <strong>Gimnasio Médico</strong> como un espacio donde
              el <strong>movimiento</strong>, la <strong>rehabilitación</strong> y el{" "}
              <strong>entrenamiento personalizado</strong> se integran de manera segura y
              progresiva. Nuestro objetivo es acompañar a cada persona según su condición,
              experiencia y metas, utilizando el ejercicio como una herramienta para mejorar la{" "}
              <strong>funcionalidad</strong>, fortalecer el cuerpo, prevenir lesiones y
              construir hábitos de salud sostenibles.
            </p>
          </div>
        </section>

        <section className="gimnasioSection gimnasioSection--soft">
          <div className="gimnasioSection__inner">
            <InfoDecoBlock
              title="Entrenamiento y movimiento integral"
              image="/gimnasio/entrenamiento.jpg"
              imageAlt="Gimnasio médico personalizado"
              reverse={false}
              showDeco={true}
              colorProfile="Centro"
              text="Nuestro gimnasio combina fisioterapia clínica, entrenamiento físico personalizado, acondicionamiento, entrenamiento deportivo y disciplinas complementarias como Pilates e hipopresivos. El objetivo es ofrecer un espacio seguro, cercano y técnico, donde cada persona pueda avanzar con una planificación adaptada a sus capacidades y objetivos."
            />

            <InfoDecoBlock
              title="Rehabilitación y fortalecimiento funcional"
              image="/gimnasio/gimnasio.jpg"
              imageAlt="Rehabilitación y fortalecimiento funcional"
              reverse={true}
              showDeco={true}
              colorProfile="Centro"
              text="Acompañamos procesos de recuperación post lesión, dolor crónico, pérdida de fuerza, alteraciones del movimiento y retorno progresivo a la actividad física. El trabajo se orienta a mejorar movilidad, estabilidad, fuerza, resistencia y control corporal, integrando el ejercicio como parte central del proceso terapéutico."
            />

            <InfoDecoBlock
              title="Equipamiento moderno y tecnológico"
              image="/gimnasio/speediance.jpg"
              imageAlt="Equipamiento Speediance en gimnasio médico"
              reverse={false}
              showDeco={true}
              colorProfile="Centro"
              text="Contamos con equipamiento que permite realizar entrenamientos completos, seguros y personalizados. Entre ellos se destaca Speediance, una solución inteligente de entrenamiento todo-en-uno que facilita el trabajo de fuerza, resistencia y movimiento funcional dentro de un plan guiado por profesionales."
            />
          </div>
        </section>

        <section className="gimnasioSection">
          <div className="gimnasioSection__inner">
            <ServicesCardGrid
              title="Servicios disponibles"
              colorProfile="Centro"
              lead="El gimnasio está pensado para personas que buscan rehabilitarse, volver a entrenar, mejorar su condición física o complementar su proceso terapéutico con ejercicio guiado."
              services={[
                {
                  title: "Rehabilitación y fisioterapia",
                  text: "Tratamientos para lesiones, dolor crónico, recuperación post lesión y control funcional del movimiento.",
                },
                {
                  title: "Acondicionamiento físico",
                  text: "Fuerza, resistencia, estabilidad y movilidad adaptadas a tus objetivos y capacidades.",
                },
                {
                  title: "Entrenamiento deportivo",
                  text: "Preparación física, técnica, rendimiento y retorno progresivo a la práctica deportiva.",
                },
                {
                  title: "Movimiento para todas las edades",
                  text: "Atención adaptada para niños, adolescentes, adultos y personas mayores según sus necesidades.",
                },
              ]}
            />
          </div>
        </section>

        <section className="gimnasioSection gimnasioSection--soft">
          <PsicoTeamShowcase
            centerTitle="Profesionales a cargo"
            leftImage="/gimnasio/gymCatalina.jpg"
            leftName="Klga. Catalina Reyes"
            leftText="Kinesióloga orientada al área musculoesquelética, respiratoria y al acompañamiento de procesos de rehabilitación y entrenamiento funcional. Su trabajo se enfoca en guiar al paciente de forma progresiva, segura y personalizada."
            leftWsp={true}
            leftWspLink="https://wa.me/56950833838"
            leftWspMsg="Hola, me gustaría consultar por una evaluación para el gimnasio médico con Catalina Reyes."
            leftAgenda={true}
            leftAgendaLink="https://99cc847c17b2db7b36831a8547ec3db203e2aff1.agenda.softwaremedilink.com/agenda/profesional?modalidad=1&id_profesional=30"
            rightImage="/gimnasio/gymJaviera.jpg"
            rightName="Klga. Javiera Vera"
            rightText="Kinesióloga con enfoque transversal en rehabilitación, movimiento terapéutico y entrenamiento guiado. Acompaña a pacientes en procesos de recuperación funcional, fortalecimiento y retorno progresivo a la actividad física."
            rightWsp={true}
            rightWspLink="https://wa.me/56950833838"
            rightWspMsg="Hola, me gustaría consultar por una evaluación para el gimnasio médico con Javiera Vera."
            rightAgenda={false}
          />
        </section>

        <section className="gimnasioSection">
          <div className="gimnasioSection__inner gimnasioSection__inner--center">
            <h2 className="gimnasioSection__title">Evaluación inicial</h2>

            <p className="gimnasioText">
              Antes de iniciar, realizamos una evaluación para conocer tu condición actual,
              objetivos y necesidades. Desde ahí construimos un plan de trabajo adaptado a ti,
              ya sea que estés comenzando, volviendo a entrenar o buscando mejorar tu
              rendimiento físico de forma segura.
            </p>

            <div className="gimnasioAgenda">
              <ActionButton
                label="Consultar por WhatsApp"
                href="https://wa.me/56950833838"
                variant="whatsapp"
                wspmsg="Hola, me gustaría consultar por una evaluación para el gimnasio médico."
              />
            </div>
          </div>
        </section>

        <section className="gimnasioSection gimnasioSection--soft">
          <div className="gimnasioSection__inner gimnasioSection__inner--center">
            <p className="gimnasioClosingText">
              En KINECLIN buscamos que cada entrenamiento sea seguro, progresivo y
              personalizado, acompañando a cada persona para moverse mejor, sentirse más fuerte
              y construir una relación saludable con el ejercicio.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
