
import modifiers from "./data/modifiers.json";
import { useParams } from "react-router-dom";
import "./ModifiersCatagory.css";
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
    const subModifiers = modifiers.filter((c) => c.catagory === catagory);
    
return (
        <div className={`catagory-page ${isLoaded ? "fade-in" : "fade-out"}`}>
            <div className="title-container">
                <span className="subtitle">{catagory}</span>
            </div>

            <div className="catagory-image">
                        
                {subModifiers.map((modifier) => (

                    <div>
                        <div className="modifier-title">{modifier.title}</div>
                        <div >{modifier.image}</div>
                    </div>
                    
              ))}   
            </div>

        </div>
    )

}
export default ModifiersCatagory