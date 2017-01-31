import React, { Component } from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';


class Header extends Component {
  render() {
    return (
      <div className="header">
        <Stats players={this.props.players}/>

        <h1>{this.props.title}</h1>

      <Stopwatch />
      </div>
    )
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired
};

export default Header;
