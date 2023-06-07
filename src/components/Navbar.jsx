
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const token=localStorage.getItem('userToken')
  const navigate=useNavigate()
  return (
    <nav>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={()=>navigate('/')}>Essence</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={()=>navigate('/admin')}>AdminPanel</Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href='https://bootstrap-project-blue.vercel.app/' target='blank'>Essence Food</Nav.Link>
            </Nav>
            <Nav>
              {
                token ? 
              
                <button type="button" onClick={()=>{
                  localStorage.removeItem("userToken")
                  navigate('/login')
                }} className="btn btn-primary">Logout</button>
             :
            <Link to={'/login'}>
              <button type="button" className="btn btn-primary">Login</button>
            </Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default NavBar;
