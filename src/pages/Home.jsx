import "../Styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Link to="/booking" className="btn">
            Reserve a Table
          </Link>
        </div>
        <div className="hero-image">
          <img src="../images/webp" alt="Little Lemon Dishes" />
        </div>
      </div>
    </section>
  );
}