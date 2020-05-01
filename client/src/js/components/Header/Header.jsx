import React, { Component } from 'react';
import StreetEatzBlack from '../../../assets/StreetEatzBlack.png';
import WeatherNow from '../../../assets/WeatherNow.png';
import ToDoApp from '../../../assets/ToDoApp.png';
import GymBuddy from '../../../assets/GymBuddy.png';

class Header extends Component {

  render() {
    return (
      <div className="container" style={{ height: '75%'}} >
            <div className='headers' style={{ position: 'relative', textAlign: 'center' }}>
              <span className='ryan header1'>Ryan Lypps </span>
            </div>
          <div className="content">
            <div className='sub-headers' style={{ position: 'relative'}}>
              <h2 className='lypps' style={{ color: 'white'}}>Full Stack Developer</h2>
            </div>
          <div className="gallery-item" style={{height: '100%', width: '100%'}}>
            <div className="slide-holder" >
              <img src={StreetEatzBlack} alt="" className='ok image1' style={{  }} />
              <img src={GymBuddy} alt="" className='ok image1' style={{  }} />
              <img src={ToDoApp} alt="" className='ok' style={{  }} />
              <img src={WeatherNow} alt="" className='ok' style={{  }} />
            </div>
          </div>
      </div>
      </div >
    );
  }
}

export default Header;
