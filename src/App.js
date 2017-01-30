import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="scoreboard">
          <Header />

          <Player />

          <AddPlayerForm />
      </div>
    );
  }
}

export default App;
