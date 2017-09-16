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

At this point, your app should look *almost exactly* like the code in `/step_one`

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

- `index.js` is the _entrypoint_ to our app - it's where the build will start, and has some oft the plumbing needed to get React to start rendering components on the page.
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

When we make a small change and save, we see the change reflected almost instantly in the browser. (It's pretty safe to change the text, event if the rest of the code here is still mysterious)

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
- A button to play a card
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

## Creating a component
Components encapsulate the logic for the _look_ and _behavior_ of some part of the UI you're building.

Let's start with the Card component. Our component will define a new class, `Card`, that extends the `React.Component` class, and tells React how to render a Card.  

```
class Card extends Component {
  render () {
    return (
      <div className="card">
        It's a card!
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

We can style the card with css - let's add the following to our `App.css`:

```
/* adapted from github.com/selfthinker/CSS-Playing-Cards */
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.3em;
  height: 4.6em;
  border: 1px solid #666;
  border-radius: 0.3em;
  -moz-border-radius: 0.3em;
  -webkit-border-radius: 0.3em;
  -khtml-border-radius: 0.3em;
  padding: 0.25em;
  margin: 0 0.5em 0.5em 0;
  text-align: center;
  font-size: 3.2em; /* @change: adjust this value to make bigger or smaller cards */
  font-weight: normal;
  font-family: Arial, sans-serif;
  position: relative;
  background-color: #fff;
}

.card::before {
  position: absolute;
  top: 10px;
  left: 10px;
}

.card::after {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.heart,
.diamond {
  color: #f45042;
}
.heart::before,
div.heart::after {
  content: "♥";
}

.diamond::before,
div.diamond::after {
  content: "♦";
}

.spade,
div.club {
  color: #1d1e30;
}

.spade::before,
div.spade::after {
  content: "♠";
}

.club::before,
div.club::after {
  content: "♣";
}
```

(`create-react-app` has set us up so that the css gets built and included on the page automatically)

### Lifecycle methods
React components can define several [lifecycle methods](https://facebook.github.io/react/docs/react-component.html) which are called at points such as *mounting*, *receiving props*, and *rendering*.

If you want something to happen at those different points, you can define those methods to hook into those different moments in the life of a component.

### Render
The `render` function on a React component instance returns a representation of the
tree of elements that React will render onto the DOM. `Card.js` defines exactly zero
functions right now, so let's change that:

To get this game of `Winner Take All` off the ground, we'll need some slightly
more dynamic cards. We can have the `Card` component render whatever value we
want by passing it as a `prop`.

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

```

Of course, iterating on your own app, you'll write your own component logic and css and figure out how to get what you want to show up on the page.

## State management

Redux

```
yarn add redux react-redux
```


## Adding some State
State is how React components manage data that is 1) relevant to rendering, 
2) will change during the life of the component, 3) in response to actions taken on
the component.  While components receive props from their parent, they manage
their own state.

We update the state using the `setState` method.  To see this in action, we'll
add a new component, the `Scoreboard`.  For now, we're going to cheat: when we
click the scoreboard, it just increments its value by one.  

```
class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 0}
  }

  render() {
    return (
        <div className="scoreboard">
          <h1>Your score:</h1>
          {this.state.value}
        </div>
        )
  }
}

```

Next, let's update our `App` component to render the `Scoreboard`. Do this
(referring back to how we rendered `Card`) and save, ensuring that your
scoreboard is now being rendered.

We've set a default state in the `constructor` method (don't worry just yet
about what `super(props)` does if you haven't seen that before).  Our Scoreboard
starts off with a `this.state.value` of 0.  

Let's do something stateful.  When we click on the scoreboard, we'll increment the
value in `state`.

```
class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 0}
  }

  incrementValue = () => {
    this.setState({value: this.state.value + 1})
  };

  render() {
    return (
        <div className="scoreboard" onClick={this.incrementValue}>
          {this.state.value}
        </div>
      )
  }
}
```

By passing a reference to the instance method `incrementValue` as the `onClick`
prop, we can now do something in response to clicks on the div.  

If all goes well, we can now click on our Scoreboard to increment our score.  

## Step Four: State management in Redux
When components are left to handle their own state, things get messy quickly as
React apps grow more complex.  On single-page web applications like the internal
dashboards our agents use at Fin, the need for a centralized way to manage
application state on the front end is felt relatively quickly.

Redux helps with this by providing a framework for  managing state. Redux
provides a *store* which holds the current state o f the entire app. We can
dispatch *actions* to the store, and *reducers* define how the state should
change in response to those actions.

Let's stop storing our scoreboard's value in the component's state and switch to
managing it through the Redux store.



We'll start with writing a reducer, which is simply a function that
takes in a current state and an action and returns the next state given that
action. Create a new file, `src/ScoreReducer.js`.

We want to maintain the current incrementing behavior of our Scoreboard, so our Redux
store will need to respond to a corresponding action.  We'll save that as a
constant:


```
const INCREMENT_VALUE = 'IncrementValue'
export const incrementValue = { type: INCREMENT_VALUE }
```

