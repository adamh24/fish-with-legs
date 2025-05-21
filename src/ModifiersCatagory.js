
import modifiers from "./data/modifiers.json";
import { useParams } from "react-router-dom";
import "./ModifiersCatagory.css";

const ModifiersCatagory = () => {

    const { title } = useParams();
    
return (
        <div className={`catagory-page ${isLoaded ? "fade-in" : "fade-out"}`}>
            <div className="title-container">
                <span className="subtitle">{catagory}</span>
            </div>

            <div className="modifiers-deck">
                        
                {subModifiers.map((modifier) => (

                        <div className="modifiers-card">
                            <div className="text-block">
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