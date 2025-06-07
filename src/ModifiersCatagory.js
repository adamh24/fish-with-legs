
import modifiers from "./data/modifiers.json";
import { useParams } from "react-router-dom";
import "./styles/ModifiersCatagory.css";
import Allergens from "./components/Allergens.js"
import { useEffect, useState } from "react";

const ModifiersCatagory = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    

    useEffect(() => {
        // Trigger the fade-in animation on load
        setTimeout(() => {
          setIsLoaded(true);
        }, 100); // Delay to ensure smooth animation
      }, []);

    const { catagory } = useParams(); // get category title from url 
    console.log("catagory: " + catagory)
    const subModifiers = modifiers.filter((modifier) => modifier.catagory === catagory);
    
    return (
        <div className={`catagory-page ${isLoaded ? "fade-in" : "fade-out"}`}>
            <div className="title-container">
                <span className="subtitle">{catagory}</span>
            </div>

            <div className="modifiers-deck">
                        
                {subModifiers.map((modifier) => (

                        <div className="modifiers-card">
                            <div className="square-one"></div>
                            <div className="square-two"></div>

                            <div className="icon-group">
                                        <Allergens modifier={modifier}/>                                  
                            </div>
                            <div className="text-blk">
                                <span className="modifiers-title">{modifier.title}</span>
                                <span className="modifiers-discription">{modifier.breif}</span>
                            </div>
                           
                            <div 
                            className="modifier-image"
                            style={{
                             backgroundImage: `url(${require(`${modifier.image}`)})`
                            }}></div>
                        </div>
                    
              ))}   
            </div>

        </div>
    )

}
export default ModifiersCatagory