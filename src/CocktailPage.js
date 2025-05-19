import React from "react";
import cocktails from "./data/cocktails.json"; // Import the cocktails data
import { useParams } from "react-router-dom"; // Import useParams to get URL parameters

import "./CocktailPage.css"; // Import CSS for styling

const CocktailPage = () => {
  // Find the cocktail with the matching title
  const { title } = useParams(); // Get the title from the URL
  const cocktail = cocktails.find((c) => c.title === title);

  // If no cocktail is found, display a message
  if (!cocktail) {
    return <div>Cocktail not found.</div>;
  }

  return (
    <div className="cocktail-page">
      {/* Image on the left */}
      <div className="cocktail-image">
        <img src={require(`${cocktail.image}`)} alt={cocktail.title} />
      </div>

      {/* Title and description */}
      <div className="cocktail-details">
        <h1 className="cocktail-title">{cocktail.title}</h1>
        <p className="cocktail-description">{cocktail.description}</p>

        {/* Ingredients and instructions */}
        <div className="cocktail-content">
          <div className="cocktail-ingredients">
            <h2>Ingredients</h2>
            <ul>
              {cocktail.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3>Pairings</h3>
            <ul>
              {cocktail.pairings.map((pairing, index) => (
                <li key={index}>{pairing}</li>
              ))}
            </ul>
          </div>
          <div className="cocktail-instructions">
            <h2>Instructions</h2>
            <ol>
              {cocktail.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Footer with notes */}
      <footer className="cocktail-footer">
        <h3>Notes</h3>
        <p>{cocktail.notes}</p>
      </footer>
    </div>
  );
};

export default CocktailPage;