import React from "react";
import { useState } from "react";

const AddMovie = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [director, setDirector] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [plot, setPlot] = useState("");

  return (
    <form className="add-form">
      <div className="form-control">
        <label htmlFor="">Movie</label>
        <input
          type="text"
          placeholder="Add Movie"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="">Director</label>
        <input
          type="text"
          placeholder="Add Director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="">Release Date</label>
        <input
          type="date"
          placeholder="Add Release Date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="">Plot</label>
        <input
          type="text"
          placeholder="Add Plot"
          value={plot}
          onChange={(e) => setPlot(e.target.value)}
        />
      </div>

      <input className="btn btn-block" type="submit" value="Save Movie" />
    </form>
  );
};

export default AddMovie;
