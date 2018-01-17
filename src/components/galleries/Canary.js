import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import { HashLink as Link } from 'react-router-hash-link';
import Header from '../Header-black'
import Footer from '../Footer'
import "./Disconnected.css"

class PicCarousel extends Component {

    state = { 
        photos:[
        {src: "../img/gallery/canary/canarywharf1.jpg", class:''},
        {src: "../img/gallery/canary/canarywharf2.jpg", class:''},
        {src: "../img/gallery/canary/canarywharf3.jpg", class:'portrait'},
        {src: "../img/gallery/canary/canarywharf4.jpg", class:'portrait'},
        {src: "../img/gallery/canary/canarywharf5.jpg", class:''},
        {src: "../img/gallery/canary/canarywharf6.jpg", class:''},
        {src: "../img/gallery/canary/canarywharf7.jpg", class:''},
        {src: "../img/gallery/canary/canarywharf8.jpg", class:''},
        {src: "../img/gallery/canary/canarywharf9.jpg", class:'portrait'},
        {src: "../img/gallery/canary/canarywharf10.jpg", class:'portrait'},
        {src: "../img/gallery/canary/canarywharf11.jpg", class:''},
     
        
        
      ]
        }

    render() {
        return (
            <div className="gallery-page">
            <Header />
            <h3 className="serie-name">Canary Wharf</h3>
            
            <Carousel>
            
                {this.state.photos.map((photo) => {
                return (<div>
                    <img src={photo.src} className={photo.class} />
                </div>)
                })
                }
                
               
            </Carousel>
            <Link to="#info-anchor"><h3 className="details-link">View Details</h3></Link>
            <div  id="info-anchor" className="info-wrapper">
    <div className="flex-row">
    <h3><strong>CINEMATOGRAPHY - </strong> </h3><h3>TAREK SHAYNE TABET</h3>
    </div>
    <div className="flex-row">
    <h3><strong>DIRECTOR - </strong></h3><h3>TAREK SHAYNE TABET</h3>
    </div>
    <div className="flex-row">
    <h3><strong>MUSIC - </strong></h3><h3>TAREK SHAYNE TABET</h3>
    </div>
    <div className="flex-row">
    <h3><strong>EDITING - </strong></h3><h3>TAREK SHAYNE TABET</h3>
    </div>
    <div className="flex-row">
    <p>description description description description descriptiondescription description description description descriptiondescription description description description descriptiondescription description description description descriptiondescription description description description descriptiondescription description description description description descriptiondescription description description description description description description description</p>
    </div>
    </div>
    <Footer />
            </div>
        );
    }
};

export default PicCarousel

