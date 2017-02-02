import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(delta) {
      this.props.onChange(delta);
  }

render () {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => this.onChange(-1)} > - </button>
      <div className="counter-score"> {this.props.score} </div>
      <button className="counter-action increment" onClick={() => this.onChange(1)} > + </button>
    </div>
  )
}
}

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default Counter;
