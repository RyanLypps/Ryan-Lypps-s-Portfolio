import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';

class MainPage extends Component {
  constructor() {
    super();

    this.keyframes = this.keyframes.bind(this);
  }


  keyframes() {
  
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Header />
          </div>
          <div className="col-lg-6">
            <button className='hire' onClick={this.keyframes}>About me</button>
            <div className='pulse'>Ciera</div>
            <a href="https://placeholder.com"><img src="https://via.placeholder.com/150" fluid /></a>
          </div>
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
