import React, { useState, useEffect } from "react";
import "../styles/Filter.css";

const FilterButtons = ({ filter, onFilterChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const baseSpirits = ["Rum", "Whiskey", "Tequila", "Vodka", "Gin"];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".sort-by-container")) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleCheckboxChange = (spirit) => {
    const updatedSpirits = filter.baseSpirits.includes(spirit)
      ? filter.baseSpirits.filter((s) => s !== spirit)
      : [...filter.baseSpirits, spirit];

    onFilterChange({ ...filter, baseSpirits: updatedSpirits });
  };

  return (
    <div className="filter-buttons">
      <div className="sort-by-container">
        <button className="sort-by-button" onClick={toggleDropdown}>
          Filter by Base Spirit
        </button>
        {dropdownOpen && (
          <div className="sort-by-dropdown">
            {baseSpirits.map((spirit, index) => (
              <label
                key={index}
                className={`checkbox-label ${
                  filter.baseSpirits.includes(spirit) ? "checked" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={filter.baseSpirits.includes(spirit)}
                  onChange={() => handleCheckboxChange(spirit)}
                />
                <span>{spirit}</span>
              </label>
            ))}
            <button
              className="clear-button"
              onClick={() => onFilterChange({ baseSpirits: [] })}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterButtons;