import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import images from '../../../assets/*.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    }
  }

  // Project name, Description of what it does, What it is built with, photo of it, link to hosted if it is.

  componentDidMount() {
    fetch('/api/Projects')
      .then(res => res.json())
      .then(allProjects => this.setState({ projects: allProjects }));
  }

  render() {
    let keyCounter = 0;
    console.log(this.state.projects);
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <Header />
        <div style={{ height: '85%', width: '100%', display: 'inline-flex' }}>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', height: '100%', width: '100%', alignItems: 'center' }}>
            {this.state.projects.map(project => {
              keyCounter++;

              return (
                <div style={{ width: '25%', height: '50%' }} key={keyCounter}>
                  <div className='each-game-box'>
                    <h3 className='each-game-title' style={{ color: 'white' }} >{project.name}</h3>
                    <img className='each-game' src={Object.values(images).filter(value => value.includes(project.photo))[0]} />
                  </div>
                  <div style={{ width: '90%', textAlign: 'center', marginLeft: '6%', height: '50%' }}>
                    <p style={{ color: 'white' }}>{project.description}</p>
                    <p style={{ color: 'white' }}>{project.builtWith}</p>
                  </div>
                </div>
              )
            })}
            <p style={{ color: 'white', textAlign: 'center', fontSize: '2vmin', fontWeight: 'bold' }}>More projects to come!</p>
          </div>
        </div>
        <div style={{ height: '0%', width: '100%', display: 'flex', alignItems: 'center', marginTop: '-.5%'}}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Projects;
