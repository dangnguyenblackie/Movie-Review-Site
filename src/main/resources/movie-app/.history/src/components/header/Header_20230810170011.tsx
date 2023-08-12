import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Navbar } from "react-bootstrap";
import {faVideoSlash} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{"color": "gold"}}>
          <FontAwesomeIcon icon={faVideoSlash}/>Gold
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header