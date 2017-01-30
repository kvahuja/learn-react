import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <table className="stats">
          <tbody>
            <tr>
              <td>Players:</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Total Points:</td>
              <td>500</td>
            </tr>
          </tbody>
        </table>

        <h1>Scoreboard</h1>

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
