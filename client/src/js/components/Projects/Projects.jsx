import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

class Projects extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div>Ryan is awesome!</div>
        <a style={{ color: 'white' }} href="/"><FontAwesomeIcon icon={ faGhost } size={"3x"} style={{color: 'white'}}  /></a>
      </div>
    );
  }
}

export default Projects;
