import React, { Component } from 'react';
import logo from '../ar/flogo.svg';
import '../css/App.css';

class Banner extends Component {
  render() {
    return (
      <div id="banner" className="Banner">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h2>Welcome to FIHM</h2>
      </div>
    );
  }
}

export default Banner;
