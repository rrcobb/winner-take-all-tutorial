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
