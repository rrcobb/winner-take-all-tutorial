import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        {this.props.value}
      </div>
    );
  }
}

const selector = (state, ownProps) => {
  return {
    value: state.cards[ownProps.player],
  };
};

export default connect(selector)(Card);
