import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  handleClick = () => {
    this.setState({ value: this.state.value + 1 });
  };

  componentWillReceiveProps(props) {
    this.setState({ value: props.value || 0 });
  }

  render() {
    return (
      <div className="card" onClick={this.handleClick}>
        {this.state.value}
      </div>
    );
  }
}

export default Card;
