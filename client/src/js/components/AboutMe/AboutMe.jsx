import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

class AboutMe extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div>Ryan is awesome!</div>
        {/* <a href="/"><img src="https://via.placeholder.com/150" /></a> */}
        {/* <button style={{border: 'none', background: 'none', fontSize: 50, fontFamily: 'Times New Roman', letterSpacing: 4 }}>RL</button> */}
        <a style={{ color: 'black' }} href="/"><FontAwesomeIcon icon={ faGhost } size={"3x"} /></a>
      </div>
    );
  }
}

export default AboutMe;
