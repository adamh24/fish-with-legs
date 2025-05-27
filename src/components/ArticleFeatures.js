
import ImageButton from "./ImageButton";

const ArticleFeatures = () => {
    return (
        <div className="article-features">
            
            <ImageButton
                imageSrc={require("../assets/citrus.jpg")}
                altText="Citrus Sustainability"
                onClick={() => console.log("Beer button clicked")}
                title="Citrus Sustainability"
            >
            </ImageButton>
            <ImageButton
                imageSrc={require("../assets/cotd.png")}
                altText="Cocktail of the Day"
                onClick={() => console.log("cocktail of the day button clicked")}
                title="Cocktail of the Day"

            />
            <ImageButton
                imageSrc={require("../assets/adam1.png")}
                altText="Adam with Cider"
                onClick={() => console.log("Next steps button clicked")}
                title="Next Steps"
            />
        </div>
    );
}

export default ArticleFeatures;