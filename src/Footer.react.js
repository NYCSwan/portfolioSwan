import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';

import './Footer.css'

class Footer extends React.Component {

  render() {
    return (
      <Grid>
        <hr />
        <footer>
            <p>© Life of a Swan 2017</p>
            <a
              href="http://twitter.com/nycARTseen">
              <img
                className='footer_img'
                src="images/twitter_foot.png"
                alt="Megans twitter link" />
            </a>
            <a
              href="http://github.com/nycswan">
              <img
                className='footer_img'
                src="images/Octocat.jpg"
                alt="Megans Github link" />
            </a>
            <a
              href="http://linkedin.com/in/megan-swanby">
              <img
                className='footer_img'
                src="images/In-2C-14px.png"
                alt="Megans Linkedin link" />
            </a>
        </footer>
      </Grid>
    )
  }
}

export default Footer;
