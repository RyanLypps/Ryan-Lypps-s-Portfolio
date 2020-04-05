import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../css/style.scss';


class MainPage extends Component {

  render() {
    return (
      <div className="container">
          <span className='header1'>Ryan  </span>
          <span className='header2'>Lypps</span>
          <button
          className='hire'
           style={{ backgroundColor: 'transparent', 
           fontSize: 35, borderColor: 'black', 
           borderWidth: 2,
           cursor: 'hand' }}>
             Hire me</button>
      </div>
    );
  }
}

function mapStoreToProps(store) {
  return {

  }
}

export default connect(mapStoreToProps)(MainPage);
