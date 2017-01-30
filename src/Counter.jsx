import React, { Component } from 'react';

class Counter extends Component {
  render () {
    return (
      <div className="counter">
        <button className="counter-action decrement" > - </button>
        <div className="counter-score"> {this.props.score} </div>
        <button className="counter-action increment" > + </button>
      </div>
    )
  }
}

export default Counter;
