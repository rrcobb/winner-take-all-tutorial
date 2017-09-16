import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect, Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

const DEAL_CARDS = 'DealCards';

const randomnumber = () => {
  return Math.floor(Math.random() * 20) + 1;
};

export const dealCards = dispatch => {
  const humanCard = randomnumber();
  const computerCard = randomnumber();
  dispatch({ type: DEAL_CARDS, data: { human: humanCard, computer: computerCard } });
  if (computerCard > humanCard) {
    dispatch({ type: 'IncrementValue', player: 'computer' });
  } else if (humanCard > computerCard) {
    dispatch({ type: 'IncrementValue', player: 'human' });
  }
};

export const cardReducer = (state = { human: null, computer: null }, action) => {
  switch (action.type) {
    case DEAL_CARDS:
      return action.data;
    default:
      return state;
  }
};

const INCREMENT_VALUE = 'IncrementValue';
export const incrementValue = player => {
  return { type: INCREMENT_VALUE, player };
};

export const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_VALUE:
      if (action.player === 'human') {
        return state + 1;
      }
      break;
    default:
      return state;
  }
  return state;
};

export const computerScoreReducer = (state = 1, action) => {
  switch (action.type) {
    case INCREMENT_VALUE:
      if (action.player === 'computer') {
        return state + 1;
      }
      break;
    default:
      return state;
  }
  return state;
};

class Scoreboard extends Component {
  render() {
    return (
      <div className="scoreboard">
        <h1>Your score:</h1>
        {this.props.humanScore}

        <h1>Computer's score:</h1>
        {this.props.computerScore}
      </div>
    );
  }
}

const selector = state => ({ humanScore: state.score, computerScore: state.computerScore });

Scoreboard =  connect(selector)(Scoreboard);

class UnconnectedCard extends Component {
  render() {
    return (
      <div className="card" onClick={this.handleClick}>
        {this.props.value}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { value: state.cards[ownProps.player] }
}
const Card = connect(mapStateToProps)(UnconnectedCard);


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