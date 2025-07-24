import "../Styles/Home.css";
import { Link } from "react-router-dom";
import heroImg from "../images/hero.webp";
import greekSalad from "../images/greek-salad.webp";
import bruschetta from "../images/bruschetta-2.webp";
import lemonDessert from "../images/lemon-dessert.webp";

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-text">
          <h2>Welcome to Little Lemon!</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Link to="/booking" className="btn">
            Reserve a Table
          </Link>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Little Lemon Dishes" />
        </div>
      </div>

      <div className="menu-preview">
        <h2>Our Specials</h2>
        <div className="menu-items">
          <div className="menu-card">
            <img src={greekSalad} alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p>A refreshing salad with crispy lettuce, peppers, olives, and feta cheese, dressed with lemon vinaigrette.</p>
          </div>
          <div className="menu-card">
            <img src={bruschetta} alt="Bruschetta" />
            <h3>Bruschetta</h3>
            <p>Grilled bread garlic-topped with diced tomatoes, olive oil, and a hint of balsamic glaze.</p>
          </div>
          <div className="menu-card">
            <img src={lemonDessert} alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <p>A sweet and tangy lemon cake topped with whipped cream and a sprig of mint. Perfect ending!</p>
          </div>
        </div>
      </div>

      <div className="reviews-section">
        <h2>What Our Customers Say</h2>
        <div className="review-cards">
          <div className="review-card">
            <p>"The Greek Salad was so fresh and flavorful! Loved the ambiance and the service was excellent!"</p>
            <h4>- Amina K.</h4>
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <div className="review-card">
            <p>"Best bruschetta I've ever had. Crunchy, garlicky, and perfectly balanced with tomatoes."</p>
            <h4>- Joseph M.</h4>
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <div className="review-card">
            <p>"The lemon dessert was divine! So tangy and light. I'll be back again and again!"</p>
            <h4>- Linda T.</h4>
            <span>⭐⭐⭐⭐⭐</span>
          </div>
        </div>
      </div>

    </section>
  );
}