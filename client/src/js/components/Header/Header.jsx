import React, { Component } from 'react';
import StreetEatz from '../../../assets/StreetEatz.png'
import StreetEatz1 from '../../../assets/StreetEatz1.png'
import StreetEatz2 from '../../../assets/StreetEatz2.png'

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
                  <img src={StreetEatz1} alt="" className='ok' style={{height: '465px', width: '250px', marginRight: '252px', marginLeft: '252px'}}/>
                  <img src={StreetEatz} alt="" className='ok1' style={{height: '465px', width: '250px', marginRight: '252px', marginLeft: '252px' }} />
                  {/* <img src={StreetEatz} alt=""  style={{height: '465px', width: '250px', marginRight: '107.5px', marginLeft: '107.5px' }}/> */}
                  {/* <img src={StreetEatz1} alt=""  style={{height: '465px', width: '250px', marginRight: '107.5px', marginLeft: '107.5px' }}/> */}
                  <img src={StreetEatz2} alt="" className='ok'  style={{height: '465px', width: '250px', marginRight: '252px', marginLeft: '252px'}}/>
                  <img src='https://mcdn.wallpapersafari.com/medium/77/30/S8ZKdn.jpg' alt="" className='ok' style={{height: '465px', width: '760px'}}/>
                  {/* <img src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-cute-ghost-ghostly-cute-ghost-halloween-halloween-ghost-png-image_3933462.jpg" alt="" style={{height: '720px', width: '1200px' }}/> */}
                  {/* <img src="http://www.tcort.com/wp-content/uploads/yootheme/features_slideshow-fullscreen.jpg" alt="" style={{height: '720px', width: '1200px' }} /> */}
                  {/* <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" alt="" style={{height: '720px', width: '1200px' }} /> */}
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
