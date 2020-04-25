import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12" style={{}}>
            <div style={{ position: 'relative', textAlign: 'center', marginLeft: '82px' }}>
              <span className='header1'>Ryan  </span>
              <span className='header2'>Lypps</span>
            </div>
            <div style={{ textAlign: 'center', position: 'relative', marginLeft: '20px' }}>
              <h2 style={{ color: 'black' }}>Full Stack Web Developer</h2>
            </div>
            <div className="content">
              <div className="gallery-item slider-container">
                <div className="slide-holder">
                  <img src="http://www.tcort.com/wp-content/uploads/yootheme/features_layout-wrapper.jpg" alt="" />
                  <img src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-cute-ghost-ghostly-cute-ghost-halloween-halloween-ghost-png-image_3933462.jpg" alt="" />
                  <img src="http://www.tcort.com/wp-content/uploads/yootheme/features_slideshow-fullscreen.jpg" alt="" />
                  <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
