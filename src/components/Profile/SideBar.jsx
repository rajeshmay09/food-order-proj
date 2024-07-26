import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div className="d-flex flex-column fixed-left sidebar">
      <nav className="nav flex-column">
        <Link
          href="/dashboard/profile"
          className={`nav-link ${activeItem === "Home" ? "active" : ""}`}
          onClick={() => handleClick("Home")}
        >
          Home
        </Link>
        <a
          href="#"
          className={`nav-link ${activeItem === "About" ? "active" : ""}`}
          onClick={() => handleClick("About")}
        >
          About
        </a>
        <a
          href="#"
          className={`nav-link ${activeItem === "Contact" ? "active" : ""}`}
          onClick={() => handleClick("Contact")}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default SideBar;