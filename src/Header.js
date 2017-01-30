import React, { Component } from 'react';
import Stats from './Stats';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Stats players={this.props.players}/>

        <h1>{this.props.title}</h1>

          <div className="stopwatch">
            <h2>Stopwatch</h2>
            <div className="stopwatch-time">0</div>
              <button>Start</button>
            <button>Reset</button>
          </div>
      </div>
    )
  }
}

export default Header;
