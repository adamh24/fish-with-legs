const CocktailCard = ({ image, title, style }) => (
    <div style={{ ...styles.card, ...style, backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '-webkit-fill-available' }}>
      <div style={styles.overlay}></div>
      <p style={styles.cardp}>{title}</p>
    </div>
  );

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

export default CocktailCard;