import React from "react";
import Movie from "./Movie";

const Movies = ({ movies, onDelete, onToggle }) => {
  return (
    <div className="list-container">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Movies;
