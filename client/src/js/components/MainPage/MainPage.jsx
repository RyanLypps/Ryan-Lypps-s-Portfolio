import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
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
      <div style={{ height: '100%' }}>
        <div className='ryan header1' style={{ height: '6%', backgroundColor: 'whitesmoke', opacity: .98, position: 'relative', textAlign: 'center' }}>
          <div style={{ position: 'absolute' }}>
            <form action="/about-me" style={{ display: 'inline-block' }} >
              <input className='hire'style={{border: 'none'}} type="submit" value="About me" />
            </form>
            <form action="/Projects" style={{ display: 'inline-block' }}>
              <input className='hire' style={{ border: 'none'}} type="submit" value="Projects" />
            </form>
          </div>
          Ryan Lypps
        </div>
        <div className='container' style={{ height: '86%' }}>
          <Header />
          <Footer />>
        </div>
      </div>
    );
  }
}

function mapStoreToProps(store) {
  return {

  }
}

export default connect(mapStoreToProps)(MainPage);
