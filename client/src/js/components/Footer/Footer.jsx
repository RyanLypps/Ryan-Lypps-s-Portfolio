import React, { Component } from 'react';
import ResumeIcon from '../../../assets/resume-icon.png';

class Footer extends Component {

    render() {
        return (
            <div className='container footer-container'>
                <div>
                    <span className='mail-container'><a href='mailto:r_lypps@yahoo.com' target='_blank'>
                        <i className='fa fa-envelope i-mail-git-linkedin'></i>
                    </a></span>
                    <span className='github-container'><a href='https://github.com/RyanLypps' target='_blank'>
                        <i className='fa fa-github icon-actives i-mail-git-linkedin' ></i>
                    </a></span>
                    <span>
                        <form className='home-form' action="/">
                            <input className='footer-icons logo-rl' type='submit' value='R L' />
                        </form>
                    </span>
                    <span className='linkedin-container'><a href='https://www.linkedin.com/in/ryan-lypps-940958138' target="_blank">
                        <i className='fa fa-linkedin icon-actives i-mail-git-linkedin'></i>
                    </a></span>
                    <span className='resume-container'><a href='https://drive.google.com/open?id=1J3Am4-z2vQ_bJvvUqHGOFGgUVJ6OPXJi' target="_blank">
                        <img src={ResumeIcon} className='footer-icons i-resume' alt="" />
                    </a></span>
                </div>
            </div >
        );
    }
}

export default Footer;
