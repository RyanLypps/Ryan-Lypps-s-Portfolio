import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div style={{ position: 'relative', textAlign: 'center', top: '75%' }}>
              <span className='header1'>Ryan  </span>
              <span className='header2'>Lypps</span>
            </div>
            <div style={{ textAlign: 'center', top: '75%', position: 'relative', marginRight: '85px' }}>
              <h2 style={{ color: 'black' }}>Full Stack Web Developer</h2>
            </div>
            <div id='cf'>
              <div id='cf3'>
              <img className="bottom rounded " src='http://www.tcort.com/wp-content/uploads/yootheme/features_layout-wrapper.jpg' style={{ width:'1200px', height: '720px'}} />
              <img className="top rounded" src="http://www.tcort.com/wp-content/uploads/yootheme/features_slideshow-fullscreen.jpg" style={{ width:'1200px', height: '720px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
