import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu } from 'react-icons/fi';
import cocktails from './data/cocktails.json';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navigation = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef();

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const matches = cocktails.filter(cocktail =>
      cocktail.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSuggestions(matches);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      window.location.href = `/search?q=${searchValue}`;
    }
  };

  return (
    <header className={`navbar ${searchActive ? 'search-mode' : ''}`}>
      <div className="navbar-container">

        <div className='nav-left'>

          <div className="menu-dropdown dropdown group">
            <FiMenu className="menu-icon" />
           <div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="dropdown-content"
              >
                <Link to="/recipies">Recipies</Link>
                <Link to="/menus">Menus</Link>
                <Link to="/sustainability">Sustainability</Link>
                <Link to="/about">About</Link>
                <Link to="/history">History</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/ingredients">Ingredients</Link>
                <Link to="/education">Education</Link>
              </div>
            
          </div>

          <div className="nav-item dropdown group">
            <span className="menu-text">Recipes</span>
            <div className="dropdown-content">
              <Link to="/cocktails">Cocktails</Link>
              <Link to="/recipe2">Recipe 2</Link>
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
            <Link to="/contact"  className="menu-text">Contact</Link>
            <FiSearch className="search-icon" onClick={() => setSearchActive(true)} />
          </div>
        )}

        {searchActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="search-bar"
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
            <div className="suggestions">
              {suggestions.map((item, index) => (
                <Link key={index} to={`/cocktail/${item.id}`} className="suggestion-item">
                  {item.name}
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