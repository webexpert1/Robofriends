import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

import Particles from 'react-particles-js';

const particleOptions = {
  particles: {
     number: {
       value: 70,
       density:{
        enable: true,
        value_area: 800
       }
     }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles className="particles" 
                params={particleOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
