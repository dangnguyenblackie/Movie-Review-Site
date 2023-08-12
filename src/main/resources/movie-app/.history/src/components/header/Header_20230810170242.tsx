import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{"color": "gold"}}>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header