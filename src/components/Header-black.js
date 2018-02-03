import React from 'react';
import { Link } from 'react-router-dom';


import './Header-black.css';
const Header = () => {
    return (

      <div className="navigation-wrapper">
            <nav class="navbar navbar-toggleable-md navbar-black">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <Link className="navbar-brand navbar-brand-black" to='/'>ETERNAL SUNSHINE PICTURES</Link>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item">
    <Link className="nav-link nav-link-black" to='/photography'>PHOTOGRAPHY</Link>
  </li>
      <li className="nav-item active">
      <Link className="nav-link nav-link-black" to='/cinematography'>CINEMATOGRAPHY</Link>
    </li>
      <li className="nav-item">
      <Link className="nav-link nav-link-black" to='/about'>ABOUT</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link nav-link-black" to='/contact'>CONTACT</Link>
      </li>
    </ul>
  </div>
</nav>
</div>
      
    );
}

export default Header;