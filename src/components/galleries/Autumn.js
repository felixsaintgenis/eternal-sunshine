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
              original: '../../img/gallery/autumn/autumn1.jpg',
              thumbnail: '../../img/gallery/autumn//thumbnail/autumn1.jpg',
            },
            {
                original: '../../img/gallery/autumn/autumn2.jpg',
                thumbnail: '../../img/gallery/autumn//thumbnail/autumn2.jpg',
              },
              {
                original: '../../img/gallery/autumn/autumn3.jpg',
                thumbnail: '../../img/gallery/autumn//thumbnail/autumn3.jpg',
              },
              {
                original: '../../img/gallery/autumn/autumn4.jpg',
                thumbnail: '../../img/gallery/autumn//thumbnail/autumn4.jpg',
              },
              {
                original: '../../img/gallery/autumn/autumn5.jpg',
                thumbnail: '../../img/gallery/autumn//thumbnail/autumn5.jpg',
              },
              {
                original: '../../img/gallery/autumn/autumn6.jpg',
                thumbnail: '../../img/gallery/autumn//thumbnail/autumn6.jpg',
              },
              {
                original: '../../img/gallery/autumn/autumn7.jpg',
                thumbnail: '../../img/gallery/autumn//thumbnail/autumn7.jpg',
              },
              {
                original: '../../img/gallery/autumn/autumn8.jpg',
                thumbnail: '../../img/gallery/autumn//thumbnail/autumn8.jpg',
              },
              {
                original: '../../img/gallery/autumn/autumn9.jpg',
                thumbnail: '../../img/gallery/autumn//thumbnail/autumn9.jpg',
              },
              {
                original: '../../img/gallery/autumn/autumn10.jpg',
                thumbnail: '../../img/gallery/autumn//thumbnail/autumn10.jpg',
              },
              {
                original: '../../img/gallery/autumn/autumn11.jpg',
                thumbnail: '../../img/gallery/autumn//thumbnail/autumn11.jpg',
              },
              {
                original: '../../img/gallery/autumn/autumn12.jpg',
                thumbnail: '../../img/gallery/autumn//thumbnail/autumn12.jpg',
              },
          ]
        return (
            <div className="gallery-page">
            <Header />
            <h3 className="serie-name">Autumn light</h3>
            <div className="previous-next-buttons">
            <Link to='/gallery/rhein'>Previous serie</Link>
            <Link to='/gallery/canary-wharf'>Next serie</Link>
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
    <p>This may sound like a cliché, but the Autumn season is a photographer’s blessing. For me it is not so much the beautiful. The series was entirely shot in Hampstead Heath Park in London. 
</p>
    </div>
    </div>
    <Footer />
            </div>
        );
    }
};

export default PicCarousel

