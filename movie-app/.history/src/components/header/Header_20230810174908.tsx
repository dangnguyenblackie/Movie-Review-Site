import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Morty from "../morty/Morty";
import "./Header.css"

const Header = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" style={{maxHeight:'98px'}}>
      <Container fluid>
        <Navbar.Brand href="/">
          <Morty/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{maxHeight: '98px', "fontSize":"20px"}} navbarScroll>
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/watchlist">Watch List</NavLink>
              <NavLink className="nav-link" to="/blog">Blog</NavLink>
              <NavLink className="nav-link" to="/about">About Us</NavLink>

            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header