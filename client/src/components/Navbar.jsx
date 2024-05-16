import React from "react";
import img from "../assets/endimension.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/" className="link logo-container">
        <img src={img} alt="logo" className="logo-img" />
        <h3 className="logo-heading">Products.</h3>
      </Link>
      <Link className="link" to="/">
        <h3 className="home">Home</h3>
      </Link>
      <h3 className="profile">P</h3>
    </div>
  );
};

export default Navbar;
