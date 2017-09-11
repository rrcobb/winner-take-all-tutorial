import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementValue } from './CardReducer.js';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card" onClick={this.props.incrementValue}>
        {this.props.value}
      </div>
    );
  }
}

const dispatcher = dispatch => ({ incrementValue: () => dispatch(incrementValue) });

const selector = (state, ownProps) => ({ value: state.card });

export default connect(selector, dispatcher)(Card);
