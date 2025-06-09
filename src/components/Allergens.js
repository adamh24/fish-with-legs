import modifiers from '../data/modifiers.json';
import "../styles/Allergens.css";

const Allergens = ({modifier}) => {

    
    return (
        <div className="allergens-container">
            {modifier.allergens && modifier.allergens.map((allergen) => (
                        <img src={require(`../assets/allergens/Icons-${allergen}.png`)} alt={allergen} />
            ))}

        </div>
    )

}
export default Allergens;