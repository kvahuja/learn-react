import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="scoreboard">
        <div className="header">
          <table className="stats">
            <tbody>
              <tr>
                <td>Players:</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Total Poimnts:</td>
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

          <div className="players">
            <div className="player">
              <div className="player-name">
                <a className="remove-player">x</a>
                  Kapil Viren Ahuja
              </div>
              <div className="player-score">
                <div className="counter">
                  <button className="counter-action decrement" > - </button>
                  <div className="counter-score"> 50 </div> 
                  <button className="counter-action increment" > + </button>
                </div>
              </div>
            </div>
          </div>

          <div className="players">
            <div className="player">
              <div className="player-name">
                <a className="remove-player">x</a>
                  Abeer Ahuja
              </div>
              <div className="player-score">
                <div className="counter">
                  <button className="counter-action decrement" > - </button>
                  <div className="counter-score"> 100 </div> 
                  <button className="counter-action increment" > + </button>
                </div>
              </div>
            </div>
          </div>
           <div className="add-player-form">
            <form >
              <input type="text" value="new player" />
              <input type="submit" value="Add Player" />
            </form>
          </div>
      </div>
    );
  }
}

export default App;
