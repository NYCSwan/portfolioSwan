import React, { Component } from 'react';
import Header from './Header.react';
import Footer from './Footer.react';
import Article from './Article.react';
import Projects from './Projects.react';
import Resume from './Resume.react';

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

      <Resume
        onClick={this.handleClick}
      />
      <Footer />
   </div>
    );
  }
}

export default App;
