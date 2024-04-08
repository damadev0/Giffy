import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders Title", () => {
  render(<App />);
  const title = screen.getByText(/Giffy Store/i);
  expect(title).toBeInTheDocument();
});
