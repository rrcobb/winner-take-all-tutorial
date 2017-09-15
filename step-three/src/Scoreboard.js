import React, { Component } from 'react';
import './Scoreboard.css';

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
        {this.state.value}
      </div>
    );
  }
}

export default Scoreboard;
