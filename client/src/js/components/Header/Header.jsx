import React, { Component } from 'react';
import StreetEatzBlack from '../../../assets/StreetEatzBlack.png'
import StreetEatz1 from '../../../assets/StreetEatz1.png'
import StreetEatz2 from '../../../assets/StreetEatz2.png'

class Header extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12" style={{}}>
            <div style={{ position: 'absolute', marginLeft: '82px', top: '8%', marginLeft: '-50px', left: '20%' }}>
              <span className='header1'>Ryan  </span>
              <span className='header2'>Lypps</span>
            </div>
            <div style={{ textAlign: 'center', position: 'relative', marginLeft: '20px', top: '35%' }}>
              <h2 style={{ color: 'black' }}>Full Stack Web Developer</h2>
            </div>
            <div className="content">
              <div className="gallery-item slider-container">
                <div className="slide-holder">
                  <img src='https://mcdn.wallpapersafari.com/medium/77/30/S8ZKdn.jpg' alt="" className='ok image1' style={{height: '465px'}} />
                  <img src={StreetEatzBlack} alt="" className='ok' style={{height: '465px'}}/>
                  <img src={StreetEatz1} alt="" className='ok1' style={{height: '465px', width: '250px', marginRight: '252px', marginLeft: '252px' }} />
                  <img src={StreetEatz2} alt="" className='ok'  style={{height: '465px', width: '250px', marginRight: '252px', marginLeft: '252px'}}/>
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
