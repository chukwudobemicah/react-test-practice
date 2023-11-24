import Home from "@/pages";
import { render } from "@testing-library/react";

describe("Home Page Rendering", () => {
  it("should show home page text", () => {
    render(<Home />);
  });
});
