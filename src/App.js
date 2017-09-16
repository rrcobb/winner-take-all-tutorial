import React, { Component } from "react";
import "./App.css";
import { connect, Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

class Scoreboard extends Component {
  render() {
    return (
      <div className="scoreboard">
        <h2>{this.props.name}</h2>
        {this.props.count}
        {this.props.reveal ? this.props.cards : null}
      </div>
    );
  }
}

class Card extends Component {
  render() {
    return <div className={`card ${this.props.suit}`}>{this.props.value}</div>;
  }
}

class Deck extends Component {
  render() {
    return <div className={"deck"} />;
  }
}

class UnconnectedPlayer extends Component {
  render() {
    return (
      <div>
        <Deck />
        <Card value={this.props.value} suit={"diamond"} />
        <Scoreboard name={this.props.name} score={this.props.score} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { value: 15, name: "human" };
};

const Player = connect(mapStateToProps)(UnconnectedPlayer);

class Controls extends Component {
  render() {
    return (
      <div>
        <button>
          <h1>New Game!</h1>
        </button>
        <button>
          <h2>Show Cards</h2>
        </button>
      </div>
    );
  }
}

const randomInteger = () => {
  return Math.floor(Math.random() * 20) + 1;
};

const name = (state = "", action) => {
  switch (action.type) {
    case "ChangeName": {
      return action.payload.name;
    }
    default:
      return state;
  }
};

const defaultPlayer = {
  name: "",
  cards: []
};

const player = (state = defaultPlayer, action) => {
  return state;
};

const defaultState = {};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "NewGame": {
      return defaultState;
    }
    case "PlayCard": {
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <h1>Winner Takes All!</h1>
          </div>
          <div className="gameboard">
            <Player name="human" />
            <Player name="computer" />
          </div>
          <Controls />
        </div>
      </Provider>
    );
  }
}

export default App;
