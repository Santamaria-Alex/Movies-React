import React from "react";
import { FaTimes } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useState } from "react";
import Modal from "./Modal";
import { IconContext } from "react-icons/lib";

const Movie = ({ movie, onDelete, onToggle, onUpdate, rating }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [isFlipped, setIsFlipped] = useState("false");

  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card">
      <div className={isFlipped ? "card-inner" : "card-inner is-flipped"}>
        <div className="card-face card-face-front">
          {modal && <Modal movie={movie} rating={rating} onUpdate={onUpdate} />}
          <img className="poster" src={movie.poster} alt="No Poster Provided" />
          {!modal && (
            <IconContext.Provider value={{ color: "white", size: "20px" }}>
              <BiDotsHorizontalRounded
                className="dots"
                onClick={handleToggle}
              />
            </IconContext.Provider>
          )}
          <div className="rating" onClick={toggleModal}>
            {movie.rating}
          </div>
        </div>

        <div className="card-face card-face-back">
          <div className="card-content">
            <div className="card-header">
              <h2 className="card-title">
                {movie.title} <br /> {movie.year}
              </h2>

              <FaTimes
                className="delete-btn"
                onClick={() => onDelete(movie.id)}
                style={{ color: "orange", cursor: "pointer" }}
              />
            </div>

            <IconContext.Provider value={{ color: "black", size: "20px" }}>
              <BiDotsHorizontalRounded
                className="dots-back"
                onClick={handleToggle}
              />
            </IconContext.Provider>

            <div className="card-body">
              <p>{movie.plot}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
