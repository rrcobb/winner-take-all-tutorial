# Winner Take All
A HackMIT 2017 tutorial by the friendly folks at [Fin](https://fin.com)

**What you'll build** - A sweet game, based on the classic kids card game.

**What you'll learn** - The basics of React and Redux

## Before we get started
- If you get stuck, raise your hand, and someone will come by to try to help
- You can download all the code seen here to follow along

```sh
git clone https://github.com/rrcobb/winner-take-all-tutorial.git
```

- You can pick up at any of steps, in case you get behind or go 'off piste'
- To pick up at another step, simply copy that step's `App.js` 
  file into your `src` directory.  For example, if my repo is located in
  `~/code/wta` and I've cloned this tutorial into
  `~code/winner-take-all-tutorial`, I can skip to step two like so:

  ```
  cp ../winner-take-all-tutorial/app-js-snapshots/App_2.js ~/code/wta/src/App.js

  ```

- If you _have_ got the code working at a particular step, check with the people next to you and see if you can get them unstuck
- It's worth experimenting a _ton_ with react and redux. 

If you follow the steps here, your code should (more or less) match up with the code at each step in this repo.

_Caveat Emptor_: For ease of demonstration, we are not following some best practices that are the norm when developing React/Redux apps. In particular, we aren't splitting code into multiple files. You probably should.

## Assumptions:
- A shell with bash-like commands
- Git
- A code editor
- Some familiarity with HTML, Javascript, and CSS

The installation instructions are written as if you are on a mac and using [homebrew](https://brew.sh/) to manage your packages. If you aren't using a mac, you should use a different package manager:

- Windows: [Choco](https://chocolatey.org/)
- Linux: you should know your package manager

If you are using a mac, install homebrew! (or download binaries - usually in the _getting started_ or _installation_ section of the linked sites)

### Installing dependencies

While we give a quick intro to React, follow the steps here to get set up.

If you haven't already, [install node and npm](https://nodejs.org/en/download/package-manager/)

```
brew install node
```

Install [yarn](https://yarnpkg.com/en/) and create-react-app
```
brew install yarn
yarn global add create-react-app
```

Create the app
```
create-react-app winner-takes-all
cd winner-takes-all
```

Set up git
```
git init
git commmit -m "initial commit"
```

At this point, your app should look *almost exactly* like the code in
`./app-js-snapshots/App_0.js`.

## React Basics
React is based on _components_. A Component encapsulates the _look_ and _behavior_ of some part of your app. They are _reusable_, _composable_, and _declarative_. 

 We'll be working with the web version of React today, but there are lots of component frameworks that take the principles of React and let you write code for many different clients 
- Web
- Native
- VR

There are also lots of other popular new component frameworks, like [Vue](https://vuejs.org/), [Riot](http://riotjs.com/), [Polymer](https://www.polymer-project.org/), and [Angular](https://angular.io/). They have important differences, but they share the core idea of being able to move from a _sketch of a page_ to _working components_ quickly and easily.

We'll focus on thinking in components, and you can take that pattern with you and use it in whatever framework you like.

## Run the development server

Let's get the dev server started:
```
yarn start
```

When I ran that, I saw this on my console:

![screen shot 2017-09-07 at 6 28 26 pm](https://user-images.githubusercontent.com/3818920/30192164-99a22a36-93fa-11e7-8fb3-d69c213cac34.png)

And this in the browser:

![screen shot 2017-09-07 at 6 28 53 pm](https://user-images.githubusercontent.com/3818920/30192165-99b56902-93fa-11e7-98b1-04c3d2881f8f.png)

create-react-app is running a **local version of the app** - it's being served on your machine, so that you can quickly see the changes you make.


## What has `create-react-app` given us?
[`create-react-app`](https://github.com/facebookincubator/create-react-app) is a useful tool for getting an app spun up quickly, so you can start experimenting and iterating. At the end of this Readme, there are some links to explore more about the libraries that it's using underneath. (hint: modern js is pretty complicated and changing very fast).

Let's explore the files that `create-react-app` has given us.
```
- node_modules
  - ...
- public
  - ...
- src
  - App.css
  - App.js
  - App.test.js
  - index.css
  - index.js
  - logo.svg
  - registerServiceWorker.js
package.json
...
```

`node_modules` is where our javascript dependencies live.

`package.json` specifies some info about our app, and, importantly, is where we list our dependencies.

`public` is where our _built_ files will live - it will be managed for us by `react-scripts` (the package behind `create-react-app`)

`src` is where we will make changes. Lets take a closer look at the files in there.

- `index.js` is the _entrypoint_ to our app - it's where the build will start, and has some of the plumbing needed to get React to start rendering components on the page.
- `index.css` has a tiny set of styles that apply to the whole app.
- `App.js` is our _root React component_
- `App.test.js` is a test file, in case we wanted to be good developers and write tests for our code (ha! At a hackathon?!?!?)
- `App.css` is where we will put the styles for our app
- `registerServiceWorker.js` handles registering a _Service Worker_. This is the basis for building a [Progressive Web App](https://goo.gl/KwvDNy) that works offline as well as on. 

We'll mostly be working inside of `App.js`, so let's open it up in a code editor and start experimenting!

```
// src/App.js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

When we make a small change and save, we see the change reflected almost instantly in the browser. (It's pretty safe to change the text, even if the rest of the code here is still mysterious)

After my update, my browser shows:
![screen shot 2017-09-07 at 7 11 33 pm](https://user-images.githubusercontent.com/3818920/30193157-7e6b0764-9400-11e7-954a-b745fadd3344.png)

Try making other changes to the render method and see what happens. Can you:

- Change what the text says?
- Change the style of the text? (there are lots of ways to do this - try to find more than one!)
- Show a link?
- Show a different image?
- Display a random number when the page loads?

## A sketch of Winner-Take-All

We want to build an online version of the popular kids card game. We want to show:
- A deck of cards, face down, one for each player
- A face-up card for each player that changes each round
- A scoreboard
- A button to start a new game

What would those look like as components?
- Player
  - Name
  - Deck
    - 'Peek' cards in the deck
  - Card
- ScoreBoard
  - Player name
  - Running count of cards
- Controls
  - NewGameButton

## Step 1: Creating a component
Components encapsulate the logic for the _look_ and _behavior_ of some part of the UI you're building.

Let's start with the Card component. Our component will define a new class, `Card`, that extends the `React.Component` class, and tells React how to render a Card.  

```
class Card extends Component {
  render () {
    return (
      <div className="card spade">
        A
      </div>
    )
  }
}
```

Save the file and see that.. nothing happens, because we haven't yet rendered the Card component anywhere.

Let's change the render method of the App component so it uses our `Card`

```
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Winner Takes All</h2>
        </div>
        <Card />
      </div>
    )
  }
}
```

Save again and you'll see our card component is being rendered.

So, React can render things like `div`s and `img` and `h2` in our components, and it can render components like `Card` that we define with their own display logic.

Let's make our game look good with some CSS. Copy this repository's
`src/App.css` file into your repository's `src/App.css`.  When you save, things
should start looking pretty snappy.

(`create-react-app` has set us up so that the css gets built and included on the page automatically)

### Lifecycle methods
React components can define several [lifecycle methods](https://facebook.github.io/react/docs/react-component.html) which are called at points such as *mounting*, *receiving props*, and *rendering*.

If you want something to happen at those different points, you can define those methods to hook into those different moments in the life of a component.

### Render
The `render` function on a React component instance returns a representation of the
tree of elements that React will render onto the DOM. 

When we return a tree of elements from the render method, React does the tricky work of diffing the full tree against last version of the tree it rendered and updating the DOM.

To get this game of `Winner Take All` off the ground, we'll need some slightly
more dynamic cards. Let's start by having the `Card` component render different values
based on what we pass it as a `prop`.

## JSX
- Looks like html
- Javascript expressions in `{}` braces get evaluated and rendered
- Components nest
- Props
- Children 

## Props - changing how a component behaves
We've seen how components render other components. So far, though, it's pretty boring - a little bit easier than copy / pasting the same `div`, but not _that_ much easier. 

```
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Winner Takes All</h2>
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}
```

`Props` let us change a component's behavior. You can think of them as the parameters passed to a function. (In fact, React lets us define components as functions, which you can read more about [here](https://facebook.github.io/react/docs/components-and-props.html))

They are information passed to a component by its parent.

Let's see how this works in practice.

We can pass a `value` prop to Card like so:

```
  <Card value={3} />
```

Now, the `value` passed by App will be available on the rendered instance of
`Card`, as a key on `this.props`.

Let's display the `value` instead of our placeholder text.

```
class Card extends Component {
  render() {
    return (
      <div className="card">
        {this.props.value}
      </div>
    )
  }
}
```

Save the file, and our card is now a 3.

Let's update the App component to render different values on our cards.

```
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
        <Card value={"Q <3"} />
      </div>
    )
  }
}
```

Challenges: 
- How would you give the card a different look based on it's suit?
- How could you get a card with value `11` to display as `J`? (`12` to `Q`, `13` to `K`, `14` to `A`?)

We're starting to see how we can reuse a component with slightly different behavior in different places.

Let's add sketched-out versions of the other components we want.

```
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
        {this.props.cards.slice(0, 12).map(card => (
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
        <Peek cards={this.props.cards} />
        <div className={"deck"} />
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

class Controls extends Component {
  render() {
    return (
      <div className={"controls"}>
        <button>
          <h1>New Game</h1>
        </button>
      </div>
    );
  }
}
```

And, displaying them in the app: 

```
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Winner Takes All</h2>
        </div>
        <Card value={3} suit="spade"/>
        <Card value={4} suit="club" />
        <Card value={11} suit="heart" />
        <Card value={14} suit="diamond" />
        <Deck cards={[]}/>
        <Deck cards={[{value: 5, suit: "heart"}, {value: 12, suit: "diamond"}]}/>
        <Scoreboard count={4} name={"Rob"}/>
        <Scoreboard count={7} name={"Nicole"}/>
        <Controls />
      </div>
    )
  }
}
```

Of course, iterating on your own app, you'll write your own component logic and css and figure out how to get what you want to show up on the page.

----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------
                                          Todo
----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------

## State management
Hard-coding our props has let us express a static site succinctly, but so far we haven't seen anything other than fancy templating. The true power of React shows when our components update dynamically  based on interactions with the user.

React has [built-in functions](https://facebook.github.io/react/docs/state-and-lifecycle.html) for managing state within a component. We're going to skip over that today for the sake of time, but it's worth reading on your own. 

We're going to skip right to the solution without taking the time to illustrate the problem. We're asking that you take it on faith that when your app's logic is complex enough, it becomes worth it to use other strategies for managing state.

## What is Redux?
- Popular js state management library
- Lets you share state throughout your application
- Just like React lets you describe how components should behave, redux lets you describe how your application state changes in response to the different things that can happen
- Pure functions, w/o side effects
- Makes it easier to reason about state changes

[Redux](http://redux.js.org/) provides a *store* which holds the current state of the entire app. We dispatch *actions* to the store, and *reducers* define how the state should change in response to those actions.

[React-redux](https://github.com/reactjs/react-redux) gives us helper methods (called _bindings_ in the docs) to connect our redux store to our react components. They pass data props from the store's into components, and pass functions into components that let those components dispatch actions to the store.

## Actions and Reducers

Redux *Actions* are javascript objects with a string `type` attribute, and optionally other data. Some actions might look like:

```
// new game action
{ type: 'NewGame' }

// play card action
{ type: 'PlayCard' }

// update scoreboard action
{ type: 'UpdateScore', scores: { 'Nicole': 10, 'Rob': 0 }}

// data-fetch resolve action 
{ type: 'LoadedUser', data: {id: 2345224654, status: 'paid', username: 'zorro546', posts: [{id: 54123654, message: 'Lorem Ipsum dolor sit amet...'}]}}
```

Frequently there will be additional information that needs to be passed along to
reducers and placed in the Redux state; this is often keyed under a `payload`
attribute. You can read more about best practices for standard actions [here](https://github.com/acdlite/flux-standard-action)

*Reducers* are functions that define how the application state changes in response to an action.

A simple reducer might look like:
```
function reducer(state, action) {
  switch (action.type) {
    case "IncrementCounter":
      return state + 1;
    case "DecrementCounter":
      return state - 1;
    default:
      return state;
  }
}
```

## Setting up Redux with React

Let's get some plumbing in place so that we can get to writing our game logic.

First, we'll install the packages we need:

```
yarn add redux react-redux
```

Next, in App.js, import the libraries we need and set up the plumbing.

``` 
import { connect, Provider } from "react-redux";
import { createStore } from "redux";

const reducer = (state = {}, action) => state
const store = createStore(
  reducer,
  // https://github.com/zalmoxisus/redux-devtools-extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <h2>Winner Takes All</h2>
          </div>
        </div>
      </Provider>
    );
  }
}
```

(We've included the configuration for [redux dev tools](https://github.com/zalmoxisus/redux-devtools-extension), which are helpful for visualizing and debugging what's happening with your app's state)

Now that we've got the plumbing in place, we can start start implementing our game logic with our first reducer. Remember, a reducer is a function that takes in a state and an action and returns the next state given that action.

## Shuffling the Deck

```
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

const defaultState = [];

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'NewGame': {
      const deck = shuffle(newDeck());
      return deck;
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

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <h2>Winner Takes All</h2>
          </div>
          <Deck cards={[{ value: 5, suit: 'heart' }, { value: 12, suit: 'diamond' }]} />
          <ConnectedDeck />
          <Controls />
        </div>
      </Provider>
    );
  }
}
```

-----------
deprecated
----------

## Step Three: Writing The Game Logic

We now have all the tools we need to implement the rest of this game.  The rules
for Winner Take All are simple: two players repeatedly draw cards from a deck
and the card with the higher value wins. 

Events in our game will be dispatched to the Redux store as redux actions.  They will affect the Redux state in ways that we define in our reducer.  

```
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
```

## Other things you might want to do with React
- fetch data from a server
- animate components

### Where to turn next?
- [React docs](https://facebook.github.io/react/docs/hello-world.html)
- [Redux docs](http://redux.js.org/)
- [What's new in ES6](http://es6-features.org/)
- [create-react-app docs](https://github.com/facebookincubator/create-react-app)

And, if you want to know more about what's happening underneath:
- [Webpack docs](https://webpack.js.org/)
- [Babel](http://babeljs.io/)
- [Eslint](https://eslint.org/)
- [CSS Autoprefixer](https://github.com/postcss/autoprefixer)

If you want to really *get* the modern js stack, build one yourself:
- [Js stack from scratch](https://github.com/verekia/js-stack-from-scratch)

If you want to use React for Mobile or VR
- [React Native](https://facebook.github.io/react-native/)
- [React VR](https://facebook.github.io/react-vr/)

If you want to learn more about Fin
- [Fin](https://www.fin.com/)
- [/Jobs](https://www.fin.com/jobs)
