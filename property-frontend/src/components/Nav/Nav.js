import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"; // Ensure you have this CSS file in the same directory

const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navlink">
            Home
          </Link>
          <Link to="/login" className="navlink">
            Admin
          </Link>
          <Link to="/propertyform" className="navlink">
            Upload Property
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
