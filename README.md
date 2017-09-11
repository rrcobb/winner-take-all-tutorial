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

### Step Two: Let's create a new component!
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
add a new 'cheating' feature to our Card.  We'll make it so that every time we
click the card, it increments its value by one.  

```
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {value: props.value}
  }

  render() {
    return (
        <div className="card">
        {this.props.value}
        </div>
        )
  }
}
```

We've set a default state in the `constructor` method (don't worry just yet
about what `super(props)` does if you haven't seen that before).  Our Card now
starts off with a `this.state.value` of 0.  *Prove it to yourself* by updating
the `render` method to display `this.state.value` instead of `this.props.value`.
When you do so and save the file, you should see the card continue to display
the 3 value it's being passed from `App.js` -- only now, it's displaying it from
its `state` rather than its props.

Let's do something stateful.  When we click on the card, we'll increment the
value in `state`.

```
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {value: props.value}
  }

  handleClick = () => {

  };

  render() {
    return (
        <div className="card" onClick={this.handleClick}>
        {this.props.value}
        </div>
        )
  }
}
```

By passing a reference to the instance method `handleClick` as the `onClick`
prop, we can now do something in response to clicks on the div.  *Fill out the
`handleClick` 
function to use `setState` to increment the value in state**.

If all goes well, we're now cheating at cards.  

## State management in Redux
When components are left to handle their own state, things get messy quickly as
React apps grow more complex.  On single-page web applications like the internal
dashboards our agents use at Fin, the need for a centralized way to manage
application state on the front end is felt relatively quickly.

Redux helps with this by providing a framework for  managing state. 


******************
* Mind our Mess  *
******************
This tutorial is incomplete! Heck, it's barely even started!

What's next:
- [x] writing a basic component
- [x] writing a component with some state
- [ ] installing and setting up redux
- [ ] writing the game logic in redux and game components in React
- [ ] adding styles
