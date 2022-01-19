import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onClick} color="green" text="Add Movie" />
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
