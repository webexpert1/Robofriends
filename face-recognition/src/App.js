import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
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
      input: '',
      imageUrl: ''
    }
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      Clarifai.COLOR_MODEL, 
      this.state.input)
    .then(
    function(response) { 
      // do something with response
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
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
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
