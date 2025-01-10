import {sum} from "../sum";
import Contact from "../Contact";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";

test("", () => {
  //Assertion
  const result = sum(3, 4);

  expect(result).toBe(7);
});

it("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByText("Submit");

  // Assertion
  expect(heading).toBeInTheDocument();
});
