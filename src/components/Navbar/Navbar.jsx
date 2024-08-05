import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponets = () => {
  const total = 25000;
  const token = false;

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#">Pizzería Mamma Mía</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">🍕 Home</Nav.Link>
          {/* Variable si existe el token */}
          {
            token ? 
            <>
               <Nav.Link href="#action1">🔓 Profile</Nav.Link>
               <Nav.Link href="#action2">🔒 Logout</Nav.Link>
            </>
            :
            <>
            <Nav.Link href="#action1">🔐 Login</Nav.Link>
            <Nav.Link href="#action2">🔐 Register</Nav.Link>
         </>
          }
        </Nav>
        {/* Variable total de compras */}
        <Button variant="outline-dark" size="sm">🛒 Total: ${total.toLocaleString()}</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarComponets