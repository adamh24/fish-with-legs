import Feature from "./Feature";
import './Feature.css';
const HomeFeature = () => {
    return (
        <div className="feature-container">
            <img src={require("./assets/beer.png")} alt="Beer with logo" className="feature-image" />
            <Feature/>
        </div>
    );
}
export default HomeFeature;