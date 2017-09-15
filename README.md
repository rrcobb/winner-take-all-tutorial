# Winner Take All
A HackMIT 2017 tutorial by the friendly folks at [Fin](https://fin.com)

**What you'll build** - A sweet game, based on the classic kids card game.

**What you'll learn** - The basics of React and Redux

### Resources / Things to read later
[React docs](https://facebook.github.io/react/docs/hello-world.html)
[Redux docs](http://redux.js.org/)
[What's new in ES6](http://es6-features.org/)
[create-react-app docs](https://github.com/facebookincubator/create-react-app)

And, if you want to know more about what's happening underneath:
[Webpack docs](https://webpack.js.org/)
[Babel](http://babeljs.io/)
[Eslint](https://eslint.org/)
[CSS Autoprefixer](https://github.com/postcss/autoprefixer)

If you want to really *get* the modern js stack, build one yourself:
[Js stack from scratch](https://github.com/verekia/js-stack-from-scratch)

## Assumptions:
- A shell with bash-like commands
- Git
- A code editor
- Some familiarity with HTML, Javascript, and CSS helps

The installation instructions are written as if you are on a mac and using [homebrew](https://brew.sh/) to manage your packages. If you aren't using a mac, you should use a different package manager:

- Windows: [Choco](https://chocolatey.org/)
- Linux: you should know your package manager

If you are using a mac, install homebrew! (or download binaries - usually in the _getting started_ or _installation_ section of the linked sites)

## Getting Started
To get these instructions on your screen and a snapshot of the code at each step, you can clone this repo: https://github.com/rrcobb/winner-take-all-tutorial.git

```sh
git clone https://github.com/rrcobb/winner-take-all-tutorial.git
```

If you follow the steps below, you should end up in the same place. You can compare your code to the snapshots at each step.

If you get stuck or want to jump in at a particular step, get the code for this repo as above, then

```
cd winner-take-all-tutorial
cd step-two
yarn install
yarn start
```

And you should be up and running.

### Installing dependencies

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

## Create your first React component

As it says on the page, let's open up `src/App.js` in a code editor.

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

### Step Two: Creating a new component
We're building a card game, so we'll want a way to display an individual card.
Create a new file in the `src` folder called `Card.js`. 

Let's create a `Card.css` file and define the following style:

```
/* adapted from github.com/selfthinker/CSS-Playing-Cards */
.card {
display: inline-block;
    width: 3.3em;
    height: 4.6em;
    border: 1px solid #666;
    border-radius: .3em;
    -moz-border-radius: .3em;
    -webkit-border-radius: .3em;
    -khtml-border-radius: .3em;
    padding: .25em;
    margin: 0 .5em .5em 0;
    text-align: center;
    font-size: 3.2em; /* @change: adjust this value to make bigger or smaller cards */
    font-weight: normal;
    font-family: Arial, sans-serif;
    position: relative;
    background-color: #fff;
    -moz-box-shadow: .2em .2em .5em #333;
    -webkit-box-shadow: .2em .2em .5em #333;
    box-shadow: .2em .2em .5em #333;
}
```

Our component in `Card.js` will define and export a new class, `Card`, that extends the
`React.Component` class.  

```
import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
}

export default Card;

```
React componentscan define several [lifecycle
methods](https://facebook.github.io/react/docs/react-component.html) which are
called at points such as *mounting*, *receiving props*, and *rendering*.


### Render
The `render` function on a React component instance returns a representation of the
tree of elements that React will render onto the DOM. `Card.js` defines exactly zero
functions right now, so let's change that:

```
class Card extends Component {
  render() {
    return (
      <div className="card">
        It's a card!
      </div>
    )
  }
}
```

Save the file and see that.. nothing happens, because we haven't yet rendered a
Card component anywhere.

Let's do so in `App.js`:

```
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Winner Takes All</h2>
        </div>
        <Card />
      </div>

```

Save again and you'll see our card component is being rendered.

To get this game of `Winner Take All` off the ground, we'll need some slightly
more dynamic cards. We can have the `Card` component render whatever value we
want by passing it as a `prop`.

### Props
Components render other components. Props are information passed to a component
by its parent. We can pass a `value` prop to Card like so:

```
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Winner Takes All</h2>
        </div>
        <Card value={3} />
      </div>
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

## Step Three: Adding some State
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

******************
* Mind our Mess  *
******************
This tutorial is incomplete! Heck, it's barely even started!

What's next:
<<<<<<< HEAD
- [x] writing a basic component
- [x] writing a component with some state
- [x] installing and setting up redux
- [x] writing the game logic in redux and game components in React
- [ ] adding styles
