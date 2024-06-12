import React from "react";
import notiffiIcon from "../notifications.png";
import settings from "../settings.png";
import logo from "../directright.jpg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="horizontal-navbar">
      <ul>
        <li>
          <ul className="flexstart">
            <li>
              <img src={logo} className="icons" alt="" />
            </li>
            <li>
              <h1 className="text-clr">LAMA.</h1>           </li>
          </ul>
        </li>
        <li>
          <ul className="flexend">
            <li>
              {" "}
              <img src={settings} className="icons" alt="settings icon" />
            </li>
            <li>
              {" "}
              <img
                src={notiffiIcon}
                className="icons"
                alt="notification icon"
              />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
