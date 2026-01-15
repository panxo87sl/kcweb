import "./Navbar.css";
import NavBotonAgenda from "../ui/NavBotonAgenda/NavBotonAgenda";

export default function NavbarBot() {
  const CalendarIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M10.5 21H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3m-4-7v4M8 3v4m-4 4h10" />
      <path d="M14 18a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
      <path d="M18 16.5V18l.5.5" />
    </svg>
  );
  const ShopIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
      class="icon icon-tabler icons-tabler-outline icon-tabler-building-store"
      viewBox="0 0 24 24"
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4M5 21V10.85M19 21V10.85M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
    </svg>
  );

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
            icon={CalendarIcon}
          />

          <NavBotonAgenda
            variante="estetica"
            titulo="Clínica Estética"
            labelBoton="Agendar"
            href="https://ff.healthatom.io/JJRuyT"
            icon={CalendarIcon}
          />

          <NavBotonAgenda
            variante="kcplus"
            titulo="KCPLUS Suplementos"
            labelBoton="Tienda"
            href="https://kcplus.cl"
            icon={ShopIcon}
          />
        </div>
      </div>
    </div>
  );
}
