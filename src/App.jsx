import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Confirmation from "./pages/Confirmation";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer />
    </>
  );
}