import React from "react";

export const Result = ({ movie }) => {
  return (
    <div>
      {movie.title ? <h3>{movie.title}</h3> : <div>No movie found</div>}
    </div>
  );
};
