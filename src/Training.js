// import { useNavigate } from 'react-router';
import './styles/Training.css';
import trainingdata from "./data/training.json";
import { useEffect, useState } from "react";

const Training = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    // const navigate = useNavigate();

      useEffect(() => {
        // Trigger the fade-in animation on load
        setTimeout(() => {
          setIsLoaded(true);
        }, 100); // Delay to ensure smooth animation
      }, []);

return (
        <div className={`catagory-page ${isLoaded ? "fade-in" : "fade-out"}`}>
            <div className="title-container">
                <span className="subtitle">Devlopement Programmes</span>
            </div>

            <div className="programme-deck">
                {trainingdata.map((training) => (
                <div className="programme-card">
                    
                    <div className="programme-image"
                    style={{backgroundImage: `url(${require(`${training.image}`)})`}}>                       
                    </div>
                    <div className="t-block">

                        <span className="programme-title">{training.title}</span>

                    </div>
                </div>

                ))}

            </div>

        </div>
    )

}

export default Training;