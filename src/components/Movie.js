import React from "react";
import { FaTimes } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useState } from "react";

const Movie = ({ movie, onDelete, onToggle }) => {
  const [isFlipped, setIsFlipped] = useState("false");

  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card">
      <div
        className={isFlipped ? "card-inner" : "card-inner is-flipped"}
        onDoubleClick={handleToggle}
      >
        <div className="card-face card-face-front">
          <img className="poster" src={movie.poster} alt="No Poster Provided" />
        </div>
        <div className="card-face card-face-back">
          <div className="card-content">
            <div className="card-header">
              <h2 className="card-title">{movie.title}</h2>
              <FaTimes
                className="delete-btn"
                onClick={() => onDelete(movie.id)}
                style={{ color: "red", cursor: "pointer" }}
              />
            </div>

            <div className="card-body">
              <h3>
                {movie.director}, {movie.year}
              </h3>
              {/* <BiDotsHorizontalRounded
                onClick={(id) => onToggle(movie.id)}
                style={{
                  marginTop: "10px",
                  display: "block",
                  cursor: "pointer",
                }}
              /> */}
              {/* <p style={{ display: `${movie.plotShow ? "block" : "none"}` }}>
                Plot: {movie.plot}
              </p> */}
              <p>{movie.plot}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
