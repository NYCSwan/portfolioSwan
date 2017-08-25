import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import Image from 'react-bootstrap/lib/Image';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import './Resume.css';

class Resume extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="resume-comtainer">
        <div>
          <object
            id='resume'
            data="images/MSwanby.pdf"
            alt="Megan's Resume Javascript, Ruby on Rails, Dedicated, quick learner."
            type="application/pdf">
            <p>It appears you dont have a PDF plugin for this browser. No biggie... Get in touch for a copy!</p>
          </object>
        </div>

      <Col
        id="contact-list"
        className="list-inline list-unstyled"
        md={8}
        mdOffset={2}
        sm={12}>
          <ButtonGroup justified>
            <Button
              className='external_link'
              href="http://twitter.com/nycARTseen" bsName="btn-social btn-twitter"
              >
              <span className="fa fa-github-square"> </span>
              Twitter
            </Button>
            <Button
            className='external_link'
            href="http://github.com/nycswan" bsName="btn-social btn-github"
            >
              <span className="fa fa-github-square"> </span>
              Github
            </Button>
            <Button href="http://linkedin.com/in/megan-swanby" bsName="bbtn-social btn-linkedin"
            className='external_link'
            
            >
              <span className="fa fa-linkedin-square"></span>Linkedin
            </Button>
          </ButtonGroup>
        </Col>
      </div>
    )
  }
}

export default Resume;
