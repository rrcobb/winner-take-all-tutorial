// This code represents our Winner Takes All game after completing Step 1a of the tutorial
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Winner Takes All</h2>
        </div>
        <Card value={3} suit="spade" />
        <Card value={4} suit="club" />
        <Card value={11} suit="heart" />
        <Card value={14} suit="diamond" />
      </div>
    );
  }
}

const faceCards = {
  11: 'J',
  12: 'Q',
  13: 'K',
  14: 'A',
};

const displayValue = value => faceCards[value] || value;

class Card extends Component {
  render() {
    return (
      <div className={`card ${this.props.suit}`}>
        {displayValue(this.props.value)}
      </div>
    );
  }
}

export default App;
