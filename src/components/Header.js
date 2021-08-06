import React from "react";
import "../assets/styles/components/Header.scss";
import { Link, NavLink } from "react-router-dom";
import FilterOpenButton from "../assets/icons/FilterOpenButton";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-text">
        <Link to="/">
            <h1><span>Air</span>vironment</h1>
        </Link>
      </div>

        <div className="nav">
            {/* <NavLink to="/all-data" activeClassName="selected">All data</NavLink> */}
            <NavLink to="/averages" activeClassName="selected">Averages</NavLink>
        </div>




      <div className="filterOpenButton">
        <FilterOpenButton />
      </div>
    </div>
  );
};

export default Header;
