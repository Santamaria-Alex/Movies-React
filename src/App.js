import Header from "./components/Header";
import Movies from "./components/Movies";
import { useState, useEffect } from "react";
import AddMovie from "./components/AddMovie";

function App() {
  const API_KEY = "e969033d";

  const [showAddMovie, setShowAddMovie] = useState(false);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesFromServer = await fetchMovies();
      setMovies(moviesFromServer);
    };

    getMovies();
  }, []);

  //Fetch movies
  const fetchMovies = async () => {
    const res = await fetch("http://localhost:3000/movies");
    const data = await res.json();

    return data;
  };

  const omdb = async () => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&t=finding+nemo`
    );

    const data = await res.json();

    console.log(data);
  };

  omdb();

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

  //flip card
  // const flipCard = () =>{

  // }

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddMovie(!showAddMovie)}
        showAdd={showAddMovie}
      />
      {showAddMovie && <AddMovie onAdd={addMovie} />}
      {movies.length > 0 ? (
        <Movies movies={movies} onDelete={deleteMovie} onToggle={togglePlot} />
      ) : (
        "No Movies to Show"
      )}
    </div>
  );
}

export default App;
