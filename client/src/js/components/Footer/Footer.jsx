import React, { Component } from 'react';
import ResumeIcon from '../../../assets/resume-icon.png';

class Footer extends Component {

    render() {
        return (
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginLeft: -7, height: '0%' }}>
                <div style={{ marginTop: '4%' }}>
                    <span style={{ paddingRight: '1.8em', position: 'relative', bottom: '-8px'}}><a href="mailto:r_lypps@yahoo.com" target="_blank"><i className="fa fa-envelope" style={{ fontSize: '48px', color: 'white', borderWidth: '2px', border: 'white',  borderRadius: '10px', borderBlockStartWidth: '3px', borderBlockEndWidth: '3px', paddingRight: '10px', paddingLeft: '10px' }}></i></a></span>
                    <span style={{ paddingRight: '1.8em', position: 'relative', bottom: '-8px'}}><a href="https://github.com/RyanLypps" target="_blank"><i className="fa fa-github logos" style={{ fontSize: '48px', color: 'white', borderWidth: '2px', border: 'white',  borderRadius: '10px', borderBlockStartWidth: '3px', borderBlockEndWidth: '3px', paddingRight: '10px', paddingLeft: '10px' }}></i></a></span>

                    <form action="/about-me" style={{ display: 'inline-block' }} >
                        <input className='hire' type="submit" value="About me" />
                    </form>
                    <form action="/" style={{ display: 'inline-block', marginRight: 30, marginLeft: 30 }}>
                        <input className='hire' type="submit" value="R L" style={{ fontStyle: 'italic', fontWeight: 'bolder', borderStyle: 'double' }} />
                    </form>
                    <form action="/Projects" style={{ display: 'inline-block' }}>
                        <input className='hire' type="submit" value="Projects" />
                    </form>
                    </div>
                    <span style={{paddingLeft: '1.8em', bottom: '-56px', position: 'relative'}} ><a href="https://www.linkedin.com/in/ryan-lypps-940958138" target="_blank"><i className="fa fa-linkedin logos" style={{ fontSize: '48px', color: 'white', borderWidth: '2px', border: 'white', borderRadius: '10px', borderBlockStartWidth: '3px', borderBlockEndWidth: '3px', paddingRight: '10px', paddingLeft: '10px' }}></i></a></span>
                    <span style={{paddingLeft: '1.8em', bottom: '-52px', position: 'relative'}} ><a href="https://drive.google.com/open?id=1J3Am4-z2vQ_bJvvUqHGOFGgUVJ6OPXJi" target="_blank"><img src={ResumeIcon} alt="" style={{ filter: 'invert(100%)', borderWidth: '2px', border: 'black',  borderRadius: '10px', borderBlockStartWidth: '3px', borderBlockEndWidth: '3px', paddingRight: '10px', paddingLeft: '10px' }} /></a></span>
            </div >
        );
    }
}

export default Footer;
