import React from "react";
import "../Styles/About.css";
import aboutImage from "../images/about.webp";
import headChef from "../images/mario.webp";
import operations from "../images/adrian.webp";
import restaurantManager from "../images/res-manager.webp";
import pastrySpecialist from "../images/pastry.webp";
import marketing from "../images/daniel.webp";

const About = () => {
  return (
    <section className="about-page">
      <div className="about-content">
        <div className="text-section">
          <h2>About Little Lemon</h2>
          <p>
            Welcome to Little Lemon, your cozy corner of Mediterranean flavor in the
            heart of Chicago. We're a family-owned restaurant passionate about
            bringing authentic dishes and warm hospitality to our community.
          </p>
          <p>
            Our menu blends tradition with a modern twist, from vibrant Greek salads
            to hearty kebabs and sweet lemon desserts. Each dish is crafted with
            fresh ingredients, bold flavors, and love.
          </p>
          <p>
            Whether you're here for a quick lunch, a romantic dinner, or a family
            gathering, we promise great food, a relaxing atmosphere, and a touch of
            sunshine with every bite.
          </p>
        </div>

        <div className="image-section">
          <img src={aboutImage} alt="About Little Lemon" />
        </div>

        <div className="team-section">
            <h3>Meet the Team</h3>
            <div className="team-members">
                <div className="team-member">
                    <img src={headChef} alt="Maria Lopez" />
                    <h4>Maria Rossi</h4>
                    <p>Co-founder & Head Chef</p>
                </div>
                <div className="team-member">
                    <img src={operations} alt="Adrian Rossi" />
                    <h4>Adrian Rossi</h4>
                    <p>Co-founder & Operations Director</p>
                </div>
                <div className="team-member">
                    <img src={restaurantManager} alt="Rachel Okoro" />
                    <h4>Rachel Okoro</h4>
                    <p>Restaurant Manager</p>
                </div>
                <div className="team-member">
                    <img src={pastrySpecialist} alt="Sophie Wilson" />
                    <h4>Sophie Wilson</h4>
                    <p>Pastry Specialist</p>
                </div>
                <div className="team-member">
                    <img src={marketing} alt="Daniel Davis" />
                    <h4>Daniel Davis</h4>
                    <p>Marketing Manager</p>
                </div>
            </div>
        </div>

        <div className="cta-section">
            <h3>Ready to Taste the Mediterranean?</h3>
            <p>Book a table today or explore our delicious menu to get started!</p>
            <div className="cta-buttons">
                <a href="/booking" className="btn">Reserve a Table</a>
                <a href="/menu" className="btn btn-secondary">View Menu</a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;