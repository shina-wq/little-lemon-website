import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import "../Styles/Confirmation.css";

const Confirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [width, height] = useWindowSize();

  if (!state) {
    return (
      <div className="confirmation">
        <h2>No booking details found.</h2>
        <button onClick={() => navigate("/booking")}>Back to Booking</button>
      </div>
    );
  }

  const { date, time, guests, occasion, requests } = state;

  return (
    <div className="confirmation">
      <h2>🎉 Booking Confirmed!</h2>
      <p>Thank you for reserving a table at Little Lemon. Here are your booking details:</p>

      <div className="booking-summary">
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Guests:</strong> {guests}</p>
        <p><strong>Occasion:</strong> {occasion || "Not specified"}</p>
        <p><strong>Special Requests:</strong> {requests || "None"}</p>
      </div>

      <button onClick={() => navigate("/")}>Return to Home</button>
    </div>
  );
};

export default Confirmation;