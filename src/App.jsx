import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Kinesionologia from "./pages/Kinesiologia";
import Osteopatia from "./pages/Osteopatia";
import Estetica from "./pages/Estetica";
import Footer from "./components/Footer/Footer";
import ScrollToHash from "./components/ScrollTo/ScrollToHash";
import ScrollToTop from "./components/ScrollTo/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
