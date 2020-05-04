import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import Footer from '../Footer/Footer';

class MainPage extends Component {

  render() {
    return (
      <div className='main-container'>
        <Header />
        <div className='container body-footer-container'>
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
