import { render, screen } from "@testing-library/react";

import App from "../pages/index";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react1/i);

  expect(linkElement).toBeInTheDocument();
});
