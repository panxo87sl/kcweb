import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import ScrollToHash from "./components/layout/ScrollTo/ScrollToHash";
import ScrollToTop from "./components/layout/ScrollTo/ScrollToTop";

import Home from "./services/home/Home";
import Osteopatia from "./services/osteopatia/OsteoPage";
import Estetica from "./services/estetica/EsteticaPage";
import Psicologia from "./services/psicologia/PsicoPage";
import Contactanos from "./services/contactanos/ContactPage";
import Enfermeria from "./services/enfermeria/EnfermeriaPage";
import Gimnasio from "./services/gimnasio/GymPage";
import Kinesionologia from "./services/kinesiologia/KinePage";
import Nutricion from "./services/nutricion/NutricionPage";
import Fonoaudiologia from "./services/fonoaudiologia/FonoPage";
import TerapiaOcupacional from "./services/terapiaocupacional/TeoPage";

// IMPORTA TU LANDING
import FacialesPage from "./services/estetica/promos/faciales/FacialesPage";
// futuro:
// import CorporalesPage from "./pages/corporales/CorporalesPage";

function LayoutWrapper({ children }) {
  const location = useLocation();

  // Definicion de paginas islas (no usan layout)
  const isLanding = location.pathname === "/faciales" || location.pathname === "/corporales";

  //Si no son "landing" se muestra el layout
  return (
    <>
      {!isLanding && <Navbar />}
      {children}
      {!isLanding && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />

      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/osteopatia" element={<Osteopatia />} />
          <Route path="/kcestetica" element={<Estetica />} />
          <Route path="/psicologia" element={<Psicologia />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/enfermeria" element={<Enfermeria />} />
          <Route path="/kinesiologia" element={<Kinesionologia />} />
          <Route path="/gimnasio" element={<Gimnasio />} />
          <Route path="/nutricion" element={<Nutricion />} />
          <Route path="/fonoaudiologia" element={<Fonoaudiologia />} />
          <Route path="/terapia-ocupacional" element={<TerapiaOcupacional />} />

          {/* LANDING SEPARADAS */}
          <Route path="/faciales" element={<FacialesPage />} />
        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  );
}
