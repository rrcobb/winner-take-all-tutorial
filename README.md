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

