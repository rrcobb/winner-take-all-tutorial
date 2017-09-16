// TODO This code represents our Winner Takes All game after completing Step 2 of the tutorial
import React, { Component } from 'react';
import logo from './logo.svg';
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
        <Card value={4} />
        <Card value={6} />
        <Card value={'Q <3'} />
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

class Peek extends Component {
  render() {
    return (
      <div className={'peek'}>
        {this.props.cards.slice(0, 12).map(card =>
          <div>
            {displayValue(card.value)} <span className={card.suit} />
          </div>
        )}
      </div>
    );
  }
}

class Deck extends Component {
  render() {
    return (
      <div className={'deck-container'}>
        <Peek cards={this.props.cards} />
        <div className={'deck'} />
      </div>
    );
  }
}

class Scoreboard extends Component {
  render() {
    let { name, count } = this.props;
    return (
      <div className="scoreboard">
        <h2>
          {name}
        </h2>
        <h3 className={`${count < 15 && 'warning'} ${count < 10 && 'danger'}`}>
          {this.props.count}
        </h3>
      </div>
    );
  }
}

class Controls extends Component {
  render() {
    return (
      <div className={'controls'}>
        <button>
          <h1>New Game</h1>
        </button>
      </div>
    );
  }
}

export default App;
