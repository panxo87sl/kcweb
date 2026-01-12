import "./Navbar.css";
import NavBotonAgenda from "../ui/NavBotonAgenda/NavBotonAgenda";

export default function NavbarBot() {
  return (
    <div className="botNavBar">
      <div className="botNavWidth botNavRow">
        <img className="navLogo" src="/kineclin-logo.png" alt="Kineclin Logo" />

        <div className="right">
          <NavBotonAgenda
            variante="centro"
            titulo="Centro de salud"
            labelBoton="Agendar"
            href="https://ff.healthatom.io/5168MX"
          />

          <NavBotonAgenda
            variante="estetica"
            titulo="Clínica Estética"
            labelBoton="Agendar"
            href="https://ff.healthatom.io/JJRuyT"
          />

          <NavBotonAgenda
            variante="kcplus"
            titulo="KCPLUS Suplementos"
            labelBoton="Tienda"
            href="https://kcplus.cl"
          />
        </div>
      </div>
    </div>
  );
}
