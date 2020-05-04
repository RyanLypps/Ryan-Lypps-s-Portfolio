import React, { Component } from 'react';
import ResumeIcon from '../../../assets/resume-icon.png';

class Footer extends Component {

    render() {
        return (
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginLeft: -7, height: '0%' }}>
                <div style={{ marginTop: '4%' }}>
                    <span style={{ paddingRight: '1.8em', position: 'relative', bottom: '-6px'}}><a href="mailto:r_lypps@yahoo.com"  target="_blank"><i className="fa fa-envelope" style={{ fontSize: '48px', color: 'white', borderWidth: '2px', border: 'white',  borderRadius: '10px', borderBlockStartWidth: '3px', borderBlockEndWidth: '3px', paddingRight: '10px', paddingLeft: '10px' }}></i></a></span>
                    <span style={{ paddingRight: '1.8em', position: 'relative', bottom: '-9px'}}><a href="https://github.com/RyanLypps" target="_blank"><i className="fa fa-github logos" style={{ fontSize: '48px', color: 'white', borderWidth: '2px', border: 'white',  borderRadius: '10px', borderBlockStartWidth: '3px', borderBlockEndWidth: '3px', paddingRight: '10px', paddingLeft: '10px' }}></i></a></span>
                    <span style={{ position: 'relative'}}>
                    <form action="/" style={{ display: 'inline-block', marginRight: 30, marginLeft: 30 }}>
                        <input className='hire1' type="submit" value="R L" style={{ fontStyle: 'italic', fontWeight: 'bolder', borderStyle: 'double', bottom: '60px' }} />
                    </form>
                    </span>
                    <span style={{paddingLeft: '1.8em', position: 'relative', bottom: '-7px'}} ><a href="https://www.linkedin.com/in/ryan-lypps-940958138" target="_blank"><i className="fa fa-linkedin logos" style={{ fontSize: '48px', color: 'white', borderWidth: '2px', border: 'white', borderRadius: '10px', borderBlockStartWidth: '3px', borderBlockEndWidth: '3px', paddingRight: '10px', paddingLeft: '10px' }}></i></a></span>
                    <span style={{paddingLeft: '1.8em', position: 'relative', bottom: '5px'}} ><a href="https://drive.google.com/open?id=1J3Am4-z2vQ_bJvvUqHGOFGgUVJ6OPXJi"  target="_blank"><img src={ResumeIcon} className='hire' alt="" style={{ filter: 'invert(100%)', borderWidth: '2px', border: 'black',  borderRadius: '10px', borderBlockStartWidth: '3px', borderBlockEndWidth: '3px', paddingRight: '10px', paddingLeft: '10px' }} /></a></span>
                    </div>
            </div >
        );
    }
}

export default Footer;
