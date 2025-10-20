import { useNavigate } from 'react-router';
import './styles/Modifiers.css';
import modifierdata from './data/cat-mods.json';
import { useEffect, useState } from "react";

const Modifiers = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        // Trigger the fade-in animation on load
        setTimeout(() => {
          setIsLoaded(true);
        }, 100); // Delay to ensure smooth animation
      }, []);

    const handleCardClick = (title) => {
        navigate(`/modifiers/${title}`);

    }



    return (
        <div className={`modifiers-page ${isLoaded ? "fade-in" : "fade-out"}`}>
            <div className="title-container">
                <span className="subtitle">Modifiers</span>
            </div>

            <div className="catagory-deck">
                  {modifierdata.map((modifier) => (
                    <div className="catagory-card" onClick={() => handleCardClick(modifier.title)}>
                        
                        <div 
                        className="catagory-image"
                        style={{
                            backgroundImage: `url(${require(`${modifier.image}`)})`
                        }}></div>
                        <div className="text-block">
                            
                            <span className="catagory-title">{modifier.title}</span>
                            <span className="catagory-description">{modifier.description}</span>
                        </div>   
                                         
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Modifiers;