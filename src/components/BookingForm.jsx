import React, { useState } from "react";

const BookingForm = ({ availableTimes, updateTimes, onSubmit }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
    requests: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (formData.guests < 1 || formData.guests > 10) newErrors.guests = "Guests must be between 1 and 10.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "date") updateTimes(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        {errors.date && <span className="error">{errors.date}</span>}
      </label>

      <label>
        Time:
        <select name="time" value={formData.time} onChange={handleChange} required>
          <option value="">Select Time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        {errors.time && <span className="error">{errors.time}</span>}
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
        {errors.guests && <span className="error">{errors.guests}</span>}
      </label>

      <label>
        Occasion:
        <select name="occasion" value={formData.occasion} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Business">Business Meeting</option>
          <option value="Engagement">Engagement</option>
          <option value="Date Night">Date Night</option>
          <option value="Graduation">Graduation</option>
          <option value="Reunion">Reunion</option>
          <option value="Family Dinner">Family Dinner</option>
          <option value="Other">Other</option>
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
  );
};

export default BookingForm;