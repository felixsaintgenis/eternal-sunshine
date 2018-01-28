import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { Carousel } from 'react-responsive-carousel';
import Header from './Header'
import Footer from './Footer'
import './Cinematography.css'

class Cinematography extends Component {
    state = { 
      videos:[
      {cinematography: "TAREK SHAYNE TABET", director: "PATRICK JORDAN", music: "AMIN APPLESEED", editing: "IMRAN SHAYNE TABET", description:"description description description description descriptiondescription description description description descriptiondescription description description description descriptiondescription description description description descriptiondescription description description description descriptiondescription description description description description descriptiondescription description description description description description description description"},
      {cinematography: "IMRAN SHAYNE TABET", director: "PATRICK JORDAN", music: "AMIN APPLESEED", editing: "IMRAN SHAYNE TABET", description:"description description description description descriptiondescription description description description descriptiondescription description description description descriptiondescription description description description descriptiondescription description description description descriptiondescription description description description description"},
      {cinematography: "TAREK SHAYNE TABET", director: "PATRICK JORDAN", music: "AMIN APPLESEED", editing: "IMRAN SHAYNE TABET", description:"description description description description descriptiondescription description description description descriptiondescription description description description descriptiondescription description description description descriptiondescription description description description descriptiondescription description description description description"},
      
    ],
    value:0,
    isPlaying:true }

    incrementValue = () => {
    
      if (this.state.value === this.state.videos.length -1 ) {
        this.setState({
          value: 0,
        })
      
      }
        else {
      
      this.setState({
        value: this.state.value + 1,
      })
    }
  }

  decrementValue = () => {
    
    if (this.state.value === 0 ) {
      this.setState({
        value: this.state.videos.length - 1
      })
    }
      else {
    
    this.setState({
      value: this.state.value - 1
    })
  }
}

  


    render() {
        return (
            <div className="cinematography-page">
          <Header />
               
       
                <div id="carouselExampleIndicators" className="carousel slide video-carousel" data-ride="carousel">
               
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner" role="listbox">

    <div className="carousel-item active">
    <ReactPlayer className="video-player" url='https://player.vimeo.com/video/152809507'  />
    </div>
    <div className="carousel-item">
    <ReactPlayer className="video-player" url='https://player.vimeo.com/video/152809507' />
    </div>
    <div className="carousel-item">
    <ReactPlayer className="video-player" url='https://player.vimeo.com/video/152809507'  />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={this.decrementValue}>
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={this.incrementValue}>
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  </div> 
    <div className="info-wrapper">
    <div className="flex-row">
    <h3><strong>CINEMATOGRAPHY - </strong> </h3><h3>{this.state.videos[this.state.value].cinematography}</h3>
    </div>
    <div className="flex-row">
    <h3><strong>DIRECTOR - </strong></h3><h3>{this.state.videos[this.state.value].director}</h3>
    </div>
    <div className="flex-row">
    <h3><strong>MUSIC - </strong></h3><h3>{this.state.videos[this.state.value].music}</h3>
    </div>
    <div className="flex-row">
    <h3><strong>EDITING - </strong></h3><h3>{this.state.videos[this.state.value].editing}</h3>
    </div>
    <div className="flex-row">
    <p>{this.state.videos[this.state.value].description}</p>
    </div>
    </div>
    <Footer />
            </div>
        );
    }
}


export default Cinematography ;