import {useEffect, useState} from "react";
import {CDN_URL} from "../utils/constants";
import {Link} from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnReactName, setbtnReactName] = useState("Login");
  console.log("header rendered");

  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    console.log("useEffect called ");
  }, []);
  return (
    <div className="flex justify-between bg-green-100 shadow-lg">
      <div className="logo-container">
        <img className="w-40" src={CDN_URL} />
      </div>
      <div className="flex items-center">
        <ul className=" flex m-4 p-4 ">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
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
          </li>
          <li className="px-4">
            {" "}
            <Link to="/cart">cart</Link>
          </li>

          <button
            onClick={() => {
              btnReactName === "Login"
                ? setbtnReactName("Logout")
                : setbtnReactName("Login");
            }}
          >
            {btnReactName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
