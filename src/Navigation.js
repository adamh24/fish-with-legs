import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar key={"-lg"} expand="lg" className="navbar mb-3" data-bs-theme="dark" bg='#203F2A' >
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

                    <Nav.Link href="#action1" as={Link} to="/" style={styles.navp}>Home</Nav.Link>

                    <Nav.Link href="#action2" style={styles.navp}>About</Nav.Link>

                    <NavDropdown
                      title={<span style={styles.navp}>Menus</span>}
                      id={`offcanvasNavbarDropdown-expand-lg`}
                      style={{color: '#F8F6F2', fontSize: 24, fontFamily: 'Lora'}}
                    >
                      <NavDropdown.Item href="#action3" as={Link} to="/dali-menu" viewTransition>Dali</NavDropdown.Item>
                      
                    </NavDropdown>

                    <NavDropdown
                      title={<span style={styles.navp}>Recipes</span>}
                      id={`offcanvasNavbarDropdown-expand-lg`}
                      style={{color: '#F8F6F2', fontSize: 24, fontFamily: 'Lora'}}
                    >
                      <NavDropdown.Item href="#action3" as={Link} to="/cocktails" viewTransition>Cocktails</NavDropdown.Item>
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
                      style={{borderRadius: '2.5rem', fontSize: 20}}
                    />
                  <Button  
                  style={{paddingRight: 10}}
                  variant="outline-light">
                      <i className="bi bi-search"></i> {/* Add the search icon */}
                    </Button>                
                  </Form>

                </Offcanvas.Body>

              </Navbar.Offcanvas>
            </Container>
          </Navbar>
    );
}


const styles = {
  container: {
    backgroundColor: '#203F2A',
    height: '100vh',
    overflow: 'hidden',
  },
  masonryContainer: {
    paddingTop: '2vh',
    paddingInline: '2vh',
    backgroundColor: '#203F2A',
  },
  navbar: {
    backgroundColor: 'rgb(0,0,0,0',
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


export default Navigation;