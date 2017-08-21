import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import Panel from 'react-bootstrap/lib/Panel';
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';
import CarouselCaption from 'react-bootstrap/lib/CarouselCaption';

class Projects extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      index: 0,
      direction: null
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedIndex, e) {
    console.log('selected=' + selectedIndex + ', direction=' + e.direction);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
    // popUpModal()
  }

  // popUpModal() {
  //
  // }
  render() {
    return (
      <div className="container-fluid">
        <h2>Projects</h2>
        <Carousel id="projects" className="col-md-8 col-md-offset-2 col-sm-12" activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
          <CarouselItem className="center-block" >
            <Image className="img-responsive center-block" width={900} height={1000} src="images/seatgeek.png" alt="SeatGeek project" />
            <CarouselCaption>
              <h2>COMMUNITY ADVOCATE</h2>
              <h3>SeatGeek for All: SeatGeek Hackathon</h3>
              <p>With more than a year of coding experience I take a systematic approach to coding. I love a good challenge and welcome the opportunity to talk more about my work.</p>
            </CarouselCaption>
          </CarouselItem>

          <CarouselItem className="center-block" >
            <Image className="img-responsive center-block" width={900} height={1000} src="images/office-setup.jpg" alt="taste of home project" />
            <CarouselCaption>
            <h2>TECHNOLOGIST</h2>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </CarouselCaption>
          </CarouselItem>

          <CarouselItem className="center-block" >
            <Image className="img-responsive center-block" width={900} height={1000} alt="what's app clone" src="images/computer-fruit.jpg" />
            <CarouselCaption>
              <h3>PROGRAMMER</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </CarouselCaption>
          </CarouselItem>
          <Clearfix></Clearfix>

        </Carousel>
      </div>
    )
  }
}

export default Projects;

{/*  <Grid id="projects" bsStyle="container-fluid">
    <Row>
      <h2>projects</h2>
        <Col className="projects-images" md={5} mdOffset={1}>
          <Image src="images/seatgeek.png" alt="SeatGeek project" rounded responsive />
          <Panel collapsible expanded={this.state.open} className="caption" >
                SeatGeek for All: SeatGeek Hackathon
          </Panel>
          <Button src="http://www.github.com/nycswan/seatgeekHackathon">
            Repo
          </Button>
            <span> </span>
        </Col>

      <Col className="projects-images" md={5} mdOffset={1}>
        <Image src="images/office-setup.jpg" alt="taste of home project" rounded responsive />
        <div className="caption">
            <a href="http://www.github.com/nycswan/tasteofhome">
                <p>Taste of Home</p>
            </a>
            <span> </span>
        </div>
      </Col>
      <Button
        href="https://resume.creddle.io/resume/h0ywn3degjs"
        bsStyle="success"
        bsSize="large" block>
          See My Resume
      </Button>
    </Row>
  </Grid>
*/}
