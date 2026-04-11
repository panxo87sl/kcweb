import "./PsicoPage.css";
import { Helmet } from "react-helmet-async";
import ActionButton from "../../components/common/ActionButton/ActionButton";

export default function PsicoPage() {
  return (
    <>
      <Helmet>
        <title>Psicología | Kineclin Centro de Salud</title>
      </Helmet>

      <main className="psicoPage">
        <section className="psicoHero">
          <div className="psicoHero__inner">
            <h1 className="psicoHero__title">PSICOLOGÍA</h1>

            <p className="psicoHero__lead">
              Un espacio seguro para comprender lo que sientes, fortalecer tu bienestar
              emocional y avanzar hacia una vida con mayor equilibrio y sentido.
            </p>
          </div>
        </section>

        <section className="psicoSection psicoSection--alt">
          <div className="psicoSection__inner">
            <h2 className="psicoSection__title">¿En qué podemos ayudarte?</h2>

            <div className="psicoGrid">
              <div className="psicoCard">Ansiedad y estrés</div>
              <div className="psicoCard">Estado de ánimo bajo o depresión</div>
              <div className="psicoCard">Autoestima y autoconocimiento</div>
              <div className="psicoCard">Relaciones y vínculos</div>
              <div className="psicoCard">Gestión emocional</div>
              <div className="psicoCard">Procesos personales</div>
            </div>
          </div>
        </section>

        <section className="psicoSection">
          <div className="psicoSection__inner psicoSection__inner--center">
            <h2 className="psicoSection__title">Nuestro enfoque</h2>

            <p className="psicoText">
              En Kineclin entendemos la salud mental como un proceso{" "}
              <strong>integral y profundamente personal</strong>. Nuestro enfoque se basa en
              generar un <strong>espacio seguro, cercano y libre de juicios</strong>, donde
              cada persona pueda explorar lo que siente y comprender su experiencia con
              acompañamiento profesional. Trabajamos desde una mirada que integra{" "}
              <strong>emociones, pensamiento y cuerpo</strong>, favoreciendo una comprensión
              más amplia de cada proceso.
            </p>

            <p className="psicoText">
              Creemos en un acompañamiento <strong>personalizado</strong>, respetando los{" "}
              <strong>tiempos y necesidades de cada persona</strong>, e incorporando
              herramientas terapéuticas que permitan avanzar de forma concreta hacia el
              bienestar. Nuestro objetivo no es solo aliviar el malestar, sino también
              fortalecer la <strong>autocomprensión</strong>, la{" "}
              <strong>regulación emocional</strong> y la construcción de una{" "}
              <strong>vida con mayor sentido</strong>.
            </p>
          </div>
        </section>

        <section className="psicoSection psicoSection--alt">
          <div className="psicoSection__inner">
            <h2 className="psicoSection__title">Conoce a nuestro equipo</h2>

            <div className="psicoTeam">
              {/* TARJETA FERNANDA */}
              <div className="psicoPerson">
                <h3 className="psicoPerson__name">Fernanda Riveros</h3>
                <p className="psicoPerson__role">
                  Psicóloga clínica con enfoque sistémico y perspectiva de género. Acompaña
                  procesos terapéuticos en adultos desde un espacio seguro y personalizado,
                  promoviendo la conexión entre cuerpo, mente y emociones.
                </p>
                <div className="psicoAgenda__buttons">
                  <div className="psicoAgenda">
                    <ActionButton label="WhatsApp" href="#" variant="whatsapp" />
                  </div>
                  <div className="psicoAgenda">
                    <ActionButton label="Medilink" href="#" variant="centro" />
                  </div>
                </div>
              </div>
              {/* TARJETA PAULINA */}
              <div className="psicoPerson">
                <h3 className="psicoPerson__name">Paulina García</h3>
                <p className="psicoPerson__role">
                  Acompaña a adolescentes y adultos en procesos de autoconocimiento y bienestar
                  emocional, integrando Terapia de Aceptación y Compromiso (ACT) con
                  Mindfulness Relacional para promover una relación más compasiva consigo
                  mismo.
                </p>
                <div className="psicoAgenda__buttons">
                  <div className="psicoAgenda">
                    <ActionButton label="WhatsApp" href="#" variant="whatsapp" />
                  </div>
                  <div className="psicoAgenda">
                    <ActionButton label="Medilink" href="#" variant="centro" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
