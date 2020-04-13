import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import { Link } from "react-router-dom";

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
            <a href="/about-me"><img src="https://via.placeholder.com/150" /></a>
            <Link to="/about-me">About Me</Link>
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
