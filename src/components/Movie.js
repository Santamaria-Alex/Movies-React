import React from "react";
import { FaTimes } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Movie = ({ movie, onDelete, onToggle }) => {
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
      <BiDotsHorizontalRounded
        onClick={(id) => onToggle(movie.id)}
        style={{ marginTop: "10px", display: "block", cursor: "pointer" }}
      />
      <p style={{ display: `${movie.reminder ? "block" : "none"}` }}>
        Plot: {movie.plot}
      </p>
    </div>
  );
};

export default Movie;
