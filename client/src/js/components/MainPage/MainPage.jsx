import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainPage extends Component {

  render() {
    return (
      <div className="container">
              <header><h1 className="h1">Ryan Lypps, I am your master. Finally Ready and connected.</h1></header>
      </div>
    );
  }
}

function mapStoreToProps(store) {
  return {

  }
}

export default connect(mapStoreToProps)(MainPage);
