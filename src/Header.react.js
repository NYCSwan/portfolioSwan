import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import Image from 'react-bootstrap/lib/Image';
import NavItem from 'react-bootstrap/lib/NavItem'
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import './Header.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header className="container-fluid">
          <Navbar staticTop >
            <Nav className="container" activeKey="1" bsStyle="tabs">
              <Image id="logo" src="images/MSlogo.png" alt="tree" rounded hidden />
              <NavItem  eventKey='1' className="navbar-link" href="#about">About Me</NavItem>
              <NavItem  eventKey='2' className="navbar-link" href="#projects">Portfolio</NavItem>
              <NavItem  eventKey='3' className="navbar-link" href="#contact">Contact</NavItem>
            </Nav>
          </Navbar>
        </header>
        <h1 className="navbar-brand header-text">Life of a Swan</h1>
        <Col md={12} className="container">
          <Row>
            <span md={4} className="fa fa-5x fa-angle-double-down chevron" aria-hidden="true"></span>
          </Row>
        </Col>
      </div>
  );
  }
}

export default Header;
