import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';

class MainPage extends Component {

  render() {
    return (
      <div className="container">
        <Header />
        <button
          className='hire'>Hire me</button>
        <div className='second'>Thank you!</div>
      </div>
    );
  }
}

function mapStoreToProps(store) {
  return {

  }
}

export default connect(mapStoreToProps)(MainPage);
