# Winner Take All
A HackMIT 2017 tutorial by the friendly folks at [Fin](https://fin.com)

### What you'll build
A sweet game, based on the classic kids card game.

### What you'll learn
The basics of React and Redux

### Resources / Things to read later
React tutorial
Redux tutorial
What's new in ES6
create-react-app docs
webpack docs

## Assumptions:
A shell with bash-like commands
A code editor
Some familiarity with HTML, Javascript, and CSS helps


The installation instructions are written as if you are on a mac and using [homebrew](https://brew.sh/) to manage your packages. If you aren't using a mac, you should use a different package manager:

- Windows: [Choco](https://chocolatey.org/)
- Linux: you should know your package manager

If you are using a mac, install homebrew! (or download binaries - usually in the _getting started_ or _installation_ section of the linked sites)

## Getting Started
To get these instructions on your screen and a snapshot of the code at each step, you can clone this repo: https://github.com/rrcobb/winner-take-all-tutorial.git

```sh
git clone https://github.com/rrcobb/winner-take-all-tutorial.git
```

If you follow the steps, you should end up in the same place.

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

## Run the dev server

Let's get the dev server started:
```
yarn start
```

When I ran that, I saw this on my console:

![screen shot 2017-09-07 at 6 28 26 pm](https://user-images.githubusercontent.com/3818920/30192164-99a22a36-93fa-11e7-8fb3-d69c213cac34.png)

And this in the browser:

![screen shot 2017-09-07 at 6 28 53 pm](https://user-images.githubusercontent.com/3818920/30192165-99b56902-93fa-11e7-98b1-04c3d2881f8f.png)

## Create your first React component

