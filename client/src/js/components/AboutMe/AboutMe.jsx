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
        <div style={{ height: '80%', width: '100%', display: 'flex', alignItems: 'center' }}>
          <div style={{height: '54%', width: '17%'}}>
          <img src={ headShot } className='' style={{height: '100%', width: '100%'}} alt="" />
          </div>
        </div>
        <div style={{ height: '5.50%', width: '100%', display: 'flex', alignItems: 'center' }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default AboutMe;
