import React, { useState, useEffect } from "react";
import "../styles/Filter.css";

const SortBy = ({ sortBy, onSortChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  return (
    <div className="sort-by-container">
      <button className="sort-by-button" onClick={toggleDropdown}>
        Sort By: {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
      </button>
      {dropdownOpen && (
        <div className="sort-by-dropdown">
          <button className="close-dropdown" onClick={closeDropdown}>
            X
          </button>
          <div
            className={`sort-by-item ${sortBy === "alphabetical" ? "active" : ""}`}
            onClick={() => {
              onSortChange({ target: { value: "alphabetical" } });
              closeDropdown();
            }}
          >
            Alphabetical
          </div>
          <div
            className={`sort-by-item ${sortBy === "recent" ? "active" : ""}`}
            onClick={() => {
              onSortChange({ target: { value: "recent" } });
              closeDropdown();
            }}
          >
            Recent
          </div>
          <div
            className={`sort-by-item ${sortBy === "featured" ? "active" : ""}`}
            onClick={() => {
              onSortChange({ target: { value: "featured" } });
              closeDropdown();
            }}
          >
            Featured
          </div>
        </div>
      )}
    </div>
  );
};

export default SortBy;