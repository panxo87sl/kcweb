import "./EnfermeriaPage.css";
import { Helmet } from "react-helmet-async";
import SingleProfessionalShowcase from "../ui/SingleProfessionalShowcase";
import InfoDecoBlock from "../ui/InfoDecoBlock";

export default function EnfermeriaPage() {
  return (
    <>
      <Helmet>
        <title>Enfermería en Antofagasta | KINECLIN Centro de Salud</title>
        <meta
          name="description"
          content="Servicio de enfermería en Antofagasta: curaciones avanzadas, inyectables, manejo de ostomías e invasivos. Atención profesional en KINECLIN Centro de Salud."
        />
      </Helmet>

      <main className="enfermeriaPage">
        <header className="enfermeriaHero">
          <div className="enfermeriaHero__inner">
            <h1 className="enfermeriaHero__title">ENFERMERÍA</h1>
            <p className="enfermeriaHero__lead">
              Atención profesional, segura y cercana para procedimientos de enfermería y
              cuidados clínicos.
            </p>
          </div>
        </header>

        <SingleProfessionalShowcase
          image="/enfermeria/enfStephie.jpg"
          name="Stephanie Grace Mandiola"
          role="Enfermera"
          description="Enfermera con experiencia en atención clínica y procedimientos de enfermería. Cuenta con especialización de postítulo en manejo avanzado de heridas, ostomías y cuidados clínicos especializados por el Instituto Nacional de Heridas, además de formación complementaria en Medicina Estética Inyectable e Injector Expert® por Aesthetic Process Chile. Su experiencia incluye curaciones avanzadas, manejo de procedimientos invasivos y acompañamiento integral del paciente, combinando criterio profesional, cercanía y un enfoque centrado en la seguridad y bienestar de cada persona."
          wsp={true}
          wspLink="https://wa.me/56950833838"
          wspMsg="Hola, quisiera consultar por el servicio de enfermería en KINECLIN."
          agenda={true}
          agendaLink="https://ff.healthatom.io/3uAJx7"
        />

        <section className="enfermeriaSection enfermeriaSection--soft">
          <div className="enfermeriaSection__inner">
            <InfoDecoBlock
              title="Curaciones avanzadas"
              image="/enfermeria/curaciones.jpg"
              imageAlt="Curaciones avanzadas"
              reverse={false}
              showSnake={true}
              snakeVariant="start"
              text="Realizamos curaciones orientadas al cuidado de heridas que requieren evaluación, limpieza, protección y seguimiento. El objetivo es favorecer un proceso de cicatrización adecuado, disminuir el riesgo de complicaciones y entregar indicaciones claras para el cuidado posterior."
            />

            <InfoDecoBlock
              title="Inyectables"
              image="/enfermeria/inyectables.jpg"
              imageAlt="Administración de inyectables"
              reverse={true}
              showSnake={true}
              snakeVariant="middle"
              text="Contamos con atención para la administración de medicamentos inyectables indicados por un profesional de salud, resguardando una técnica adecuada, condiciones de higiene y orientación al paciente antes y después del procedimiento."
            />

            <InfoDecoBlock
              title="Manejo de ostomías e invasivos"
              image="/enfermeria/ostomias.jpg"
              imageAlt="Manejo de ostomías e invasivos"
              reverse={false}
              showSnake={true}
              snakeVariant="end"
              text="Acompañamos el cuidado de ostomías y dispositivos invasivos desde una mirada técnica y educativa, apoyando al paciente y su familia en la higiene, observación de signos de alerta, manejo cotidiano y adaptación segura a sus cuidados."
            />
          </div>
        </section>

        <section className="enfermeriaSection">
          <div className="enfermeriaSection__inner enfermeriaSection__inner--center">
            <p className="enfermeriaClosingText">
              En KINECLIN buscamos que cada atención de enfermería sea clara, segura y humana,
              entregando cuidados profesionales con el estándar y la cercanía que cada paciente
              necesita.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
