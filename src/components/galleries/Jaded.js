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
        {src: "../img/gallery/jaded/jaded1.jpg", class:''},
        {src: "../img/gallery/jaded/jaded2.jpg", class:''},
        {src: "../img/gallery/jaded/jaded3.jpg", class:''},
        {src: "../img/gallery/jaded/jaded4.jpg", class:''},
        {src: "../img/gallery/jaded/jaded5.jpg", class:''},
        
    
     
        
        
      ]
        }

    render() {
        return (
            <div className="gallery-page">
            <Header />
            <h3 className="serie-name">Jaded</h3>
            <div className="previous-next-buttons">
            <Link to='/gallery/canary-wharf'>Previous serie</Link>
            <Link to='/gallery/disconnected'>Next serie</Link>
            </div>
            
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
    <p>Jaded is an urban blues. A blues told through images and not through sound. Stefanos Dimoulas is close collaborator of mine whom I have lensed many times. The series is very instinctive, where both model and camera reacted to the surroundings. The series was shot in Hackney, London.   
</p>
    </div>
    </div>
    <Footer />
            </div>
        );
    }
};

export default PicCarousel

