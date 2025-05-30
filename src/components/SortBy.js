import React, { useState, useRef, useEffect } from "react";
// import '../styles/CocktailPage.css';

const SORT_OPTIONS = [
  { value: "alphabetical", label: "Alphabetical" },
  { value: "recent", label: "Most Recent" },
  { value: "featured", label: "Featured" },
];

const SortBy = ({ sortBy, onSortChange }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    onSortChange({ target: { value } });
    setOpen(false);
  };

  const selectedLabel = SORT_OPTIONS.find(opt => opt.value === sortBy)?.label || "Sort By";

  return (
    <div className="nav-item dropdown-group" ref={dropdownRef} style={{ position: "relative" }}>
      <button
        className="menu-text"
        onClick={() => setOpen(!open)}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        {selectedLabel} <span style={{ fontSize: "0.8em" }}>▼</span>
      </button>
      {open && (
        <ul className="dropdown-menu" style={{
          position: "absolute",
          top: "100%",
          left: 0,
          zIndex: 10,
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          minWidth: "150px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          padding: 0,
          margin: 0,
          listStyle: "none"
        }}>
          {SORT_OPTIONS.map(option => (
            <li
              key={option.value}
              className={`dropdown-item${sortBy === option.value ? " selected" : ""}`}
              style={{
                padding: "0.5rem 1rem",
                cursor: "pointer",
                background: sortBy === option.value ? "#f0f0f0" : "transparent"
              }}
              onClick={() => handleSelect(option.value)}
              role="option"
              aria-selected={sortBy === option.value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortBy;