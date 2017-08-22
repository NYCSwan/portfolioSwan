import React, { Component } from 'react';
import Header from './Header.react';
import Footer from './Footer.react';
import Article from './Article.react';
import Projects from './Projects.react';
import Resume from './Resume.react';

import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import Panel from 'react-bootstrap/lib/Panel';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      className: 'active'
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleEmailContact = this.handleEmailContact.bind(this);

  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    })

  }

  handleEmailContact(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Jumbotron>
          <Article />
        </Jumbotron>

{/* Projects */}
        <Projects />
        <Clearfix></Clearfix>
{/* Contact Me */}
      <Grid id="contact" md={12}>
        <Row>
          <h2 className="contact-header">Connect</h2>
            <Col className="top-pad" md={12}>
                <h3>Without curiousity and wonder, where would we be?</h3>
                <h2>Get in Touch!</h2>
            </Col>
            {/*// <Button
            //   bsStyle="success"
            //   bsSize="large"
            //   onClick={this.handleEmailContact}>
            //     Get in Touch!
            // </Button> */}
        </Row>
      </Grid>
      <Resume
        onClick={this.handleClick}
      />
      <Footer />
   </div>
    );
  }
}

export default App;
