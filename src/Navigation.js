import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi'; // Import FiX for the cancel button
import cocktails from './data/cocktails.json';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navigation = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef();
  const searchBarRef = useRef();

  const handleSearch = (e) => {
    setSearchValue(e.target.value);

    const matches = cocktails.filter(cocktail =>
      cocktail.title && cocktail.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(matches);
    if(matches.length === cocktails.length) {
      setSuggestions([]);
      return;
    }
    setSuggestions(matches);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      window.location.href = `/search?q=${searchValue}`;
    }
  };

  const handleCancelSearch = () => {
    setSearchActive(false);
    setSearchValue('');
    setSuggestions([]);
  };

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      handleCancelSearch();
    }
  };

  const handleClickOutside = (e) => {
    if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
      handleCancelSearch();
    }
  };

  useEffect(() => {
    if (searchActive) {
      document.addEventListener('keydown', handleEscapeKey);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchActive]);

  return (
    <header className={`navbar ${searchActive ? 'search-mode' : ''}`}>
      <div className="navbar-container">

        <div className='nav-left'>
          <div className="menu-dropdown dropdown group">
            <FiMenu className="menu-icon" />
            <div className="dropdown-content">
              <div className="nav-item dropdown menu-group">
                <span className="menu-text">Recipes</span>
                <div className="dropdown-menu-content">
                  <Link to="/cocktails">Cocktails</Link>
                  <Link to="/modifiers">Modifiers</Link>
                </div>
              </div>
              <div className="nav-item dropdown menu-group">
                <span className="menu-text">Menus</span>
                <div className="dropdown-menu-content">
                  <Link to="/dali-menu">Dali Menu</Link>
                  <Link to="/event-menu">Event Menu</Link>
                </div>
              </div>
              <Link to="/sustainability">Sustainability</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/ingredients">Ingredients</Link>
              <Link to="/reviews">Reviews</Link>
              <Link to="/spotlight">Spotlight</Link>
          </div>
        </div>

          <div className="nav-item dropdown group">
            <span className="menu-text">Recipes</span>
            <div className="dropdown-content">
              <Link to="/cocktails">Cocktails</Link>
              <Link to="/modifiers">Modifiers</Link>
            </div>
          </div>

          <div className="nav-item dropdown group">
            <span className="menu-text">Menus</span>
            <div className="dropdown-content">
              <Link to="/dali-menu">Dali Menu</Link>
              <Link to="/event-menu">Event Menu</Link>
            </div>
          </div>
        </div>

        <div className='nav-title-container'>
          <Link to="/" className="nav-title">FISH-with-LEGS</Link>
        </div>

        {!searchActive && (
          <div className="nav-right">
            <Link to="/about" className="menu-text">About</Link>
            <Link to="/contact" className="menu-text">Contact</Link>
            <FiSearch className="search-icon" onClick={() => setSearchActive(true)} />
          </div>
        )}

        {searchActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="search-bar"
            ref={searchBarRef}
          >
            <input
              ref={inputRef}
              type="text"
              value={searchValue}
              onChange={handleSearch}
              onKeyDown={handleSearchSubmit}
              placeholder="Search cocktails..."
              autoFocus
            />
            <FiX className="cancel-icon" onClick={handleCancelSearch} />
            <div className="suggestions">
              {suggestions.map((item, index) => (
                <Link key={index} to={`/cocktail/${item.id}`} className="suggestion-item">
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navigation;