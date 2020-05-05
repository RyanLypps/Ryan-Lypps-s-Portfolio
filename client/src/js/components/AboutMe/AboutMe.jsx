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
      <div style={{ height: '100%', width: '100%' }}>
        <Header />
        <div style={{ height: '85%', width: '100%', display: 'inline-flex' }}>
          <div style={{ width: '100%', marginLeft: '5%', height: '100%', display: 'flex', alignItems: 'center'}}>
          <img src={ headShot } className='' style={{width: '100%'}} alt="" />
          </div>
          <div style={{ display: 'flex',flexDirection: 'column', justifyContent: 'start'}}>
          <h1 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>Experience</h1>
          <p style={{color: 'white', fontSize: '2vmin', marginLeft: '10%', marginRight: '10%'}}>
            I'm a Full Stack Developer, who lives in San Diego, working on passion projects at the moment. 
            I upload any work I do onto GitHub so feel free to check it out. My programming journey began 
            in December 2019. I enrolled into San Diego Code School and fell in love with coding. I code
            everyday and desire to be the best I can be in this field. I'm reliable, punctual, diligent, and
            hard-working. I wish to be given the chance to provide high quality work for all. While I'm not programming
            I love to run, watch shows like The Office or Psych, and socalize with my friends. Thank you for taking the time
            to read this and learning a little bit more about me!
            </p>
            <h1 style={{color: 'white', display: 'flex', justifyContent: 'center' }}> Values</h1>
          <p style={{color: 'white', fontSize: '2vmin', marginLeft: '10%', marginRight: '10%'}}>
            I'm a Full Stack Developer, who lives in San Diego, working on passion projects at the moment. 
            I upload any work I do onto GitHub so feel free to check it out. My programming journey began 
            in December 2019. I enrolled into San Diego Code School and fell in love with coding. I code
            everyday and desire to be the best I can be in this field. I'm reliable, punctual, diligent, and
            hard-working. I wish to be given the chance to provide high quality work for all. While I'm not programming
            I love to run, watch shows like The Office or Psych, and socalize with my friends. Thank you for taking the time
            to read this and learning a little bit more about me!
            </p>
            <h1 style={{color: 'white', display: 'flex', justifyContent: 'center' }}> Interests</h1>
          <p style={{color: 'white', fontSize: '2vmin', marginLeft: '10%', marginRight: '10%'}}>
            I'm a Full Stack Developer, who lives in San Diego, working on passion projects at the moment. 
            I upload any work I do onto GitHub so feel free to check it out. My programming journey began 
            in December 2019. I enrolled into San Diego Code School and fell in love with coding. I code
            everyday and desire to be the best I can be in this field. I'm reliable, punctual, diligent, and
            hard-working. I wish to be given the chance to provide high quality work for all. While I'm not programming
            I love to run, watch shows like The Office or Psych, and socalize with my friends. Thank you for taking the time
            to read this and learning a little bit more about me!
            </p>
          </div>
        </div>
        <div style={{ height: '0%', width: '100%', display: 'flex', alignItems: 'center', marginTop: '-.5%' }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default AboutMe;
