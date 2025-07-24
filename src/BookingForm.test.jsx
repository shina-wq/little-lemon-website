import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  const mockTimes = ["17:00", "18:00", "19:00"];
  const mockUpdateTimes = jest.fn();
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        updateTimes={mockUpdateTimes}
        onSubmit={mockOnSubmit}
      />
    );
  });

  test("renders all form fields correctly", () => {
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Special Requests/i)).toBeInTheDocument();
  });

  test("renders all available time options", () => {
    fireEvent.change(screen.getByLabelText(/Date/i), {
      target: { value: "2025-08-01" },
    });

    mockTimes.forEach((time) => {
      expect(screen.getByRole("option", { name: time })).toBeInTheDocument();
    });
  });

  test("shows validation errors if required fields are empty", () => {
    fireEvent.click(screen.getByRole("button", { name: /book now/i }));

    expect(screen.getByText(/Date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Time is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Guests must be between 1 and 10/i)).toBeInTheDocument();
  });

  test("submits form data when valid", () => {
    fireEvent.change(screen.getByLabelText(/Date/i), {
      target: { value: "2025-08-01" },
    });

    fireEvent.change(screen.getByLabelText(/Time/i), {
      target: { value: "18:00" },
    });

    fireEvent.change(screen.getByLabelText(/Number of Guests/i), {
      target: { value: "3" },
    });

    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: "Graduation" },
    });

    fireEvent.change(screen.getByLabelText(/Special Requests/i), {
      target: { value: "Vegan options please" },
    });

    fireEvent.click(screen.getByRole("button", { name: /book now/i }));

    expect(mockOnSubmit).toHaveBeenCalledWith({
      date: "2025-08-01",
      time: "18:00",
      guests: 3,
      occasion: "Graduation",
      requests: "Vegan options please",
    });
  });
});