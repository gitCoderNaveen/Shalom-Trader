import React from 'react'
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { useAuth } from './Auth';


export default function NavigationBar() {
  const auth = useAuth()
  return (
    <div className='homeNaveBar'>
      <div className='logoDiv'>
        <Image src={logo} alt='LogoImage' />
      </div>
      <div className='navBarDiv'>
        <Nav id='basic-navbar-nav' className="justify-content-center navItems" activeKey="/home">
          <Nav.Item >
            <NavLink className='navLink' to='/'>Home</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className='navLink' to='/about'>About</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className='navLink' to='/services'>Services</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className='navLink' to='/contact'>Contact</NavLink>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  )
}
