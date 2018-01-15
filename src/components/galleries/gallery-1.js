import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import { HashLink as Link } from 'react-router-hash-link';
import Header from '../Header-black'
import Footer from '../Footer'
import Ashura from '../../img/gallery/ASHURA.jpg'
import "./gallery-1.css"

class PicCarousel extends Component {

    render() {
        return (
            <div className="gallery-page">
            <Header />
            <h3 className="serie-name">Disconnected</h3>
            
            <Carousel>
                <div>
                    <img src={Ashura} />
                </div>
                <div>
                    <img src={Ashura} />
                </div>
                <div>
                    <img src={Ashura} />
                </div>
            </Carousel>
            <Link to="#info-anchor"><h3 className="details-link">View Details</h3></Link>
            <div  id="info-anchor" className="info-wrapper">
    <div className="flex-row">
    <h3><strong>CINEMATOGRAPHY - </strong> </h3><h3>TAREK SHAYNE TABET</h3>
    </div>
    <div className="flex-row">
    <h3><strong>DIRECTOR - </strong></h3><h3>TAREK SHAYNE TABET</h3>
    </div>
    <div className="flex-row">
    <h3><strong>MUSIC - </strong></h3><h3>TAREK SHAYNE TABET</h3>
    </div>
    <div className="flex-row">
    <h3><strong>EDITING - </strong></h3><h3>TAREK SHAYNE TABET</h3>
    </div>
    <div className="flex-row">
    <p>description description description description descriptiondescription description description description descriptiondescription description description description descriptiondescription description description description descriptiondescription description description description descriptiondescription description description description description descriptiondescription description description description description description description description</p>
    </div>
    </div>
    <Footer />
            </div>
        );
    }
};

export default PicCarousel

