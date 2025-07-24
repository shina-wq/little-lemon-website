import React, { useState } from "react";
import "../Styles/Menu.css";
import greekSalad from "../images/greek-salad.webp";
import bruschetta from "../images/bruschetta-2.webp";
import lemonDessert from "../images/lemon-dessert.webp";
import pasta from "../images/pasta.webp";
import pizza from "../images/pizza.webp";
import soup from "../images/soup.webp";
import kebab from "../images/kebab.webp";
import steak from "../images/steak.webp";
import hummus from "../images/hummus.webp";
import falafel from "../images/falafel.webp";

const Menu = () => {
  const allDishes = [
    {
      name: "Greek Salad",
      image: greekSalad,
      description: "Crispy lettuce, juicy tomatoes, olives, and feta cheese tossed in a zesty lemon vinaigrette.",
      price: "$12.99",
      category: "Salads",
    },
    {
      name: "Bruschetta",
      image: bruschetta,
      description: "Grilled garlic bread topped with diced tomatoes, olive oil, and a hint of balsamic glaze.",
      price: "$8.99",
      category: "Appetizers",
    },
    {
      name: "Lemon Dessert",
      image: lemonDessert,
      description: "A tangy and sweet lemon cake topped with whipped cream and a fresh mint leaf.",
      price: "$6.99",
      category: "Desserts",
    },
    {
      name: "Spaghetti Bolognese",
      image: pasta,
      description: "Classic Italian pasta with rich meat sauce and parmesan cheese.",
      price: "$14.99",
      category: "Main Dishes",
    },
    {
      name: "Margherita Pizza",
      image: pizza,
      description: "Wood-fired pizza with tomato, mozzarella, and fresh basil.",
      price: "$13.50",
      category: "Main Dishes",
    },
    {
      name: "Tomato Basil Soup",
      image: soup,
      description: "Creamy tomato soup with a hint of basil, served with garlic toast.",
      price: "$7.50",
      category: "Soups",
    },
    {
      name: "Grilled Kebab",
      image: kebab,
      description: "Skewered and grilled lamb served with couscous and tzatziki.",
      price: "$15.99",
      category: "Main Dishes",
    },
    {
      name: "Sirloin Steak",
      image: steak,
      description: "Juicy steak grilled to perfection with herb butter and sides.",
      price: "$19.99",
      category: "Main Dishes",
    },
    {
      name: "Hummus & Pita",
      image: hummus,
      description: "Smooth hummus served with warm pita bread and veggies.",
      price: "$6.50",
      category: "Appetizers",
    },
    {
      name: "Falafel Wrap",
      image: falafel,
      description: "Crispy falafel with lettuce, tomatoes, and tahini sauce in a wrap.",
      price: "$9.99",
      category: "Main Dishes",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Appetizers", "Main Dishes", "Salads", "Soups", "Desserts"];

  const filteredDishes = allDishes.filter((dish) => {
    const matchesCategory = selectedCategory === "All" || dish.category === selectedCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="menu-page">
      <h2>Our Full Menu</h2>

      <div className="menu-controls">
        <input
          type="text"
          placeholder="Search dishes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-list">
        {filteredDishes.length > 0 ? (
          filteredDishes.map((dish, index) => (
            <div className="menu-item" key={index}>
              <img src={dish.image} alt={dish.name} />
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <span>{dish.price}</span>
            </div>
          ))
        ) : (
          <p className="no-results">No dishes found.</p>
        )}
      </div>
    </section>
  );
};

export default Menu;