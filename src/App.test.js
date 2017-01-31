import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const initialPlayers = [
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

it('renders without crashing', () => {
  const div = document.createElement('div');

  <App title="My Scoreboard" initialPlayers={initialPlayers}/>,
  document.getElementById('container')

  ReactDOM.render(<App title="My Scoreboard" initialPlayers={initialPlayers}/>, div);
});
