import React from "react";
import { useParams } from "react-router-dom";

const getApiMovieDetails = async ({ params }) => {
  console.log(params);
  const movieId = params.movieId;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${movieId}&apikey=6fa5d1bf`
    );

    // const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey={import.meta.env.VITE_API_KEY}&s=titanic&page=1');

    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getApiMovieDetails;
