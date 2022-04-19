import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/esm/Navbar";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="light" className="shadow p-4">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <LinkContainer to="/">
            <Navbar.Brand>ELECTRIC WHEELS</Navbar.Brand>
          </LinkContainer>
          <div className="order-lg-last">
            <Link to="/cart">
              <CartWidget />
            </Link>
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mt-3 mt-lg-0 text-center text-lg-left">
              <LinkContainer to="/category/Monopatines">
                <Nav.Link active={false}>MONOPATINES</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/category/Bicicletas">
                <Nav.Link active={false}>BICICLETAS</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/category/Accesorios">
                <Nav.Link active={false}>ACCESORIOS</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;