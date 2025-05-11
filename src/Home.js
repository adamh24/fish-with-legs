import CocktailCard from "./CocktailCard";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Home = () => {

const cocktailImages = [
    require("./assets/cocktail1.png"),
    require("./assets/cocktail2.png"),
    require("./assets/cocktail3.png"),
    require("./assets/cocktail4.png"),
    require("./assets/cocktail5.png"),
    // require("./assets/cocktail6.png")
  ];

  const headings = [
    "Taste of the Avanteguard Menu", "Pistacio Burboun Fat Wash", "Classic Elegance",
    "Long Floral Twist", "History of Rum", "Berry Bliss"
  ];

    return (
         <div style={styles.masonryContainer}>
            <ResponsiveMasonry>
              <Masonry>
                  <CocktailCard image={cocktailImages[3]} title={headings[1]} style={{ width: '-webkit-fill-available', height: '60vh' }} /> {/* botanical */}
                  <CocktailCard image={cocktailImages[1]} title={headings[3]} style={{ width: '-webkit-fill-available', height: '40vh' }} /> {/* long floral */}
                  <CocktailCard image={cocktailImages[4]} title={headings[5]} style={{ height: '20vh', width: '-webkit-fill-available' }} /> {/* berry bliss */}
                  <div></div>
                  <CocktailCard image={cocktailImages[0]} title={headings[0]} style={{ width: '-webkit-fill-available', height: '30vh' }} /> {/* mojito */}
                  <CocktailCard image={cocktailImages[2]} title={headings[4]} style={{ width: '-webkit-fill-available', height: '50vh' }} /> {/* green zest */}
    
                </Masonry>
            </ResponsiveMasonry>
          </div>
    );
}


const styles = {
    container: {
      backgroundColor: '#203F2A',
      height: '100vh',
    },
    masonryContainer: {
      paddingTop: '2vh',
      paddingInline: '2vh',
      backgroundColor: '#203F2A',
  
    },
    navbar: {
      backgroundColor: '#5A3E2B',
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 15,
      position: 'relative',
      zIndex: 1,
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)', // Drop shadow
  
    },
    navTitle: {
      fontSize: 48,
      color: '#F8F6F2',
      justifySelf: 'center',
      fontFamily: 'Lora',
      color: '#F8F6F2',
  
      
    },
    navItems: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      gap: 10,
      marginTop: 10,
      color: '#F8F6F2',
      transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    navp: {
      color: '#F8F6F2',
      marginRight: 15,
      fontSize: 32,
      width: 'min-content',
      fontFamily: 'Lora',
  
    },
    gridContainer: {
      padding: 10,
      gap: 10,
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap: 10,
      marginTop: 10,
    },
    col: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      gap: 10,
      marginTop: 10,
    },
    card: {
      position: 'relative',
      justifyContent: 'flex-end',
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: 10,
      display: 'flex',
      flexDirection: 'column',
      margin: 10,
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(32, 63, 42, 0.4)',
    },
    cardp: {
      position: 'relative',
      color: '#F8F6F2',
      fontSize: 18,
      padding: 10,
      zIndex: 1,
      fontFamily: 'Lora',
      fontSize: 48,
  
    },
    dropdownButton: {
      display: "flex", // Hidden by default
      backgroundColor: "transparent",
      border: "none",
      color: "#F8F6F2",
      fontSize: 50,
      cursor: "pointer",
      marginLeft: 10,
    },
  };

  export default Home;