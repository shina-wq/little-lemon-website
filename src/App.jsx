import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Confirmed from "./pages/Confirmed";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmed" element={<Confirmed />} />
      </Routes>
    </>
  );
}