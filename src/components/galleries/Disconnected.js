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
            <div className="previous-next-buttons">
            <Link to='/gallery/jaded'><span>Previous serie</span></Link>
            <Link to='/gallery/ashura'>Next serie</Link>
            </div>
            
            <Carousel width='70%' useKeyboardArrows={true}>
            
                {this.state.photos.map((photo) => {
                return (<div>
                    <img src={photo.src} />
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
    <h3><strong>Exibited in: </strong></h3>
    </div>
    <p>Wiesbadener Fototage 2017 - August 2017</p>
    <p>Kunst & Kultur Stiftung Düssledorf - March to May 2018</p>
  
    <div className="flex-row">
    <p>Disconnected is born out of a near depression I experienced whilst living in London. The series is about me processing the idea of isolation into imagery. Isolation in a metropolis is directly related to the development of technology, replacing human interaction. Falling in love with a person through a screen is more convenient than going through the nerve-wracking process of meeting someone in real life.
</p>
    </div>
    </div>
    <Footer />
            </div>
        );
    }
};

export default PicCarousel

