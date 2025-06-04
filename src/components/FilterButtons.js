import React, { useState } from "react";
import "../styles/Filter.css"; // Import the CSS file for styling

const FilterButtons = ({ filter, onFilterChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // Track if the dropdown is open
  const baseSpirits = ["Rum", "Whiskey", "Tequila", "Vodka", "Gin"]; // Base spirits list

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCheckboxChange = (spirit) => {
    const updatedSpirits = filter.baseSpirits.includes(spirit)
      ? filter.baseSpirits.filter((s) => s !== spirit) // Remove spirit if already selected
      : [...filter.baseSpirits, spirit]; // Add spirit if not selected

    onFilterChange({ ...filter, baseSpirits: updatedSpirits });
  };

  return (
    <div className="filter-buttons">
      {/* Dropdown for Base Spirits */}
      <div className="sort-by-container">
        <button className="sort-by-button" onClick={toggleDropdown}>
          Filter by Base Spirit
        </button>
        {dropdownOpen && (
          <div className="sort-by-dropdown">
            {baseSpirits.map((spirit, index) => (
              <div key={index} className="sort-by-item">
                <label>
                  <input
                    type="checkbox"
                    checked={filter.baseSpirits.includes(spirit)}
                    onChange={() => handleCheckboxChange(spirit)}
                  />
                  {spirit}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Clear Filters Button */}
      <button
        className="clear-button"
        onClick={() => onFilterChange({ baseSpirits: [] })}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterButtons;