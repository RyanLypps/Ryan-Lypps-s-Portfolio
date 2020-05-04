import React, { Component } from 'react';

export default class Header extends Component {

  render() {
    return (
        <div className='ryan header1' style={{ height: '6%', backgroundColor: 'whitesmoke', opacity: .98, position: 'relative', textAlign: 'center' }}>
          <div style={{ position: 'absolute', height: '100%' }}>
            <form action="/about-me" style={{ display: 'inline-block', position: 'relative', bottom: '5px', height: '100%' }} >
              <input className='hire' style={{ borderRightStyle: 'solid', borderRightWidth: 2, borderColor: 'black', borderBottom: 'none', borderTop: 'none', borderLeft: 'none', height: '135%' }} type="submit" value="About" />
            </form>
            <form action="/Projects" style={{ display: 'inline-block', position: 'relative', bottom: '5px', height: '100%' }}>
              <input className='hire' style={{ border: 'none', height: '135%' }} type="submit" value="Projects" />
            </form>
          </div>
          Ryan Lypps
        </div>
    );
  }
}

