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
          className='hire dub-arrow'
           style={{ backgroundColor: 'transparent', 
           fontSize: 35, borderColor: 'black', 
           borderWidth: 2,
           cursor: 'hand',
           borderBlockEndWidth: 3,
           borderBlockStartWidth: 3,
           fontFamily: 'Times New Roman',
           }}>
             Hire me</button>
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
