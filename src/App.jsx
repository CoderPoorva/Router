import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Movie from "./Components/Movie";
import About from "./Components/About";
import { contactData, ContactUs } from "./Components/ContactUs";
import AppLayout from "./Components/AppLayout";
import ErrorPage from "./Components/ErrorPage";
import getApi from "./Components/getApi";
import MovieDetails from "./Components/MovieDetails";
import getApiMovieDetails from "./Components/getApiMovieDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getApi,
        },
        {
          path: "/movie/:movieId",
          element: <MovieDetails />,
          loader: getApiMovieDetails,
        },
        {
          path: "/contact",
          element: <ContactUs />,
          action: contactData,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
