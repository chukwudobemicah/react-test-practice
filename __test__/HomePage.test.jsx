import Home from "@/pages";
// import { render, expect } from "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

describe("Home Page Rendering", () => {
  it("should show home page text", () => {
    render(<Home />);
    expect(screen.getByText("HOME PAGE")).toBeInTheDocument();
  });

  it("should have button: Click me", () => {
    render(<Home />);
    expect(
      screen.getByRole("button", { name: "click me" })
    ).toBeInTheDocument();
    render;
  });

  it("should have input", () => {
    render(<Home />);
    expect(screen.getByLabelText("Label text")).toBeInTheDocument();
    // screen.getByLabelText("Label text");
  });

  it("should find placeholder input", () => {
    render(<Home />);
    // screen.getByPlaceholderText("search");
    expect(screen.getByPlaceholderText("search")).toBeInTheDocument();
  });
});
