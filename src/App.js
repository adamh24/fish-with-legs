import React, { useState, useEffect } from "react";
import { color } from "three/tsl";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
// https://www.npmjs.com/package/react-responsive-masonry
import 'bootstrap/dist/css/bootstrap.min.css';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

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



console.log("screen height:" + window.innerHeight);

const App = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [selectedNavItem, setSelectedNavItem] = useState("Home"); // Default selected item

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item); // Update the selected item
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);

    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (

    <div style={styles.container}>

      <div style={styles.navbar}>
        <p style={styles.navTitle}>Handle</p>
        
        <Navbar key={"-lg"} expand="lg" className="mb-3" bg='#203F2A' style={styles.navbar} >
          <Container fluid>
            {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              // variant="outline-light"
            >

              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                  <Nav.Link href="#action1" style={styles.navp}>Home</Nav.Link>

                  <Nav.Link href="#action2" style={styles.navp}>About</Nav.Link>

                  <NavDropdown
                    title={<span style={styles.navp}>Recipes</span>}
                    id={`offcanvasNavbarDropdown-expand-lg`}
                    style={{color: '#F8F6F2', fontSize: 24, fontFamily: 'Lora'}}
                  >
                    <NavDropdown.Item href="#action3">Cocktails</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Modifiers</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Ingredients</NavDropdown.Item>
                    
                  </NavDropdown>

                  <NavDropdown
                    title={<span style={styles.navp}>More</span>}
                    id={`offcanvasNavbarDropdown-expand-lg`}
                    style={{color: '#F8F6F2', fontSize: 24, fontFamily: 'Lora'}}
                  >
                    
                    <NavDropdown.Item href="#action3">History</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Sustainability</NavDropdown.Item>

                    <NavDropdown.Divider />

                    <NavDropdown.Item href="#action5">
                      Contact
                    </NavDropdown.Item>
                  </NavDropdown>

                </Nav>

                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-light">Search</Button>
                </Form>

              </Offcanvas.Body>

            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        
      </div>











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
      
    </div>
  );
};

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
    paddingBottom: 10,
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
    fontSize: 24,
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

export default App;
