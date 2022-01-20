import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onAdd} color="green" text="Add Movie" />
    </header>
  );
};

Header.defaultProps = {
  title: "Movie Database",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
