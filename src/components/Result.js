import React from "react";

export const Result = ({ movie }) => {
  return (
    <div className="results">
      <div className="poster">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div>X</div>
        )}
      </div>

      <div className="movie-info">
        <div className="title">
          {movie.title ? <h3>{movie.title}</h3> : <div>No movie found</div>}
        </div>

        <div className="date">
          {movie.release_date ? (
            <h5>{movie.release_date.substring(0, 4)}</h5>
          ) : (
            "-"
          )}
        </div>
      </div>
    </div>
  );
};
