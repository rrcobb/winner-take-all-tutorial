import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Card.js';
import Scoreboard from './Scoreboard.js';
import './App.css';
import { combineReducers, createStore } from 'redux';
import { scoreReducer } from './ScoreReducer.js';
import { Provider } from 'react-redux';

const reducer = combineReducers({ score: scoreReducer });
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
          <Card value={3} />
          <Scoreboard />
        </div>
      </Provider>
    );
  }
}

export default App;
