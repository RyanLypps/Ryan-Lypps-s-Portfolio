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
        <div style={{ height: '5%', backgroundColor: 'whitesmoke', opacity: .98 }}></div>
        <div className='container' style={{ height: '86%'}}>
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
