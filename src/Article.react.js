import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';
import Clearfix from 'react-bootstrap/lib/Clearfix';

import './Article.css';

class Article extends Component {
  render() {
    return (
      <div>
        <Grid className="about" bsStyle="container-fluid">
          <Row>
            <Col className="me" sm={6} md={12}>
              <h1>Hi. I'm Megan</h1>
              
              <Image src="images/me.jpg" alt="megan swanby link to email" className="myPhoto" thumbnail responsive />
            </Col>
          <Clearfix></Clearfix>
          </Row>
        </Grid>
        <Clearfix></Clearfix>
      </div>
    )
  }
}

export default Article;
