import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PaymentPage from "./PaymentPage";

const mockSelectedSkip = {
  id: 1,
  name: "8-Yard Skip",
  price: 220.0,
};

describe("PaymentPage", () => {
  test("Should render correctly when a skip is selected", () => {
    render(<PaymentPage selectedSkip={mockSelectedSkip} />);
    const heading = screen.getByText(/payment details/i);
    const skipName = screen.getByText(/8-yard skip/i);
    const price = screen.getByText(/£220.00/i);

    expect(heading).toBeInTheDocument();
    expect(skipName).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  test('Should call the onBack function when the "Change Selection" button is clicked', () => {
    const mockOnBack = vi.fn();

    render(<PaymentPage selectedSkip={mockSelectedSkip} onBack={mockOnBack} />);
    const backButton = screen.getByRole("button", {
      name: /change selection/i,
    });
    fireEvent.click(backButton);

    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });

  test("Should render an error state if no skip is provided", () => {
    render(<PaymentPage selectedSkip={null} />);
    expect(screen.getByText(/error/i)).toBeInTheDocument();
    expect(screen.getByText(/no skip was selected/i)).toBeInTheDocument();
    expect(screen.queryByText(/payment details/i)).not.toBeInTheDocument();
  });
});
