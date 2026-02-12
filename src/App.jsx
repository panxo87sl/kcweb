import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Kinesionologia from "./pages/Kinesiologia";
import Osteopatia from "./pages/Osteopatia";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/osteopatia" element={<Osteopatia />} />
        <Route path="/kinesiologia" element={<Kinesionologia />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
