import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from 'react-image-gallery';
import { HashLink as Link } from 'react-router-hash-link';
import { ScrollTo } from "react-scroll-to";
import Header from '../Header-black'
import Footer from '../Footer'
import "./Disconnected.css"
import "react-image-gallery/styles/css/image-gallery.css";


class PicCarousel extends Component {

    

    render() {
        const images = [
            {
              original: '../../img/gallery/ashura/ashura1.jpg',
              thumbnail: '../../img/gallery/ashura//thumbnail/ashura1.jpg',
            },
            {
              original: '../img/gallery/ashura/ashura2.jpg',
              thumbnail: '../../img/gallery/ashura//thumbnail/ashura2.jpg'
            },
            {
              original: '../img/gallery/ashura/ashura3.jpg',
              thumbnail: '../../img/gallery/ashura//thumbnail/ashura3.jpg'
            },
            {
                original: '../img/gallery/ashura/ashura4.jpg',
                thumbnail: '../../img/gallery/ashura//thumbnail/ashura4.jpg'
              },
              {
                original: '../img/gallery/ashura/ashura5.jpg',
                thumbnail: '../../img/gallery/ashura//thumbnail/ashura5.jpg'
              },
              {
                original: '../img/gallery/ashura/ashura6.jpg',
                thumbnail: '../../img/gallery/ashura//thumbnail/ashura6.jpg'
              },
              {
                original: '../img/gallery/ashura/ashura7.jpg',
                thumbnail: '../../img/gallery/ashura//thumbnail/ashura7.jpg'
              }
          ]
        return (
            <div className="gallery-page">
            <Header />
            <h3 className="serie-name">Ashura</h3>
            <div className="previous-next-buttons">
            <Link to='/gallery/disconnected'>Previous serie</Link>
            <Link to='/gallery/rhein'>Next serie</Link>
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

