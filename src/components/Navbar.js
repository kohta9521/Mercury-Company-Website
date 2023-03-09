import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <Link to="#" className="navbar-logo">
          Mercury
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas-times" : "fas fa=bars"}></i>
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
