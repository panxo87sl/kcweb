import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="aboutSection">
      <div className="aboutSection__inner">
        {/* Columna izquierda */}
        <div className="aboutSection__content">
          <h2 className="aboutSection__title">Nosotros</h2>

          <p className="aboutSection__text">
            En KINECLIN somos un equipo especializado en salud integral, enfocado en la
            atención de adultos y niños, tanto en modalidad ambulatoria como domiciliaria. Nos
            distinguimos por contar con profesionales con amplia trayectoria clínica, formados
            en contextos intrahospitalarios y ambulatorios, y por ofrecer una atención centrada
            en el respeto, la seguridad y la confianza. Cada espacio, cada proceso y cada
            atención están pensados para acompañar a las personas en su bienestar, con
            estándares clínicos sólidos y un trato humano que marca la diferencia.
          </p>

          {/* <div className="aboutSection__brands">
            <span>Marca 1</span>
            <span>Marca 2</span>
            <span>Marca 3</span>
            <span>Marca 4</span>
          </div> */}
        </div>

        {/* Columna derecha (matriz visual) */}
        <div className="aboutGrid">
          {/* Card azul */}
          <div className="aboutGrid__card aboutGrid__card--highlight">
            <h3>Una referencia en salud integral</h3>
            <p>
              Buscamos ser un referente en la zona norte, reconocidos por la calidad, seguridad
              y confiabilidad de nuestra atención.
            </p>
          </div>

          {/* Card imagen */}
          <div className="aboutGrid__card aboutGrid__card--image .aboutGrid__card--imageRoom">
            <img src="/kineclin01.jpg" alt="Centro de Salud Kineclin" />

            <span className="aboutGrid__descText">Centro de Salud</span>
          </div>

          {/* Card imagen simple */}
          <div className="aboutGrid__card aboutGrid__card--image .aboutGrid__card--imageTeam">
            <img src="/kineclin02.jpg" alt="Nuestro Equipo" />
          </div>

          {/* Card texto blanco */}
          <div className="aboutGrid__card aboutGrid__card--text">
            <h3>Profesionales que marcan la diferencia</h3>
            <p>
              Entregamos atención especializada a través de profesionales capacitados, con
              vocación clínica y trato cercano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
