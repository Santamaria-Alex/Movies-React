import React from "react";
import { useState } from "react";
import Movies from "./Movies";

const Modal = ({ movie }) => {
  const [rating, setRating] = useState([]);
  const [test, setTest] = useState([]);

  //Fetch single movie, need this to update rating
  const fetchMovie = async (id) => {
    const res = await fetch(`http://localhost:3000/movies/${id}`);
    const data = await res.json();

    return data;
  };

  const updateRating = async (id) => {
    // e.preventDefault();
    // setRating(e.target.value);

    const movieToUpdate = await fetchMovie(id);
    const updateMovie = {
      ...movieToUpdate,
      rating: rating,
    };

    const res = await fetch(`http://localhost:3000/movies/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateMovie),
    });

    const data = await res.json();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setRating(e.target.value);

    updateRating(rating);
  };

  return (
    <div className="modal">
      <form className="modal-form">
        <label className="modal-header">Update Rating!</label>
        <input
          className="modal-rating"
          type="number"
          min="0"
          max="10"
          value={rating}
          onChange={() => onSubmit}
        />
        {/* <button onClick={(id) => onUpdate(movie.id)}>Update</button> */}
      </form>
    </div>
  );
};

export default Modal;
