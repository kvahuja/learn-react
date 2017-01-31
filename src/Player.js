import React, {Component} from 'react';
import Counter from './Counter';

class Player extends Component {
    render() {
        return (
            <div className="player">
              <div className="player-name">
                <a className="remove-player">x</a>
                {this.props.name}
              </div>
              <div className="player-score">
                <Counter score={this.props.score}/>
              </div>
            </div>
        )
      }
    }

Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired
};

export default Player;
