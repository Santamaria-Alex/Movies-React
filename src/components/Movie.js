import React from "react";
import { FaTimes } from "react-icons/fa";

const Movie = ({ movie }) => {
  return (
    <div className="task">
      <h3>
        {movie.title} <FaTimes style={{ color: "red", cursor: "pointer" }} />
      </h3>
      <p>
        Director: {movie.director}, {movie.year}
      </p>
    </div>
  );
};

export default Movie;
