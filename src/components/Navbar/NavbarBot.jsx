import "./Navbar.css";

export default function NavbarBot() {
  return (
    <div className="botNavBar">
      <div className="botNavWidth botNavRow">
        <img className="navLogo" src="../kineclin-logo.png" alt="Kineclin Logo" />
        <div className="right">
          <a href="#centro">Centro de salud</a>
          <a href="#hogar">Cuidado en el hogar</a>
          <a href="#estetica">Centro de estética</a>
          <a
            className="btn"
            href="https://www.kineclin.cl/agenda"
            target="_blank"
            rel="noreferrer"
          >
            Agenda tu hora
          </a>
        </div>
      </div>
    </div>
  );
}
