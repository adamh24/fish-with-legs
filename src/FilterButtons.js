import React from "react";
import "./App.css"; // Import the CSS file for styling

const FilterButtons = ({ filter, onFilterChange }) => {
  return (
    <div >
        {/* <div className="sort-buttons">
            <button
                className="sort-button"
                onClick={() => onFilterChange({ ...filter, sort: "name" })}
                style={{width: "100px", height: "40px", marginRight: "10px", color: "black"}}
            >Sort By</button>
        </div> */}
        <div className="filter-buttons">
        {/* Filter by Menu */}
        <select
            className="filter-select"
            onChange={(e) => onFilterChange({ ...filter, menu: e.target.value })}
        >
            <option value="">Filter by Menu</option>
            <option value="Classic">Classic</option>
            <option value="Botanical">Botanical</option>
            <option value="Tropical">Tropical</option>
        </select>

        {/* Filter by Ingredients */}
        <select
            className="filter-select"
            onChange={(e) => onFilterChange({ ...filter, flavors: e.target.value })}
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

        {/* Clear Filters Button */}
        <button
            className="clear-button"
            onClick={() => onFilterChange({ menu: "", flavors: "" })}
        >
            Clear Filters
        </button>
        </div>

    </div>
    
  );
};

export default FilterButtons;