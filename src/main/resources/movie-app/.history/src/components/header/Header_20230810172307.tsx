import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Morty from "../morty/Morty";

const Header = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" style={{maxHeight:'100px'}}>
      <Container fluid>
        <Navbar.Brand href="/" style={{"color": "gold"}}>
          <Morty/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{maxHeight: '100px'}} navbarScroll>
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/watchlist">Watch List</NavLink>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header