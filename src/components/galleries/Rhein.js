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
        {src: "../img/gallery/rhein/rhein1.jpg", class:'portrait'},
        {src: "../img/gallery/rhein/rhein2.jpg", class:'portrait'},
        {src: "../img/gallery/rhein/rhein3.jpg", class:''},
        {src: "../img/gallery/rhein/rhein4.jpg", class:'portrait'},
        {src: "../img/gallery/rhein/rhein5.jpg", class:''},
        {src: "../img/gallery/rhein/rhein6.jpg", class:''},
        {src: "../img/gallery/rhein/rhein7.jpg", class:''},
        {src: "../img/gallery/rhein/rhein8.jpg", class:''},
        {src: "../img/gallery/rhein/rhein9.jpg", class:''}
     
        
        
      ]
        }

    render() {
        return (
            <div className="gallery-page">
            <Header />
            <h3 className="serie-name">Rhein</h3>
            
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
    <p>The Rhine is probably the most important landmark of Düsseldorf, the city I spent the larger part of my life in. Every visit to the Rhine brings a new perspective. In the winter the light is low and the river has an air of mystery about it and in the summer the reflection of the sun is almost blinding. The Rhine series is always changing, just like the River itself. 
</p>
    </div>
    </div>
    <Footer />
            </div>
        );
    }
};

export default PicCarousel

