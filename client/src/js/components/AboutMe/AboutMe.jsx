import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import headShot from '../../../assets/ryan-lypps-head-shot.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

class AboutMe extends Component {
  constructor() {
    super();
  }

  // <a style={{ color: 'white' }} href="/"><FontAwesomeIcon icon={ faGhost } size={"3x"} /></a>

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Header />
        <div style={{ height: '80%', width: '100%', display: 'inline-flex', alignItems: 'center' }}>
          <div style={{ width: '20%', marginLeft: '5%'}}>
          <img src={ headShot } className='' style={{height: '100%', width: '100%'}} alt="" />
          </div>
          <p style={{color: 'white'}}>Hello, This is a long sentence to test out how it looks like in there. Trying to type so much it makes me ill. Gold for everyone haha.</p>
        </div>
        <div style={{ height: '5.50%', width: '100%', display: 'flex', alignItems: 'center' }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default AboutMe;
