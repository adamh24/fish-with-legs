
import React from "react";
import "./App.css"; // Import the CSS file

const CocktailCard = ({ image, title, style }) => (
  <div
    className="card"
    style={{
      ...style,
      backgroundImage: `url(${image})`, // Keep dynamic background image
    }}
  >
    <div className="overlay"></div>
    <p className="cardp">{title}</p>
  </div>
);

export default CocktailCard;