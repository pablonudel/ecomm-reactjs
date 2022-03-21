import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/esm/Navbar'
import Container from 'react-bootstrap/esm/Container'
import Nav from 'react-bootstrap/esm/Nav'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='shadow-lg'>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>Electric Wheels</Navbar.Brand>
                </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to='/category/Monopatines'>
                        <Nav.Link>Monopatines</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/category/Bicicletas'>
                        <Nav.Link>Bicicletas</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/category/Accesorios'>
                        <Nav.Link>Accesorios</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav>
                    <Link to='/cart'>
                        <CartWidget/>
                    </Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar