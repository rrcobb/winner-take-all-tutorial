import React, { Component } from "react";
import "./App.css";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";

/*****************************
*  Components
*****************************/
const faceCards = {
  11: "J",
  12: "Q",
  13: "K",
  14: "A"
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
      <div className={"peek"}>
        {this.props.cards.slice(0, this.props.count).map(card => (
          <div>
            {displayValue(card.value)} <span className={card.suit} />
          </div>
        ))}
      </div>
    );
  }
}

class Deck extends Component {
  render() {
    return (
      <div className={"deck-container"}>
        <Peek cards={this.props.cards} count={12} />
        <div className={"deck"} onClick={this.props.onClick} />
      </div>
    );
  }
}

class Scoreboard extends Component {
  render() {
    let { name, count } = this.props;
    return (
      <div className="scoreboard">
        <h2>{name}</h2>
        <h3 className={`${count < 15 && "warning"} ${count < 10 && "danger"}`}>
          {this.props.count}
        </h3>
      </div>
    );
  }
}

class UnconnectedPlayer extends Component {
  render() {
    return (
      <div className={`player ${this.props.odd ? "right" : "left"}`}>
        <div className={"cards"}>
          <Deck
            onClick={this.props.card ? this.props.resolve : this.props.playCard}
            cards={this.props.cards}
          />
          <div className={"table-spot"}>
            {this.props.card && (
              <Card value={this.props.card.value} suit={this.props.card.suit} />
            )}
          </div>
        </div>
        <Scoreboard name={this.props.name} count={this.props.cards.length} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const player = state[ownProps.name];
  return {
    cards: player && player.cards,
    card: player && player.card
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    playCard: () => store.dispatch({ type: "PlayCard" }),
    resolve: () => store.dispatch({ type: "Resolve" })
  };
};

const Player = connect(mapStateToProps, mapDispatchToProps)(UnconnectedPlayer);

class Controls extends Component {
  render() {
    return (
      <div className={"controls"}>
        <button onClick={() => store.dispatch({ type: "NewGame" })}>
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
  const suits = ["heart", "diamond", "club", "spade"];
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  // This takes our suits and values and creates an array of combinations: [{suit: 'heart', value: 2}, {suit: 'diamond', value: 2}], and so on.
  return suits.reduce(
    (deck, suit) =>
      deck.concat(
        values.map(value => ({
          suit,
          value
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

const newPlayer = () => ({
  cards: [],
  card: null
});

const players = ["Nicole", "Rob"];
const defaultState = players.reduce((memo, name) => {
  memo[name] = newPlayer();
  return memo;
}, {});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "NewGame": {
      const deck = shuffle(newDeck());
      const handsize = deck.length / players.length;
      return players.reduce((memo, name, index) => {
        let cards = deck.slice(handsize * index, handsize * (index + 1));
        memo[name] = { cards, card: null };
        return memo;
      }, {});
    }
    case "PlayCard": {
      return players.reduce((memo, name) => {
        let cards = state[name].cards;
        const card = cards[0];
        memo[name] = {
          cards: cards.slice(1),
          card
        };
        return memo;
      }, {});
    }
    case "Resolve": {
      const sorted = Object.values(state).sort(
        (a, b) => a.card.value < b.card.value
      );
      const winner = sorted[0];
      const prize = sorted.map(player => player.card);
      return players.reduce((memo, name) => {
        let cards = state[name].cards;
        if (state[name] === winner) {
          memo[name] = {
            cards: cards.concat(prize),
            card: null
          };
        } else {
          memo[name] = {
            cards,
            card: null
          };
        }
        return memo;
      }, {});
    }
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  // https://github.com/zalmoxisus/redux-devtools-extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/*****************************
* Root App Component
*****************************/

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <h2>Winner Takes All</h2>
            <small>
              <a href="https://github.com/rrcobb/winner-take-all-tutorial">
                (♥ Fin)
              </a>
            </small>
          </div>
          <div className="gameboard">
            {players.map((name, index) => (
              <Player name={name} odd={index % 2 !== 0} />
            ))}
          </div>
          <Controls />
        </div>
      </Provider>
    );
  }
}

export default App;
