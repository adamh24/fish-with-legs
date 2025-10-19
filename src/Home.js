import CocktailCard from "./components/CocktailCard";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { useEffect, useState } from "react";
import Feature from "./components/Feature";
import './styles/Home.css';
import ArticleFeatures from "./components/ArticleFeatures";
import HomeFeature from "./components/HomeFeature";
import Footer from "./components/Footer";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false); // Track if the component has loaded


  const cocktailImages = [
      require("./assets/cocktail1.png"),
      require("./assets/cocktail2.png"),
      require("./assets/cocktail3.png"),
      require("./assets/cocktail4.png"),
      require("./assets/cocktail5.png"),
    ];


  const headings = [
    "Taste of the Avanteguard Menu", "Pistacio Burboun Fat Wash", "Classic Elegance",
    "Long Floral Twist", "History of Rum", "Berry Bliss"
  ];

  useEffect(() => {
    // Trigger the fade-in animation on load
    setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Delay to ensure smooth animation
  }, []);

  return (
  
    <div className={`masonry-container ${isLoaded ? "fade-in" : "fade-out"}`}>
      
      <HomeFeature/>

      <ArticleFeatures/>


      <ResponsiveMasonry>
        <Masonry>
          <CocktailCard
            image={cocktailImages[3]}
            title={headings[1]}
            style={{ width: "-webkit-fill-available", height: "60vh" }} // botanical
          />
          <CocktailCard
            image={cocktailImages[1]}
            title={headings[3]}
            style={{ width: "-webkit-fill-available", height: "40vh" }} // long floral
          />
          <CocktailCard
            image={cocktailImages[4]}
            title={headings[5]}
            style={{ height: "20vh", width: "-webkit-fill-available" }} // berry bliss
          />
          <div></div>
          <CocktailCard
            image={cocktailImages[0]}
            title={headings[0]}
            style={{ width: "-webkit-fill-available", height: "30vh" }} // mojito
          />
          <CocktailCard
            image={cocktailImages[2]}
            title={headings[4]}
            style={{ width: "-webkit-fill-available", height: "50vh" }} // green zest
          />
        </Masonry>
      </ResponsiveMasonry>
      <Footer/>
    </div>
  );
}



  export default Home;