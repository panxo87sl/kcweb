import "./FonoPage.css";
import { Helmet } from "react-helmet-async";
import InfoDecoBlock from "../ui/InfoDecoBlock";
import PsicoTeamShowcase from "../ui/PsicoTeamShowcase";

export default function FonoPage() {
  return (
    <>
      <Helmet>
        <title>Fonoaudiología en Antofagasta | KINECLIN Centro de Salud</title>
        <meta
          name="description"
          content="Servicio de fonoaudiología en Antofagasta: evaluación e intervención en lenguaje, habla, voz, audición, deglución y motricidad orofacial en KINECLIN."
        />
      </Helmet>

      <main className="fonoPage">
        <header className="fonoHero">
          <div className="fonoHero__inner">
            <h1 className="fonoHero__title">FONOAUDIOLOGÍA</h1>
            <p className="fonoHero__lead">
              Evaluación, intervención y acompañamiento profesional en lenguaje, habla, voz,
              audición, deglución y motricidad orofacial.
            </p>
          </div>
        </header>

        <section className="fonoSection">
          <div className="fonoSection__inner fonoSection__inner--center">
            <h2 className="fonoSection__title">Nuestro enfoque</h2>

            <p className="fonoText">
              En KINECLIN contamos con un servicio de fonoaudiología orientado a la evaluación,
              intervención y acompañamiento de personas que presentan dificultades en áreas
              como lenguaje, habla, deglución y motricidad orofacial. Nuestro objetivo es
              entregar una atención cercana, profesional y adaptada a las necesidades de cada
              paciente, considerando su edad, etapa de desarrollo, antecedentes de salud y
              motivo de consulta.
            </p>

            <p className="fonoText">
              La fonoaudiología cumple un rol fundamental en la comunicación humana, la
              alimentación segura y el funcionamiento de estructuras orales relacionadas con el
              habla, la respiración, la masticación y la deglución. Por eso, cada proceso se
              trabaja con objetivos claros, continuidad y acompañamiento profesional.
            </p>
          </div>
        </section>

        <section className="fonoSection fonoSection--soft">
          <div className="fonoSection__inner">
            <div id="fono-evaluacion">
              <InfoDecoBlock
                sectionID="evaluacion"
                title="Evaluación fonoaudiológica"
                image="/fonoaudiologia/evaluacion.jpg"
                imageAlt="Evaluación fonoaudiológica"
                reverse={false}
                showDeco={true}
                colorProfile="Centro"
                text="La evaluación fonoaudiológica es el primer paso para conocer las necesidades del paciente y definir un plan de intervención adecuado. Durante esta etapa se recopilan antecedentes, se conversa sobre el motivo de consulta y se observan las habilidades o funciones que requieren apoyo, ya sea en lenguaje, habla, voz, deglución, motricidad orofacial o una combinación de estas áreas."
              />
            </div>
            <div id="fono-audicion">
              <InfoDecoBlock
                sectionID="audicion"
                title="Audición y comunicación"
                image="/fonoaudiologia/audicion.jpg"
                imageAlt="Audición y comunicación"
                reverse={true}
                showDeco={true}
                colorProfile="Centro"
                text="La audición cumple un rol fundamental en la comunicación, el desarrollo del lenguaje, el habla y la interacción social. En esta área orientamos a pacientes y familias cuando existen señales que puedan afectar la comprensión, la pronunciación, la atención en conversaciones o la seguridad comunicativa. El abordaje fonoaudiológico permite identificar alertas, entregar educación y sugerir derivación a evaluación auditiva específica cuando corresponde."
              />
            </div>

            <div id="fono-habla-voz">
              <InfoDecoBlock
                sectionID="voz"
                title="Habla y voz"
                image="/fonoaudiologia/voz.jpg"
                imageAlt="Terapia de habla y voz"
                reverse={false}
                showDeco={true}
                colorProfile="Centro"
                text="El habla corresponde a la forma en que producimos sonidos y palabras, mientras que la voz participa en la expresión y calidad de la comunicación. Trabajamos dificultades relacionadas con pronunciación, articulación, claridad, fluidez, coordinación de movimientos orales y uso funcional de la voz, buscando favorecer una comunicación más clara, segura y efectiva."
              />
            </div>
            <div id="fono-lenguaje">
              <InfoDecoBlock
                sectionID="lenguaje"
                title="Lenguaje"
                image="/fonoaudiologia/lenguaje.jpg"
                imageAlt="Terapia de lenguaje"
                reverse={true}
                showDeco={true}
                colorProfile="Centro"
                text="El lenguaje permite comprender y expresar ideas, emociones, necesidades y pensamientos. Acompañamos a pacientes que presentan dificultades para organizar, comprender o expresar el lenguaje, ya sea en etapas del desarrollo infantil, contextos escolares o procesos de salud que afectan la comunicación en adolescentes, adultos o personas mayores."
              />
            </div>

            <div id="fono-deglucion-mo">
              <InfoDecoBlock
                sectionID="fono-deglucion-mo"
                title="Deglución y motricidad orofacial"
                image="/fonoaudiologia/deglucion.jpg"
                imageAlt="Deglución y motricidad orofacial"
                reverse={false}
                showDeco={true}
                colorProfile="Centro"
                text="La deglución y la motricidad orofacial se relacionan con el funcionamiento de la boca, lengua, labios, mejillas, mandíbula y musculatura facial. Estas áreas participan en funciones importantes como tragar alimentos, líquidos y saliva de manera segura, respirar, succionar, masticar, articular sonidos y mantener una postura oral adecuada. El trabajo fonoaudiológico busca evaluar estas funciones, identificar dificultades y acompañar al paciente con estrategias terapéuticas que favorezcan una alimentación más segura, una mejor coordinación orofacial y mayor funcionalidad en la vida diaria."
              />
            </div>
          </div>
        </section>

        <PsicoTeamShowcase
          leftImage="/fonoaudiologia/fonoCatalina.jpg"
          leftName="Catalina Quiroz"
          leftText={
            <>
              Fonoaudióloga clínica orientada principalmente a la atención de adultos, con
              experiencia en evaluación e intervención en lenguaje, habla, deglución y
              motricidad orofacial. Su trabajo se enfoca en comprender las necesidades de cada
              paciente, establecer objetivos terapéuticos realistas y acompañar el proceso de
              manera clara, cercana y profesional.
            </>
          }
          leftWsp={true}
          leftWspLink="https://wa.me/56950833838"
          leftWspMsg="Hola, quisiera consultar por atención fonoaudiológica con Catalina."
          leftAgenda={true}
          leftAgendaLink={"https://ff.healthatom.io/TUXCFw"}
          rightImage="/fonoaudiologia/fonoMariluna.jpg"
          rightName="Mariluna Miranda"
          rightText={
            <>
              Fonoaudióloga con especial interés en el área de voz, además de experiencia en
              lenguaje, habla, deglución y motricidad orofacial. Atiende a niños, adolescentes
              y adultos, adaptando cada intervención a las necesidades del paciente, con un
              acompañamiento cercano, ordenado y orientado a una comunicación más segura y
              funcional.
            </>
          }
          rightWsp={true}
          rightWspLink="https://wa.me/56950833838"
          rightWspMsg="Hola, quisiera consultar por atención fonoaudiológica con Mariluna."
          rightAgenda={false}
        />

        <section className="fonoSection fonoSection--soft">
          <div className="fonoSection__inner fonoSection__inner--center">
            <p className="fonoClosingText">
              En KINECLIN trabajamos para que cada atención fonoaudiológica sea clara, humana y
              personalizada, acompañando a cada paciente en el desarrollo de habilidades que
              impactan directamente en su comunicación, alimentación, autonomía y calidad de
              vida.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
