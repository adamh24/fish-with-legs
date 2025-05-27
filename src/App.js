import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import DaliMenu from "./Dali";
import Cocktails from "./Cocktails";
import Navigation from "./components/Navigation";
import Recipe from "./Recipe";
import Footer from "./components/Footer";
import About from "./About";
import Sustainability from "./Sustainability";
import Reviews from "./Reviews";
import Spotlight from "./Spotlight";
import "./styles/App.css";
import Modifiers from "./Modifiers";
import ModifiersCatagory from "./ModifiersCatagory";

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
      {/* <img src={require("./assets/seaweed.png")} alt="seaweed" style={{ position: 'absolute', bottom: '0px', left: '-100px', height: 'auto', zIndex: 0 }} /> */}
      {/* <img src={require("./assets/seaweed.png")} alt="seaweed" style={{ position: 'absolute', bottom: '0px', right: '-100px', height: '80vh', zIndex: 0 }} /> */}

      <Router>

        <Navigation/>

        <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/cocktails" element={<Cocktails />} />
            <Route path="/cocktail/:title" element={<Recipe />} />
            <Route path="/dali-menu" element={<DaliMenu />} />
            <Route path="/modifiers" element={<Modifiers/>} />
            <Route path="/modifiers/:catagory" element={<ModifiersCatagory />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/spotlight" element={<Spotlight />} />
            {/* <Route path="/modifiers" element={<Modifiers />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/history" element={<History />} />
            
            <Route path="/contact" element={<Contact />} />
            */} 

        </Routes>

        {/* <Footer/> */}
      </Router>
     
    </div>

  );
};

export default App;
