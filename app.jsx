var PLAYERS = [
	{
		id: 1,
		name: "Kapil Viren Ahuja",
		score: 25,
	},
	{
		id: 2,
		name: "Shafali Rana",
		score: 50,
	},
	{
		id: 3,
		name: "Gita Chhibber",
		score: 100,
	},
	{
		id: 4,
		name: "Gorav Goyal",
		score: 125,
	},
	{
		id: 5,
		name: "Rahul Mohindra",
		score: 150,
	},
];


function Header (props) {
	return (
    	<div className="header">
    		<h1>{props.title}</h1>
    	</div>
	);
}


Header.propTypes = {
	title: React.PropTypes.string.isRequired,
};


function Player (props) {
	return (
		<div className="player">
			<div className="player-name">
				{props.name}
			</div>
			<div className="player-score">
				<Counter initialScore={props.score}/>
			</div>
		</div>
    )
}

Player.propTypes = {
	name: React.PropTypes.string.isRequired,
	score: React.PropTypes.number.isRequired,
};


var Counter = React.createClass({
	propTypes: {
		initialScore: React.PropTypes.number.isRequired,
	},

	getInitialState: function() {
		return {
			score: this.props.initialScore,
		}
	},

	incrementScore: function(e) {
		this.setState({
			score: (this.state.score + 1),
		});
	},

	decrementScore: function(e) {
		this.setState({
			score: (this.state.score - 1),
		});
	},

	render: function() {
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={this.decrementScore}> - </button>
				<div className="counter-score"> {this.state.score} </div> 
				<button className="counter-action increment" onClick={this.incrementScore}> + </button>
			</div>
		);
	}
})



function Application (props) {
  return (
    <div className="scoreboard">
    	<Header title={props.title} />

    	<div className="players">
    		{props.players.map(function(player) {
    			return <Player name={player.name} score={player.score} key={player.id} />
    		})}
    	</div>
    </div>
  );
}

Application.propTypes = {
	title: React.PropTypes.string,
	players: React.PropTypes.arrayOf(React.PropTypes.shape({
		id: React.PropTypes.number.isRequired,
		name: React.PropTypes.string.isRequired,
		score: React.PropTypes.number.isRequired,
	})).isRequired,
};

Application.defaultProps = {
	title: "Scoreboard",
};


ReactDOM.render(<Application title="Learning react | Scoreboard" players={PLAYERS}/>, document.getElementById('container'));

