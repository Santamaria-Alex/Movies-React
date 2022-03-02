import Header from "./components/Header";
import Movies from "./components/Movies";
import { useState, useEffect } from "react";
import AddMovie from "./components/AddMovie";

function App() {
  // const API_KEY = "e969033d";

  const [showAddMovie, setShowAddMovie] = useState(false);
  const [movies, setMovies] = useState([]);
  // const [rating, setRating] = useState([]);
  // const [omdbMovies, setomdbMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesFromServer = await fetchMovies();
      setMovies(moviesFromServer);
    };

    getMovies();
  }, []);

  // Fetch movies
  const fetchMovies = async () => {
    const res = await fetch("http://localhost:3000/movies");
    const data = await res.json();

    return data;
  };

  //Add movies function
  const addMovie = async (movie) => {
    const res = await fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(movie),
    });

    const data = await res.json();

    setMovies([...movies, data]);

    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newMovie = { id, ...movie };
    // setMovies([...movies, newMovie]);
  };

  //delete movies function
  const deleteMovie = async (id) => {
    await fetch(`http://localhost:3000/movies/${id}`, {
      method: "DELETE",
    });

    setMovies(movies.filter((movie) => movie.id !== id));
  };

  // //Fetch single movie, need this to update rating
  // const fetchMovie = async (id) => {
  //   const res = await fetch(`http://localhost:3000/movies/${id}`);
  //   const data = await res.json();

  //   return data;
  // };

  // const updateRating = async (id) => {
  //   // e.preventDefault();
  //   // setRating(e.target.value);

  //   const movieToUpdate = await fetchMovie(id);
  //   const updateMovie = {
  //     ...movieToUpdate,
  //     rating: rating,
  //   };

  //   const res = await fetch(`http://localhost:3000/movies/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(updateMovie),
  //   });

  //   const data = await res.json();

  //   setMovies(...movies, data);
  // };

  //toggle plot
  const togglePlot = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id
          ? {
              ...movie,
              plotShow: !movie.plotShow,
            }
          : movie
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddMovie(!showAddMovie)}
        showAdd={showAddMovie}
      />
      {showAddMovie && <AddMovie onAdd={addMovie} />}
      {movies.length > 0 ? (
        <Movies
          // onUpdate={updateRating}
          movies={movies}
          onDelete={deleteMovie}
          onToggle={togglePlot}
          // rating={rating}
        />
      ) : (
        "No Movies to Show"
      )}
    </div>
  );
}

export default App;
