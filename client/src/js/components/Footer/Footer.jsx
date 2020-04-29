import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', height: '50px', marginLeft: -7 }}>
                 <div style={{flexBasis: '100%'}}></div> 
                <div style={{ height: '80%'}}>
                    <span style={{ paddingRight: '1.8em', position: 'relative', bottom: '-8px'}}><a href="https://github.com/RyanLypps" target="_blank"><i className="fa fa-github logos" style={{ fontSize: '48px', color: 'white', borderWidth: '2px', border: 'white', borderStyle: 'solid', borderRadius: '10px', borderBlockStartWidth: '3px', borderBlockEndWidth: '3px', paddingRight: '10px', paddingLeft: '10px' }}></i></a></span>
                    <form action="/about-me" style={{ display: 'inline-block' }} >
                        <input className='hire' type="submit" value="About me" />
                    </form>
                    <form action="/" style={{ display: 'inline-block', marginRight: 30, marginLeft: 30 }}>
                        <input className='hire' type="submit" value="R L" style={{ fontStyle: 'italic', fontWeight: 'bolder', borderStyle: 'double' }} />
                    </form>
                    <form action="/Projects" style={{ display: 'inline-block' }}>
                        <input className='hire' type="submit" value="Projects" />
                    </form>
                    <span style={{paddingLeft: '1.8em', bottom: '-7px', position: 'relative'}} ><a href="https://www.linkedin.com/in/ryan-lypps-940958138" target="_blank"><i className="fa fa-linkedin logos" style={{ fontSize: '48px', color: 'white', borderWidth: '2px', border: 'white', borderStyle: 'solid', borderRadius: '10px', borderBlockStartWidth: '3px', borderBlockEndWidth: '3px', paddingRight: '10px', paddingLeft: '10px' }}></i></a></span>
                </div>
            </div >
        );
    }
}

export default Footer;
