import React, { Component } from 'react';
import './Scoreboard.css';
import { connect } from 'react-redux';

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

export default connect(selector)(Scoreboard);
