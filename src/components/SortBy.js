import React from "react";
import "../styles/Filter.css"; // Import the CSS file
import "../styles/Navbar.css"; // Import the Navbar CSS file
const SortBy = ({ sortBy, onSortChange }) => {
  return (
    <div className="sort-by-container">
      <button className="sort-by-button">Sort By: {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}</button>
      <div className="sort-by-dropdown">
        <div
          className={`sort-by-item ${sortBy === "alphabetical" ? "active" : ""}`}
          onClick={() => onSortChange({ target: { value: "alphabetical" } })}
        >
          Alphabetical
        </div>
        <div
          className={`sort-by-item ${sortBy === "recent" ? "active" : ""}`}
          onClick={() => onSortChange({ target: { value: "recent" } })}
        >
          Recent
        </div>
        <div
          className={`sort-by-item ${sortBy === "featured" ? "active" : ""}`}
          onClick={() => onSortChange({ target: { value: "featured" } })}
        >
          Featured
        </div>
      </div>
    </div>
  );
};

export default SortBy;