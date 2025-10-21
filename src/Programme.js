import { useParams } from "react-router-dom";
import './styles/Programme.css';
import trainingdata from "./data/training.json";
import { useEffect, useState } from "react";

const Programme = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger the fade-in animation on load
        setTimeout(() => {
          setIsLoaded(true);
        }, 100); // Delay to ensure smooth animation
      }, []);

    const { programme } = useParams(); // get category title from url 
    console.log("traingingdata: " + programme)
    const subTraining = trainingdata.filter((c) => c.programme === programme);

return (
        <div className={`catagory-page ${isLoaded ? "fade-in" : "fade-out"}`}>
            <div className="title-container">
            <span className="subtitle">{programme}</span>
            </div>
        </div>
    )
}
export default Programme
