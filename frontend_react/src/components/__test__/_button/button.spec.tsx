import { render, screen } from "@testing-library/react";
import { Button } from "../..";

describe("button should render correctly", () => {
  render(<Button />);
  it("have containe text first", () => {
    const element = screen.getByText(/first test/i);
    expect(element).toBeInTheDocument();
  });
});
