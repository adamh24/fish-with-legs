import './Modifiers.css';
import modifierdata from './data/modifiers.json';
const Modifiers = () => {



    return (
        <div>
            <div className="title-container">
                <span className="subtitle">Modifiers</span>
            </div>

            <div className="modifiers-deck">
                {modifierdata.map((modifier) => (
                    <div className="modifier-card">
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