import React from "react";
import "../assets/styles/components/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-text">
        <Link to="/">
          <span className="opacity all-caps">air</span>
          vironment
        </Link>
      </div>
      <div className="menu opacity">
        <Link to="all-data">
          <div className="all-caps">all data</div>
        </Link>
        <Link to="/averages">
          <div className="all-caps">averages</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
