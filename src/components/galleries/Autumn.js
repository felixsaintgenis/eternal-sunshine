import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import { HashLink as Link } from 'react-router-hash-link';
import { ScrollTo } from "react-scroll-to";
import Header from '../Header-black'
import Footer from '../Footer'
import "./Disconnected.css"

class PicCarousel extends Component {

    state = { 
        photos:[
        {src: "../img/gallery/autumn/autumn1.jpg", class:''},
        {src: "../img/gallery/autumn/autumn2.jpg", class:''},
        {src: "../img/gallery/autumn/autumn3.jpg", class:''},
        {src: "../img/gallery/autumn/autumn4.jpg", class:''},
        {src: "../img/gallery/autumn/autumn5.jpg", class:''},
        {src: "../img/gallery/autumn/autumn6.jpg", class:'portrait'},
        {src: "../img/gallery/autumn/autumn7.jpg", class:''},
        {src: "../img/gallery/autumn/autumn8.jpg", class:'portrait'},
        {src: "../img/gallery/autumn/autumn9.jpg", class:''},
        {src: "../img/gallery/autumn/autumn10.jpg", class:''},
        {src: "../img/gallery/autumn/autumn11.jpg", class:''}
     
        
        
      ]
        }

    render() {
        return (
            <div className="gallery-page">
            <Header />
            <h3 className="serie-name">Autumn light</h3>
            
            <Carousel width='70%' dynamicHeight={true} useKeyboardArrows={true}>
            
                {this.state.photos.map((photo) => {
                return (<div>
                    <img src={photo.src} className={photo.class} />
                </div>)
                })
                }
                
               
            </Carousel>
            <ScrollTo>
                {
                    (scroll) => (
                        <h3 className="details-link" onClick={() => scroll(0, 500)}>
                            view details
                        </h3>
                    )
                }
            </ScrollTo>
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

