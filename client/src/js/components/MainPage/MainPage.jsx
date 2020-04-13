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
            <button className='hire' onClick={this.keyframes}>Hire me</button>
            {/* <div className='pulse'>Ciera</div> */}
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
