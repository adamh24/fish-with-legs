import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import DaliMenu from "./Dali";
import Cocktails from "./Cocktails";
import Navigation from "./Navigation";

import "./App.css"; // Import the CSS file

const App = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);

    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (

    <div className="main-container">

      {/* seaweed background */}
      <img src={require("./assets/seaweed.png")} alt="seaweed" style={{ position: 'absolute', bottom: '-124px', left: '-100px', height: 'auto', zIndex: 0 }} />
      <img src={require("./assets/seaweed.png")} alt="seaweed" style={{ position: 'absolute', bottom: '-124px', right: '-100px', height: '80vh', zIndex: 0 }} />

      <Router>
        <div className="navbar">
          <p className="nav-title">Handle</p>
          <Navigation/>
        </div>

        <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/cocktails" element={<Cocktails />} />
            <Route path="/dali-menu" element={<DaliMenu />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/modifiers" element={<Modifiers />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/history" element={<History />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/contact" element={<Contact />} /> */}

        </Routes>
      </Router>
     
    </div>

  );
};

export default App;
