import React from "react";
import "../styles/App.css"; // Import the CSS file for styling

const FilterButtons = ({ filter, onFilterChange }) => {
  return (
        
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

    
  );
};

export default FilterButtons;