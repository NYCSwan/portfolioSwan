import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import Image from 'react-bootstrap/lib/Image';
import NavItem from 'react-bootstrap/lib/NavItem'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header container-fluid" bsClass="col-md-12">
        <Navbar staticTop >
          <Nav className="container" activeKey="1" bsStyle="tabs">
            <Image id="logo" src="images/MSlogo.png" alt="tree" rounded hidden />
            <h1  className="navbar-brand header-text" href="#about">Life of a Swan</h1>
            <NavItem  eventKey='1' className="navbar-link" href="#about">About Me</NavItem>
            <NavItem  eventKey='2' className="navbar-link" href="#projects">Portfolio</NavItem>
            <NavItem  eventKey='3' className="navbar-link" href="#contact">Contact</NavItem>
          </Nav>
        </Navbar>
        <span className="fa fa-list-alt fa-fw"></span>
      </header>

  );
  }
}

export default Header;
