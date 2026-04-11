import "./PsicoPage.css";
import { Helmet } from "react-helmet-async";
import ActionButton from "../../components/common/ActionButton/ActionButton";
import PsicoTeamShowcase from "../ui/PsicoTeamShowcase";

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
              <strong>integral y profundamente personal</strong>. Generamos un{" "}
              <strong>espacio seguro, cercano y libre de juicios</strong>, donde cada persona
              pueda explorar lo que siente y comprender su experiencia con acompañamiento
              profesional. Trabajamos desde una mirada que integra{" "}
              <strong>emociones, pensamiento y cuerpo</strong>, promoviendo un proceso{" "}
              <strong>personalizado</strong> que respeta los tiempos de cada persona e
              incorpora herramientas terapéuticas para avanzar hacia el bienestar,
              fortaleciendo la <strong>autocomprensión</strong>, la{" "}
              <strong>regulación emocional</strong> y la construcción de una{" "}
              <strong>vida con mayor sentido</strong>.
            </p>
          </div>
        </section>
      </main>
      <section className="psicoSection psicoSection--alt">
        <PsicoTeamShowcase
          leftImage="/psicologia/psicPaulina.jpg"
          leftName="Psic. Paulina García"
          leftText="Acompaña a adolescentes y adultos en procesos de autoconocimiento y bienestar
                emocional, integrando Terapia de Aceptación y Compromiso (ACT) con Mindfulness
                Relacional para promover una relación más compasiva consigo mismo."
          leftWsp={true}
          leftWspLink={"https://wa.me/56950833838"}
          leftWspMsg={
            "Hola, quisiera agendar una cita con psicóloga Pualina Garcia. ¿Me podrían indicar disponibilidad?"
          }
          leftWspGTag="AW-17683213103/K8QLCM-4vJocEK_WgfBB"
          leftAgenda={true}
          leftAgendaLink="https://99cc847c17b2db7b36831a8547ec3db203e2aff1.agenda.softwaremedilink.com/agenda/profesional?modalidad=1&id_profesional=10&id_sucursal=1&id_motivo_especialidad=17"
          leftAgendaGTag="AW-17683213103/yzWkCJ6bwJocEK_WgfBB"
          rightImage="/psicologia/psicFernanda.jpg"
          rightName="Psic. Fernanda Riveros"
          rightText="Psicóloga clínica con enfoque sistémico y perspectiva de género. Acompaña
                procesos terapéuticos en adultos desde un espacio seguro y personalizado,
                promoviendo la conexión entre cuerpo, mente y emociones."
          rightWsp={true}
          rightWspLink={"https://wa.me/56950833838"}
          rightWspMsg={
            "Hola, quisiera agendar una cita con psicóloga Fernanda Riveros. ¿Me podrían indicar disponibilidad?"
          }
          rightWspGTag="AW-17683213103/6y8eCPbSp5ocEK_WgfBB"
          rightAgenda={true}
          rightAgendaLink="https://ff.healthatom.io/5168MX"
          rightAgendaGTag="AW-17683213103/XXxMCNDEu5ocEK_WgfBB"
        />
      </section>
      <section className="psicoSection">
        <div className="psicoSection__inner psicoSection__inner--center">
          <p className="psicoText__lead">
            A veces dar el primer paso es lo más difícil. Estamos aquí para acompañarte,
            escucharte y ayudarte a ordenar lo que estás viviendo.
          </p>
        </div>
      </section>
    </>
  );
}
