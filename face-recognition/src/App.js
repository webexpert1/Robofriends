import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'ba9d2dcf6dc24cd3b9e21dfe02da907a'
 });
 
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
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  }
  onButtonSubmit = () => {
    console.log('click');
    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b",
      "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
      console.log(response);
    },
    function(err) {
      // there was an error
    }
    );
  }
  render() {
    return (
      <div className="App">
      <Particles className="particles" 
                params={particleOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
      </div>
    );
  }
}

export default App;
