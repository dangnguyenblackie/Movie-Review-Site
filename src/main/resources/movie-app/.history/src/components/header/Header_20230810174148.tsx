import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Morty from "../morty/Morty";
import "./Header.css"

const Header = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" style={{maxHeight:'100px'}}>
      <Container fluid>
        <Navbar.Brand href="/" style={{maxHeight:"120px", maxWidth:"120px"}}>
          <Morty/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{maxHeight: '100px', "fontSize":"20px"}} navbarScroll>
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/watchlist">Watch List</NavLink>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header