The second line is the action that we'll dispatch to the store from our
component.  Redux actions are typically objects with a `type` attribute.
Frequently there will be additional information that needs to be passed along to
reducers and placed in the Redux state; this is often keyed under a `data`
attribute.  Since we're doing a simple increment here, though, simply defining
the type is sufficient to give our reducer the information needed to alter the
state of the store.

Our `scoreReducer` function will take in a current state (that is, the current
value of the card) and an action, and will return the next state (that is, the
next value of the card -- which is the current value + 1). Its second argument
is the action.  We've only defined one action for now, but in the future when
our app is dispatching many different types of actions to the Redux store, we
want to make sure this reducer only responds to some of them.


```
const INCREMENT_VALUE = 'IncrementValue'
export const incrementValue = { type: INCREMENT_VALUE }

export const scoreReducer = ( state = 0, action ) => {
  switch (action.type) {
    case INCREMENT_VALUE:
      // fill me in!
    default:
      return state;
  }
}

export default scoreReducer;
```

Notice how this reducer simply returns the `state` argument, untouched, if the
action is not of the INCREMENT_VALUE type.

Let's hook our reducer up to our application.  Add the following import lines to `App.js`:

```
import { combineReducers, createStore } from 'redux';
import { scoreReducer } from './ScoreReducer.js'
import { Provider } from 'react-redux'

```

We'll use the `combineReducers` function to put together several reducers
(though for now, just one) that will represent the state of the game.  

```
const reducer = combineReducers({score: scoreReducer})
const store = createStore(reducer)
```

We now have a `store` that will respond to our defined actions and maintain a
`score` state that updates along with those actions.  

The next step is to wrap our application in a `Provider` which will make the store available to
components (once we use the `connect` function to hook them into the store).


```
import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Card.js';
import Scoreboard from './Scoreboard.js'
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
          <Scoreboard/>
        </div>
      </Provider>
    );
  }
}

export default App;
```

Finally, let's update our `Scoreboard` component to stop managing its own state and
start connecting to the Redux store.

In `Scoreboard.js`:

```
import { connect } from 'react-redux';
import { incrementValue } from './ScoreReducer.js';
```

react-redux's `connect` function allows us to wrap our components in
higher-order functions that will provide the component with values from the
store.  Connected components specify which pieces of the store they're
interested in using a `selector` function, and those keys will be added to the
component's `props`.  Selectors receive the entire Redux state and return a
mapping of that state to `props` for the component.


In this case, our mapping will be quite simple.  Our Redux store has the card's
value stored under the key `score` (see our `combineReducers` above), so we'll
just return an object that grabs that from the `state`.

Let's define this selector in `Scoreboard.js`:

```
const selector = (state) => ({ value: state.score });
```


.. and update the export to be a redux-connected version of our Scoreboard:

```
export default connect(selector)(Scoreboard)
```

Our `Scoreboard` now gets a `value` as a `prop` from the store. Let's check on
that real quick:

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  incrementValue = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div className="scoreboard" onClick={this.incrementValue}>
        <h1>Your score:</h1>
        (my state): {this.state.value}
        (my props): { this.props.value }
      </div>
    );
  }
}


When you save, you should see that your card now renders
with the additional store value, which is 0.  (If you're not sure why it's 0, raise your hand and ask, or
grab a mentor.)


Let's let Scoreboard stop managing its own state altogether.  Rather than
incrementing the value in its own state, we can `dispatch` the `incrementScore`
value to the Redux store, instead.  In order to do so, we need to provide a
`prop` to the `Scoreboard`.

React-redux's `connect` function takes a second argument, the `dispatch`, that
allows us to do just that.

```
const dispatcher = dispatch = ({incrementValue: () => dispatch(incrementValue)})
```

Recall that `incrementValue` is defined in `ScoreReducer.js`, and is simply an
object with a `type` attribute.  The `dispatch` function is called directly on
our Redux store.  Since we defined a reducer that responds to the
`INCREMENT_VALUE` action by incrementing the score, the score will update in the
redux store.  


When we pass this `dispatcher` as an argument to `connect`, the `incrementValue`
prop will be available to our Scoreboard component.

```
export default connect(selector, dispatcher)(Scoreboard)
```

We can now get rid of Scoreboard's state altogether, and use our new
`incrementValue` prop to directly update the score in the Redux state!

```
import React, { Component } from 'react';
import './Scoreboard.css';
import { connect } from 'react-redux';
import { incrementValue } from './ScoreReducer.js';

class Scoreboard extends Component {
  render() {
    return (
      <div className="scoreboard" onClick={this.props.incrementValue}>
        <h1>Your score:</h1>
        {this.props.value}
      </div>
    );
  }
}

const selector = state => ({ value: state.score });
const dispatcher = dispatch => ({ incrementValue: () => dispatch(incrementValue) });

export default connect(selector, dispatcher)(Scoreboard);

```

When you save, you should see the scoreboard rendering only one score -- the
Redux score -- and it should increment when you click, just like it did back
when Scoreboard was managing the score in its own state.

## Step Five: Writing some Game Logic

We now have all the tools we need to implement the rest of this game.  The rules
for Winner Take All are simple: two players repeatedly draw cards from a deck
and the card with the higher value wins. 

Events in our game will be dispatched to the Redux store as redux actions,
similar to `INCREMENT_VALUE`.  They will affect the Redux state in ways that we
define through additional reducers.  


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