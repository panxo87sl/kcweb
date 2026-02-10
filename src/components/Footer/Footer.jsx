import "./Footer.css";

export default function Footer() {
  return (
    <footer className="siteFooter" aria-label="Footer Kineclin">
      <div className="siteFooter__inner">
        {/* Col 1: Brand */}
        <div className="footerCol footerCol--brand">
          <h3 className="footerCol__title">
            <span className="footerBrand__mark" aria-hidden="true">
              +
            </span>
            Kineclin
          </h3>

          <p className="footerCol__text">Centro de Salud Integral en Antofagasta</p>

          <nav className="footerLinks" aria-label="Enlaces Kineclin">
            <a className="footerLink" href="#top">
              Kineclin Centro de Salud
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
          </nav>
        </div>

        {/* Col 2: Contacto */}
        <div className="footerCol footerCol--contact">
          <h3 className="footerCol__title">Contacto</h3>

          <ul className="footerList" aria-label="Datos de contacto">
            <li className="footerList__item">
              <img className="footerIcon" src="/icons/map-pin.svg" alt="" aria-hidden="true" />
              <a
                className="footerLink"
                href="https://www.google.com/maps?q=Kineclin+Antofagasta"
                target="_blank"
                rel="noreferrer"
              >
                Antofagasta, Chile
              </a>
            </li>

            {/* Teléfonos */}
            <li className="footerList__item">
              <img className="footerIcon" src="/icons/phone.svg" alt="" aria-hidden="true" />
              <a className="footerLink" href="tel:+56912345678">
                Kineclin: +56 9 1234 5678
              </a>
            </li>

            <li className="footerList__item">
              <img className="footerIcon" src="/icons/phone.svg" alt="" aria-hidden="true" />
              <a className="footerLink" href="tel:+56987654321">
                Estética: +56 9 8765 4321
              </a>
            </li>

            {/* Email */}
            <li className="footerList__item">
              <img className="footerIcon" src="/icons/mail.svg" alt="" aria-hidden="true" />
              <a className="footerLink" href="mailto:contacto@kineclin.cl">
                contacto@kineclin.cl
              </a>
            </li>

            {/* WhatsApp */}
            <li className="footerList__item">
              <img
                className="footerIcon"
                src="/icons/brand-whatsapp.svg"
                alt=""
                aria-hidden="true"
              />
              <a
                className="footerLink"
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Kineclin
              </a>
            </li>

            <li className="footerList__item">
              <img
                className="footerIcon"
                src="/icons/brand-whatsapp.svg"
                alt=""
                aria-hidden="true"
              />
              <a
                className="footerLink"
                href="https://wa.me/56987654321"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Estética
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Síguenos */}
        <div className="footerCol footerCol--social">
          <h3 className="footerCol__title">Síguenos</h3>

          <div className="footerSocialGroup">
            <p className="footerSocialGroup__title">Centro de Salud</p>
            <div className="footerSocialRow">
              <a
                className="socialBtn"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Centro de Salud"
              >
                <img src="/icons/brand-facebook.svg" alt="" />
              </a>
              <a
                className="socialBtn"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Centro de Salud"
              >
                <img src="/icons/brand-instagram.svg" alt="" />
              </a>
            </div>
          </div>

          <div className="footerSocialGroup">
            <p className="footerSocialGroup__title">Clínica Estética</p>
            <div className="footerSocialRow">
              <a
                className="socialBtn"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Estética"
              >
                <img src="/icons/brand-facebook.svg" alt="" />
              </a>
              <a
                className="socialBtn"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Estética"
              >
                <img src="/icons/brand-instagram.svg" alt="" />
              </a>
            </div>
          </div>

          <div className="footerSocialGroup">
            <p className="footerSocialGroup__title">KCPLUS</p>
            <div className="footerSocialRow">
              <a
                className="socialBtn"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram KCPLUS"
              >
                <img src="/icons/brand-instagram.svg" alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* Col 4: Mapa */}
        <div className="footerCol footerCol--map">
          <h3 className="footerCol__title">Ubicación</h3>

          {/* Placeholder preparado para Google Maps */}
          <div className="footerMap" role="region" aria-label="Mapa de ubicación">
            <div className="footerMap__placeholder">
              <p>Mapa (Google Maps) aquí</p>
              <p className="footerMap__hint">Luego reemplazas esto por el iframe/embed.</p>
            </div>

            {/*
              Ejemplo futuro:
              <iframe
                title="Kineclin Google Maps"
                src="TU_EMBED_URL"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            */}
          </div>
        </div>
      </div>

      <div className="siteFooter__divider" aria-hidden="true" />

      <div className="siteFooter__bottom">
        <p className="siteFooter__legal">
          © 2026 Kineclin. Todos los derechos reservados. Marca registrada.
        </p>

        <a className="siteFooter__policy" href="/politica-privacidad">
          Política de Privacidad
        </a>
      </div>
    </footer>
  );
}
