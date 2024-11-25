import React from 'react'
import "./Style.css";
import { NavLink } from 'react-router-dom';
import  image from './images.jpg';

const Home = () => {
  return (
    <div className='body-home'>
       <div class="banner">
    
    <div class="content">
      <p class="subtitle">Explore the latest in movie Industries</p>
      <h1>Unlimited TV shows,<br/>Movies & more</h1>
      <p class="description">
        Discover the Top Best Movies and Drama with a catchy subtitle like Your Unlimited Guide to Must-Watch Content
      </p>
      <NavLink to="/movie">
      <button class="cta-button">Explore More</button>
      </NavLink>
    </div>
   
    <div class="image-placeholder"><img src={image}alt="movie pic" /></div>
  </div>
    </div>
  )
}

export default Home
