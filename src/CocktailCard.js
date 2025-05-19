import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./App.css"; // Import the CSS file

const CocktailCard = ({ image, title, style }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleCardClick = () => {
    navigate(`/cocktail/${title}`); // Navigate to the CocktailPage with the title
  };

  return (
    <div
      className="card"
      style={{
        ...style,
        backgroundImage: `url(${image})`, // Keep dynamic background image
      }}
      onClick={handleCardClick} // Add click handler
    >
      <div className="overlay"></div>
      <p className="cardp">{title}</p>
    </div>
  );
};

export default CocktailCard;