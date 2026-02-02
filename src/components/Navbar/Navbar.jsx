import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <nav className="navPill" aria-label="Navegación principal">
        <a className="navPill__brand" href="#top" aria-label="Kineclin Home">
          <img className="navPill__logo" src="/kineclin-logo.png" alt="Kineclin" />
        </a>

        <div className="navPill__center">
          <a className="navPill__link" href="#servicios">
            Servicios
          </a>
          <a className="navPill__link" href="#profesionales">
            Profesionales
          </a>
          <a className="navPill__link" href="#agenda">
            Agenda
          </a>
        </div>

        <div className="navPill__right">
          <a
            className="navPill__cta navPill_kcEstetica"
            href="https://www.instagram.com/kineclin_estetica/"
            target="_blank"
            rel="noreferrer"
          >
            Clinica Estetica
          </a>
          <a
            className="navPill__cta navPill_kcPlus"
            href="https://kcplus.cl"
            target="_blank"
            rel="noreferrer"
          >
            KCPLUS
          </a>

          <button
            type="button"
            className="navPill__menuBtn"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>

        <div className={`navPill__dropdown ${open ? "is-open" : ""}`} role="menu">
          <a
            className="navPill__dropdownLink"
            href="#servicios"
            onClick={() => setOpen(false)}
          >
            Servicios
          </a>
          <a
            className="navPill__dropdownLink"
            href="#profesionales"
            onClick={() => setOpen(false)}
          >
            Profesionales
          </a>
          <a className="navPill__dropdownLink" href="#agenda" onClick={() => setOpen(false)}>
            Agenda
          </a>
        </div>
      </nav>
    </header>
  );
}
