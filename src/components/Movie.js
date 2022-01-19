import React from "react";
import { FaTimes } from "react-icons/fa";

const Movie = ({ movie, onDelete }) => {
  return (
    <div className="task">
      <h3>
        {movie.title}{" "}
        <FaTimes
          onClick={() => onDelete(movie.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>
        Director: {movie.director}, {movie.year}
      </p>
    </div>
  );
};

export default Movie;
