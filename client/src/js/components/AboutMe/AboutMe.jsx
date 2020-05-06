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
          <img src={ headShot } className='about-me-img' style={{width: '100%'}} alt="" />
          </div>
          <div className='about-me-p-container' style={{ display: 'flex',flexDirection: 'column', justifyContent: 'start'}}>
          <h2 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>Experience</h2>
          <p style={{color: 'white', fontSize: '2.20vmin', marginLeft: '10%', marginRight: '10%', fontFamily: 'Times New Roman', textIndent: '5%'}}>
              I'm a Full Stack Developer, who lives in San Diego, working on passion projects at the moment. 
            I upload any work I do onto GitHub so feel free to check it out. My programming journey began 
            in December 2019. I enrolled into San Diego Code School and fell in love with coding. I code
            everyday and desire to be the best I can be in this field. I wish to be given the chance to provide high quality work for all. 
            I will be deploying more passion projects as time goes on to showcase my knowledge and adeptness at coding.
            </p>
            <h2 style={{color: 'white', display: 'flex', justifyContent: 'center' }}> Values</h2>
          <p style={{color: 'white', fontSize: '2.20vmin', marginLeft: '10%', marginRight: '10%', fontFamily: 'Times New Roman', textIndent: '5%'}}>
              Providing high quality reusable code on a reliable basis is one of the most imperative qualities a
            developer can have. That all falls back on being punctual, diligent, and having a sublime work ethic.
            I have those qualites and exhibit them in my everyday behavior- like uploading to GitHub on the daily.
            If that is the kind of worker you're looking for then look no further, I'm here! A programmer must always
            be learning on top of all of that to constantly bring the best quality of work at these quick changing
            times.
            </p>
            <h2 style={{color: 'white', display: 'flex', justifyContent: 'center' }}> Interests</h2>
          <p style={{color: 'white', fontSize: '2.20vmin', marginLeft: '10%', marginRight: '10%', fontFamily: 'Times New Roman', textIndent: '5%'}}>
              While I'm away from the computer, which isn't too often, I'm with my family or friends socalizing.
            The relationships in one's life is important to a programmer- keeps us human! I also enjoy running to 
            get some sun and keep in shape. A healthy body is a healthy mind. The Office and Psych are two of my favorite shows
            to watch when I'm stuck on an issue and need to step away to come back with a clear mind. One of my favorite things
            to do is to mob program and attain others insights. I wouldn't be where I'm at today without the healthy solid 
            relationships in my life. 
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
