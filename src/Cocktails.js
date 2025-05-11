import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import cocktailData from "./data/cocktails.json"; // Import the JSON data
import CocktailCard from "./CocktailCard"; // Import the CocktailCard component

const Cocktails = () => {
  const [filter, setFilter] = useState({ menu: "", ingredient: "" }); // Filter state
  const [filteredCocktails, setFilteredCocktails] = useState(cocktailData); // Filtered items
  const [isAnimating, setIsAnimating] = useState(false); // Animation state
  const [direction, setDirection] = useState("right"); // Animation direction

  const cocktailImages = [
    require("./assets/cocktail1.png"),
    require("./assets/cocktail2.png"),
    require("./assets/cocktail3.png"),
    require("./assets/cocktail4.png"),
    require("./assets/cocktail5.png"),
    // require("./assets/cocktail6.png")
  ];

  const headings = [
    "Taste of the Avanteguard Menu", "Pistacio Burboun Fat Wash", "Classic Elegance",
    "Long Floral Twist", "History of Rum", "Berry Bliss"
  ];
  useEffect(() => {
    // Trigger the animation on page load
    setTimeout(() => {
      setIsAnimating(true);
    }, 300); // Delay to ensure smooth animation
  }, [filteredCocktails]);

  const handleFilterChange = (newFilter) => {
    setIsAnimating(true); // Start fade-out animation
    setTimeout(() => {
        setTimeout(() => {
            const newFilteredCocktails = cocktailData.filter((cocktail) => {
                const matchesMenu = newFilter.menu ? cocktail.menu === newFilter.menu : true;
                const matchesIngredient = newFilter.ingredient
                  ? cocktail.ingredients.includes(newFilter.ingredient)
                  : true;
                return matchesMenu && matchesIngredient;
              });
              setFilter(newFilter); // Update the filter state
      setFilteredCocktails(newFilteredCocktails); // Update the filtered items
        }, 300); // Match the duration of the fade-out animation
      
      
      setIsAnimating(false); // Trigger animation for new results
    }, 300); // Match the duration of the fade-out animation
  };

  // Filter the cocktails based on the selected menu and ingredient
   

  const getRandomHeight = () => {
    const heights = ["20vh", "30vh", "40vh", "50vh", "60vh"];
    return heights[Math.floor(Math.random() * heights.length)];
  };

  return (
    <div style={styles.container}>
      {/* Filter Buttons */}
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: 20 }}>
        <select
            style={styles.filterSelect}
            onChange={(e) => handleFilterChange({ ...filter, menu: e.target.value })}
            >
            <option value="">Filter by Menu</option>
            <option value="Classic">Classic</option>
            <option value="Botanical">Botanical</option>
            <option value="Tropical">Tropical</option>
            </select>
            <select
            style={styles.filterSelect}
            onChange={(e) => handleFilterChange({ ...filter, ingredient: e.target.value })}
            >
            <option value="">Filter by Ingredient</option>
            <option value="Espresso">Espresso</option>
            <option value="Vodka">Vodka</option>
            <option value="Coffee Liqueur">Coffee Liqueur</option>
            <option value="Pistachio">Pistachio</option>
            <option value="Prosecco">Prosecco</option>
            <option value="Rum">Rum</option>
            <option value="Berries">Berries</option>
        </select>
        <button
          style={styles.clearButton}
          onClick={() => setFilter({ menu: "", ingredient: "" })}
        >
          Clear Filters
        </button>
        </div>
        <div
        id="animation-div"
        style={{
            opacity: isAnimating ? 1 : 0, // Fade in or out
            transform: isAnimating
                ? "translateX(0)" // Move to the center
                : "translateX(100%)", // Start from the right edge
            transition: `opacity 0.5s ease, transform 0.5s ease `, 
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

const styles = {
  container: {
    backgroundColor: "#203F2A",
    minHeight: "100vh",
    padding: "20px",
  },
  filterSelect: {
    margin: "0 10px",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "16px",
  },
  clearButton: {
    padding: "10px 20px",
    backgroundColor: "#5A3E2B",
    color: "#F8F6F2",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  card: {
    position: "relative",
    justifyContent: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
    height: "300px",
    width: '30vw'
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(32, 63, 42, 0.4)",
  },
  cardp: {
    position: "relative",
    color: "#F8F6F2",
    fontSize: 18,
    padding: 10,
    zIndex: 1,
    fontFamily: "Lora",
    fontSize: 24,
  },
};

export default Cocktails;