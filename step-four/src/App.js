import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Card.js';
import './App.css';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

const INCREMENT_VALUE = 'IncrementValue';
export const incrementValue = { type: INCREMENT_VALUE };

const cardReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_VALUE:
      return state + 1;
    default:
      return state;
  }
  return state;
};

const reducer = combineReducers({ card: cardReducer });
export const store = createStore(reducer);

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
