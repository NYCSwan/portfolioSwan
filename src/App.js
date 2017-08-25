import React, { Component } from 'react';
import Header from './Header.react';
import Footer from './Footer.react';
import Article from './Article.react';
import Projects from './Projects.react';
import Resume from './Resume.react';

import Clearfix from 'react-bootstrap/lib/Clearfix';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      className: 'active'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    })

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
          </Row>
          <Button
            href="#resume"
            bsStyle="success"
            bsSize="large"
            onClick={this.handleClick}>
              See My Resume
          </Button>
        </Grid>
       { this.state.isOpen ? <Resume /> : null }
        <Footer />
      </div>
    );
  }
}

export default App;
