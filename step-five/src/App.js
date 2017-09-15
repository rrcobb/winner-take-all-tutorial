import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Card.js';
import Scoreboard from './Scoreboard.js';
import './App.css';
import { combineReducers, createStore } from 'redux';
import { scoreReducer, computerScoreReducer } from './ScoreReducer.js';
import { cardReducer, dealCards } from './CardReducer.js';
import { Provider } from 'react-redux';

const reducer = combineReducers({
  score: scoreReducer,
  computerScore: computerScoreReducer,
  cards: cardReducer,
});
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Winner Takes All</h2>
          </div>
          computer
          <Card player="human" />
          <Card player="computer" />
          you
          <div>
            <button onClick={() => dealCards(store.dispatch)}>
              <h1>Play!</h1>
            </button>
          </div>
          <Scoreboard />
        </div>
      </Provider>
    );
  }
}

export default App;
