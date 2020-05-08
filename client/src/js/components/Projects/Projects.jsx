import React, { Component } from 'react';
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

  componentDidMount() {
    fetch('/api/Projects')
      .then(res => res.json())
      .then(allProjects => this.setState({ projects: allProjects }));
  }

  render() {
    let keyCounter = 0;
    console.log(this.state.projects);
    return (
      <div className='project-container'>
        <Header />
        <div className='project-sub-container'>
          <div className='project-sub-sub-container'>
            {this.state.projects.map(project => {
              keyCounter++;

              return (
                <div className='project-component-container' key={keyCounter}>
                  <div className='each-project-box'>
                    <h3 className='each-project-title'>{project.name}</h3>
                    <img className='each-project' src={Object.values(images).filter(value => value.includes(project.photo))[0]} />
                  </div>
                  <div className='project-p-container'>
                    <p className='project-each-p-container'>{project.description}</p>
                    <p className='project-each-p-container'>{project.builtWith}</p>
                  </div>
                </div>
              )
            })}
            <p className='projects-coming-soon'>More projects to come!</p>
          </div>
        </div>
        <div className='project-footer-container'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Projects;
