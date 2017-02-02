import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
      super(props);

      this.state = {
        running: false,
        elaspsedTime: 0,
        previousTime: 0
      };

      this.onStart = this.onStart.bind(this);
      this.onStop = this.onStop.bind(this);
      this.onReset = this.onReset.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.onTick(), 100
    );
  }

  componentWillUnMount() {
    clearInterval(this.interval);
  }

  onTick() {
    if (this.state.running) {
      const now = Date.now();
      this.setState({
        elaspsedTime: this.state.elaspsedTime + (now - this.state.previousTime),
        previousTime: now
      });
    }
  }

  onStart() {
    console.log('onStart');
      this.setState({
        running: true,
        previousTime: Date.now()
      })
  }

  onStop() {
    this.setState({
      running: false
    });
  }

  onReset() {
    this.setState({
      elaspsedTime: 0,
      previousTime: Date.now()
    });
  }


  render() {
    let seconds = Math.floor(this.state.elaspsedTime / 1000);


    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
      <div className="stopwatch-time">{seconds}</div>
        {this.state.running ?
          <button onClick={this.onStop}>Stop</button>
          :
          <button onClick={this.onStart}>Start</button>
        }
        <button onClick={this.onReset}>Reset</button>
      </div>
    )
  }
}


export default Stopwatch;
