import React, { Component } from 'react';
import './Footer.css';
import FacebookLogo from '../img/social-facebook.svg'
import InstagramLogo from '../img/social-instagram.svg'
import VimeoLogo from '../img/social-vimeo.svg'
import MailLogo from '../img/email.svg'

const About = () => {
    return (
    <footer className="footer">
    <div className="social-icons">
    <img src={FacebookLogo}  className="facebook-logo" alt="logo facebook"></img>
    <img src={InstagramLogo} alt="logo instagram"></img>
    <img src={VimeoLogo} alt="logo vimeo"></img>
    <img src={MailLogo} alt="logo vimeo"></img>
    </div>
    <div className="copyright text-center">© ETERNAL SUNSHINE PICTURES 2017</div>
    </footer> 
    );
}

export default About;