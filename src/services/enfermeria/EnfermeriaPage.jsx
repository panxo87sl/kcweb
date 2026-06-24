import "./EnfermeriaPage.css";
import { Helmet } from "react-helmet-async";
import SingleProfessionalShowcase from "../ui/SingleProfessionalShowcase";
import InfoDecoBlock from "../ui/InfoDecoBlock";
import ServiceDropdown from "../ui/ServiceDropdown";

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
          description={
            <>
              Enfermera con experiencia en atención clínica y procedimientos de enfermería.
              Cuenta con especialización de postítulo en manejo avanzado de heridas, ostomías y
              cuidados clínicos especializados por el{" "}
              <strong>Instituto Nacional de Heridas</strong>, además de formación
              complementaria en Medicina Estética Inyectable e Injector Expert® por{" "}
              <strong>Aesthetic Process Chile</strong>. Su experiencia incluye curaciones
              avanzadas, manejo de procedimientos invasivos y acompañamiento integral del
              paciente, combinando criterio profesional, cercanía y un enfoque centrado en la
              seguridad y bienestar de cada persona.
            </>
          }
          wsp={true}
          wspLink="https://wa.me/56950833838"
          wspMsg="Hola, quisiera consultar por el servicio de enfermería."
          agenda={false}
        />

        <section className="enfermeriaSection enfermeriaSection--soft">
          <div className="enfermeriaSection__inner">
            <div id="enfermeria-curaciones">
              <InfoDecoBlock
                sectionID={"curaciones"}
                title="Curaciones simples y avanzadas"
                image="/enfermeria/curaciones.jpg"
                imageAlt="Curaciones avanzadas"
                reverse={false}
                showDeco={true}
                colorProfile="Centro"
                text="Realizamos curaciones orientadas al cuidado de heridas que requieren evaluación, limpieza, protección y seguimiento. El objetivo es favorecer un proceso de cicatrización adecuado, disminuir el riesgo de complicaciones y entregar indicaciones claras para el cuidado posterior."
              />
              <ServiceDropdown
                title="Valores y consideraciones"
                colorProfile="Centro"
                items={[
                  {
                    name: "Curaciones simples y postoperatorias",
                    price: "Desde $25.000 en clínica",
                    description:
                      "El valor puede variar según el tipo de herida, zona a tratar, insumos requeridos y complejidad del procedimiento.",
                  },
                  {
                    name: "Retiro de puntos o suturas",
                    price: "Desde $25.000 en clínica",
                    description:
                      "Se realiza previa evaluación de la zona, evolución de la herida y cantidad de puntos o suturas.",
                  },
                  {
                    name: "Curaciones avanzadas, heridas complejas y ostomías",
                    price: "Valor según evaluación",
                    description:
                      "Atención realizada por enfermera con formación en manejo avanzado de heridas, ostomías y cuidados clínicos especializados.",
                  },
                ]}
              />
            </div>
            <div id="enfermeria-inyectables">
              <InfoDecoBlock
                sectionID={"inyectables"}
                title="Inyectables"
                image="/enfermeria/inyectables.jpg"
                imageAlt="Administración de inyectables"
                reverse={true}
                showDeco={true}
                colorProfile="Centro"
                text="Contamos con atención para la administración de medicamentos inyectables intramusculares y subcutáneos indicados por un profesional de salud, resguardando una técnica adecuada, condiciones de higiene y orientación al paciente antes y después del procedimiento."
              />
              <ServiceDropdown
                title="Valores y consideraciones"
                colorProfile="Centro"
                items={[
                  {
                    name: "Inyecciones y administración de medicamentos",
                    price: "Desde $20.000 en clínica",
                    description:
                      "El paciente debe traer el medicamento indicado por un profesional de salud. El valor incluye insumos básicos para la preparación y administración del medicamento.",
                  },
                ]}
              />
            </div>
            <div id="enfermeria-ostomias-invasivos">
              <InfoDecoBlock
                sectionID={"ostomias"}
                title="Manejo de ostomías e invasivos"
                image="/enfermeria/ostomias.jpg"
                imageAlt="Manejo de ostomías e invasivos"
                reverse={false}
                showDeco={true}
                colorProfile="Centro"
                text="Acompañamos el cuidado de ostomías y dispositivos invasivos desde una mirada técnica y educativa, apoyando al paciente y su familia en la higiene, observación de signos de alerta, manejo cotidiano y adaptación segura a sus cuidados."
              />
              <ServiceDropdown
                title="Valores y consideraciones"
                colorProfile="Centro"
                items={[
                  {
                    name: "Curaciones avanzadas, heridas complejas y ostomías",
                    price: "Valor según evaluación",
                    description:
                      "Atención realizada por enfermera con formación en manejo avanzado de heridas, ostomías y cuidados clínicos especializados.",
                  },
                  {
                    name: "Manejo de ostomías e invasivos",
                    price: "Valor según evaluación",
                    description:
                      "El valor puede variar según el tipo de dispositivo, condición del paciente, insumos requeridos, frecuencia de atención y complejidad del procedimiento.",
                  },
                ]}
              />
            </div>
            <div id="enfermeria-domicilio">
              <ServiceDropdown
                title="Atención de enfermería a domicilio"
                colorProfile="Centro"
                items={[
                  {
                    name: "Atención de enfermería a domicilio",
                    price: "Disponible con recargo adicional según sector",
                    description:
                      "El valor final puede variar según ubicación, disponibilidad, tipo de atención e insumos necesarios.",
                  },
                  {
                    type: "note",
                    text: "Consulta tu caso y agenda por WhatsApp tu atención de enfermería para recibir orientación y presupuesto.",
                  },
                ]}
              />
            </div>
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
