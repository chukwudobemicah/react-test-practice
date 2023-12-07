import Home from "@/pages";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Home Page", () => {
  describe("Rendering", () => {
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

    it("should find input by display value", () => {
      render(<Home />);
      screen.getByDisplayValue("seven");
    });

    it("should not find elemnt with show text", () => {
      render(<Home />);
      expect(screen.queryByText(/Show/)).not.toBeInTheDocument();
    });
  });

  describe("Behaviour", () => {
    it("should find show txt button and find new text", async () => {
      render(<Home />);
      expect(screen.queryByText("Show text")).not.toBeInTheDocument();
      const showTextBtn = screen.getByRole("button", { name: "click me" });
      await userEvent.click(showTextBtn);
      // expect(screen.getByText("Show text")).toBeInTheDocument();
      expect(
        await screen.findByText("Show text", {}, { timeout: 5000 })
      ).toBeInTheDocument();
      // await waitFor(
      //   () => {
      //     expect(screen.getByText("Show text")).toBeInTheDocument();
      //   },
      //   { timeout: 1200 }
      // );
    });
  });
});

// use findByText when you know an element will take a little to show up, use getByText otherwise
