const Spotlight = () => {
    return (
        <div className="page-container">
        <h1 className="page-title">Spotlight</h1>
        <p>Welcome to the spotlight page!</p>
        <img src={require("./assets/seaweed.png")} alt="seaweed" style={{ position: 'absolute', bottom: '0px', left: '-100px', height: 'auto', zIndex: 0 }} />
        <img src={require("./assets/seaweed.png")} alt="seaweed" style={{ position: 'absolute', bottom: '0px', right: '-100px', height: '80vh', zIndex: 0 }} />
        </div>
    );
}
export default Spotlight;