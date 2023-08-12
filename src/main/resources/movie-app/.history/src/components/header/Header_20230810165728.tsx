import { Container, Navbar } from "react-bootstrap"

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{"color": "gold"}}>
          
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header