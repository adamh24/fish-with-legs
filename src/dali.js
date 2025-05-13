import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import cocktailData from "./data/cocktails.json"; // Import the JSON data
import CocktailCard from "./CocktailCard"; // Import the CocktailCard component

const DaliMenu = () => {
  const [filteredCocktails, setFilteredCocktails] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Filter cocktails to only include those from the "Dali" menu
    const daliCocktails = cocktailData.filter((cocktail) => cocktail.menu === "Dali");
    setFilteredCocktails(daliCocktails);
    setIsAnimating(true); // Trigger animation on load
  }, []);

  const getRandomHeight = () => {
    const heights = ["20vh", "30vh", "40vh", "50vh", "60vh"];
    return heights[Math.floor(Math.random() * heights.length)];
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dali Menu</h1>
      <div
        id="animation-div"
        style={{
          opacity: isAnimating ? 1 : 0, // Fade in
          transform: isAnimating ? "translateX(0)" : "translateX(-100%)", // Slide in from the left
          transition: "opacity 0.5s ease, transform 0.5s ease", // Smooth animation
        }}
      >
        <ResponsiveMasonry>
          <Masonry>
            {filteredCocktails.map((cocktail) => (
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
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#203F2A",
    minHeight: "100vh",
    padding: "20px",
  },
  title: {
    color: "#F8F6F2",
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "36px",
    fontFamily: "Lora",
  },
};

export default DaliMenu;