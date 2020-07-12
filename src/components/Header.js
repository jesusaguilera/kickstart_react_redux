import React from "react";
import PropTypes from "prop-types";

//Components
import Nav from "./Nav";

const Header = ({ props }) => {
  return (
    <header>
      <div>logo</div>
      <Nav />
    </header>
  );
};

Header.propTypes = {};

export default Header;
