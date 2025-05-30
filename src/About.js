import './styles/About.css';

const About = () => {
    return (
        <div className="page-container">

            <div className="title-box">
                <span className="about-title">The Man Behind the Bar</span>
            </div>

            <div className="info-block">
                <div className="info-text">
                    <span>
                        Hello! I'm a passionate bartender with a love for mixology and creating unique cocktails. I believe that every drink tells a story, and I'm here to help you discover your next favorite.
                    </span>
                    <span>
                        With years of experience behind the bar, I've honed my skills in crafting both classic and innovative cocktails. Whether you're looking for a refreshing summer drink or a cozy winter warmer, I've got you covered.
                    </span>
                    <span>
                        Join me on this journey of flavors and creativity, and let's raise a glass to good times and great company!
                    </span>
                    <div className="adam-photo"
                            style={{
                            backgroundImage: `url(${require(`./assets/adam1.png`)})`
                            }}></div>
                </div>
            </div>
        </div>
    );
}
export default About;