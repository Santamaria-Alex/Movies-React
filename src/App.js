import Header from "./components/Header";
import Movies from "./components/Movies";
import { useState } from "react";
import AddMovie from "./components/AddMovie";

function App() {
  const [showAddMovie, setShowAddMovie] = useState(false);

  const [movies, setMovies] = useState([
    {
      title: "down",
      rating: "5",
      poster:
        "https://m.media-amazon.com/images/M/MV5BYWMwMzQxZjQtODM1YS00YmFiLTk1YjQtNzNiYWY1MDE4NTdiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
      year: "2001",
      genre: "Drama, History, War",
      director: "Ridley Scott",
      plot: "160 elite U.S. soldiers drop into Somalia to capture two top lieutenants of a renegade warlord and find themselves in a desperate battle with a large force of heavily-armed Somalis.",
      actors: "Josh Hartnett, Ewan McGregor, Tom Sizemore, Eric Bana",
      id: 2,
      plotShow: false,
    },
    {
      title: "tenet",
      rating: "5",
      poster:
        "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg",
      year: "2020",
      genre: "Action, Sci-Fi",
      director: "Christopher Nolan",
      plot: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      actors:
        "Elizabeth Debicki, Robert Pattinson, John David Washington, Aaron Taylor-Johnson",
      id: 3,
      plotShow: false,
    },
    {
      title: "resident evil",
      rating: "5",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZmI1ZGRhNDYtOGVjZC00MmUyLThlNTktMTQyZGE3MzE1ZTdlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg",
      year: "2002",
      genre: "Action, Horror, Sci-Fi",
      director: "Paul W.S. Anderson",
      plot: "A special military unit fights a powerful, out-of-control supercomputer and hundreds of scientists who have mutated into flesh-eating creatures after a laboratory accident.",
      actors: "Ryan McCluskey, Oscar Pearce, Indra Ové, Anna Bolt",
      id: 4,
      plotShow: false,
    },
    {
      title: "Boogalo",
      director: "",
      year: "",
      genre: "",
      actors: "",
      plot: "",
      rating: "",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNGMwNGI0NzAtY2U1Zi00MTI3LTk2NWQtMTU0ZmQ3OGZmMjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY1200_CR86,0,630,1200_AL_.jpg",
      id: 5,
      plotShow: false,
    },
  ]);

  //Add movies function
  const addMovie = (movie) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newMovie = { id, ...movie };
    setMovies([...movies, newMovie]);
  };

  //delete movies function
  const deleteMovie = (id) => {
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
