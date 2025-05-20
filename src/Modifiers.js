import { useNavigate } from 'react-router';
import './Modifiers.css';
import modifierdata from './data/cat-mods.json';

const Modifiers = () => {
    const navigate = useNavigate();

    const handleCardClick = (title) => {
        navigate(`/modifier/${title}`);

    }



    return (
        <div>
            <div className="title-container">
                <span className="subtitle">Modifiers</span>
            </div>

            <div className="modifiers-deck">
                {modifierdata.map((modifier) => (
                    <div className="modifier-card" onClick={() => handleCardClick(modifier.title)}>
                        <div 
                        className="modifier-image"
                        style={{
                            backgroundImage: `url(${require(`${modifier.image}`)})`
                        }}></div>
                        <div className="text-block">
                            <span className="modifiers-title">{modifier.title}</span>
                            <span className="modifiers-description">{modifier.description}</span>
                        </div>
                    </div>
                ))

                }

            </div>
        </div>
    );
}

export default Modifiers;