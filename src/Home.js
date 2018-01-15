import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import './Home.css';

class Home extends Component {
  render() {
    return (
        <div className="full-homepage-background">
  <div className="website-title-wrapper col-md-12 mx-auto">
    <h1 className="website-title text-center">ETERNAL SUNSHINE PICTURES</h1>
  </div>
  <div className="navigation-wrapper col-md-12 mx-auto vertical-center">
  <ul className="navigation-list">
    <li>
    <Link className="nav-link" to='/cinematography'>CINEMATOGRAPHY</Link>
    </li>
    <li>
    <Link className="nav-link" to='/photography'>PHOTOGRAPHY</Link>
    </li>
    <li>
    <Link className="nav-link" to='/about'>ABOUT</Link>
    </li>
    <li>
    <Link className="nav-link" to='/contact'>CONTACT</Link>
    </li>
  </ul>
</div>

        </div>
    
    );
  }
}

export default Home;
