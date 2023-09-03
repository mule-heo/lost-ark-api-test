import { render } from "@testing-library/react";
import Root from "app/index";
import { BrowserRouter } from "react-router-dom";

test("always true", () => {
  render(<Root />, { wrapper: BrowserRouter });
});
