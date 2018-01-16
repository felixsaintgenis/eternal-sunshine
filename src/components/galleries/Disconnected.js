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
        {src: "../img/gallery/disconnected/disconnected1.jpg"},
        {src: "../img/gallery/disconnected/disconnected2.jpg"},
        {src: "../img/gallery/disconnected/disconnected3.jpg"},
        {src: "../img/gallery/disconnected/disconnected4.jpg"},
        {src: "../img/gallery/disconnected/disconnected5.jpg"},
        {src: "../img/gallery/disconnected/disconnected6.jpg"},
        {src: "../img/gallery/disconnected/disconnected7.jpg"},
        {src: "../img/gallery/disconnected/disconnected8.jpg"},
        {src: "../img/gallery/disconnected/disconnected9.jpg"},
        {src: "../img/gallery/disconnected/disconnected10.jpg"},
        {src: "../img/gallery/disconnected/disconnected11.jpg"},
        {src: "../img/gallery/disconnected/disconnected12.jpg"},
        {src: "../img/gallery/disconnected/disconnected13.jpg"},
        {src: "../img/gallery/disconnected/disconnected14.jpg"},
        {src: "../img/gallery/disconnected/disconnected15.jpg"},
        {src: "../img/gallery/disconnected/disconnected16.jpg"},
        {src: "../img/gallery/disconnected/disconnected17.jpg"},
        {src: "../img/gallery/disconnected/disconnected18.jpg"}
        
      ]
        }

    render() {
        return (
            <div className="gallery-page">
            <Header />
            <h3 className="serie-name">Disconnected</h3>
            
            <Carousel>
            
                {this.state.photos.map((photo) => {
                return (<div>
                    <img src={photo.src} />
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

