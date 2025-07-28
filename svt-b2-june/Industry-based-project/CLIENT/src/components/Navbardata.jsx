import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Navbardata = () => {

  return <>
    <Navbar bg="success" variant="dark" expand="lg">
    <Container>
        <Navbar.Brand as={Link} to="/">Eco Smart Clean City</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
         <Nav.Link as={Link} to="/add">Add Dustbin</Nav.Link>
        </Navbar.Collapse>
    </Container>

    </Navbar>
  </>
}

export default Navbardata;