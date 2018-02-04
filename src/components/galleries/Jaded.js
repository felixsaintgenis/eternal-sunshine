import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { ScrollTo } from "react-scroll-to";
import Header from '../Header-black'
import Footer from '../Footer'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "./Disconnected.css"

class PicCarousel extends Component {

    render() {
        const images = [
            {
              original: '../../img/gallery/jaded/jaded1.jpg',
              thumbnail: '../../img/gallery/jaded//thumbnail/jaded1.jpg',
            },
            {
                original: '../../img/gallery/jaded/jaded2.jpg',
                thumbnail: '../../img/gallery/jaded//thumbnail/jaded1.jpg',
              },
              {
                original: '../../img/gallery/jaded/jaded3.jpg',
                thumbnail: '../../img/gallery/jaded//thumbnail/jaded1.jpg',
              },
              {
                original: '../../img/gallery/jaded/jaded4.jpg',
                thumbnail: '../../img/gallery/jaded//thumbnail/jaded1.jpg',
              },
              {
                original: '../../img/gallery/jaded/jaded5.jpg',
                thumbnail: '../../img/gallery/jaded//thumbnail/jaded1.jpg',
              },
            
          ]
        return (
            <div className="gallery-page">
            <Header />
            <h3 className="serie-name">Jaded</h3>
            <div className="previous-next-buttons">
            <Link to='/gallery/canary-wharf'>Previous serie</Link>
            <Link to='/gallery/disconnected'>Next serie</Link>
            </div>
            
            <ImageGallery items={images} />
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

