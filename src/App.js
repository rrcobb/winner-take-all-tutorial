import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Card.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Winner Takes All</h2>
        </div>
        <Card value={3} />
      </div>
    );
  }
}

export default App;
