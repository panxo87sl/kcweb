import "./OsteoPage.css";
import { Helmet } from "react-helmet-async";
import SingleProfessionalShowcase from "../ui/SingleProfessionalShowcase";
import ApproachSection from "../ui/ApproachSection";
import CardShowcaseGrid from "../ui/CardShowcaseGrid";
import TopicChipGrid from "../ui/TopicChipGrid";

export default function OsteoPage() {
  return (
    <>
      <Helmet>
        <title>Osteópata en Antofagasta | KINECLIN Centro de Salud</title>
        <meta
          name="description"
          content="Atención de osteopatía y quiropraxia en Antofagasta para aliviar dolores musculares, articulares y problemas posturales. Agenda online en KINECLIN."
        />
      </Helmet>

      <main className="osteoPage">
        <header className="osteoHero">
          <div className="osteoHero__inner">
            <h1 className="osteoHero__title">OSTEOPATÍA · QUIROPRAXIA</h1>
            <p className="osteoHero__lead">
              Terapia manual especializada para aliviar el dolor, mejorar la movilidad y
              recuperar el equilibrio de tu cuerpo.
            </p>
          </div>
        </header>

        <SingleProfessionalShowcase
          image="/osteopatia/diego.jpg"
          name="Diego Zúñiga"
          role="Kinesiólogo · Osteópata C.O."
          description={
            <>
              Kinesiólogo y Osteópata, director y fundador de Kineclin, con más de{" "}
              <strong>10 años de experiencia</strong> hospitalaria y ambulatoria. Es Osteópata
              C.O. por la <strong>Escuela de Osteopatía de Madrid</strong> (formación oficial
              de 5 años) y Máster en Osteopatía por la{" "}
              <strong>Universidad Pontificia de Salamanca</strong> (España), además de
              encontrarse en formación como Psiconeuroinmunólogo Clínico en{" "}
              <strong>PNI Europe</strong>. Cuenta con un Diplomado en Kinesioterapia en
              Paciente Crítico Adulto por la <strong>PUC</strong> y especialización en{" "}
              <strong>Punción Seca</strong> y <strong>Neuromodulación</strong>, combinando
              docencia universitaria y práctica clínica en un enfoque integral orientado a
              restaurar la movilidad, aliviar el dolor y acompañar la recuperación de cada
              paciente.
            </>
          }
          wsp={true}
          wspLink="https://wa.me/56950833838"
          wspMsg="Hola, quisiera agendar una evaluación con el Kinesiólogo Diego Zúñiga. ¿Me podrían indicar disponibilidad?"
          wspGTag="AW-17683213103/hIexCNjQnJAcEK_WgfBB"
          agenda={true}
          agendaLink="https://ff.healthatom.io/qn3RXi"
          agendaGTag="AW-17683213103/hCO8CLDxspAcEK_WgfBB"
          background="white"
        />

        <ApproachSection
          title="¿Qué es la osteopatía?"
          background="soft"
          paragraphs={[
            <>
              La osteopatía es una <strong>terapia manual</strong> que evalúa y trata
              disfunciones del <strong>sistema músculo-esquelético</strong> (articulaciones,
              músculos y tejidos), buscando <strong>restaurar la función del cuerpo</strong>.
              Se basa en la relación entre <strong>estructura y función</strong>: cuando
              existen <strong>restricciones de movilidad</strong>, el organismo compensa, puede
              aparecer <strong>dolor</strong> y se altera el{" "}
              <strong>equilibrio general</strong>.
            </>,
            <>
              Como disciplina fue estructurada a finales del siglo XIX en Estados Unidos por el
              doctor Andrew Taylor Still, quien estudió profundamente la anatomía y planteó que
              muchos trastornos podían aliviarse sin medicación, identificando y corrigiendo
              alteraciones que interferían con la <strong>circulación</strong> y con el
              correcto funcionamiento del <strong>sistema nervioso</strong>. Desde esta{" "}
              <strong>mirada integral</strong>, todos los sistemas del cuerpo trabajan en
              conjunto, por lo que un problema en un área puede impactar en otras.
            </>,
            <>
              El objetivo del tratamiento es <strong>liberar restricciones</strong>, mejorar la{" "}
              <strong>movilidad</strong>, <strong>aliviar el dolor</strong> y promover una
              mejor salud general, considerando el cuerpo como una <strong>unidad</strong>.
            </>,
          ]}
        />

        <CardShowcaseGrid
          title="Tipos de osteopatía"
          background="white"
          cards={[
            {
              image: "/osteopatia/osteopatia-estructural.jpg",
              imageAlt: "Osteopatía estructural",
              title: "Osteopatía estructural",
              text: "Se basa en la evaluación y tratamiento de disfunciones en la columna vertebral, articulaciones y músculos.",
            },
            {
              image: "/osteopatia/osteopatia-craneal.jpg",
              imageAlt: "Osteopatía craneal",
              title: "Osteopatía craneal",
              text: "Se enfoca en la manipulación suave del cráneo y sus estructuras para tratar disfunciones del sistema nervioso central.",
            },
            {
              image: "/osteopatia/osteopatia-visceral.jpg",
              imageAlt: "Osteopatía visceral",
              title: "Osteopatía visceral",
              text: "Se centra en las vísceras y órganos internos. Busca tratar disfunciones que puedan afectar la función visceral y la salud en general.",
            },
          ]}
        />

        <TopicChipGrid
          title="Patologías que podemos tratar"
          background="soft"
          items={[
            "Dolor de espalda",
            "Dolor de cuello",
            "Dolor articular",
            "Dolor de cabeza",
            "Dolor ciático",
            "Tendinitis",
            "Lesiones deportivas",
            "Contracturas musculares",
            "Problemas posturales",
            "Alteraciones del sistema digestivo",
            "Entre otros trastornos",
          ]}
        />

        <TopicChipGrid
          lead="También podemos encontrar que la osteopatía puede tratar diversas patologías en pacientes pediátricos, entre ellas:"
          background="soft"
          items={[
            "Infecciones respiratorias",
            "Otitis",
            "Sinusitis",
            "Cólicos del lactante",
            "Plagiocefalia",
          ]}
        />

        <CardShowcaseGrid
          title="Tratamientos complementarios que se realizan"
          background="white"
          cards={[
            {
              image: "/osteopatia/puncion-seca.jpg",
              imageAlt: "Punción seca",
              title: "Punción seca",
              text: "La punción seca es una técnica invasiva utilizada en fisioterapia para eliminar puntos dolorosos musculares (o puntos gatillo), que se pueden generar debido a sobrecargas, movimientos bruscos, etc. Se llama punción seca porque no introducimos ningún anestésico ni sustancia, liberando así la tensión miofascial del segmento.",
            },
            {
              image: "/osteopatia/neuromodulacion.jpg",
              imageAlt: "Neuromodulación",
              title: "Neuromodulación",
              text: "Los objetivos principales de la neuromodulación son:",
              list: [
                "Disminuir el dolor tanto agudo como crónico.",
                "Restablecer la función del sistema nervioso: a nivel periférico, central, somático, autonómico, sensorial, motor, vascular, glandular y visceral.",
                "Mejorar la función neuromuscular, los patrones de reclutamiento muscular y el control motor.",
              ],
            },
            {
              image: "/osteopatia/theragun.jpg",
              imageAlt: "Theragun PRO Plus",
              title: "Pistola de masaje - Theragun PRO Plus",
              text: "El masajeador muscular percutivo es una herramienta profesional utilizada para reducir el dolor muscular, mejorar la movilidad y favorecer la recuperación física. Su tecnología de percusión alcanza mayor profundidad en el tejido muscular, estimulando la circulación y ayudando a liberar la tensión acumulada de forma más efectiva que los dispositivos de vibración convencionales.",
            },
          ]}
        />

        <section className="osteoSection osteoSection--soft">
          <div className="osteoSection__inner osteoSection__inner--center">
            <p className="osteoClosingText">
              En KINECLIN buscamos que cada tratamiento de osteopatía sea preciso, seguro y
              personalizado, acompañando a cada paciente para aliviar el dolor, recuperar la
              movilidad y mejorar su bienestar general.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
