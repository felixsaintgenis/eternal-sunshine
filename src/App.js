import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import LightBox from './components/LightBox';
import Cinematography from './components/Cinematography';
import Photography from './components/Photography';
import About from './components/About';
import Contact from './components/Contact';
import Disconnected from './components/galleries/Disconnected'
import Ashura from './components/galleries/Ashura'
import Rhein from './components/galleries/Rhein'
import Canary from './components/galleries/Canary'
import Autumn from './components/galleries/Autumn'
import Jaded from './components/galleries/Jaded'


const App = () => (
  <BrowserRouter>
  <div className="container-fluid">
  <Route exact path='/' component={Home} />
  <Route path='/lightbox' component = {LightBox}/>
  <Route path='/cinematography' component={Cinematography} />
  <Route path='/photography' component={Photography} />
  <Route path='/about' component={About} />
  <Route path='/contact' component={Contact} />
  <Route path='/gallery/disconnected' component={Disconnected} />
  <Route path='/gallery/ashura' component={Ashura} />
  <Route path='/gallery/rhein' component={Rhein} />
  <Route path='/gallery/canary-wharf' component={Canary} />
  <Route path='/gallery/autumn' component={Autumn} />
  <Route path='/gallery/jaded' component={Jaded} />




  </div>
  </BrowserRouter>
);

export default App;

  {/* <div className="collection-wrapper">
<div className="collection collection-one">
<div className="photo-info-wrapper">
<h2>DISCONNECTED</h2>
<h3>Imran Shayne Tabet</h3>
</div>


</div>
<div className="collection collection-two">
<div className="photo-info-wrapper">
<h2>DISCONNECTED</h2>
<h3>TAREK SHAYNE TABET</h3>
</div>

</div>
<div className="collection collection-three">
<div className="photo-info-wrapper">
<h2>BERLIN CALLING</h2>
<h3>TAREK SHAYNE TABET</h3>
</div>

</div>

</div> */}
{/* <footer className="footer">
<div className="social-icons">
<img src={FacebookLogo}  className="facebook-logo"alt="logo facebook"></img>
<img src={InstagramLogo} alt="logo instagram"></img>
<img src={VimeoLogo} alt="logo vimeo"></img>
</div>
<div className="copyright text-center">© ETERNAL SUNSHINE PICTURES 2017</div>
</footer> */}