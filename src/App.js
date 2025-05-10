import React from "react";
import { color } from "three/tsl";

const cocktailImages = [
  require("./assets/cocktail1.png"),
  require("./assets/cocktail2.png"),
  require("./assets/cocktail3.png"),
  require("./assets/cocktail4.png"),
  require("./assets/cocktail5.png"),
  // require("./assets/cocktail6.png")
];

const headings = [
  "Refreshing Mojito", "Botanical Burst", "Classic Elegance",
  "Long Floral Twist", "Green Zest", "Berry Bliss"
];

const CocktailCard = ({ image, title, style }) => (
  <div style={{ ...styles.card, ...style, backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div style={styles.overlay}></div>
    <p style={styles.cardp}>{title}</p>
  </div>
);

const App = () => {
  const cardHeight = '50vh';

  return (

    <div style={styles.container}>
      <div style={styles.navbar}>
        <p style={styles.navTitle}>Handle</p>
        <div style={styles.navItems}>
          {['Home', 'Cocktails', 'Modifiers', 'Recipes', 'Sustainability', 'Ingredients', 'Trends', 'History'].map(item => (
            <p style={styles.navp} key={item}>{item}</p>
          ))}
        </div>
      </div>

      <div style={styles.gridContainer}>
        <CocktailCard image={cocktailImages[0]} title={headings[0]} style={{ height: cardHeight, width: '100%' }} />

        <div style={styles.row}>
          <CocktailCard image={cocktailImages[1]} title={headings[3]} style={{ width: '48%', height: cardHeight * 1.2 }} />
          <CocktailCard image={cocktailImages[2]} title={headings[4]} style={{ width: '48%', height: cardHeight * 1.2 }} />
        </div>

        <div style={styles.row}>
          <CocktailCard image={cocktailImages[3]} title={headings[1]} style={{ width: '48%', height: cardHeight }} />
          <CocktailCard image={cocktailImages[4]} title={headings[2]} style={{ width: '48%', height: cardHeight }} />
        </div>

        <CocktailCard image={cocktailImages[5]} title={headings[5]} style={{ height: cardHeight, width: '100%' }} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#203F2A'
  },
  navbar: {
    backgroundColor: '#5A3E2B',
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  navTitle: {
    fontSize: 48,
    color: '#F8F6F2',
    fontWeight: 'bold',
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

  },
  navp: {
    color: '#F8F6F2',
    marginRight: 15,
    fontSize: 24,
    width: 'min-content',
    fontFamily: 'Lora',

  },
  gridContainer: {
    padding: 10,
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontWeight: 'bold',
    padding: 10,
    zIndex: 1,
  },
};

export default App;
