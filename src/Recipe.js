import React from "react";
import { Link, useParams } from "react-router-dom"; // Import Link for navigation
import cocktails from "./data/cocktails.json"; // Import the cocktails data
import modifiers from "./data/modifiers.json"; // Import the modifiers data
import "./styles/Recipe.css"; // Import CSS for styling
import Allergens from "./components/Allergens"; // Import the Allergens component

const Recipe = () => {
  // Find the cocktail with the matching title
  const { title } = useParams(); // Get the title from the URL
  const cocktail = cocktails.find((c) => c.title === title);

  // If no cocktail is found, display a message
  if (!cocktail) {
    return <div>Cocktail not found.</div>;
  }

  // Check if an ingredient matches a modifier title
  const getIngredientElement = (ingredient) => {
    const matchingModifier = modifiers.find(
      (modifier) => ingredient.toLowerCase().includes(modifier.title.toLowerCase())
    );

    if (matchingModifier) {
      // If a match is found, return a Link to the modifier recipe page
      return (
        <Link to={`/modifier/${matchingModifier.id}`} className="ingredient-link">
          {ingredient}
        </Link>
      );
    }

    // If no match is found, return the ingredient as plain text
    return ingredient;
  };

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
                <li key={index}>{getIngredientElement(ingredient)}</li>
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
          <div className="allergen-icons">
            <h2>Allergens</h2>
            <Allergens modifier={cocktail} />
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

export default Recipe;