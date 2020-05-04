import React, { Component } from 'react';
import StreetEatzBlack from '../../../assets/StreetEatzBlack.png';
import WeatherNow from '../../../assets/WeatherNow.png';
import ToDoApp from '../../../assets/ToDoApp.png';
import GymBuddy from '../../../assets/GymBuddy.png';

class ImageCarousel extends Component {

  render() {
    return (
      <div className='container img-carousel-container'>
        <div className="content">
          <div className='sub-headers'>
            <h2 className='move-sub-header'>Full Stack Developer</h2>
          </div>
          <div className='gallery-item'>
            <div className='slide-holder' >
              <img src={ StreetEatzBlack } alt="" className='each-image fade-in-img'/>
              <img src={ GymBuddy } alt="" className='each-image'/>
              <img src={ ToDoApp } alt="" className='each-image'/>
              <img src={ WeatherNow } alt="" className='each-image'/>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default ImageCarousel;
