import React, { Component } from 'react';

class Stats extends Component {
  constructor (props) {
    super(props);
    this.totalPlayers = props.players.length;
    this.totalPoints = props.players.reduce(function(total, player) {
      return total + player.score;
    }, 0);
  }

  render() {
    return (
      <table className="stats">
        <tbody>
          <tr>
            <td>Players:</td>
            <td>{this.totalPlayers}</td>
          </tr>
          <tr>
            <td>Total Points:</td>
            <td>{this.totalPoints}</td>
          </tr>
        </tbody>
      </table>

    )
  }
}

Stats.PropTypes = {
  players: React.PropTypes.array.isRequired
};

export default Stats;
