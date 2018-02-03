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
        {src: "../img/gallery/ashura/ashura1.jpg", class:''},
        {src: "../img/gallery/ashura/ashura2.jpg", class:''},
        {src: "../img/gallery/ashura/ashura4.jpg", class:''},
        {src: "../img/gallery/ashura/ashura5.jpg", class:''},
        {src: "../img/gallery/ashura/ashura6.jpg", class:''},
        {src: "../img/gallery/ashura/ashura3.jpg", class:'portrait'},
        {src: "../img/gallery/ashura/ashura7.jpg", class:'portrait'}
     
        
        
      ]
        }

    render() {
        return (
            <div className="gallery-page">
            <Header />
            <h3 className="serie-name">Ashura</h3>
            <div className="previous-next-buttons">
            <Link to='/gallery/disconnected'>Previous serie</Link>
            <Link to='/gallery/rhein'>Next serie</Link>
            </div>

            
            <Carousel width='60%' useKeyboardArrows={true}>
            
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
    <p>The days leading up to Ashura are filled with atmosphere. Iran is dressed in Black, mourning the death of their Imam. These images were captured in and around Yazd. It is beautiful to witness faith, faith of any kind. I was deeply touched by the intensity of ceremonies. Like any country rich in culture, Iran is filled with controversy – but decided to disregard the controversy and focus on the passion of the people around me. 
</p>
    </div>
    </div>
    <Footer />
            </div>
        );
    }
};

export default PicCarousel

