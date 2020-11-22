import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <Link className="BackHome" to="/">
        <img src={logo} alt="logo-marvel" />
      </Link>

      <nav>
        <Link className="link" to="/characters">
          <p>Characters</p>
        </Link>
        <Link className="link" to="/comics">
          <p>Comics</p>
        </Link>
        <Link className="link" to="/favorites">
          <p>Favorites</p>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
