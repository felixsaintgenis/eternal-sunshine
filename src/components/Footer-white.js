import React, { Component } from 'react';
import './Footer.css';
import FacebookLogo from '../img/social-facebook-white.svg'
import InstagramLogo from '../img/social-instagram-white.svg'
import VimeoLogo from '../img/social-vimeo-white.svg'
import MailLogo from '../img/email-white.svg'

const About = () => {
    return (
    <footer className="footer white-footer">
    <div className="social-icons">
    <img src={FacebookLogo}  className="facebook-logo" alt="logo facebook"></img>
    <img src={InstagramLogo} alt="logo instagram"></img>
    <img src={VimeoLogo} alt="logo vimeo"></img>
    <img src={MailLogo} alt="logo vimeo"></img>
    </div>
    <div className="copyright text-center white-text">© ETERNAL SUNSHINE PICTURES 2017</div>
    </footer> 
    );
}

export default About;