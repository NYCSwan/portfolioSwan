import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import Image from 'react-bootstrap/lib/Image';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import './Resume.css';

class Resume extends Component {
  constructor(props) {
    super(props);

    this.handleResume = this.handleResume.bind(this);
  }

  handleResume(e) {
    console.log(this.props.className)
    e.preventDefault();
    let resume = document.getElementById('resume')
  }

  render() {
    let { isOpen, className } = this.props;
    return (
      <div>
      {/* Get in touch CTA*/}
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
          onClick={this.handleResume}>
            See My Resume
        </Button>
        { className == 'active' &&
        <div id='resume' className={this.props.className}>
          <embed src="images/MSwanby.pdf" alt="Megan's Resume Javascript, Ruby on Rails, Dedicated, quick learner." type="application/pdf" />
        </div>
        }
        <Col id="contact-list" className="list-inline list-unstyled" md={12} sm={12}>
            <Row>
                <Button href="http://twitter.com/nycARTseen" bsName="btn-social btn-twitter">
                  <span className="fa fa-github-square"> </span>
                  Twitter
                </Button>
                <Button href="http://github.com/nycswan" bsName="btn-social btn-github">
                  <span className="fa fa-github-square"> </span>
                  Github
                </Button>
                <Button href="http://linkedin.com/in/megan-swanby" bsName="bbtn-social btn-linkedin">
                  <span className="fa fa-linkedin-square"></span>Linkedin
                </Button>
            </Row>
        </Col>
        </Grid>
      </div>
    )
  }
}

export default Resume;
