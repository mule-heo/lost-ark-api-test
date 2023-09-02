import { render, screen } from "@testing-library/react";
import Root from "app/index";

test("always true", () => {
  render(<Root />);
  // const linkElement = screen.getByText(/라카테스/i);
  // expect(linkElement).toBeInTheDocument();
});
