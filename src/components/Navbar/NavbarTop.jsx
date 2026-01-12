import "./Navbar.css";

export default function NavbarTop() {
  return (
    <div className="topNavBar">
      <div className="topNavWidth">
        <a
          className="googleMaps_link"
          href="https://maps.app.goo.gl/ip8D3tECodeQjPhY7"
          target="_blank"
          rel="noreferrer"
        >
          <span>Copiapo #739, Oficina 303, Antofagasta</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
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
        </a>
      </div>
    </div>
  );
}
