import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.initialPlayers = [
      {
    		id: 1,
    		name: "Kapil Viren Ahuja",
    		score: 25,
    	},
    	{
    		id: 2,
    		name: "Aabhya Ahuja",
    		score: 50,
    	},
      {
    		id: 3,
    		name: "Abeer Ahuja",
    		score: 75,
    	},
    ];
  }

  render() {
    return (
      <div className="scoreboard">
          <Header title={this.props.title} players={this.initialPlayers}/>

          <Player />

          <AddPlayerForm />
      </div>
    );
  }
}

export default App;
