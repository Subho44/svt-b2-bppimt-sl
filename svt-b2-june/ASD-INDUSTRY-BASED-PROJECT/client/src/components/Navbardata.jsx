import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Navbardata = () => {

  return <>
  <Navbar bg='dark' variant='dark' expand="lg">
    <Container>
        <Navbar.Brand as={Link} to='/'>Eco Smart City</Navbar.Brand>
        <Navbar.Toggle aria-controls='x'/>
        <Navbar.Collapse id='x'>
        <Nav className='me-auto'>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/add">Add Dustbin</Nav.Link>

        </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>

  </>
}

export default Navbardata