import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Booking.css";

const Booking = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
    requests: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    navigate("/confirmation", { state: formData });
  };

  return (
    <section className="booking">
      <h2>Reserve Your Table</h2>
      <p>We look forward to serving you. Fill out the form to book your table.</p>

      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Number of Guests:
          <input
            type="number"
            name="guests"
            value={formData.guests}
            min="1"
            max="10"
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Occasion:
          <select
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Business">Business Meeting</option>
          </select>
        </label>

        <label>
          Special Requests:
          <textarea
            name="requests"
            value={formData.requests}
            onChange={handleChange}
            placeholder="Any special requirements?"
          />
        </label>

        <button type="submit" className="btn-submit">Book Now</button>
      </form>
    </section>
  );
};

export default Booking;