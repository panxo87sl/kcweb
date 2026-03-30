import pkg from "../../../../package.json";
import "./Footer.css";

export default function Footer() {
  const res = 25;
  const iconPhone = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height={res}
      fill="none"
      stroke="#fff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      class="icon icon-tabler icons-tabler-outline icon-tabler-device-landline-phone"
      viewBox="0 0 24 24"
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M20 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-4 1H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11" />
      <path d="M12 8H6v3h6zm0 6v.01M9 14v.01M6 14v.01M12 17v.01M9 17v.01M6 17v.01" />
    </svg>
  );

  const iconMail = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height={res}
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );

  const iconWsp = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height={res}
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="m3 21 1.65-3.8a9 9 0 1 1 3.4 2.9z" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );

  const iconInsta = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height={res}
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0m7.5-4.5v.01" />
    </svg>
  );

  const iconFace = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height={res}
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z" />
    </svg>
  );
  const iconMap = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height={res}
      fill="none"
      stroke="#fff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
      viewBox="0 0 24 24"
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M17.657 16.657 13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0" />
    </svg>
  );

  return (
    <footer className="siteFooter" aria-label="Footer Kineclin">
      <div className="siteFooter__inner">
        {/* Col 1: Brand */}
        <div className="footerCol footerCol__brand">
          <h3 className="footerCol__title">
            <span className="footerBrand__mark" aria-hidden="true">
              +
            </span>
            Kineclin
          </h3>

          <nav className="footerLinks" aria-label="Enlaces Kineclin">
            <a className="footerLink" href="#top">
              Centro de Salud
            </a>
            <a
              className="footerLink"
              href="https://kineclin.cl/estetica"
              target="_blank"
              rel="noreferrer"
            >
              Clínica Estética
            </a>
            <a
              className="footerLink"
              href="https://www.kcplus.cl/"
              target="_blank"
              rel="noreferrer"
            >
              KCPLUS
            </a>
            <a
              className="footerLink"
              href="https://kineclin.app.softwaremedilink.com/medilink/"
              target="_blank"
              rel="noreferrer"
            >
              Intranet
            </a>
          </nav>
        </div>

        {/* Col 2: Síguenos */}
        <div className="footerCol footerCol__social">
          <h3 className="footerCol__title">Síguenos</h3>
          <div className="footerSocialGroup__container">
            <div className="footerSocialGroup">
              <p className="footerSocialGroup__title">Centro de Salud</p>
              <div className="footerSocialRow">
                <a
                  className="socialBtn"
                  href="https://www.facebook.com/kineclin"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook Centro de Salud"
                >
                  <span className="socialBtn__icon">{iconFace}</span>
                </a>
                <a
                  className="socialBtn"
                  href="https://www.instagram.com/kineclin/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram Centro de Salud"
                >
                  <span className="socialBtn__icon">{iconInsta}</span>
                </a>
              </div>
            </div>

            <div className="footerSocialGroup">
              <p className="footerSocialGroup__title">Clínica Estética</p>
              <div className="footerSocialRow">
                <a
                  className="socialBtn"
                  href="https://www.facebook.com/kineclinestetica"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook Estética"
                >
                  <span className="socialBtn__icon">{iconFace}</span>
                </a>
                <a
                  className="socialBtn"
                  href="https://www.instagram.com/kineclin_estetica/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram Estética"
                >
                  <span className="socialBtn__icon">{iconInsta}</span>
                </a>
              </div>
            </div>

            <div className="footerSocialGroup">
              <p className="footerSocialGroup__title">KCPLUS</p>
              <div className="footerSocialRow">
                <a
                  className="socialBtn"
                  href="https://www.instagram.com/kcplus.cl/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram KCPLUS"
                >
                  <span className="socialBtn__icon">{iconInsta}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Col 2: Contacto */}
        <div className="footerCol footerCol__contact">
          <h3 className="footerCol__title">Contáctanos</h3>

          <ul className="footerList" aria-label="Datos de contacto">
            <li className="footerList__item">
              <span className="footerIcon">{iconPhone}</span>
              <a className="footerLink" href="tel:+56553330382">
                +56 55 333 0382
              </a>
            </li>

            {/* <li className="footerList__item">
              <span className="footerIcon">{iconPhone}</span>
              <a className="footerLink" href="tel:+56987654321">
                Estética: +56 9 8765 4321
              </a>
            </li> */}

            <li className="footerList__item">
              <span className="footerIcon">{iconWsp}</span>
              <a
                className="footerLink"
                href="https://wa.me/56950833838"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Centro de Salud
              </a>
            </li>

            <li className="footerList__item">
              <span className="footerIcon">{iconWsp}</span>
              <a
                className="footerLink"
                href="https://wa.me/56959192132"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Estética
              </a>
            </li>
            <li className="footerList__item">
              <span className="footerIcon">{iconMail}</span>
              <a className="footerLink" href="mailto:contacto@kineclin.cl">
                contacto@kineclin.cl
              </a>
            </li>
            <li className="footerList__item">
              <span className="footerIcon">{iconMail}</span>
              <a className="footerLink" href="mailto:ventas@kcplus.cl">
                ventas@kcplus.cl
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Mapa */}
        <div className="footerCol footerCol__map">
          <h3 className="footerCol__title">Ubicación</h3>
          <ul className="footerList" aria-label="Datos de contacto">
            <li className="footerList__item">
              <span className="footerIcon">{iconMap}</span>
              <a
                className="footerLink"
                href="https://www.google.com/maps?q=Kineclin+Antofagasta"
                target="_blank"
                rel="noreferrer"
              >
                Copiapó 739, Of. 303, Antofagasta
              </a>
            </li>
          </ul>
          <div className="footerMap" role="region" aria-label="Mapa de ubicación">
            <iframe
              className="footerMap__iframe"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d661.3919873975059!2d-70.40093109810451!3d-23.654137563103127!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96afd5e47e590d03%3A0x9bbf6809617877af!2sCentro%20de%20Salud%20integral%20KINECLIN!5e1!3m2!1ses-419!2scl!4v1770936550870!5m2!1ses-419!2scl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Kineclin - Copiapó 739, Antofagasta"
            />
          </div>
        </div>
      </div>

      <div className="siteFooter__divider" aria-hidden="true" />

      <div className="siteFooter__bottom">
        <p className="siteFooter__legal legal">
          © 2026 Kineclin. Marca registrada. Todos los derechos reservados.
        </p>
      </div>
      <div className="siteFooter__bottom">
        <p className="siteFooter__devs">
          Diseño: Benjamín Díaz · Desarrollo: Francisco Orellana · v{pkg.version}
        </p>

        {/* <a className="siteFooter__policy" href="/politica-privacidad">
          Política de Privacidad
        </a> */}
      </div>
    </footer>
  );
}
