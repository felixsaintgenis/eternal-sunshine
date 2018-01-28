import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import Ashura from '../img/gallery/ASHURA.jpg'
import Canary from '../img/gallery/CANARY WHARF.jpg'
import Autumn from '../img/gallery/AUTUMN LIGHT.jpg'
import Disconnected from '../img/gallery/DISCONNECTED.jpg'
import './Photography.css'

class Photography extends Component {
    state = { }


  


    render() {
        return (
            <div className="cinematography-page">
            <div className="full-homepage-background-photography">
        <Header />
               
        

        </div>
        <div className="container photo-gallery">

      <div className="row text-center text-lg-center mb-1">
      <div className="col-md-4 col-xs-1">
      <Link to='/gallery/disconnected'>
          <img className="img-fluid" src={Disconnected} alt=""></img>
          <div class="overlay">
          <h3 class="title">disconnected</h3>
          <p class="paragraph">Tarek Shayne Tabet</p>
          </div>           
          </Link>
          </div>
          <div className="col-md-4 col-xs-12">
          <Link to='/gallery/ashura'>
          <img className="img-fluid" src={Ashura} alt=""></img> 
          <div class="overlay">
            <h3 class="title">Ashura</h3>
            <p class="paragraph">Tarek Shayne Tabet</p>
            </div>            
            </Link>
          </div>
          <div className="col-md-4 col-xs-12">
          <Link to='/gallery/rhein'>
          <img className="img-fluid" src='../img/gallery/RHIN.jpg' alt=""></img>
          <div class="overlay">
            <h3 class="title">Rhein</h3>
            <p class="paragraph">Tarek Shayne Tabet</p>
            </div>              
            </Link>
          </div>
        
      </div>
      <div className="row text-center text-lg-center mb-1">
      <div className="col-md-4 col-xs-1">
      <Link to='/gallery/autumn'>
          <img className="img-fluid" src={Autumn} alt=""></img>
          <div class="overlay">
            <h3 class="title">Autumn light</h3>
            <p class="paragraph">Tarek Shayne Tabet</p>
            </div>              
            </Link>
          </div>
          <div className="col-md-4 col-xs-12">
          <Link to='/gallery/canary-wharf'>
          <img className="img-fluid" src={Canary} alt=""></img>
          <div class="overlay">
            <h3 class="title">Canary wharf</h3>
            <p class="paragraph">Tarek Shayne Tabet</p>
            </div>              
            </Link>
          </div>
          
        
      </div>
   
      

    </div>
    
        <Footer />
            </div>
        );
    }
}


export default Photography ;