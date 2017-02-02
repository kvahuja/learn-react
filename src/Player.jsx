import React, {Component} from 'react';
import Counter from './Counter';

class Player extends Component {
  constructor(props) {
    super(props);

    this.onScoreChange = this.onScoreChange.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onScoreChange(delta) {
    this.props.onScoreChange(delta);
  }

  onRemove() {
    this.props.onRemove();
  }

  render() {
      return (
          <div className="player">
            <div className="player-name">
              <a className="remove-player" onClick={this.onRemove}>x</a>
              {this.props.name}
            </div>
            <div className="player-score">
              <Counter score={this.props.score} onChange={this.onScoreChange}/>
            </div>
          </div>
      )
    }
  }

Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    onScoreChange: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired
};

export default Player;
