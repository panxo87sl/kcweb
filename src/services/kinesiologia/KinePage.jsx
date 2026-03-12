import "./KinePage.css";

export default function KinePage() {
  return (
    <main className="kinePage">
      <header className="kineHero">
        <div className="kineHero__inner">
          <h1 className="kineHero__title">Kinesiología</h1>

          <p className="kineHero__lead">
            La Kinesiología es un pilar fundamental en el cuidado de la salud física. Nuestro
            equipo de kinesiólogos trabaja para aliviar el dolor, recuperar movilidad, mejorar
            la función corporal y acompañar procesos de rehabilitación de manera personalizada
            y basada en evidencia. En Kineclin, combinamos técnicas modernas, tecnología
            actualizada y un enfoque humano que prioriza tu bienestar en cada etapa del
            proceso.
          </p>

          <p className="kineHero__lead">
            Nuestro objetivo es ayudarte a recuperar tu funcionalidad, volver a moverte con
            seguridad y mejorar tu calidad de vida, ya sea en un proceso de rehabilitación,
            manejo del dolor o retorno deportivo. Atendemos a personas de todas las edades,
            desde bebés hasta adultos mayores, adaptando cada intervención a sus necesidades
            específicas.
          </p>
        </div>
      </header>

      <section className="kineSection">
        <div className="kineSection__inner">
          <h2 className="kineSection__title">ÁREAS DE ATENCIÓN EN KINESIOLOGÍA</h2>

          <div className="kineGrid">
            <article className="kineCard">
              <h3 className="kineCard__title">Rehabilitación Musculoesquelética</h3>
              <p className="kineCard__text">
                Tratamiento para lesiones articulares, musculares y tendinosas; recuperación
                post-esguinces, post-fracturas y cirugías. Enfoque en movilidad, fuerza,
                estabilidad y control motor.
              </p>
            </article>

            <article className="kineCard">
              <h3 className="kineCard__title">Kinesioterapia Respiratoria</h3>
              <p className="kineCard__text">
                Atención orientada a mejorar la capacidad ventilatoria, despejar vías aéreas,
                optimizar la respiración y manejar síntomas respiratorios en niños y adultos.
              </p>
            </article>

            <article className="kineCard">
              <h3 className="kineCard__title">Dolor Crónico y Disfunciones Posturales</h3>
              <p className="kineCard__text">
                Reeducación postural, alivio del dolor y programas progresivos para mejorar
                rango de movimiento y funcionalidad diaria.
              </p>
            </article>

            <article className="kineCard">
              <h3 className="kineCard__title">
                Retorno Deportivo y Reintegro a la Actividad Física
              </h3>
              <p className="kineCard__text">
                Evaluación funcional completa, fortalecimiento específico y entrenamiento
                progresivo para retomar deportes o rutinas de manera segura.
              </p>
            </article>

            <article className="kineCard">
              <h3 className="kineCard__title">Terapias Manuales y Técnicas Avanzadas</h3>
              <p className="kineCard__text">Incluye:</p>
              <ul className="kineList">
                <li>Ondas de choque</li>
                <li>Punción seca</li>
                <li>Neuromodulación</li>
                <li>Masoterapia terapéutica</li>
                <li>Ejercicios correctivos</li>
                <li>Movilización articular y fascial</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="kineSection kineSection--alt">
        <div className="kineSection__inner">
          <h2 className="kineSection__title">KINESIOLOGÍA PEDIÁTRICA</h2>

          <p className="kineText">
            Nuestro equipo también cuenta con formación y experiencia en kinesiología
            pediátrica, abordando el desarrollo motor y respiratorio desde los primeros meses
            de vida. Este servicio está especialmente orientado a:
          </p>

          <div className="kineChecks">
            <p>
              ✔ Bebés y lactantes que requieren estimulación temprana, control del tono
              muscular y acompañamiento en hitos del desarrollo.
            </p>
            <p>
              ✔ Niños y niñas en edad preescolar y escolar que presentan alteraciones
              posturales, debilidad muscular, dificultades en la marcha o patrones de
              movimiento ineficientes.
            </p>
            <p>
              ✔ Pacientes pediátricos con afecciones respiratorias, donde el objetivo es
              mejorar ventilación, higiene bronquial y calidad respiratoria.
            </p>
            <p>
              ✔ Adolescentes que inician actividad física o requieren correcciones funcionales
              para evitar lesiones deportivas.
            </p>
          </div>

          <p className="kineText">
            El enfoque pediátrico se basa en actividades lúdicas, técnicas específicas de
            estimulación y educación a madres, padres y cuidadores, permitiendo acompañar el
            desarrollo motor desde una mirada profesional, respetuosa y cercana.
          </p>
        </div>
      </section>

      <section className="kineSection">
        <div className="kineSection__inner">
          <h2 className="kineSection__title">ENFOQUE CLÍNICO Y HUMANO</h2>
          <p className="kineText">
            La rehabilitación es un proceso único para cada persona, especialmente cuando se
            trata de niños o adultos mayores. Por eso nuestro equipo kinesiológico trabaja con
            una visión integral: evaluaciones exhaustivas, planificación personalizada,
            seguimiento continuo y educación clara para que cada paciente —independiente de su
            edad— se sienta acompañado y seguro en su proceso.
          </p>
          <p className="kineText">
            Nuestro propósito es guiarte paso a paso, devolviendo la movilidad, la confianza y
            el bienestar a través del movimiento.
          </p>
        </div>
      </section>

      <section className="kineSection kineSection--alt">
        <div className="kineSection__inner">
          <h2 className="kineSection__title">NUESTROS KINESIÓLOGOS</h2>

          <div className="kineTeam">
            <article className="kinePerson">
              <h3 className="kinePerson__name">KLGA. CATALINA REYES</h3>
              <p className="kinePerson__role">
                Rehabilitación musculoesquelética, respiratoria y retorno deportivo.
              </p>
            </article>

            <article className="kinePerson">
              <h3 className="kinePerson__name">KLGO . DIEGO ZUÑIGA</h3>
              <p className="kinePerson__role">
                Osteopatía, evaluación funcional avanzada y terapia manual.
              </p>
            </article>

            <article className="kinePerson">
              <h3 className="kinePerson__name">KLGA . NICOLE SILVA</h3>
              <p className="kinePerson__role">
                Kinesiología integral, fortalecimiento terapéutico y manejo del dolor.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="kineSection">
        <div className="kineSection__inner">
          <h2 className="kineSection__title">MOVIMIENTO QUE RECUPERA</h2>
          <p className="kineText">
            Creemos que la kinesiología transforma vidas: disminuye el dolor, mejora la
            movilidad, fortalece el cuerpo y restaura la confianza. Ya sea para un adulto, un
            deportista o un niño en pleno desarrollo, cada sesión es una oportunidad para
            avanzar con seguridad y propósito.
          </p>
          <p className="kineText">
            Nuestro equipo está preparado para acompañarte en tu proceso, desde la infancia
            hasta la adultez.
          </p>
          <p className="kineText">
            Reserva tu evaluación inicial y comencemos juntos tu camino hacia la recuperación y
            el bienestar integral.
          </p>
        </div>
      </section>
    </main>
  );
}
