import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import Footer from '../Footer/Footer';

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
        <Header />
        <div className='container' style={{ height: '90%' }}>
          <ImageCarousel />
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
