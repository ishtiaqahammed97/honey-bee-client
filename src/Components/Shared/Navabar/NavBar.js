import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../images/logo.jpg'
import { Nav, Navbar } from 'react-bootstrap';
import { useState, useEffect } from 'react';


const NavBar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isCollapsed, setCollapsed] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () =>{
      if(window.scrollY > 50) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    })
  }, [])
  return (
    <Navbar className="mb-3"
    collapseOnSelect
    expand="lg"
    variant="light"
    fixed="top"
    className={(isSticky || isCollapsed) ? "shadow-sm bg-white py-2" : "py-4"}>
      <Navbar.Brand>

      </Navbar.Brand>

      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="mr-md-5">Home</Nav.Link>
          <Nav.Link href="#services" className="mr-md-5">
            Services
          </Nav.Link>
          <Nav.Link href="#reviews" className="mr-md-5">
            Reviews
          </Nav.Link>
          <Nav.Link href="#contact" className="mr-md-5">
            Contact
          </Nav.Link>
          <Nav.Link href="login" className="mr-md-5">
            Login
          </Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;