import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.initialPlayers,
      startIndex: 11
    };

    this.onScoreChange = this.onScoreChange.bind(this);
    this.onPlayerAdd = this.onPlayerAdd.bind(this);
    this.onPlayerRemove = this.onPlayerRemove.bind(this);
  }

  onScoreChange(index, delta) {
    // console.log('Player data changed at: ' + index);
    // console.log('with a value of: ' + delta);
    let localPlayers = this.state.players;
    localPlayers[index].score += delta;
    this.setState({
      players: localPlayers,
    })
  }

  onPlayerAdd(name) {
    let localPlayers = this.state.players;

    localPlayers.push({
        name: name,
        score: 0,
        id: this.state.startIndex
    })

    this.setState({
      players: localPlayers,
      startIndex: this.state.startIndex + 1
    })
  }

  onPlayerRemove(index) {
    console.log('Player removed at:' + index);

    let localPlayers = this.state.players;
    localPlayers.splice(index, 1);
    this.setState({
      players: localPlayers
    })
  }


  render() {
    return (
      <div className="scoreboard">
          <Header title={this.props.title} players={this.state.players}/>

            <div className="players">
              {this.state.players.map((player, index) => {
                return (
                  <Player
                    onScoreChange={(delta) => this.onScoreChange(index, delta)}
                    onRemove={() => this.onPlayerRemove(index)}
                    name={player.name}
                    score={player.score}
                    key={player.id} />
                )
              }
            )}
          </div>
          <AddPlayerForm onAdd={(name) => this.onPlayerAdd(name)}/>
      </div>
    );
  }
}


App.propTypes = {
  title: React.PropTypes.string,
  initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired
  })).isRequired,
};

App.defaultProps = {
  title: "Scoreboard"
};

export default App;
