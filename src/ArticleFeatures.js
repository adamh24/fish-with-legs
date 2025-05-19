
import ImageButton from "./ImageButton";

const ArticleFeatures = () => {
    return (
        <div className="article-features" style={{width: "100%", height: "80vh", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "5vh"}}>
            
            <ImageButton
                imageSrc={require("./assets/beer.png")}
                altText="Beer with logo"
                onClick={() => console.log("Beer button clicked")}
            >
            </ImageButton>
            <ImageButton
                imageSrc={require("./assets/beer.png")}
                altText="Beer with logo"
                onClick={() => console.log("Beer button clicked")}
            />
            <ImageButton
                imageSrc={require("./assets/beer.png")}
                altText="Beer with logo"
                onClick={() => console.log("Beer button clicked")}
            />
        </div>
    );
}

export default ArticleFeatures;