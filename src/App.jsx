import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import ScrollToHash from "./components/layout/ScrollTo/ScrollToHash";
import ScrollToTop from "./components/layout/ScrollTo/ScrollToTop";

import Home from "./services/home/Home";
import Kinesionologia from "./services/kinesiologia/KinePage";
import Osteopatia from "./services/osteopatia/OsteoPage";
import Estetica from "./services/estetica/EsteticaPage";
import Contactanos from "./services/contactanos/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/osteopatia" element={<Osteopatia />} />
        <Route path="/kinesiologia" element={<Kinesionologia />} />
        <Route path="/kcestetica" element={<Estetica />} />
        <Route path="/contactanos" element={<Contactanos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
