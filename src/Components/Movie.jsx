import React from "react";
import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";
import "./Style.css";

const Movie = () => {
  const movieData = useLoaderData();
  console.log(movieData);

  return (
    <div className="allCards">
      {movieData.Search.map((movie) => {
        return <MovieCard key={movie.imdbID} movie={movie} />;
      })}
    </div>
    // <></>
  );
};

export default Movie;
