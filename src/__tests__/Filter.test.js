import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";
import ShoppingList from "../components/ShoppingList";

const testData = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Lettuce", category: "Produce" },
  { id: 3, name: "Swiss Cheese", category: "Dairy" },
  { id: 4, name: "String Cheese", category: "Dairy" }
];

test("the input field acts as a controlled input", () => {
  render(<ShoppingList items={testData} />);
  const input = screen.getByPlaceholderText(/Search/);

  fireEvent.change(input, { target: { value: "testing 123" } });
  expect(input.value).toBe("testing 123");
});

test("the shopping filters based on the search term to include full matches", () => {
  render(<ShoppingList items={testData} />);
  const input = screen.getByPlaceholderText(/Search/);

  // Filter for "Yogurt"
  fireEvent.change(input, { target: { value: "Yogurt" } });
  expect(screen.getByText("Yogurt")).toBeInTheDocument();
  expect(screen.queryByText("Lettuce")).not.toBeInTheDocument();
});

test("the shopping filters based on the search term to include partial matches", () => {
  render(<ShoppingList items={testData} />);
  const input = screen.getByPlaceholderText(/Search/);

  // Filter for "Cheese"
  fireEvent.change(input, { target: { value: "Cheese" } });
  expect(screen.getByText("Swiss Cheese")).toBeInTheDocument();
  expect(screen.getByText("String Cheese")).toBeInTheDocument();
  expect(screen.queryByText("Lettuce")).not.toBeInTheDocument();
  expect(screen.queryByText("Yogurt")).not.toBeInTheDocument();
});