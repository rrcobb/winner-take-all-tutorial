import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Card.js';
import './App.css';
import { combineReducers, createStore } from 'redux';
import { cardReducer } from './CardReducer.js';
import { Provider } from 'react-redux';

const reducer = combineReducers({ card: cardReducer });
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
        </div>
      </Provider>
    );
  }
}

export default App;
