import React, { Component } from 'react';

export default class Header extends Component {

  render() {
    return (
      <div className='header-container'>
        <div className='forms'>
          <form action="/about-me" className='on-forms'>
            <input className='tab-headers about-me' type="submit" value="About" />
          </form>
          <form action="/Projects" className='on-forms'>
            <input className='tab-headers projects' type="submit" value="Projects" />
          </form>
        </div>
          Ryan Lypps
      </div>
    );
  }
}

