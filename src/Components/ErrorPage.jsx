import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigation = useNavigate();

  const handleGoToHome = () => {
    navigation(-1);
  };

  return (
    <div className="errorpage">
      <img
        src="https://prerender.io/wp-content/uploads/soft-404-errors-and-seo.jpg"
        alt=""
        className="errorpic"
      />
      <br />
      <NavLink to="/">Go To Home Page</NavLink>
      <button className="btn" onClick={handleGoToHome}>
        Go Back to previous Page
      </button>
    </div>
  );
};

export default ErrorPage;
