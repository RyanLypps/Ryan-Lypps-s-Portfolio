import React, { Component } from 'react';
import StreetEatzBlack from '../../../assets/StreetEatzBlack.png';
import WeatherNow from '../../../assets/WeatherNow.png';
import ToDoApp from '../../../assets/ToDoApp.png';
import GymBuddy from '../../../assets/GymBuddy.png';

class Header extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="content">
            <div className='headers' style={{ position: 'absolute', top: '8%', marginLeft: '-20px', left: '26.5%' }}>
              <span className='header1'>Ryan  </span>
              <span className='header2'>Lypps</span>
            </div>
            <div className='sub-headers' style={{ position: 'absolute', marginLeft: '20px', top: '35%', left: '36.5%' }}>
              <h2 style={{ color: 'white' }}>Full Stack Developer</h2>
            </div>
          <div className="gallery-item slider-container">
            <div className="slide-holder">
              <img src={StreetEatzBlack} alt="" className='ok image1' style={{ height: '465px' }} />
              <img src={GymBuddy} alt="" className='ok image1' style={{ height: '465px' }} />
              <img src={ToDoApp} alt="" className='ok' style={{ height: '465px' }} />
              <img src={WeatherNow} alt="" className='ok' style={{ height: '465px' }} />
            </div>
          </div>
        </div>
      </div>
      </div >
    );
  }
}

export default Header;
