import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import Header from '../Header-black'
import Ashura from '../../img/gallery/ASHURA.jpg'
import "./gallery-1.css"

class PicCarousel extends Component {

    render() {
        return (
            <div>
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
            </div>
        );
    }
};

export default PicCarousel

