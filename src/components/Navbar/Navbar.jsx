import { useState } from "react";
import "./Navbar.css";
import ActionButton from "../ui/ActionButton/ActionButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <nav className="navPill" aria-label="Navegación principal">
        <a className="navPill__brand" href="#top" aria-label="Kineclin Home">
          <img className="navPill__logo" src="/kineclin-logo.png" alt="Kineclin" />
        </a>

        <div className="navPill__center">
          <a className="navPill__link" href="#about">
            Quienes Somos
          </a>
          <a className="navPill__link" href="#services">
            Nuestros Servicios
          </a>
        </div>

        <div className="navPill__right__desk">
          <ActionButton
            label={"Clínica Estética"}
            href={
              "https://99cc847c17b2db7b36831a8547ec3db203e2aff1.agenda.softwaremedilink.com/agendas/agendaExpress/1"
            }
            variant="estetica"
            size="nav"
          />
          <ActionButton
            label={"KCPlus"}
            href={"https://www.kcplus.cl/"}
            variant="kcplus"
            size="nav"
          />
        </div>
        <div className="navPill__right__mobile">
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
          <a className="navPill__dropdownLink" href="#about" onClick={() => setOpen(false)}>
            Quienes Somos
          </a>
          <a className="navPill__dropdownLink" href="#services" onClick={() => setOpen(false)}>
            Nuestros Servicios
          </a>
        </div>
      </nav>
    </header>
  );
}
