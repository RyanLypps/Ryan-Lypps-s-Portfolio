import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  render() {
    return (
      <div className='header-container'>
        <div className='forms'>
          <Link to='/about-me' className='on-forms'>
            <input className='tab-headers about-me' type="submit" value="About" />
          </Link>
          <Link to='/Projects' className='on-forms'>
            <input className='tab-headers about-me' type="submit" value="Projects" />
          </Link>
            <Link to = '/' className='on-forms'>
            <input className='tab-headers projects' type="submit" value="Home" />
            </Link>
        </div>
          Ryan Lypps
      </div>
    );
  }
}

