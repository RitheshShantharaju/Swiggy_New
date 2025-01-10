import {Provider} from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import {BrowserRouter} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import "@testing-library/jest-dom";

it("The header component should load with Search buttton ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const searchIcon = screen.getByText("Search");

  expect(searchIcon).toBeInTheDocument();
});

it("The header component should load with Home link ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const Home = screen.getByText("Home");

  expect(Home).toBeInTheDocument();
});

it("The header component should load with Cart link ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const Cart = screen.getByText("Cart");

  expect(Cart).toBeInTheDocument();
});
