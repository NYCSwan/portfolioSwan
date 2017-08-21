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
      open: false
    }
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
          <h3 className="contact-header">connect</h3>
            <Col className="top-pad" md={12}>
                <h3>Without curiousity and wonder, where would we be?</h3>
            </Col>
            <Button
              bsStyle="success"
              bsSize="small"
              onClick={this.handleEmailContact}>
                Contact Me
            </Button>

            {/* <Button
            //   href="https://www.canva.com/design/DACeyVjfbeo/view?utm_content=DACeyVjfbeo&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
            //   bsStyle="success"
            //   bsSize="large" block>
            //     See My Resume
            // </Button>
            //
            // <Col id="contact-list" className="hide list-inline list-unstyled">
            //     <Row>
            //         <a href="http://twitter.com/nycARTseen" className="btn btn-block btn-social btn-twitter">
            //             <span className="fa fa-twitter"></span>
            //             Twitter
            //         </a>
            //
            //         <a href="http://github.com/nycswan" className="btn btn-block btn-social btn-github">
            //             <span className="fa fa-github"> </span>
            //             Github
            //         </a>
            //
            //         <a href="http://linkedin.com/in/megan-swanby" className="btn btn-block btn-social btn-linkedin">
            //             <span className="fa fa-linkedin"></span>Linkedin
            //         </a>
            //     </Row>
            // </Col> */}
        </Row>
      </Grid>
      <Resume />
      <Footer />
   </div>
    );
  }
}

export default App;
