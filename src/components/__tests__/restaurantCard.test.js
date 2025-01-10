import {render, screen} from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
//import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard />);

  const alias = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");

  expect(alias).toBeInTheDocument();
});

// it("should render RestaurantCard component with Promoted Label", () => {
//   // Home Work - test HOC : withPromtedLabel()
// });
