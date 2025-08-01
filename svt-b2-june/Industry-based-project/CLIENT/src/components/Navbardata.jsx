import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
const Navbardata = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const hlogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return <>
    <Navbar bg="success" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} >Eco Smart Clean City</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link as={Link} to="/">Register</Nav.Link>| <Nav.Link as={Link} to="/login">Login</Nav.Link> {''}
          {
            token && (
              <>
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/add">Add Dustbin</Nav.Link>
                <Button onClick={hlogout}>Logout</Button>
              </>
            )
          }

        </Navbar.Collapse>
      </Container>

    </Navbar>
  </>
}

export default Navbardata;