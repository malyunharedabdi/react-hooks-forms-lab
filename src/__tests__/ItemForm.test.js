import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm";

test("adds a new item to the list when the form is submitted", () => {
  // Create a mock function
  const mockSubmit = jest.fn();

  // Render the component with the prop
  render(<ItemForm onItemFormSubmit={mockSubmit} />);

  // Fill in form inputs (example)
  fireEvent.change(screen.getByLabelText(/Name/i), {
    target: { value: "Ice Cream" },
  });
  fireEvent.change(screen.getByLabelText(/Category/i), {
    target: { value: "Dessert" },
  });

  // Submit the form
  fireEvent.submit(screen.getByText(/Add to List/i));

  // Check that the mock function was called with correct data
  expect(mockSubmit).toHaveBeenCalled();
  expect(mockSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      name: "Ice Cream",
      category: "Dessert",
    })
  );
});