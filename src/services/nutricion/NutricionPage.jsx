import "./NutricionPage.css";
import { Helmet } from "react-helmet-async";
import InfoDecoBlock from "../ui/InfoDecoBlock";
import PsicoTeamShowcase from "../ui/PsicoTeamShowcase";

export default function NutricionPage() {
  return (
    <>
      <Helmet>
        <title>Nutrición clínica y deportiva en Antofagasta | KINECLIN</title>
        <meta
          name="description"
          content="Servicio de nutrición clínica y deportiva en Antofagasta: evaluación nutricional, bioimpedancia BODYPRO, planificación alimentaria, nutrición deportiva y manejo nutricional clínico."
        />
      </Helmet>

      <main className="nutricionPage">
        <header className="nutricionHero">
          <div className="nutricionHero__inner">
            <h1 className="nutricionHero__title">NUTRICIÓN</h1>
            <p className="nutricionHero__lead">
              Nutrición clínica y deportiva para mejorar tu salud, composición corporal,
              rendimiento físico y relación con la alimentación.
            </p>
          </div>
        </header>

        <section className="nutricionSection">
          <div className="nutricionSection__inner nutricionSection__inner--center">
            <h2 className="nutricionSection__title">Nuestro enfoque</h2>

            <p className="nutricionText">
              En KINECLIN contamos con un servicio de nutrición clínica y deportiva orientado a
              personas que buscan mejorar su salud, rendimiento físico, composición corporal y
              hábitos alimentarios. Nuestro enfoque combina evaluación profesional, educación
              alimentaria, seguimiento personalizado y herramientas de medición que permiten
              conocer mejor el estado nutricional de cada paciente.
            </p>

            <p className="nutricionText">
              Cada plan se construye de manera individual, considerando antecedentes de salud,
              estilo de vida, horarios, preferencias alimentarias, actividad física y objetivos
              personales. Más que entregar una pauta general, buscamos acompañar cambios
              reales, sostenibles y adaptados a la vida cotidiana de cada persona.
            </p>
          </div>
        </section>

        <PsicoTeamShowcase
          leftImage="/nutricion/nutriJennifer.jpg"
          leftName="Jennifer Cortes"
          leftDescription={
            <>
              Nutricionista especializada en nutrición deportiva y clínica. Acompaña a personas
              que buscan mejorar su salud, rendimiento físico o composición corporal,
              trabajando con deportistas, pacientes que desean mejorar hábitos alimentarios,
              bajar de peso, aumentar masa muscular o apoyar el manejo de condiciones
              metabólicas.
            </>
          }
          leftWsp={true}
          leftWspLink="https://wa.me/56950833838"
          leftWspMsg="Hola, quisiera consultar por atención nutricional con Jennifer."
          leftAgenda={false}
          rightImage="/nutricion/nutriValeria.jpg"
          rightName="Valeria"
          rightDescription={
            <>
              Nutricionista del equipo KINECLIN, orientada al acompañamiento profesional, la
              educación alimentaria y la creación de estrategias nutricionales adaptadas a cada
              paciente. Su atención permite fortalecer el abordaje integral del área
              nutricional y ampliar la disponibilidad del servicio.
            </>
          }
          rightWsp={true}
          rightWspLink="https://wa.me/56950833838"
          rightWspMsg="Hola, quisiera consultar por atención nutricional con Valeria."
          rightAgenda={false}
        />

        <section className="nutricionSection nutricionSection--soft">
          <div className="nutricionSection__inner">
            <div id="nutricion-evaluacion">
              <InfoDecoBlock
                sectionID="nutricion-evaluacion"
                title="Evaluación nutricional y planificación personalizada"
                image="/nutricion/evaluacion-nutricional.jpg"
                imageAlt="Evaluación nutricional personalizada"
                reverse={false}
                showDeco={true}
                colorProfile="Centro"
                text="La consulta nutricional permite conocer el motivo de atención, antecedentes de salud, hábitos alimentarios, horarios, actividad física, preferencias personales y objetivos del paciente. A partir de esta evaluación se construye una estrategia alimentaria clara, práctica y sostenible, orientada a mejorar hábitos, composición corporal, salud general o rendimiento físico."
              />
            </div>

            <div id="nutricion-bodypro">
              <InfoDecoBlock
                sectionID="nutricion-bodypro"
                title="Bioimpedancia BODYPRO y composición corporal"
                image="/nutricion/bodypro.jpg"
                imageAlt="Evaluación con bioimpedancia BODYPRO"
                reverse={true}
                showDeco={true}
                colorProfile="Centro"
                text="Utilizamos bioimpedancia BODYPRO como herramienta de apoyo para evaluar la composición corporal. Esta medición entrega información sobre masa muscular, grasa corporal, hidratación, peso y metabolismo basal, permitiendo mirar más allá del número de la balanza y orientar el plan nutricional con datos más precisos."
              />
            </div>

            <div id="nutricion-deportiva">
              <InfoDecoBlock
                sectionID="nutricion-deportiva"
                title="Nutrición deportiva y recomposición corporal"
                image="/nutricion/nutricion-deportiva.jpg"
                imageAlt="Nutrición deportiva y composición corporal"
                reverse={false}
                showDeco={true}
                colorProfile="Centro"
                text="La nutrición deportiva está dirigida a personas físicamente activas, deportistas amateurs y deportistas de alto rendimiento que buscan mejorar energía, recuperación, rendimiento y composición corporal. Cada plan se adapta al tipo de entrenamiento, frecuencia, intensidad, horarios y objetivos, apoyando procesos de pérdida de grasa, aumento de masa muscular o recomposición corporal."
              />
            </div>

            <div id="nutricion-clinica">
              <InfoDecoBlock
                sectionID="nutricion-clinica"
                title="Manejo nutricional clínico"
                image="/nutricion/nutricion-clinica.jpg"
                imageAlt="Manejo nutricional clínico"
                reverse={true}
                showDeco={true}
                colorProfile="Centro"
                text="El manejo nutricional clínico está orientado a personas que requieren apoyo alimentario para mejorar su salud, controlar factores de riesgo o acompañar condiciones metabólicas y enfermedades crónicas. Puede apoyar procesos relacionados con resistencia a la insulina, sobrepeso, obesidad, hipertensión, dislipidemia, diabetes, enfermedades digestivas y etapas especiales de la vida."
              />
            </div>
          </div>
        </section>

        <section className="nutricionSection">
          <div className="nutricionSection__inner nutricionSection__inner--center">
            <p className="nutricionClosingText">
              En KINECLIN buscamos que cada proceso nutricional sea cercano, realista y
              personalizado, ayudando a cada paciente a comprender su alimentación y avanzar
              hacia cambios sostenibles en el tiempo.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
