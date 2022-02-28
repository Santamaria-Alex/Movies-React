import React from "react";
import { useState, useEffect } from "react";
import { Result } from "./Result";

const AddMovie = ({ onAdd }) => {
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
  );
};

export default AddMovie;
