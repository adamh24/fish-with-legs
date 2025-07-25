import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import cocktailData from "./data/cocktails.json"; // Import the JSON data
import CocktailCard from "./components/CocktailCard"; // Import the CocktailCard component
import "./styles/App.css"; // Import the CSS file
import FilterButtons from "./components/FilterButtons"; // Import the FilterButtons component
import SortBy from "./components/SortBy";

const Cocktails = () => {
  const [filter, setFilter] = useState({ menu: "", flavors: "", baseSpirits: "" });
  const [filteredCocktails, setFilteredCocktails] = useState(cocktailData);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animateType, setAnimateType] = useState("in");
  const [isLoaded, setIsLoaded] = useState(false);
  const [sortBy, setSortBy] = useState("alphabetical");

  // Sorting logic
  const getSortedCocktails = () => {
    let sorted = [...filteredCocktails];
    if (sortBy === "alphabetical") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "recent") {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === "featured") {
      sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return sorted;
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    if (filteredCocktails !== cocktailData) {
      setTimeout(() => {
        setIsAnimating(true);
      }, 50);
    } else {
      setIsAnimating(false);
    }
  }, [filteredCocktails]);

  const handleFilterChange = (newFilter) => {
    setAnimateType("out");
    setIsAnimating(true);

    setTimeout(() => {
      setFilter(newFilter);

      const newFilteredCocktails = cocktailData.filter((cocktail) => {
        // Check if the cocktail contains any of the selected base spirits
        const matchesBaseSpirits =
          newFilter.baseSpirits.length === 0 ||
          newFilter.baseSpirits.some((spirit) =>
            cocktail.ingredients.some((ingredient) =>
              ingredient.toLowerCase().includes(spirit.toLowerCase())
            )
          );

        return matchesBaseSpirits;
      });

      setFilteredCocktails(newFilteredCocktails);
      setAnimateType("in");

      setTimeout(() => {
        setIsAnimating(false);
      }, 200);
    }, 200);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const getRandomHeight = () => {
    const heights = ["30vh", "35vh", "40vh"];
    return heights[Math.floor(Math.random() * heights.length)];
  };

  return (
    <div className={`masonry-container ${isLoaded ? "fade-in" : "fade-out"}`}>
      <div style={{ display: "flex", alignItems: "space-between", gap: "1rem", marginBottom: "1rem", aspectRatio: "auto", justifyContent: "space-between" }}>
        <SortBy sortBy={sortBy} onSortChange={handleSortChange} />
        <FilterButtons filter={filter} onFilterChange={handleFilterChange} />
      </div>
      <div
        id="animation-div"
        style={{
          opacity: isAnimating ? 0 : 1,
          transform: isAnimating
            ? animateType === "in"
              ? "translateX(100%)"
              : "translateX(-100%)"
            : "translateX(0)",
          transition: `opacity 0.4s ease, transform 0.4s ease `,
        }}
      >
        <ResponsiveMasonry>
          <Masonry>
            {getSortedCocktails().map((cocktail, index) => (
              <CocktailCard
                key={cocktail.id}
                image={require(`${cocktail.image}`)}
                title={cocktail.title}
                style={{
                  height: getRandomHeight(),
                }}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Cocktails;