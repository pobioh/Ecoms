"use client";
import React, { useEffect } from "react";
// import "../styles/globals.css"; // Ensure you have this line to include your global CSS

const CustomSlider = () => {
  

  return (
    <div className="slider-container">
      <div className="slide active">
        <img src="/img/slider/slider-1/1.jpg" alt="Slider 1" />
        <div className="slide-content">
          <h2>Welcome to our</h2>
          <h1>Furniture</h1>
          <h3>Gallery 2021</h3>
          <a href="#" className="button-one">
            Shop Now
          </a>
        </div>
      </div>
      <div className="slide">
        <img src="/img/slider/slider-1/2.jpg" alt="Slider 2" />
        <div className="slide-content">
          <h2>Welcome to our</h2>
          <h1>Furniture</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available...
          </p>
          <a href="#" className="button-one">
            Shop Now
          </a>
        </div>
      </div>
      <div className="slide">
        <img src="/img/slider/slider-1/3.jpg" alt="Slider 3" />
        <div className="slide-content">
          <h2>Welcome to our</h2>
          <h1>Furniture</h1>
          <h3>Gallery 2021</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available...
          </p>
          <a href="#" className="button-one">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
