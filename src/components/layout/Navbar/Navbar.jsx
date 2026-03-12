import { useState } from "react";
import { Link } from "react-router-dom";

import ActionButton from "../../common/ActionButton/ActionButton";

import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <nav className="navPill" aria-label="Navegación principal">
        <a className="navPill__brand" href="/" aria-label="Kineclin Home">
          <img className="navPill__logo" src="/home/kineclin-logo.png" alt="Kineclin" />
        </a>

        <div className="navPill__center">
          <Link className="navPill__link" to="/#home">
            Inicio
          </Link>
          <Link className="navPill__link" to="/#about">
            Quienes Somos
          </Link>
          <Link className="navPill__link" to="/#services">
            Nuestros Servicios
          </Link>
        </div>

        <div className="navPill__right__desk">
          <ActionButton
            label={"AGENDAR"}
            href={
              "https://99cc847c17b2db7b36831a8547ec3db203e2aff1.agenda.softwaremedilink.com/agenda/profesional?modalidad=1"
            }
            variant="centro"
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
          <Link className="navPill__dropdownLink" to="/#home" onClick={() => setOpen(false)}>
            Inicio
          </Link>
          <Link className="navPill__dropdownLink" to="/#about" onClick={() => setOpen(false)}>
            Quienes Somos
          </Link>
          <Link
            className="navPill__dropdownLink"
            to="/#services"
            onClick={() => setOpen(false)}
          >
            Nuestros Servicios
          </Link>
        </div>
      </nav>
    </header>
  );
}
