import React from "react";
import { useState, useEffect } from "react";
import Search from "./Search";

const AddMovie = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [plot, setPlot] = useState("");

  const [search, setSearch] = useState("");

  //OMDB
  const API_KEY = "e969033d";
  const [omdbMovies, setomdbMovies] = useState([]);
  // const search = document.getElementById("search").value;
  // console.log(search);

  useEffect(() => {
    const getOmdbMovies = async () => {
      const moviesFromOmdb = await omdbFetch();
      setomdbMovies(moviesFromOmdb);
    };

    getOmdbMovies();
  }, []);

  const omdbFetch = async () => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&t=${search}`
    );
    const data = await res.json();

    console.log(data);
    return data;
  };
  omdbFetch();

  const onSubmit = (e) => {
    e.preventDefault();

    // if (!title) {
    //   alert("Please add a movie");
    //   return;
    // }

    onAdd({ title, director, releaseDate, plot });

    //clear the form
    setTitle("");
    setDirector("");
    setReleaseDate("");
    setPlot("");
  };

  const onSearch = (e) => {
    e.preventDefault();

    const searchResult = document.createElement("div");
    searchResult.innerHTML = `
    <div className="card">
      <div className="card-inner">
        <div className="card-face card-face-front search-image">
          <img className="poster" src=${omdbMovies.Poster} alt="No Poster Provided" />
        </div>
      </div>
    </div>
    `;

    const form_control = document.getElementById("form-control");
    form_control.append(searchResult);
  };

  return (
    <form onSubmit={onSearch}>
      <div className="form-control" id="form-control">
        <label htmlFor="">Movie</label>
        <input
          type="text"
          placeholder="Search Catalog for Movie"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>

    // <form className="add-form" onSubmit={onSubmit}>
    //   <div className="form-control">
    //     <label htmlFor="">Movie</label>
    //     <input
    //       type="text"
    //       placeholder="Add Movie"
    //       value={title}
    //       onChange={(e) => setTitle(e.target.value)}
    //     />
    //   </div>

    //   <div className="form-control">
    //     <label htmlFor="">Director</label>
    //     <input
    //       type="text"
    //       placeholder="Add Director"
    //       value={director}
    //       onChange={(e) => setDirector(e.target.value)}
    //     />
    //   </div>

    //   <div className="form-control">
    //     <label htmlFor="">Release Date</label>
    //     <input
    //       type="number"
    //       placeholder="Add Release Date"
    //       value={releaseDate}
    //       onChange={(e) => setReleaseDate(e.target.value)}
    //     />
    //   </div>

    //   <div className="form-control">
    //     <label htmlFor="">Plot</label>
    //     <input
    //       type="text"
    //       placeholder="Add Plot"
    //       value={plot}
    //       onChange={(e) => setPlot(e.target.value)}
    //     />
    //   </div>

    //   <input className="btn btn-block" type="submit" value="Save Movie" />
    // </form>
  );
};

export default AddMovie;
