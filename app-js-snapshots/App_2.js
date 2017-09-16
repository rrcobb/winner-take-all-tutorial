// TODO This code represents our Winner Takes All game after completing Step 2 of the tutorial
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';

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
        <button onClick={() => store.dispatch({ type: 'NewGame' })}>
          <h1>New Game</h1>
        </button>
      </div>
    );
  }
}

/*****************************
*   State Management Logic
*****************************/

// a new deck of 52 cards
const newDeck = () => {
  const suits = ['heart', 'diamond', 'club', 'spade'];
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  // This takes our suits and values and creates an array of combinations: [{suit: 'heart', value: 2}, {suit: 'diamond', value: 2}], and so on.
  return suits.reduce(
    (deck, suit) =>
      deck.concat(
        values.map(value => ({
          suit,
          value,
        }))
      ),
    []
  );
};

// https://bost.ocks.org/mike/shuffle/
const shuffle = array => {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

const players = ['Nicole', 'Rob'];

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'NewGame': {
      const deck = shuffle(newDeck());
      const handsize = deck.length / players.length;
      return players.reduce((memo, name, index) => {
        let cards = deck.slice(handsize * index, handsize * (index + 1));
        memo[name] = { cards, card: null };
        return memo;
      }, {});
    }
    default:
      return state;
  }
};

export default App;
