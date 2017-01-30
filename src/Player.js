import React, {Component} from 'react';

class Player extends Component {
    render() {
        return (
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
        )
      }
}


export default Player;
