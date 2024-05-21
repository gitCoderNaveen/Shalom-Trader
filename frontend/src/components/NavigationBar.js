import React from 'react'
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function NavigationBar() {
  return (
    <div className='homeNaveBar'>
      <Navbar expand="lg" className="navBarLogoDiv">
      <Container className='navBarContainer'>
        <Navbar.Brand className='navBarLogo' href="#">Shalom Traders</Navbar.Brand>
      </Container>
    </Navbar>
      <Nav className='lg navBarDiv' justify variant="tabs">      
        <NavLink className='navLink' to='/'>Home</NavLink>
        <NavLink className='navLink' to='/about'>About</NavLink>
        <NavLink className='navLink' to='/services'>Services</NavLink>
        <NavLink className='navLink' to='/contact'>Contact us</NavLink>
      </Nav>
    </div>
  )
}
