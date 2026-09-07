import "./DomiPage.css";
import { Helmet } from "react-helmet-async";
import ActionButton from "../../components/common/ActionButton/ActionButton";
import InfoDecoBlock from "../ui/InfoDecoBlock";
import CardShowcaseGrid from "../ui/CardShowcaseGrid";
import TopicChipGrid from "../ui/TopicChipGrid";

function DomiSectionHeading({ title }) {
  return (
    <div className="domiServiceHeading">
      <span className="domiServiceHeading__line" />
      <h2 className="domiServiceHeading__title">{title}</h2>
      <span className="domiServiceHeading__line" />
    </div>
  );
}

function DomiServiceActions({ serviceHref, serviceLabel, wspMsg }) {
  return (
    <div className="domiServiceActions">
      <ActionButton label={serviceLabel} href={serviceHref} variant="centro" />

      <ActionButton
        label="Consultar por WhatsApp"
        href="https://wa.me/56950833838"
        variant="whatsapp"
        wspmsg={wspMsg}
      />
    </div>
  );
}

export default function DomiPage() {
  return (
    <>
      <Helmet>
        <title>Atención Domiciliaria Integral en Antofagasta | KINECLIN</title>
        <meta
          name="description"
          content="Atención domiciliaria integral en Antofagasta: kinesiología, terapia ocupacional, fonoaudiología, enfermería, TENS, cuidadoras y arriendo de equipos clínicos."
        />
      </Helmet>

      <main className="domiPage">
        <header className="domiHero">
          <div className="domiHero__inner">
            <h1 className="domiHero__title">ATENCIÓN DOMICILIARIA INTEGRAL</h1>
            <p className="domiHero__lead">
              Servicios profesionales, cuidados y apoyo clínico directamente en el hogar para
              usuarios que requieren atención personalizada, rehabilitación o acompañamiento en
              su vida diaria.
            </p>
          </div>
        </header>

        <section className="domiSection">
          <div className="domiSection__inner domiSection__inner--center">
            <h2 className="domiSection__title">Nuestro enfoque</h2>

            <p className="domiText">
              En KINECLIN entendemos la atención domiciliaria integral como una forma de
              acercar los servicios de salud al hogar, especialmente cuando el usuario presenta
              dificultad para trasladarse, movilidad reducida, dependencia, recuperación post
              hospitalización, secuelas funcionales o simplemente requiere una atención más
              cómoda y personalizada en su propio entorno.
            </p>

            <p className="domiText">
              Nuestro objetivo es entregar una atención segura, humana y coordinada,
              considerando las necesidades del usuario, su familia, su cuidador y las
              condiciones reales del domicilio. Desde esta mirada, el hogar se transforma en un
              espacio terapéutico donde es posible evaluar, intervenir, educar y acompañar de
              manera más cercana cada proceso de salud, rehabilitación o cuidado.
            </p>
          </div>
        </section>

        <section className="domiSection domiSection--soft">
          <div className="domiSection__inner">
            <h2 className="domiSection__title">¿Cómo funciona la atención domiciliaria?</h2>

            <div className="domiProcessGrid">
              <article className="domiProcessCard">
                <h3>Evaluación de necesidades</h3>
                <p>
                  Se revisa el motivo de consulta, condición actual, nivel de funcionalidad,
                  entorno familiar y requerimientos del usuario en su domicilio.
                </p>
              </article>

              <article className="domiProcessCard">
                <h3>Plan de atención</h3>
                <p>
                  Se define el tipo de servicio más adecuado, la frecuencia sugerida, los
                  objetivos de trabajo y las indicaciones para la familia o cuidador.
                </p>
              </article>

              <article className="domiProcessCard">
                <h3>Intervención en el hogar</h3>
                <p>
                  El profesional, TENS o cuidadora realiza la atención en casa, adaptando el
                  proceso a las condiciones reales del espacio y a la rutina diaria del
                  usuario.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="domicilio-kinesiologia" className="domiSection">
          <DomiSectionHeading title="Kinesiología a domicilio" />

          <div className="domiSection__inner">
            <InfoDecoBlock
              sectionID="kinesiologia-domicilio-servicio"
              title="Rehabilitación física en el hogar"
              image="/domiciliario/kinesiologia-domicilio.jpg"
              imageAlt="Kinesiología a domicilio"
              reverse={false}
              showDeco={true}
              colorProfile="Centro"
              text="La kinesiología a domicilio permite realizar procesos de rehabilitación directamente en el hogar, trabajando movilidad, fuerza, equilibrio, marcha, dolor, control motor y recuperación funcional. Es una alternativa especialmente útil cuando el usuario tiene dificultad para trasladarse o necesita continuar su tratamiento en un entorno más cercano y seguro."
            />

            <InfoDecoBlock
              sectionID="kinesiologia-domicilio-indicaciones"
              title="¿Para quién está indicada?"
              image="/domiciliario/kinesiologia-usuario.jpg"
              imageAlt="Usuario recibiendo kinesiología a domicilio"
              reverse={true}
              showDeco={true}
              colorProfile="Centro"
              text="Está indicada para usuarios con movilidad reducida, pérdida de fuerza, dolor musculoesquelético, riesgo de caídas, recuperación post cirugía, secuelas neurológicas, desacondicionamiento físico o necesidad de mejorar su funcionalidad diaria. El tratamiento se adapta al espacio disponible, objetivos del usuario y nivel de apoyo familiar."
            />

            <DomiServiceActions
              serviceHref="/kinesiologia"
              serviceLabel="Ver Kinesiología"
              wspMsg="Hola, quisiera consultar por atención de kinesiología a domicilio."
            />
          </div>
        </section>

        <TopicChipGrid
          title="Necesidades frecuentes en kinesiología domiciliaria"
          lead="Algunas condiciones o motivos de atención que pueden requerir apoyo kinésico en el hogar."
          items={[
            "ACV",
            "Parkinson",
            "Post cirugía",
            "Movilidad reducida",
            "Riesgo de caídas",
            "Dolor musculoesquelético",
            "Debilidad muscular",
            "Adulto mayor",
          ]}
          background="soft"
          colorProfile="Centro"
        />

        <section id="domicilio-terapia-ocupacional" className="domiSection">
          <DomiSectionHeading title="Terapia Ocupacional a domicilio" />

          <div className="domiSection__inner">
            <InfoDecoBlock
              sectionID="terapia-ocupacional-domicilio-servicio"
              title="Autonomía e independencia en el entorno real"
              image="/domiciliario/terapia-ocupacional-domicilio.jpg"
              imageAlt="Terapia ocupacional a domicilio"
              reverse={false}
              showDeco={true}
              colorProfile="Centro"
              text="La terapia ocupacional a domicilio permite evaluar e intervenir en el mismo lugar donde el usuario realiza sus actividades diarias. Esto facilita observar rutinas, barreras del entorno, necesidades de apoyo, ayudas técnicas y actividades significativas, favoreciendo un proceso centrado en la autonomía, la independencia y la participación cotidiana."
            />

            <InfoDecoBlock
              sectionID="terapia-ocupacional-domicilio-indicaciones"
              title="¿Para quién está indicada?"
              image="/domiciliario/terapia-ocupacional-usuario.jpg"
              imageAlt="Usuario en terapia ocupacional domiciliaria"
              reverse={true}
              showDeco={true}
              colorProfile="Centro"
              text="Está indicada para adultos y personas mayores que necesitan recuperar, mantener o adaptar su desempeño en actividades de la vida diaria, ya sea por secuelas neurológicas, deterioro funcional, cambios cognitivos, dependencia parcial, riesgo de caídas o necesidad de reorganizar rutinas dentro del hogar y la comunidad."
            />

            <DomiServiceActions
              serviceHref="/terapia-ocupacional"
              serviceLabel="Ver Terapia Ocupacional"
              wspMsg="Hola, quisiera consultar por atención de terapia ocupacional a domicilio."
            />
          </div>
        </section>

        <TopicChipGrid
          title="Necesidades frecuentes en terapia ocupacional domiciliaria"
          lead="Situaciones donde la terapia ocupacional puede apoyar directamente dentro del hogar."
          items={[
            "ACV",
            "Parkinson",
            "Deterioro cognitivo",
            "Dependencia funcional",
            "Ayudas técnicas",
            "Adaptación del hogar",
            "Prevención de caídas",
            "Adulto mayor",
          ]}
          background="soft"
          colorProfile="Centro"
        />

        <section id="domicilio-fonoaudiologia" className="domiSection">
          <DomiSectionHeading title="Fonoaudiología a domicilio" />

          <div className="domiSection__inner">
            <InfoDecoBlock
              sectionID="fonoaudiologia-domicilio-servicio"
              title="Comunicación y deglución en casa"
              image="/domiciliario/fonoaudiologia-domicilio.jpg"
              imageAlt="Fonoaudiología a domicilio"
              reverse={false}
              showDeco={true}
              colorProfile="Centro"
              text="La fonoaudiología a domicilio permite evaluar e intervenir dificultades de comunicación, habla, lenguaje, voz, deglución y motricidad orofacial en el hogar. Este formato facilita acompañar al usuario en un espacio familiar, incorporando orientaciones prácticas para la familia o cuidador cuando existen dificultades para comunicarse o alimentarse de forma segura."
            />

            <InfoDecoBlock
              sectionID="fonoaudiologia-domicilio-indicaciones"
              title="¿Para quién está indicada?"
              image="/domiciliario/fonoaudiologia-usuario.jpg"
              imageAlt="Usuario recibiendo fonoaudiología domiciliaria"
              reverse={true}
              showDeco={true}
              colorProfile="Centro"
              text="Está indicada para usuarios que presentan dificultades para hablar con claridad, comunicarse, organizar el lenguaje, utilizar la voz o tragar alimentos, líquidos o saliva de manera segura. También puede apoyar procesos posteriores a enfermedades neurológicas, hospitalizaciones o condiciones que afectan la alimentación y la comunicación funcional."
            />

            <DomiServiceActions
              serviceHref="/fonoaudiologia"
              serviceLabel="Ver Fonoaudiología"
              wspMsg="Hola, quisiera consultar por atención de fonoaudiología a domicilio."
            />
          </div>
        </section>

        <TopicChipGrid
          title="Necesidades frecuentes en fonoaudiología domiciliaria"
          lead="Motivos de atención donde la fonoaudiología puede ser relevante dentro del hogar."
          items={[
            "Disfagia",
            "ACV",
            "Parkinson",
            "Alteraciones del habla",
            "Trastornos de voz",
            "Motricidad orofacial",
            "Comunicación funcional",
            "Adulto mayor",
          ]}
          background="soft"
          colorProfile="Centro"
        />

        <section id="domicilio-enfermeria" className="domiSection">
          <DomiSectionHeading title="Enfermería a domicilio" />

          <div className="domiSection__inner">
            <InfoDecoBlock
              sectionID="enfermeria-domicilio-servicio"
              title="Procedimientos y cuidados clínicos en el hogar"
              image="/domiciliario/enfermeria-domicilio.jpg"
              imageAlt="Enfermería a domicilio"
              reverse={false}
              showDeco={true}
              colorProfile="Centro"
              text="La enfermería a domicilio permite realizar procedimientos y cuidados clínicos en casa, evitando traslados innecesarios y entregando apoyo profesional al usuario y su familia. Puede incluir curaciones, inyectables, manejo de dispositivos, educación en cuidados, observación de signos de alerta y acompañamiento en procesos de recuperación."
            />

            <InfoDecoBlock
              sectionID="enfermeria-domicilio-indicaciones"
              title="¿Para quién está indicada?"
              image="/domiciliario/enfermeria-usuario.jpg"
              imageAlt="Usuario recibiendo enfermería domiciliaria"
              reverse={true}
              showDeco={true}
              colorProfile="Centro"
              text="Está indicada para usuarios que requieren procedimientos de enfermería, continuidad de cuidados, apoyo posterior a una hospitalización, manejo de heridas, ostomías, dispositivos clínicos o asistencia profesional en situaciones donde el traslado al centro de salud resulta complejo o poco conveniente."
            />

            <DomiServiceActions
              serviceHref="/enfermeria"
              serviceLabel="Ver Enfermería"
              wspMsg="Hola, quisiera consultar por atención de enfermería a domicilio."
            />
          </div>
        </section>

        <TopicChipGrid
          title="Necesidades frecuentes en enfermería domiciliaria"
          lead="Procedimientos y cuidados que pueden requerir apoyo profesional en el domicilio."
          items={[
            "Curaciones",
            "Inyectables",
            "Ostomías",
            "Heridas",
            "Post hospitalización",
            "Dispositivos clínicos",
            "Educación familiar",
            "Adulto mayor",
          ]}
          background="soft"
          colorProfile="Centro"
        />

        <section id="cuidados-domiciliarios" className="domiSection">
          <DomiSectionHeading title="Cuidados domiciliarios" />

          <div className="domiSection__inner">
            <InfoDecoBlock
              sectionID="cuidadoras"
              title="Cuidadoras a domicilio"
              image="/domiciliario/cuidadoras.jpg"
              imageAlt="Cuidadoras a domicilio"
              reverse={false}
              showDeco={true}
              colorProfile="Centro"
              text="El servicio de cuidadoras a domicilio está orientado a usuarios que necesitan acompañamiento, supervisión y apoyo en sus actividades cotidianas. Puede incluir asistencia en rutinas básicas, higiene, alimentación, movilización, compañía, prevención de riesgos y apoyo general a la familia, siempre de acuerdo con las necesidades del usuario."
            />

            <InfoDecoBlock
              sectionID="tens"
              title="TENS a domicilio"
              image="/domiciliario/tens.jpg"
              imageAlt="TENS a domicilio"
              reverse={true}
              showDeco={true}
              colorProfile="Centro"
              text="El servicio de TENS a domicilio permite contar con apoyo técnico en cuidados de salud dentro del hogar. Está pensado para usuarios que requieren asistencia más específica, seguimiento de indicaciones, apoyo en cuidados básicos, observación de signos de alerta y acompañamiento en procesos de recuperación o dependencia."
            />

            <div className="domiServiceActions">
              <ActionButton
                label="Consultar cuidados domiciliarios"
                href="https://wa.me/56950833838"
                variant="whatsapp"
                wspmsg="Hola, quisiera consultar por el servicio de cuidados domiciliarios, cuidadoras o TENS."
              />
            </div>
          </div>
        </section>

        <CardShowcaseGrid
          sectionID="equipos-domiciliarios"
          title="Equipos clínicos disponibles"
          background="soft"
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

        <section className="domiSection">
          <div className="domiSection__inner domiSection__inner--center">
            <p className="domiClosingText">
              En KINECLIN buscamos que cada atención domiciliaria sea cercana, segura y
              personalizada, acompañando al usuario y su familia con servicios profesionales,
              cuidados y soluciones adaptadas a sus necesidades reales dentro del hogar.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
