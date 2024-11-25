import React from "react";
import "./Style.css";
import { NavLink } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div class="card">
        <div class="card-upper">
          <img src={movie.Poster} alt="Movie Poster" />
        </div>
        <div className="card-lower">
          <NavLink to={`/movie/${movie.imdbID}`}>
            <button className="btn">Watch Now</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
