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
          <div className="col-lg-12" style={{}}>
            <div style={{ position: 'absolute', marginLeft: '82px', top: '8%', marginLeft: '-50px', left: '20%' }}>
              <span className='header1'>Ryan  </span>
              <span className='header2'>Lypps</span>
            </div>
            <div style={{ textAlign: 'center', position: 'relative', marginLeft: '20px', top: '35%' }}>
              <h2 style={{ color: 'white' }}>Full Stack Web Developer</h2>
            </div>
            <div className="content">
              <div className="gallery-item slider-container">
                <div className="slide-holder">
                  <img src={StreetEatzBlack} alt="" className='ok image1' style={{height: '465px'}}/>
                  <img src={GymBuddy} alt="" className='ok image1' style={{height: '465px'}} />
                  <img src={ToDoApp} alt="" className='ok' style={{height: '465px'}}/>
                  <img src={WeatherNow} alt="" className='ok' style={{height: '465px'}}/>
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
