import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./Style.css";

const MovieDetails = () => {
  const movieData = useLoaderData();
  console.log(movieData);

  return (
    <div className="parent">
      <div className="movieDetailsContainer">
        <div class="movieCard">
          <div class="poster">
            <img src={movieData.Poster} alt="Movie Poster" />
          </div>
          <div className="card-lower">
            <h2 className="movie-title">{movieData.Title}</h2>
            <p className="movie-genre">{movieData.Genre}</p>
          </div>
        </div>
        <div className="movieDetails">
          <h3>Plot Summary:</h3>
          <p>{movieData.Plot}</p>
          <h3>Actors:</h3>
          <ul>
            {movieData.Actors.split(",").map((actor) => (
              <li key={actor}>{actor}</li>
            ))}
          </ul>
          <h3>Director:</h3>
          <p>{movieData.Director}</p>
          <div className="metadata">
            <div>
            <div className="badge rating">
              <p>{movieData.imdbRating}</p>
            </div>
            <span>Rating</span>
            </div>
            <div>
            <div className="badge release">
              <p>{movieData.Released}</p>
            </div>
            <span>Release Date</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
