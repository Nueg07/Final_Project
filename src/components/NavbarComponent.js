// NavbarComponent.js
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar data-bs-theme="light" className='py-2 fs-5'>
      <Container>
        <Navbar.Brand href="/" className='fs-3 fw-bold'>Kow<span style={{color : "#3A8B91"}} className=''>Deen</span></Navbar.Brand>
        <Nav className="ms-auto text-center d-flex justify-content-center align-items-center">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Company">Company</Nav.Link>
          <Nav.Link href="/Jobs-Application">Jobs-Application</Nav.Link>
          <Nav.Link href="/Jobs">Jobs</Nav.Link>
        </Nav>     
      </Container>
      <Container className='d-flex justify-content-end'>
        <Nav className='gap-4 fs-6'>
          <Nav.Link href="/register"><span style={{color : "#3A8B91"}}>Sign Up</span></Nav.Link>
          <Nav.Link href="/login"><button type="button" className="btn btn-transparent border-2 px-5 rounded" style={{ borderColor: "#3A8B91", color : "#3A8B91" }}>LOGIN</button></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
