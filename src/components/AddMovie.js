import React from "react";
import { useState, useEffect } from "react";
import { Result } from "./Result";

const AddMovie = ({ onAdd }) => {
  // const [title, setTitle] = useState("");
  // const [director, setDirector] = useState("");
  // const [releaseDate, setReleaseDate] = useState("");
  // const [plot, setPlot] = useState("");

  //OMDB
  // const API_KEY = "e969033d";
  const API_KEY = "9244d6b2a6c183656ecaf1fa85b40a77";
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    ).then((res) =>
      res.json().then((data) => {
        if (!data.errors) {
          setResults(data.results);
          console.log(data.results);
        } else {
          setResults([]);
        }
      })
    );
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   // if (!title) {
  //   //   alert("Please add a movie");
  //   //   return;
  //   // }

  //   onAdd({ title, director, releaseDate, plot });

  //   //clear the form
  //   setTitle("");
  //   setDirector("");
  //   setReleaseDate("");
  //   setPlot("");
  // };

  return (
    <form>
      <div className="form-control" id="form-control">
        <label htmlFor="">Movie</label>
        <input
          type="text"
          value={search}
          placeholder="Search Catalog for Movie"
          id="search"
          onChange={onChange}
        />
      </div>

      <div>
        {results.length > 0 && (
          <ul className="testing">
            {results.map((movie) => {
              return (
                <li key={movie.id}>
                  <Result movie={movie} onAdd={onAdd} />
                </li>
              );
            })}
          </ul>
        )}
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
