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
            <div className="previous-next-buttons">
            <Link to='/gallery/autumn'>Previous serie</Link>
            <Link to='/gallery/jaded'>Next serie</Link>
            </div>
            
            <Carousel width='60%' dynamicHeight={true} useKeyboardArrows={true}>
            
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
    <p>Canary Wharf is like a dystopian dream to me. An autonomous district in London, I felt compelled in returning day by day and photographing this concrete maze. I shot most of the series either early in the morning or late in the evening, when only a few lost souls would be ghosting around the gigantic estate – going in and out of shadows.  
</p>
    </div>
    </div>
    <Footer />
            </div>
        );
    }
};

export default PicCarousel

