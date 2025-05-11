import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import cocktailData from "./data/cocktails.json"; // Import the JSON data

const Cocktails = () => {
  const [filter, setFilter] = useState({ menu: "", ingredient: "" }); // Filter state
  const [isAnimating, setIsAnimating] = useState(false); // Animation state


  const handleFilterChange = (newFilter) => {
    setIsAnimating(true); // Start fade-out animation
    setTimeout(() => {
      setFilter(newFilter); // Update the filter after fade-out
      setIsAnimating(false); // Start fade-in animation
    }, 300); // Match the duration of the fade-out animation
  };

  // Filter the cocktails based on the selected menu and ingredient
  const filteredCocktails = cocktailData.filter((cocktail) => {
    const matchesMenu = filter.menu ? cocktail.menu === filter.menu : true;
    const matchesIngredient = filter.ingredient
      ? cocktail.ingredients.includes(filter.ingredient)
      : true;
    return matchesMenu && matchesIngredient;
  });

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

      {/* Cocktail Cards */}
      <ResponsiveMasonry>
  <Masonry>
    {filteredCocktails.map((cocktail) => (
      <div
        key={cocktail.id}
        style={{
          ...styles.card,
          backgroundImage: `url(${require(`${cocktail.image}`)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: isAnimating ? 0 : 1, // Fade out or in
          transform: isAnimating ? "translateX(-50px)" : "translateX(0)", // Slide left or reset
          transition: "opacity 0.3s ease, transform 0.3s ease", // Smooth animation
        }}
      >
        <div style={styles.overlay}></div>
        <p style={styles.cardp}>{cocktail.title}</p>
      </div>
    ))}
  </Masonry>
</ResponsiveMasonry>
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