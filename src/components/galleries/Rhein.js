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
              original: '../../img/gallery/rhein/rhein1.jpg',
              thumbnail: '../../img/gallery/rhein//thumbnail/rhein1.jpg',
            },
            {
                original: '../../img/gallery/rhein/rhein2.jpg',
                thumbnail: '../../img/gallery/rhein//thumbnail/rhein2.jpg',
              },
              {
                original: '../../img/gallery/rhein/rhein3.jpg',
                thumbnail: '../../img/gallery/rhein//thumbnail/rhein3.jpg',
              },
              {
                original: '../../img/gallery/rhein/rhein4.jpg',
                thumbnail: '../../img/gallery/rhein//thumbnail/rhein4.jpg',
              },
              {
                original: '../../img/gallery/rhein/rhein5.jpg',
                thumbnail: '../../img/gallery/rhein//thumbnail/rhein5.jpg',
              },
              {
                original: '../../img/gallery/rhein/rhein6.jpg',
                thumbnail: '../../img/gallery/rhein//thumbnail/rhein6.jpg',
              },
              {
                original: '../../img/gallery/rhein/rhein7.jpg',
                thumbnail: '../../img/gallery/rhein//thumbnail/rhein7.jpg',
              },
              {
                original: '../../img/gallery/rhein/rhein8.jpg',
                thumbnail: '../../img/gallery/rhein//thumbnail/rhein8.jpg',
              },
              {
                original: '../../img/gallery/rhein/rhein9.jpg',
                thumbnail: '../../img/gallery/rhein//thumbnail/rhein9.jpg',
              },
            
          ]
        return (
            <div className="gallery-page">
            <Header />
            <h3 className="serie-name">Rhein</h3>
            <div className="previous-next-buttons">
            <Link to='/gallery/ashura'>Previous serie</Link>
            <Link to='/gallery/autumn'>Next serie</Link>
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

