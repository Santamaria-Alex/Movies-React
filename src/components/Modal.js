import React from "react";
import { useState } from "react";
import Movies from "./Movies";

const Modal = ({ movie }) => {
  const [rating, setRating] = useState([]);
  const [test, setTest] = useState([]);

  const testing = document.getElementById("quantity");

  //Fetch single movie, need this to update rating
  const fetchMovie = async (id) => {
    const res = await fetch(`http://localhost:3000/movies/${id}`);
    const data = await res.json();

    return data;
  };

  const onChange = (e) => {
    e.preventDefault();

    setRating(e.target.value);
  };

  const updateRating = async (id) => {
    // e.preventDefault();
    // setRating(e.target.value);

    const movieToUpdate = await fetchMovie(id);
    const updateMovie = {
      ...movieToUpdate,
      rating: testing.value,
    };

    const res = await fetch(`http://localhost:3000/movies/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateMovie),
    });

    const data = await res.json();

    setRating(
      movie.map((movie) =>
        movie.id === id
          ? {
              ...movie,
              rating: testing.value,
            }
          : rating
      )
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setRating(e.target.value);

    updateRating();
  };

  return (
    <div className="modal">
      <form className="modal-form">
        <label htmlFor="quantity">Update Rating!</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="10"
          defaultValue={movie.rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button onClick={(id) => updateRating(movie.id)}>Update</button>
      </form>
    </div>
  );
};

export default Modal;
