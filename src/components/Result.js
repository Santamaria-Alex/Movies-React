import React from "react";
import { useState } from "react";

export const Result = ({ movie, onAdd }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [plot, setPlot] = useState("");
  const [actors, setActors] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // if (!title) {
    //   alert("Please add a movie");
    //   return;
    // }
    setTitle(`${movie.title}`);
    setRating(`${movie.vote_average}`);
    setPoster(`https://image.tmdb.org/t/p/w200${movie.poster_path}`);
    setYear(`${movie.release_date.substring(0, 4)}`);
    setGenre("No Genre");
    setDirector("No Director");
    setPlot(`${movie.overview}`);
    setActors("No Actors");

    onAdd({ title, rating, poster, year, genre, director, plot, actors });

    //clear the form
    // setTitle("");
    // setDirector("");
    // setReleaseDate("");
    // setPlot("");
  };

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

        <div className="add-movie">
          <button
            className="add-movie-button btn"
            style={{ backgroundColor: "cornflowerblue" }}
            onClick={onSubmit}
          >
            Add Movie to Database
          </button>
        </div>
      </div>
    </div>
  );
};
