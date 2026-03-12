import "./OsteoPage.css";
import ActionButton from "../../components/common/ActionButton/ActionButton";

export default function OsteoPage() {
  return (
    <main className="osteoPage">
      <header className="osteoHero">
        <div className="osteoHero__inner">
          <h1 className="osteoHero__title title_desktop" alt="PSICONEUROINMONOLOGÍA CLÍNICA">
            PSICONEUROINMONOLOGÍA CLÍNICA
          </h1>
          <h1 className="osteoHero__title title_mobile" alt="PSICONEUROINMONOLOGÍA CLÍNICA">
            PNI CLÍNICA
          </h1>
          <h1 className="osteoHero__title">OSTEOPATÍA · QUIROPRAXIA</h1>
        </div>
      </header>

      <section className="osteoSection">
        <div className="osteoSection__inner">
          {/* Título del bloque completo */}
          <h2 className="osteoTitle">Nuestro Especialista</h2>

          {/* Foto + ficha unificada (sin separación visual) */}
          <div className="osteoSpecialistBlock">
            <div className="osteoSpecialistBlock__photo">
              <img
                className="osteoSpecialistBlock__img"
                src="/osteopatia/diego.jpg"
                alt="KLGO. Diego Zúñiga"
              />
            </div>

            <div className="osteoSpecialistBlock__content">
              <div className="osteoSpecialistBlock__content_cv">
                <h3 className="osteoSpecialistBlock__name">KLGO. DIEGO ZÚÑIGA</h3>

                <ul className="osteoSpecialistBlock__list">
                  <li>
                    <strong>Director y fundador</strong> Clínica Kineclin.
                  </li>
                  <li>
                    <strong>Kinesiólogo</strong>, Universidad de Antofagasta.
                  </li>
                  <li>
                    <strong>Osteópata C.O.</strong>, Escuela de Osteopatía de Madrid (formación
                    oficial 5 años).
                  </li>
                  <li>
                    <strong>Máster en Osteopatía</strong>, Universidad Pontificia de Salamanca
                    (España).
                  </li>
                  <li>
                    <strong>En formación</strong> como Psiconeuroinmunólogo Clínico, PNI Europe
                    (formación oficial 3 años, Buenos Aires).
                  </li>
                  <li>
                    <strong>Especializado</strong> en Punción Seca (agujas acupuntura) y
                    Neuromodulación.
                  </li>
                  <li>
                    <strong>+10 años</strong> de experiencia hospitalaria y ambulatoria.
                  </li>
                  <li>
                    <strong>Diplomado</strong> en Kinesioterapia en Paciente Crítico Adulto,
                    PUC.
                  </li>
                  <li>
                    <strong>Docente universitario.</strong>
                  </li>
                </ul>
              </div>
              <div className="osteoSpecialistBlock__content__agenda">
                <h4 className="osteoSpecialistBlock__agenda_title">
                  Agenda ahora con nuestro especialista:
                </h4>
                <div className="osteoSpecialistBlock__content__agenda__buttons">
                  <div className="osteoSpecialistBlock__agenda">
                    <ActionButton
                      label={"Agenda Online"}
                      href={"https://ff.healthatom.io/qn3RXi"}
                      variant="centro"
                      size="nav"
                    />
                  </div>
                  <div className="osteoSpecialistBlock__agenda">
                    <ActionButton
                      label={"Whatsapp"}
                      href={"https://wa.me/56950833838"}
                      variant="whatsapp"
                      wspmsg={
                        "Hola, quisiera agendar una evaluación con el Kinesiólogo Diego Zúñiga. ¿Me podrían indicar disponibilidad?"
                      }
                      size="nav"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección separada abajo: ¿Qué es? */}
      <section className="osteoSection osteoSection--soft">
        <div className="osteoSection__inner osteoSection__inner--center">
          <h2 className="osteoTitle">¿Qué es la osteopatía?</h2>

          <p className="osteoText">
            La osteopatía es una <strong>terapia manual</strong> que evalúa y trata
            disfunciones del
            <strong> sistema músculo-esquelético</strong> (articulaciones, músculos y tejidos),
            buscando <strong>restaurar la función del cuerpo</strong>. Se basa en la relación
            entre
            <strong> estructura y función</strong>: cuando existen{" "}
            <strong>restricciones de movilidad</strong>, el organismo compensa, puede aparecer{" "}
            <strong>dolor</strong> y se altera el
            <strong> equilibrio general</strong>.
          </p>

          <p className="osteoText">
            Como disciplina fue estructurada a finales del siglo XIX en Estados Unidos por el
            doctor Andrew Taylor Still, quien estudió profundamente la anatomía y planteó que
            muchos trastornos podían aliviarse sin medicación, identificando y corrigiendo
            alteraciones que interferían con la <strong>circulación</strong> y con el correcto
            funcionamiento del
            <strong> sistema nervioso</strong>. Desde esta <strong>mirada integral</strong>,
            todos los sistemas del cuerpo trabajan en conjunto, por lo que un problema en un
            área puede impactar en otras.
          </p>

          <p className="osteoText">
            El objetivo del tratamiento es <strong>liberar restricciones</strong>, mejorar la
            <strong> movilidad</strong>, <strong>aliviar el dolor</strong> y promover una mejor
            salud general, considerando el cuerpo como una <strong>unidad</strong>.
          </p>
        </div>
      </section>

      {/* TODO lo demás queda igual */}
      <section className="osteoSection">
        <div className="osteoSection__inner">
          <h2 className="osteoTitle">Tipos de osteopatía</h2>

          <div className="osteoGrid">
            <article className="osteoCard">
              <div className="osteoCard__media">
                <img
                  className="osteoImg"
                  src="/osteopatia/osteopatia-estructural.jpg"
                  alt="Osteopatía estructural"
                />
              </div>
              <div className="osteoCard__body">
                <h3 className="osteoCard__title">OSTEOPATIA ESTRUCTURAL</h3>
                <p className="osteoText">
                  Se basa en la evaluación y tratamiento de disfunciones en la columna
                  vertebral, articulaciones y músculos.
                </p>
              </div>
            </article>

            <article className="osteoCard">
              <div className="osteoCard__media">
                <img
                  className="osteoImg"
                  src="/osteopatia/osteopatia-craneal.jpg"
                  alt="Osteopatía craneal"
                />
              </div>
              <div className="osteoCard__body">
                <h3 className="osteoCard__title">OSTEOPATIA CRANEAL</h3>
                <p className="osteoText">
                  Se enfoca en la manipulación suave del cráneo y sus estructuras para tratar
                  disfunciones del sistema nervioso central.
                </p>
              </div>
            </article>

            <article className="osteoCard">
              <div className="osteoCard__media">
                <img
                  className="osteoImg"
                  src="/osteopatia/osteopatia-visceral.jpg"
                  alt="Osteopatía visceral"
                />
              </div>
              <div className="osteoCard__body">
                <h3 className="osteoCard__title">OSTEOPATIA VISCERAL</h3>
                <p className="osteoText">
                  Se centra en las vísceras y órganos internos. Busca tratar disfunciones que
                  puedan afectar la función visceral y la salud en general.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="osteoSection">
        <div className="osteoSection__inner">
          <h2 className="osteoTitle">Patologías que podemos tratar</h2>

          <ul className="osteoList">
            <li>Dolor de espalda</li>
            <li>Dolor de cuello</li>
            <li>Dolor articular</li>
            <li>Dolor de cabeza</li>
            <li>Dolor ciático</li>
            <li>Tendinitis</li>
            <li>Lesiones deportivas</li>
            <li>Contracturas musculares</li>
            <li>Problemas posturales</li>
            <li>Alteraciones del sistema digestivo</li>
            <li>Entre otros trastornos....</li>
          </ul>

          <p className="osteoText osteoText--spaced">
            También podemos encontrar que la osteopatía puede tratar varias patologías en
            PACIENTES PEDIATRICOS que incluyen:
          </p>

          <ul className="osteoList">
            <li>Infecciones respiratorias</li>
            <li>Otitis</li>
            <li>Sinusitis</li>
            <li>Cólicos del lactante</li>
            <li>Plagiocefalia</li>
          </ul>
        </div>
      </section>

      <section className="osteoSection">
        <div className="osteoSection__inner">
          <h2 className="osteoTitle">Tratamientos complementarios que se realizan:</h2>

          <div className="osteoGrid">
            <article className="osteoCard">
              <div className="osteoCard__media">
                <img
                  className="osteoImg"
                  src="/osteopatia/puncion-seca.jpg"
                  alt="Punción seca"
                />
              </div>
              <div className="osteoCard__body">
                <h3 className="osteoCard__title">PUNCION SECA</h3>
                <p className="osteoText">
                  La punción seca es una técnica invasiva utilizada en fisioterapia para
                  eliminar puntos dolorosos musculares (o puntos gatillo), que se pueden
                  generar debido a sobrecargas, movimientos bruscos, etc. Se llama punción seca
                  porque no introducimos ningún anestésico ni sustancia, liberando así la
                  tensión miofascial del segmento.
                </p>
              </div>
            </article>

            <article className="osteoCard">
              <div className="osteoCard__media">
                <img
                  className="osteoImg"
                  src="/osteopatia/neuromodulacion.jpg"
                  alt="Neuromodulación"
                />
              </div>
              <div className="osteoCard__body">
                <h3 className="osteoCard__title">NEUROMODULACION</h3>
                <p className="osteoText">
                  Los objetivos principales de la neuromodulacion son:
                </p>
                <ul className="osteoList osteoList--compact">
                  <li>Disminuir el dolor tanto agudo como crónico.</li>
                  <li>
                    Restablecer la funcion del sistema nervioso: a nivel periferico, central,
                    somatico, autonomico, sensoria, motor, vascular, glandular y visceral.
                  </li>
                  <li>
                    Mejorar la funcion neuromuscular, los patrones de reclutamiento muscular y
                    el control motor.
                  </li>
                </ul>
              </div>
            </article>

            <article className="osteoCard">
              <div className="osteoCard__media">
                <img
                  className="osteoImg"
                  src="/osteopatia/theragun.jpg"
                  alt="Theragun PRO Plus"
                />
              </div>
              <div className="osteoCard__body">
                <h3 className="osteoCard__title">PISTOLA DE MASAJE - THERAGUN PRO PLUS</h3>
                <p className="osteoText">
                  El masajeador muscular percutivo es una herramienta profesional utilizada
                  para reducir el dolor muscular, mejorar la movilidad y favorecer la
                  recuperación física. Su tecnología de percusión alcanza mayor profundidad en
                  el tejido muscular, estimulando la circulación y ayudando a liberar la
                  tensión acumulada de forma más efectiva que los dispositivos de vibración
                  convencionales.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
