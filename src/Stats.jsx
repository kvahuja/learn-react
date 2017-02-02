import React, { Component } from 'react';

class Stats extends Component {
  render() {
    this.totalPlayers = this.props.players.length;
    this.totalPoints = this.props.players.reduce(function(total, player) {
      return total + player.score;
    }, 0);

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
