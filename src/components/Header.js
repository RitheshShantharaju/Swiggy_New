import {useContext, useEffect, useState} from "react";
import {CDN_URL} from "../utils/constants";
import {Link} from "react-router-dom";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [btnReactName, setbtnReactName] = useState("Login");
  // console.log("header rendered");

  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    // console.log("useEffect called ");
  }, []);
  // Subscribing to the store
  //const cartItems = useSelector((store) => store.cart.items);

  const {loggedInUser} = useContext(UserContext);
  return (
    <div className="flex justify-between bg-orange-300 shadow-lg sticky top-0">
      <div className="logo-container">
        <Link to="/">
          <img className="w-40" src={CDN_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className=" flex m-4 p-4 ">
          <li className="px-4 font-bold">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="md:px-4">
            <Link to="/search">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />

              <span className="md:px-2">Search</span>
            </Link>
          </li>
          {/* <li className="px-4">
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li className="px-4 font-bold ">
            <FontAwesomeIcon icon={faCartArrowDown} />
            <Link to="/cart"> Cart</Link>
          </li>

          {/* <button
              onClick={() => {
                btnReactName === "Login"
                  ? setbtnReactName("Logout")
                  : setbtnReactName("Login");
              }}
            >
              {btnReactName}
            </button> */}
        </ul>
        {/* <li className="p-4 font-bold">{loggedInUser}</li> */}
      </div>
    </div>
  );
};

export default Header;
