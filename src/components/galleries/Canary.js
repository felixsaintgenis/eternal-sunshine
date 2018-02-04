import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
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
              original: '../../img/gallery/canary/canarywharf1.jpg',
              thumbnail: '../../img/gallery/canary//thumbnail/canary1.jpg',
            },
            {
                original: '../../img/gallery/canary/canarywharf2.jpg',
                thumbnail: '../../img/gallery/canary//thumbnail/canary2.jpg',
              },
              {
                original: '../../img/gallery/canary/canarywharf3.jpg',
                thumbnail: '../../img/gallery/canary//thumbnail/canary3.jpg',
              },
              {
                original: '../../img/gallery/canary/canarywharf4.jpg',
                thumbnail: '../../img/gallery/canary//thumbnail/canary4.jpg',
              },
              {
                original: '../../img/gallery/canary/canarywharf5.jpg',
                thumbnail: '../../img/gallery/canary//thumbnail/canary5.jpg',
              },
              {
                original: '../../img/gallery/canary/canarywharf6.jpg',
                thumbnail: '../../img/gallery/canary//thumbnail/canary6.jpg',
              },
              {
                original: '../../img/gallery/canary/canarywharf7.jpg',
                thumbnail: '../../img/gallery/canary//thumbnail/canary7.jpg',
              },
              {
                original: '../../img/gallery/canary/canarywharf8.jpg',
                thumbnail: '../../img/gallery/canary//thumbnail/canary8.jpg',
              },
              {
                original: '../../img/gallery/canary/canarywharf9.jpg',
                thumbnail: '../../img/gallery/canary//thumbnail/canary9.jpg',
              },
              {
                original: '../../img/gallery/canary/canarywharf10.jpg',
                thumbnail: '../../img/gallery/canary//thumbnail/canary10.jpg',
              },
              {
                original: '../../img/gallery/canary/canarywharf11.jpg',
                thumbnail: '../../img/gallery/canary//thumbnail/canary11.jpg',
              },
            
            
          ]
        return (
            <div className="gallery-page">
            <Header />
            <h3 className="serie-name">Canary Wharf</h3>
            <div className="previous-next-buttons">
            <Link to='/gallery/autumn'>Previous serie</Link>
            <Link to='/gallery/jaded'>Next serie</Link>
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

