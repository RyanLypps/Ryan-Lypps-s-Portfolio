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
      <div className="container">
        <div></div>
        <Header />
        <Footer />>
      </div >
    );
  }
}

function mapStoreToProps(store) {
  return {

  }
}

export default connect(mapStoreToProps)(MainPage);
