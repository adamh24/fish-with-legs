import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import cocktailData from "./data/cocktails.json"; // Import the JSON data
import CocktailCard from "./components/CocktailCard"; // Import the CocktailCard component

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
    <div >
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
  );
};


export default DaliMenu;