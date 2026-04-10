import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import ScrollToHash from "./components/layout/ScrollTo/ScrollToHash";
import ScrollToTop from "./components/layout/ScrollTo/ScrollToTop";

import Home from "./services/home/Home";
import Kinesionologia from "./services/kinesiologia/KinePage";
import Osteopatia from "./services/osteopatia/OsteoPage";
import Estetica from "./services/estetica/EsteticaPage";
import Contactanos from "./services/contactanos/ContactPage";

// IMPORTA TU LANDING
import FacialesPage from "./services/estetica/promos/faciales/FacialesPage";
// futuro:
// import CorporalesPage from "./pages/corporales/CorporalesPage";

function LayoutWrapper({ children }) {
  const location = useLocation();

  // Definicion de paginas islas (no usan layout)
  const isLanding = location.pathname === "/faciales" || location.pathname === "/corporales";

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
          <Route path="/kinesiologia" element={<Kinesionologia />} />
          <Route path="/kcestetica" element={<Estetica />} />
          <Route path="/contactanos" element={<Contactanos />} />

          {/* LANDING SEPARADAS */}
          <Route path="/faciales" element={<FacialesPage />} />
        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  );
}
