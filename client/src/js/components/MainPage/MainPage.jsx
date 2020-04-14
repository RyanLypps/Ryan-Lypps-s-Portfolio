import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

class MainPage extends Component {
  constructor() {
    super();

    this.keyframes = this.keyframes.bind(this);
  }


  keyframes() {
    console.log('lol');
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          {/* <a style={{ color: 'black' }} href="/about-me"><FontAwesomeIcon icon={faGhost} size={"3x"} /></a> */}
          {/* <div className='pulse'>Ciera</div> */}
          <Header />
        </div>
        <br></br>
        <br></br>
        <div className='row justify-content-center'>
          <div className="col">
            <div style={{ marginTop: '15em', textAlign: 'center', marginRight: 90 }}>
              <form action="/about-me" style={{ display: 'inline-block' }} >
                <input className='hire' type="submit" value="About me" />
              </form>
              <form action="/" style={{ display: 'inline-block', marginRight: 30, marginLeft: 30 }}>
                <input className='hire pulse' type="submit" value="R L" style={{ fontStyle: 'italic', fontWeight: 'bolder', borderStyle: 'double' }} />
              </form>
              <form action="/projects" style={{ display: 'inline-block' }}>
                <input className='hire' type="submit" value="Projects" />
              </form>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

function mapStoreToProps(store) {
  return {

  }
}

export default connect(mapStoreToProps)(MainPage);
