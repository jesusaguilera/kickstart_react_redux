// Dependencies
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Nav = ({ props }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {};

export default Nav;
