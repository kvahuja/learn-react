import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {players: this.props.initialPlayers};
  }

  render() {
    return (
      <div className="scoreboard">
          <Header title={this.props.title} players={this.props.initialPlayers}/>

            <div className="players">
              {this.state.players.map(function(player, index) {
                return (
                  <Player
                    name={player.name}
                    score={player.score}
                    key={player.id} />
                )
              }
            )}
          </div>
          <AddPlayerForm />
      </div>
    );
  }
}

export default App;
