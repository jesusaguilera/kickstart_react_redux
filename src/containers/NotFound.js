// Dependencies
import React from "react";
import PropTypes from "prop-types";

//Components
import Header from "../components/Header";

const NotFound = ({ props }) => {
  return (
    <main>
      <Header />
      <div>
        <h1>Ups!, 404</h1>
      </div>
    </main>
  );
};

NotFound.propTypes = {};

export default NotFound;
