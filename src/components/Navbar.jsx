import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🍋 Little Lemon</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Book a Table</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}