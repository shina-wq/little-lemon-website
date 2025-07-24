import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import "../Styles/Booking.css";

const Booking = () => {
  const navigate = useNavigate();

  const [availableTimes, setAvailableTimes] = useState([
    "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00",
  ]);

  const updateTimes = (date) => {
    const newTimes = date === "2025-08-01" ? ["18:00", "18:30", "19:00"] : availableTimes;
    setAvailableTimes(newTimes);
  };

  const handleSubmit = (formData) => {
    navigate("/confirmation", { state: formData });
  };

  return (
    <section className="booking">
      <h2>Reserve Your Table</h2>
      <p>We look forward to serving you. Fill out the form to book your table.</p>

      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        onSubmit={handleSubmit}
      />
    </section>
  );
};

export default Booking;
