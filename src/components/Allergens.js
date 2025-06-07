import allergens from "../data/allergens.json";
import "../styles/Allergens.css";

// Import all allergen images
import celeryIcon from "../assets/allergens/Icons-Celery.png";
import crustaceansIcon from "../assets/allergens/Icons-Crustaceans.png";
import eggIcon from "../assets/allergens/Icons-Egg.png";
import fishIcon from "../assets/allergens/Icons-Fish.png";
import glutenIcon from "../assets/allergens/Icons-Gluten.png";
import lupinIcon from "../assets/allergens/Icons-Lupin.png";
import milkIcon from "../assets/allergens/Icons-Milk.png";
import molluscsIcon from "../assets/allergens/Icons-Molluscs.png";
import mustardIcon from "../assets/allergens/Icons-Mustard.png";
import peanutsIcon from "../assets/allergens/Icons-Peanuts.png";
import sesameIcon from "../assets/allergens/Icons-Sesame.png";
import so2Icon from "../assets/allergens/Icons-So2.png";
import soyabeansIcon from "../assets/allergens/Icons-Soyabeans.png";
import treenutsIcon from "../assets/allergens/Icons-Treenuts.png";

// Create a map from allergen title to imported image
const allergenImageMap = {
    "Celery": celeryIcon,
    "Crustaceans": crustaceansIcon,
    "Egg": eggIcon,
    "Fish": fishIcon,
    "Gluten": glutenIcon,
    "Lupin": lupinIcon,
    "Milk": milkIcon,
    "Molluscs": molluscsIcon,
    "Mustard": mustardIcon,
    "Peanuts": peanutsIcon,
    "Sesame": sesameIcon,
    "So2": so2Icon,
    "Soyabeans": soyabeansIcon,
    "Treenuts": treenutsIcon
};

const Allergens = ({ modifier }) => {
    if (modifier.allergens) {
        let images = [];

        for (let i = 0; i < allergens.length; i++) {
            if (modifier.allergens.includes(allergens[i].title)) {
                images.push(allergenImageMap[allergens[i].title]);
            }
        }

        return (
            <div className="allergens-container">
                {images.map((allergenIcon, idx) => (
                    <img key={idx} src={allergenIcon} alt="allergen icon" style={{height: "7vh"}}/>
                ))}
            </div>
        );
    } else {
        return null;
    }
};

export default Allergens;