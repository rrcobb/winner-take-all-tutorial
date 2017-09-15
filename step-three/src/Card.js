import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        {this.state.value}
      </div>
    );
  }
}

export default Card;
