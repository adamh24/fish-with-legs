import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import cocktailData from "./data/cocktails.json"; // Import the JSON data
import CocktailCard from "./CocktailCard"; // Import the CocktailCard component
import "./App.css"; // Import the CSS file


const Cocktails = () => {
  const [filter, setFilter] = useState({ menu: "", flavors: "" }); // Filter state
  const [filteredCocktails, setFilteredCocktails] = useState(cocktailData); // Filtered items
  const [isAnimating, setIsAnimating] = useState(false); // Animation state
  const [animateType, setAnimateType] = useState("in"); // Animation direction
  const [isLoaded, setIsLoaded] = useState(false); // Track if the component has loaded

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Delay to ensure smooth animation

    if (filteredCocktails !== cocktailData) {
        // Trigger the animation only when the filter changes
        setTimeout(() => {
          setIsAnimating(true);
        }, 50); // Delay to ensure smooth animation
      } else {
        // Ensure the first set of cocktails is displayed without animation
        setIsAnimating(false);
      }
  }, [filteredCocktails]);

  const handleFilterChange = (newFilter) => {
    setAnimateType("out"); // Set animation type to "out" (slide out to the left)
    setIsAnimating(true); // Start fade-out animation

    setTimeout(() => {
      const newFilteredCocktails = cocktailData.filter((cocktail) => {
        const matchesMenu = newFilter.menu ? cocktail.menu === newFilter.menu : true;
        const matchesflavors = newFilter.flavors
          ? cocktail.flavors.includes(newFilter.flavors)
          : true;
        return matchesMenu && matchesflavors;
      });

      setFilter(newFilter); // Update the filter state
      setFilteredCocktails(newFilteredCocktails); // Update the filtered items
      setAnimateType("in"); // Set animation type to "in" (slide in from the right)
      
      setTimeout(() => {
        setIsAnimating(false); // End animation
      }, 200); // Match the duration of the fade-in animation
    }, 200); // Match the duration of the fade-out animation
  };   

  const getRandomHeight = () => {
    const heights = ["20vh", "30vh", "40vh", "50vh", "60vh"];
    return heights[Math.floor(Math.random() * heights.length)];
  };

  return (
    <div className={`masonry-container ${isLoaded ? "fade-in" : "fade-out"}`}>
      {/* Filter Buttons */}
        <div className="filter-buttons">
          <select
              className="filter-select"
              onChange={(e) => handleFilterChange({ ...filter, menu: e.target.value })}
              >
              <option value="">Filter by Menu</option>
              <option value="Classic">Classic</option>
              <option value="Botanical">Botanical</option>
              <option value="Tropical">Tropical</option>
              </select>
              <select
              className="filter-select"
              onChange={(e) => handleFilterChange({ ...filter, flavors: e.target.value })}
              >
              <option value="">Filter by Ingredients</option>
              <option value="Espresso">Espresso</option>
              <option value="Vodka">Vodka</option>
              <option value="Coffee Liqueur">Coffee Liqueur</option>
              <option value="Pistachio">Pistachio</option>
              <option value="Prosecco">Prosecco</option>
              <option value="Rum">Rum</option>
              <option value="Berries">Berries</option>
          </select>
          <button
            className="clear-button"
            onClick={() => handleFilterChange({ menu: "", flavors: "" })}
          >
            Clear Filters
          </button>
          </div>
          <div
          id="animation-div"
          style={{
              opacity: isAnimating ? 0 : 1, // Fade in or out
              transform: isAnimating
              ? animateType === "in"
                ? "translateX(100%)" // Slide in from the right
                : "translateX(-100%)" // Slide out to the left
              : "translateX(0)", // Center position
              transition: `opacity 0.4s ease, transform 0.4s ease `, 
          }}
          >
         <ResponsiveMasonry>
            <Masonry>
                
              {filteredCocktails.map((cocktail, index) => (
                  <CocktailCard
                  key={cocktail.id}
                  image={require(`${cocktail.image}`)}
                  title={cocktail.title}
                  style={{
                      height: getRandomHeight(), // Assign a random height
                  }}
                  />
              ))}   
            </Masonry>
          </ResponsiveMasonry>
        </div>

        {/* Cocktail Cards */}
        
    </div>
  );
};

export default Cocktails;