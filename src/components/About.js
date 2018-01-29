import React, { Component } from 'react';
import Header from "./Header"
import Footer from "./Footer-white"
import "./About.css"

const About = () => {

    const style = {
        copyright: {
            color: 'white'
        }
    }
    return (
        <div className="full-homepage-background-about">
        <Header />
        
        <div className="col-md-12 mx-auto vertical-center about-text">
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit praesent, nam rhoncus commodo nec lacus semper faucibus, ultrices quisque cursus posuere mus morbi aptent. Torquent hendrerit tellus placerat mi tempor donec magna in condimentum faucibus, vestibulum porta suspendisse augue cras ultricies nam libero. Faucibus tempus duis torquent netus suscipit blandit molestie etiam mi, phasellus inceptos et imperdiet quis nam lobortis at, pharetra tempor ad placerat habitant tristique luctus vitae.</p>
            
        </div>
        <Footer style={style} />
        </div>
    );
}

export default About;